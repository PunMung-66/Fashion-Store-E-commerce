import React from "react";
import { numberWithCommas } from "../../utils/productDetail";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

function ProductModal({
  showModal,
  selectedImage,
  selectedProduct,
  setSelectedProduct,
  setShowModal,

  cat,

  productChoice,
}) {
  React.useEffect(() => {
    if (productChoice.size.length === 0) {
      setSelectedProduct((prev) => {
        return {
          ...prev,
          size: "",
        };
      });
    }
  }, [showModal]);

  const [q, _] = useSearchParams();
  const prev = q.get("prev");
  const navigate = useNavigate();

  return (
    <>
      {showModal && (
        <div className=" z-10 top-0 bottom-0 fixed w-[100vw] flex justify-center items-center bg-secondary-900 bg-opacity-80 animate-fateIn">
          <div className=" flex flex-col items-start gap-6 p-6 w-[21.4375rem] xl:w-[900px]  rounded-2xl bg-white">
            <div className="flex justify-between items-center self-stretch">
              <div className="text-[#222] font-['Poppins'] text-lg font-semibold leading-6 xl:font-bold xl:text-[24px]">
                Items added to you cart
              </div>
              <div className="flex justify-center items-center p-3 w-10 h-10">
                <svg
                  width={18}
                  height={18}
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="cursor-pointer"
                  onClick={() => setShowModal(false)}
                >
                  <path
                    d="M1 1L17 17"
                    stroke="#222222"
                    strokeWidth={2}
                    strokeLinecap="round"
                  />
                  <path
                    d="M17 1L1 17"
                    stroke="#222222"
                    strokeWidth={2}
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-4 self-stretch">
              <div className="frame_4240 flex flex-col items-start self-stretch">
                <div className="flex flex-col items-center gap-1 self-stretch xl:flex-row ">
                  <img
                    src={selectedImage}
                    alt="product"
                    className=" w-[160px] h-[160px] object-cover m-3"
                  />
                  {/* Name QTY and Cost */}
                  <div className="flex  w-full flex-col xl:flex-row xl:justify-between">
                    <div className="flex flex-col items-start gap-2.5 w-[18.1875rem] ">
                      <div className="text-[#222] font-['Poppins'] text-lg font-semibold leading-6 xl:font-bold xl:text-[24px]">
                        {selectedProduct.name}

                        <div className="text-[#9f9f9f] font-['Poppins'] text-base font-normal leading-5 xl:font-normal xl:text-[16px] my-2">
                          {selectedProduct.color !== "" && (
                            <span>color: {selectedProduct.color} </span>
                          )}
                          {selectedProduct.size !== "" && (
                            <span>, size: {selectedProduct.size} </span>
                          )}
                        </div>
                      </div>
                      <div className="text-[#626262] font-['Poppins'] leading-5 xl:font-semibold">
                        QTY : {selectedProduct.quantity}
                      </div>
                    </div>
                    <div className="self-stretch text-[#222] text-right font-['Poppins'] text-lg font-semibold leading-6 xl:font-bold xl:text-[24px]">
                      THB{" "}
                      {numberWithCommas(
                        selectedProduct.quantity * selectedProduct.price
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start gap-4 self-stretch xl:flex-row ">
              <Link
                to={prev ? `/cart?prev=${prev}` : "/cart"}
                className="flex justify-center items-center gap-2 self-stretch pt-[0.4375rem] pb-[0.4375rem] px-2 h-[3.375rem] bg-[#222] text-white font-['Poppins'] leading-5 cursor-pointer xl:w-full"
              >
                <button
                  onClick={() => {
                    setShowModal(false);
                  }}
                >
                  View cart
                </button>
              </Link>
              <button
                className="flex justify-center items-center gap-2 self-stretch pt-[0.4375rem] pb-[0.4375rem] px-2 h-[3.375rem] border border-[#e1e1e1] bg-white text-[#222] font-['Poppins'] leading-5 cursor-pointer xl:w-full"
                onClick={() => {
                  setShowModal(false);
                  if (prev) {
                    navigate(prev);
                  } else {
                    navigate(`/clothing/${cat.join() ?? "all-men"}`);
                  }
                }}
              >
                Continue shopping
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductModal;
