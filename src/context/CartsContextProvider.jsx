import React from "react";
import useBaseState from "../hooks/useBaseState";
import { deleteData, getData, postData, updateData } from "../utils/apiHandler";
import { checkAddCartBody, checkUpdateCartBody } from "../utils/cartValidator";
import { useAuthContext } from "./AuthContextProvider";
import { onValue, ref, set } from "firebase/database";
import { db } from "../utils/firebase";
import { loadLocal, LOCALSTORAGE_KEY, saveToLocal } from "../utils/loacl";

const CartContext = React.createContext(null);

const CartContextMutation = React.createContext(null);

export const useCartMutation = () => {
  const ctx = React.useContext(CartContextMutation);
  if (!ctx)
    throw new Error(
      "useCartMutation must be used in CartContextMutationProvider"
    );
  return ctx;
};

export const useCartContext = () => {
  const ctx = React.useContext(CartContext);
  if (!ctx)
    throw new Error("useCartContext must be used in CartContextProvider");
  return ctx;
};

function CartsContextProvider({ children }) {
  const { isLoading, erorr, data, setLoading, setSuccess, setError, setEmpty } =
    useBaseState();
  const [cartId, setCartId] = React.useState(null);
  const saveLocalCart = saveToLocal(LOCALSTORAGE_KEY.carid);
  // derived state
  const isEmptyCart = !data || data.length === 0;
  const summaryList = data?.map(
    ({ name, promotionalPrice, quantity, skuCode }) => ({
      name,
      quantity,
      skuCode,
      sum: promotionalPrice * quantity,
    })
  ) ?? [{ name: "no items", quantity: 0, sum: 0 }];
  const subtotal = summaryList.reduce(
    ({ total, subtotal }, { quantity, sum }) => ({
      total: total + quantity,
      subtotal: subtotal + sum,
    }),
    { total: 0, subtotal: 0 }
  );
  //load cart
  const loadCart = async (cartid) => {
    setLoading();
    try {
      const { id, items } = await getData(`carts/${cartid}`);
      setCartId(id);
      const finalResult = await Promise.all(
        items.map((item) => getByPermalink(item))
      );
      setSuccess(finalResult);
    } catch (err) {
      setError(err);
    }
  };
  //add item to new cart
  const addNewCart = async (body) => {
    setLoading();
    try {
      const validated = checkAddCartBody(body);
      const { id, items } = await postData("carts", { items: validated });
      setCartId(id);
      const finalResult = await Promise.all(
        items.map((item) => getByPermalink(item))
      );
      setSuccess(finalResult);
    } catch (err) {
      setError(err.message);
    }
  };
  //add item to existing cart
  const addExistCart = async (body) => {
    setLoading();
    try {
      const validated = checkAddCartBody(body);
      const { id, items } = await postData(`carts/${cartId}/items`, {
        items: validated,
      });
      setCartId(id);
      const finalResult = await Promise.all(
        items.map((item) => getByPermalink(item))
      );
      setSuccess(finalResult);
    } catch (err) {
      setError(err.message);
    }
  };
  const addCart = async (body) => {
    if (cartId) {
      await addExistCart(body);
      return;
    }
    await addNewCart(body);
  };
  //delete from existing cart
  const deleteCart = async (itemId) => {
    setLoading();
    try {
      await deleteData(`carts/${cartId}/items/${itemId}`, {});
      await loadCart(cartId);
    } catch (err) {
      setError(err.message);
    }
  };
  //update existing cart
  const updateCartByItem = async (itemId, body) => {
    const validatedBody = checkUpdateCartBody(body);
    setLoading();
    try {
      const { items } = await updateData(
        `carts/${cartId}/items/${itemId}`,
        validatedBody
      );
      const finalResult = await Promise.all(
        items.map((item) => getByPermalink(item))
      );
      setSuccess(finalResult);
    } catch (err) {
      setError(err);
    }
  };
  //claer cart on checkout
  const checkout = () => {
    setCartId(null);
    setEmpty();
  };

  //permalink logic
  const getByPermalink = async (cart) => {
    //localstorage logic
    const savedResult = localStorage.getItem(cart.productPermalink);
    const saveData = JSON.parse(savedResult);
    if (saveData) {
      const [initial] = saveData.variants.filter(
        (data) => data.skuCode === cart.skuCode
      );
      const colorList = permalinkData.variants.reduce(
        (prev, { color }) => (prev.includes(color) ? prev : [...prev, color]),
        []
      );
      return { ...permalinkData, colorList, ...cart, ...initial };
    }
    try {
      const permalinkData = await getData(`products/${cart.productPermalink}`);
      const [initial] = permalinkData.variants.filter(
        (data) => data.skuCode === cart.skuCode
      );
      const colorList = permalinkData.variants.reduce(
        (prev, { color }) => (prev.includes(color) ? prev : [...prev, color]),
        []
      );
      return { ...permalinkData, colorList, ...cart, ...initial };
    } catch (error) {
      console.error(error);
    }
  };
  //load cart
  React.useEffect(() => {
    if (!cartId) {
      // no existing cart > try load from local storaage
      const savedCart = loadLocal(LOCALSTORAGE_KEY.carid);
      if (savedCart) {
        setCartId(savedCart);
        loadCart(savedCart);
        return;
      }
    }
    // if cart fetch
    loadCart(cartId);
  }, []);
  // svae Cart id
  React.useEffect(() => {
    if (!cartId) return;
    saveLocalCart(cartId, 1);
  }, [cartId]);
  // sync local cart to rtdb
  const { account } = useAuthContext();
  React.useEffect(() => {
    if (!account || !cartId) return;
    (async () => {
      const dbRef = ref(db, `cartids/${account}`);
      try {
        await set(dbRef, cartId);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [cartId, account]);
  //load save cart if islogin
  React.useEffect(() => {
    if (!account) return;
    const dbRef = ref(db, `cartids/${account}`);
    const sub$ = onValue(
      dbRef,
      (snapshot) => {
        const savedCart = snapshot.val();
        if (!savedCart) return;
        //if local cart prioritized local cart > online cart
        if (cartId) return;
        setCartId(savedCart);
        loadCart(savedCart);
      },
      (err) => console.error(err.message)
    );
    return sub$;
  }, [account]);
  return (
    <CartContext.Provider
      value={{ isLoading, erorr, data, isEmptyCart, summaryList, subtotal }}
    >
      <CartContextMutation.Provider
        value={{ addCart, deleteCart, updateCartByItem, checkout }}
      >
        {children}
      </CartContextMutation.Provider>
    </CartContext.Provider>
  );
}

export default CartsContextProvider;
