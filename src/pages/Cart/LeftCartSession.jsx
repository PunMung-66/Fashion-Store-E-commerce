import React from "react";
import { useCartContext } from "../../context/CartsContextProvider";
import CartItem from "./CartItem";
import CartBtn from "./CartBtn";
import { Link, useSearchParams } from "react-router-dom";
import Skeleton from "../../components/Skeleton";

function LeftCartSession() {
  const { data, isEmptyCart, isLoading } = useCartContext();
  const [q] = useSearchParams();
  const prev = q.get("prev");
  if (isLoading && isEmptyCart) {
    return (
      <div className="p-4 flex flex-col gap-6 lg:flex-1">
        <h6>Items</h6>
        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-col gap-2 items-center text-center">
            <Skeleton className="w-[261px] md:w-[403px] aspect-square" />
            <Skeleton bgColor="light" className="h-12 w-1/2" />

            <Skeleton className="h-14 w-full" />
            <Skeleton bgColor="dark" className="h-[54px] w-[300px]" />
          </div>
        </div>
      </div>
    );
  }
  if (isLoading && !isEmptyCart) {
    return (
      <div className="p-4 flex flex-col gap-6 lg:flex-1">
        <h6>Items</h6>
        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-col gap-6 w-full">
            {data?.map((d, i) => (
              <CartItem key={i} {...d} />
            ))}
          </div>
        </div>
      </div>
    );
  }
  if (isEmptyCart) {
    return (
      <div className="lg:w-3/5 p-4 flex flex-col gap-6">
        <h6>Items</h6>
        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-col gap-2 items-center text-center">
            <img
              className="w-[261px] md:w-[403px] aspect-square"
              srcSet="empty-cart-small.png 261w, empty-cart-large.png 403w"
              sizes="(max-width:768px) 261w, 403w"
              src="empty-cart-small.png"
              alt="card placeholder"
            />
            <h5>Your cart is empty</h5>
            <p className="text-xl">
              Look like you have not added anything to your carts yet. <br />
              Go ahead & explore stuff
            </p>
          </div>
          <Link to={prev ? prev : "/clothing/all-men"} replace={true}>
            <CartBtn btnLabel="Continue shopping" />
          </Link>
        </div>
      </div>
    );
  } else {
    return (
      <div className="p-4 flex flex-col gap-6 lg:w-2/3">
        <h6>Items</h6>
        <div className="flex flex-col gap-6">
          {data?.map((d, i) => (
            <CartItem key={d.skuCode} {...d} />
          ))}
        </div>
      </div>
    );
  }
}

export default LeftCartSession;
