import React from "react";
import { SummaryRow, SummarySection } from "./Summary";
import { useCartContext } from "../../context/CartsContextProvider";
import CartBtn from "./CartBtn";
import { Link, useSearchParams } from "react-router-dom";
import Skeleton from "../../components/Skeleton";
import { numberWithCommas } from "../../utils/productDetail";
import { useModalContext } from "../../context/ModalContextProvider";

const CartModalConetnt = ({ summaryList, subtotal = 0, shipping = 0 }) => {
  return (
    <div className="w-full flex-col">
      <SummarySection>
        {summaryList.map(({ name, sum, quantity, skuCode }, i) => (
          <SummaryRow
            key={"summary-with-item-" + skuCode}
            name={`${name} ${quantity <= 1 ? "" : "X" + quantity}`}
            price={numberWithCommas(sum)}
            rightClassname="text-secondary-700"
          />
        ))}
      </SummarySection>
      <SummarySection>
        <SummaryRow
          name="subtotal"
          price={numberWithCommas(subtotal)}
          rightClassname="text-secondary-700"
        />{" "}
        <SummaryRow
          name={"shipping fee"}
          price={numberWithCommas(shipping)}
          rightClassname="text-secondary-700"
        />
      </SummarySection>
      <SummaryRow
        name={"Total"}
        price={numberWithCommas(subtotal + shipping)}
        leftClassname="font-bold text-xl "
        rightClassname="font-bold text-xl "
      />
    </div>
  );
};

function RightCartSession() {
  const SHIPPING_FEE = 0;
  const { summaryList, subtotal, isEmptyCart, isLoading, data } =
    useCartContext();
  const { setOpen } = useModalContext();
  const handleCheckout = () => {
    setOpen(
      "Successful Checkout",
      {
        label: "Ok",
        onClick: () => {},
      },
      CartModalConetnt({
        summaryList,
        subtotal: subtotal.subtotal,
        shipping: SHIPPING_FEE,
      })
    );
  };
  const [q, _] = useSearchParams();
  const prev = q.get("prev");
  const lastCat = !isEmptyCart ? data[0].categories[0] : "all-men";
  if (isLoading) {
    return (
      <div className="p-6 flex flex-col gap-10 lg:flex-1">
        <div className="flex flex-col gap-6">
          {/* summary header */}
          <div className="flex justify-between items-center">
            <span className="text-2xl font-bold text-black">Summary</span>
            <Skeleton bgColor="light" className="w-1/4 h-full rounded-lg" />
          </div>
          {/* summary items */}
          <div className="flex flex-col gap-4 pb-4">
            {summaryList.map((_, i) => (
              <div key={i} className="flex justify-between items-center">
                <Skeleton
                  bgColor="light"
                  style={{ width: `${40 * (1 + Math.random())}%` }}
                  className="h-5 rounded-lg"
                />
                <Skeleton bgColor="light" className="h-5 w-9 rounded-lg" />
              </div>
            ))}
          </div>
          {/* summary shipping */}
          <div className="flex flex-col gap-4 pb-4">
            {[...Array(2)].map((_, i) => (
              <div
                key={`shiping-${i}`}
                className="flex justify-between items-center"
              >
                <Skeleton
                  bgColor="light"
                  style={{ width: `${40 * (1 + Math.random())}%` }}
                  className="h-5 rounded-lg"
                />
                <Skeleton bgColor="light" className="h-5 w-9 rounded-lg" />
              </div>
            ))}
          </div>
          {/* summary total */}
          <div className="flex justify-between items-center">
            <Skeleton
              bgColor="light"
              style={{ width: `${40 * (1 + Math.random())}%` }}
              className="h-5 rounded-lg"
            />
            <Skeleton bgColor="light" className="h-5 w-9 rounded-lg" />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <Skeleton bgColor="dark" className="w-full h-[54px]" />
          <Skeleton bgColor="light" className="w-full h-[54px]" />
        </div>
      </div>
    );
  }
  return (
    <div className="p-6 flex flex-col gap-10 lg:flex-1">
      <div className="flex flex-col gap-6">
        {/* summary header */}
        <SummaryRow
          name="summary"
          price={`${subtotal.total} items`}
          leftClassname={"text-2xl font-bold text-black"}
          rightClassname={"text-xl font-semi"}
        />
        {/* summary items */}
        <SummarySection>
          {summaryList.map(({ name, sum, quantity, skuCode }, i) => (
            <SummaryRow
              key={"summary-with-item-" + skuCode}
              name={`${name} ${quantity <= 1 ? "" : "X" + quantity}`}
              price={numberWithCommas(sum)}
              leftClassname={isEmptyCart ? "text-secondary-500" : ""}
              rightClassname={
                isEmptyCart ? "text-secondary-500" : "text-secondary-700"
              }
            />
          ))}
        </SummarySection>
        {/* summary shipping */}
        <SummarySection>
          <SummaryRow
            name="subtotal"
            price={numberWithCommas(subtotal.subtotal)}
            leftClassname={isEmptyCart ? "text-secondary-500" : ""}
            rightClassname={
              isEmptyCart ? "text-secondary-500" : "text-secondary-700"
            }
          />{" "}
          <SummaryRow
            name={"shipping fee"}
            price={SHIPPING_FEE === 0 ? "Free" : numberWithCommas(SHIPPING_FEE)}
            leftClassname={isEmptyCart ? "text-secondary-500" : ""}
            rightClassname={
              isEmptyCart ? "text-secondary-500" : "text-secondary-700"
            }
          />
        </SummarySection>
        {/* summary total */}
        <SummaryRow
          name={"Total"}
          price={numberWithCommas(SHIPPING_FEE + subtotal.subtotal)}
          leftClassname={
            isEmptyCart
              ? "font-bold text-xl text-secondary-500"
              : "font-bold text-xl "
          }
          rightClassname={
            isEmptyCart
              ? "font-bold text-xl text-secondary-500"
              : "font-bold text-xl "
          }
        />
      </div>
      <div className="flex flex-col gap-4">
        <CartBtn
          disabled={isEmptyCart}
          btnLabel="Checkout"
          onClick={handleCheckout}
        />
        <Link to={prev ? prev : `/clothing/${lastCat}`} replace={true}>
          <CartBtn severity="secondary" btnLabel="Continue shopping" />
        </Link>
      </div>
    </div>
  );
}

export default RightCartSession;
