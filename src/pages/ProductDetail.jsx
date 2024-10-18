import React from "react";
import StarRating from "../components/StarRating";
import Dropdown from "./ProductDtail/Dropdown";

const NextLeft = ({ moveleft }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="31"
      height="31"
      viewBox="0 0 31 31"
      fill="none"
      className="absolute top-1/2 left-2 transform -translate-y-1/2 cursor-pointer hover:opacity-70 hover:scale-110"
      onClick={moveleft}
    >
      <circle opacity="0.3" cx="15.4262" cy="15.5356" r="15.391" fill="white" />
      <path
        d="M13.7991 15.9708L18.2958 20.4672C18.5726 20.7441 18.573 21.192 18.297 21.468C18.0191 21.7459 17.573 21.7435 17.2963 21.4668L12.3013 16.4718C12.301 16.4716 12.3009 16.4714 12.3007 16.4712C12.3004 16.4709 12.3003 16.4707 12.3 16.4706C12.1613 16.3318 12.0924 16.1511 12.0926 15.9706C12.0933 15.7895 12.1623 15.6089 12.3 15.4711C12.3003 15.4709 12.3004 15.4706 12.3007 15.4704C12.3009 15.4702 12.301 15.47 12.3013 15.4698L17.2963 10.4746C17.5731 10.1978 18.021 10.1974 18.297 10.4734C18.575 10.7514 18.5725 11.1975 18.2958 11.4742L13.7991 15.9708Z"
        fill="#222222"
      />
    </svg>
  );
};

const NextRight = ({ moveright }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="31"
      height="31"
      viewBox="0 0 31 31"
      fill="none"
      className="absolute top-1/2 right-2 transform -translate-y-1/2 cursor-pointer hover:opacity-70 hover:scale-110 "
      onClick={moveright}
    >
      <circle opacity="0.3" cx="15.4262" cy="15.5356" r="15.391" fill="white" />
      <path
        d="M17.1999 15.9708L12.7032 20.4672C12.4264 20.7441 12.426 21.192 12.702 21.468C12.9799 21.7459 13.426 21.7435 13.7027 21.4668L18.6977 16.4718C18.698 16.4716 18.6982 16.4714 18.6983 16.4712C18.6986 16.4709 18.6988 16.4707 18.699 16.4706C18.8377 16.3318 18.9066 16.1511 18.9064 15.9706C18.9057 15.7895 18.8368 15.6089 18.699 15.4711C18.6988 15.4709 18.6986 15.4706 18.6983 15.4704C18.6982 15.4702 18.698 15.47 18.6977 15.4698L13.7027 10.4746C13.426 10.1978 12.978 10.1974 12.702 10.4734C12.4241 10.7514 12.4265 11.1975 12.7032 11.4742L17.1999 15.9708Z"
        fill="#222222"
      />
    </svg>
  );
};

const ShowColorVariant = ({
  color,
  colorCode,
  setselectColor,
  selectColor,
}) => {
  const border_color = selectColor ? "border-[#C1CD00]" : "border-[#E1E1E1]";
  return (
    <div className=" flex flex-col items-center gap-2 w-full">
      <div className={`border-[2px] ${border_color} `} onClick={setselectColor}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="55"
          height="54"
          viewBox="0 0 55 54"
          fill={colorCode}
        >
          <rect x="1" y="0.5" width="53" height="53" />
          <line x1="8" y1="1" x2="8" y2="53" stroke="white" />
          <line x1="18" y1="1" x2="18" y2="53" stroke="white" />
          <line x1="28" y1="1" x2="28" y2="53" stroke="white" />
          <line x1="38" y1="1" x2="38" y2="53" stroke="white" />
          <line x1="48" y1="1" x2="48" y2="53" stroke="white" />
          <line x1="53.5" y1="7.5" x2="1.5" y2="7.5" stroke="white" />
          <line x1="53.5" y1="17.5" x2="1.5" y2="17.5" stroke="white" />
          <line x1="53.5" y1="27.5" x2="1.5" y2="27.5" stroke="white" />
          <line x1="53.5" y1="37.5" x2="1.5" y2="37.5" stroke="white" />
          <line x1="53.5" y1="47.5" x2="1.5" y2="47.5" stroke="white" />
        </svg>
      </div>

      <p className="text-secondary-900  font-normal font-['Poppins']">
        {color}
      </p>
    </div>
  );
};

const getUniqueValue = (arr, key) => [
  ...new Set(arr.map((variant) => variant[key])),
];

function numberWithCommas(x) {
  return x
    .toFixed(2)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function ProductDetail() {
  // must have the productdetail object
  const [productdetail, setProductDetail] = React.useState({
    id: "kb1yxnG2jd3pAEy225M5",
    name: "City Essentials Blazer",
    skuCode: "C01004",
    permalink: "shirts-city-essentials-blazer",
    description:
      "Elevate your style with our refined yet casual corduroy blazer. Crafted from premium cotton with a touch of stretch, this garment offers lasting comfort and shape retention. ",
    price: 2000,
    promotionalPrice: 1000,
    categories: ["all-men", "men-shirts"],
    collection: "new-arrivals",
    ratings: 3.9,
    imageUrls: [
      "https://firebasestorage.googleapis.com/v0/b/wdb-storefront-project-api.appspot.com/o/products%2Fkb1yxnG2jd3pAEy225M5%2F_images%2FleqIHZHqkP2HwWyAOA6B-full-length-of-stylish-young-man-in-jacket-looking-2023-11-27-04-50-28-utc.png?alt=media&token=4d0251a9-c7c3-4fbf-b70f-342629e80274",
      "https://firebasestorage.googleapis.com/v0/b/wdb-storefront-project-api.appspot.com/o/products%2Fkb1yxnG2jd3pAEy225M5%2F_images%2FF3alR048c95gAUFAcQy9-full-length-of-stylish-man-in-autumn-outfit-touchi-2023-11-27-05-00-25-utc.png?alt=media&token=e32b2efa-e592-4b30-b7f7-5a697928599b",
      "https://firebasestorage.googleapis.com/v0/b/wdb-storefront-project-api.appspot.com/o/products%2Fkb1yxnG2jd3pAEy225M5%2F_images%2FUFrtHPkICdjWRBx2p6yb-full-length-of-man-in-autumn-outfit-holding-paper-2023-11-27-05-23-41-utc.png?alt=media&token=4fcd5ec8-a9d5-4ca5-9cd5-55ff784f3948",
      "https://firebasestorage.googleapis.com/v0/b/wdb-storefront-project-api.appspot.com/o/products%2Fkb1yxnG2jd3pAEy225M5%2F_images%2Flu3wCjHLhEAsFo1Icyvh-full-length-of-smiling-man-in-autumn-outfit-sittin-2023-11-27-05-12-06-utc.png?alt=media&token=c5c277d7-de48-4680-8e03-812d99cb6a0b",
      "https://firebasestorage.googleapis.com/v0/b/wdb-storefront-project-api.appspot.com/o/products%2Fkb1yxnG2jd3pAEy225M5%2F_images%2FBqfHyqnV26GqYMnSBbbH-trendy-man-in-autumn-jacket-holding-backpack-and-c-2023-11-27-05-00-33-utc.png?alt=media&token=10e098e7-4fb5-461c-b89a-e8b6e457f64f",
    ],
    variants: [
      {
        skuCode: "C0100404",
        color: "Khaki",
        size: "XL",
        remains: 12,
        colorCode: "#c3b091",
      },
      {
        skuCode: "C0100410",
        color: "Black",
        size: "S",
        remains: 91,
        colorCode: "#000000",
      },
      {
        skuCode: "C0100409",
        color: "Black",
        size: "L",
        remains: 94,
        colorCode: "#000000",
      },
      {
        skuCode: "C0100411",
        color: "Black",
        size: "M",
        remains: 93,
        colorCode: "#000000",
      },
      {
        skuCode: "C0100405",
        color: "Green",
        size: "L",
        remains: 9,
        colorCode: "#008000",
      },
      {
        skuCode: "C0100402",
        color: "Khaki",
        size: "S",
        remains: 6,
        colorCode: "#c3b091",
      },
      {
        skuCode: "C0100403",
        color: "Khaki",
        size: "M",
        remains: 86,
        colorCode: "#c3b091",
      },
      {
        skuCode: "C0100408",
        color: "Green",
        size: "XL",
        remains: 85,
        colorCode: "#008000",
      },
      {
        skuCode: "C0100406",
        color: "Green",
        size: "S",
        remains: 14,
        colorCode: "#008000",
      },
      {
        skuCode: "C0100412",
        color: "Black",
        size: "XL",
        remains: 87,
        colorCode: "#000000",
      },
      {
        skuCode: "C0100401",
        color: "Khaki",
        size: "L",
        remains: 88,
        colorCode: "#c3b091",
      },
    ],
  });
  // must have the selectedImage state
  const [selectedImage, setSelectedImage] = React.useState(0);
  // must have the isDiscount state
  const [isDiscount, setIsDiscount] = React.useState(
    productdetail.promotionalPrice < productdetail.price
      ? parseInt(
          (1 - productdetail.promotionalPrice / productdetail.price) * 100
        )
      : 0
  );
  const [favorite, setFavorite] = React.useState(false);

  // use getUniqueValue function to get the unique color, size, and colorCode from the productdetail.variants
  const [productChoice, setPoductChoice] = React.useState({
    color: [],
    colorCode: [],
    size: [],
  });

  const [selectedProduct, setSelectedProduct] = React.useState({});

  const weight_size = {
    XS: 1,
    S: 2,
    M: 3,
    L: 4,
    XL: 5,
    XXL: 6,
  };

  React.useEffect(() => {
    setProductDetail((prev) => {
      return {
        ...prev,
        variant: prev.variants.sort(
          (a, b) => weight_size[a.size] - weight_size[b.size]
        ),
      };
    });
  }, []);

  React.useEffect(() => {
    setPoductChoice((prev) => {
      return {
        ...prev,
        color: getUniqueValue(productdetail.variants, "color"),
        colorCode: getUniqueValue(productdetail.variants, "colorCode"),
        size: getUniqueValue(productdetail.variants, "size"),
      };
    });
  }, [productdetail]);

  React.useEffect(() => {
    setSelectedProduct({
      ...productdetail.variants[0],
      quantity: 1,
    });
  }, [productChoice]);

  console.log(selectedProduct);

  return (
    <>
      {/* Preview of product */}
      <div className=" px-4 pt-6  pb-24 flex flex-col items-center justify-center gap-10 select-none xl:flex-row xl:items-start xl:pt-16 xl:px-[124px] 2xl:px-[160px]">
        <div className="grid grid-cols-4 gap-y-4 gap-x-2 w-[21.4375rem] xl:w-[36rem] 2xl:w-[48.75rem]">
          <div className="w-full h-[21.4375rem] col-span-4 relative xl:h-[37.3125rem] 2xl:h-[48.75rem]">
            <img
              src={productdetail.imageUrls[selectedImage]}
              alt="product"
              className="object-cover object-top  w-full h-full"
            />
            {isDiscount && (
              <div className="absolute flex justify-center items-center font-['Poppins'] top-[0.875rem] right-0 px-[7px] py-[3px] bg-danger text-secondary-50 xl:top-[83px] xl:text-[27px] xl:w-[86px] xl:h-[47px] xl:leading-8 2xl:top-[32px] 2xl:h-[57px] ">
                -{isDiscount}%
              </div>
            )}
            <NextLeft
              moveleft={() => {
                // if the selected image is the first image, then set the selected image to the last image
                setSelectedImage((prev) => {
                  if (prev === 0) {
                    return productdetail.imageUrls.length - 1;
                  }
                  return prev - 1;
                });
              }}
            />
            <NextRight
              moveright={() => {
                // if the selected image is the last image, then set the selected image to the first image
                setSelectedImage((prev) => {
                  if (prev === productdetail.imageUrls.length - 1) {
                    return 0;
                  }
                  return prev + 1;
                });
              }}
            />
          </div>
          {productdetail.imageUrls.map((image, index) => {
            if (index !== selectedImage) {
              return (
                <div
                  key={index}
                  className="w-full h-[80px] col-span-1 bg-secondary-700 xl:h-[167px] 2xl:h-[172px]"
                  onClick={() => {
                    setSelectedImage(index);
                  }}
                >
                  <img
                    src={image}
                    alt="product"
                    className="object-cover object-top  w-full h-full"
                  />
                </div>
              );
            }
          })}
        </div>
        {/* Detail of product */}
        <div className=" flex flex-col w-[21.4375rem] gap-10 xl:w-[36.0625rem] 2xl:w-[780px]">
          {/* Name, Description, Price, Star */}
          <div className=" flex flex-col gap-6">
            {/* Name and Description */}
            <div className="flex flex-col gap-1 xl:gap-4">
              <div className="flex justify-between">
                {/* ID and Favorite */}
                <p className="font-semibold font-['Poppins'] text-[18px] flex items-center xl:font-bold xl:text-2xl">
                  ID: {productdetail.skuCode}
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  onClick={() => setFavorite(!favorite)}
                  className={"cursor-pointer"}
                >
                  <path
                    d="M24.6584 12.709C25.9871 12.709 26.9655 13.0337 27.6491 13.7002C28.3198 14.3581 28.6488 15.298 28.6488 16.5798C28.6488 17.8572 27.9011 19.25 26.4314 20.724L19.6768 27.2266L12.9007 20.6898L12.8494 20.6385L12.7896 20.5873C12.7896 20.5873 12.7384 20.5446 12.6145 20.4164C12.5675 20.3694 12.4222 20.2113 12.0633 19.7584C11.8112 19.4423 11.5805 19.1133 11.384 18.7844C11.2131 18.4981 11.0508 18.1264 10.9012 17.6863C10.773 17.2975 10.709 16.9258 10.709 16.5798C10.709 15.298 11.0337 14.3581 11.7087 13.7002C12.3923 13.0337 13.3707 12.709 14.6994 12.709C15.007 12.709 15.3317 12.7645 15.6649 12.8756C16.0366 12.9995 16.3827 13.1661 16.6989 13.3755C17.0919 13.6361 17.4337 13.8796 17.7072 14.0975C17.9763 14.3111 18.2327 14.5418 18.4719 14.7811L19.681 15.9902L20.8901 14.7811C21.1294 14.5418 21.39 14.3111 21.6549 14.0975C21.9326 13.8753 22.2744 13.6318 22.6674 13.3755C22.9836 13.1704 23.3297 12.9995 23.6971 12.8799C24.0261 12.7645 24.3551 12.709 24.6584 12.709ZM24.6584 11C24.1671 11 23.6629 11.0854 23.1502 11.2563C22.6375 11.4272 22.159 11.6579 21.719 11.9485C21.2789 12.239 20.8986 12.5124 20.5825 12.7645C20.2663 13.0209 19.963 13.29 19.6768 13.5763C19.3905 13.29 19.0872 13.0209 18.771 12.7645C18.4549 12.5082 18.0746 12.239 17.6345 11.9485C17.1945 11.6579 16.716 11.4272 16.2033 11.2563C15.6906 11.0854 15.1864 11 14.6951 11C12.9135 11 11.5207 11.4913 10.5124 12.4783C9.50414 13.4652 9 14.8324 9 16.5798C9 17.1138 9.09399 17.6607 9.28198 18.2247C9.46997 18.7886 9.67931 19.2714 9.91857 19.6687C10.1578 20.066 10.427 20.4548 10.7303 20.8308C11.0337 21.2068 11.2516 21.4674 11.3926 21.6127C11.5335 21.7537 11.6403 21.8605 11.7215 21.9246L19.1598 29.1022C19.3008 29.2432 19.476 29.3158 19.6853 29.3158C19.8904 29.3158 20.0656 29.2432 20.2108 29.1022L27.6363 21.9502C29.4563 20.1301 30.3663 18.3443 30.3663 16.584C30.3663 14.8366 29.8622 13.4695 28.8539 12.4825C27.8328 11.4913 26.44 11 24.6584 11Z"
                    fill={favorite ? "#FF000D" : "#222222"}
                  />
                </svg>
              </div>
              {/* Name and Des of Product */}
              <h4 className="font-bold font-['Poppins'] xl:text-[3rem]">
                {productdetail.name}
              </h4>
              <p className=" text-secondary-700 font-semibold font-['Poppins'] xl:text-2xl xl:font-bold ">
                {productdetail.description}
              </p>
            </div>
            <div className="flex flex-col gap-2">
              {isDiscount ? (
                <>
                  <h5 className="font-bold font-['Poppins'] self-start py-2 px-[10px] bg-danger text-secondary-50 xl:text-[2.5rem]">
                    THB {numberWithCommas(productdetail.promotionalPrice)}
                  </h5>
                  {/* Add From THB 2,000.00 */}
                  <p className=" font-semibold font-['Poppins'] self-start  text-secondary-900">
                    From{" "}
                    <span className=" line-through ">
                      THB {numberWithCommas(productdetail.price)}
                    </span>
                  </p>
                </>
              ) : (
                <h5 className="font-bold font-['Poppins'] self-start py-2 px-[10px] xl:text-[2.5rem]">
                  THB {numberWithCommas(productdetail.price)}
                </h5>
              )}
            </div>

            <StarRating rating={productdetail.ratings} />
          </div>
          {/* Color, Size, Quantity */}
          <div className="flex flex-col gap-6">
            {/* Color Select*/}
            <div className="flex flex-col gap-2 ">
              <h5 className=" font-normal text-[1rem] font-['Poppins'] text-secondary-700">
                Color
              </h5>
              <div className=" grid grid-cols-3  gap-2 xl:grid-cols-5">
                {productChoice.color.map((color, index) => {
                  if (
                    productdetail.variants.find(
                      (variant) =>
                        variant.color === color &&
                        variant.size === selectedProduct.size
                    )?.remains > 0
                  ) {
                    return (
                      <ShowColorVariant
                        key={index}
                        color={color}
                        colorCode={productChoice.colorCode[index]}
                        setselectColor={() => {
                          setSelectedProduct((prev) => {
                            const product = productdetail.variants.find(
                              (variant) =>
                                variant.color === color &&
                                variant.size === selectedProduct.size
                            );
                            return {
                              ...prev,
                              color: color,
                              skuCode: product.skuCode,
                              remains: product.remains,
                            };
                          });
                        }}
                        selectColor={selectedProduct.color === color}
                      />
                    );
                  } else {
                    return (
                      <div key={index} className="opacity-30">
                        <ShowColorVariant
                          color={color}
                          colorCode={productChoice.colorCode[index]}
                        />
                      </div>
                    );
                  }
                })}
              </div>
            </div>
            {/* Size Select */}
            <div className="flex flex-col gap-2">
              <h5 className=" font-normal text-[1rem] font-['Poppins'] text-secondary-700">
                Size
              </h5>
              <div className=" grid grid-cols-5  gap-2">
                {productChoice.size.map((size, index) => {
                  const border_color =
                    selectedProduct.size === size
                      ? "border-[#C1CD00]"
                      : "border-[#E1E1E1]";
                  if (
                    productdetail.variants.find(
                      (variant) =>
                        variant.color === selectedProduct.color &&
                        variant.size === size
                    )?.remains > 0
                  ) {
                    return (
                      <button
                        key={index}
                        className={`flex justify-center items-center font-['Poppins'] text-secondary-900 h-[54px] text-center py-2 border ${border_color} cursor-pointer`}
                        onClick={() => {
                          setSelectedProduct((prev) => {
                            const product = productdetail.variants.find(
                              (variant) =>
                                variant.color === selectedProduct.color &&
                                variant.size === size
                            );
                            return {
                              ...prev,
                              size: size,
                              skuCode: product.skuCode,
                              remains: product.remains,
                            };
                          });
                        }}
                      >
                        {size}
                      </button>
                    );
                  } else {
                    return (
                      <button
                        key={index}
                        className={` opacity-30 flex justify-center items-center font-['Poppins'] text-secondary-900 h-[54px] text-center py-2 border ${border_color} cursor-pointer`}
                      >
                        {size}
                      </button>
                    );
                  }
                })}
              </div>
            </div>
            {/* Quantity Select */}
            <div className="flex flex-col gap-2">
              <h5 className=" font-normal text-[1rem] font-['Poppins'] text-secondary-700">
                Qty.
              </h5>
              <Dropdown
                setselectedProduct={setSelectedProduct}
                selectedProduct={selectedProduct}
              />
            </div>
            <button className=" bg-secondary-900 text-secondary-50 font-light font-['Poppins'] h-[54px] hover:bg-primary-700 focus:outline-none">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
