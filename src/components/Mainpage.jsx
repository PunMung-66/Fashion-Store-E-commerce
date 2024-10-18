import React from "react";
import StarRating from "./starRating"; // Import the StarRating component
import headerPicture from "../assets/mainpage-photo/header-picture.png"; // Import the image

const Mainpage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header Image Section */}
      <div className="relative">
        <img
          className="w-full h-[420px] object-cover"
          src={headerPicture}
          alt="Header Image"
        />
      </div>

      {/* Collection Section */}
      <section className="py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column (Title & Description) */}
          <div className="h-[462px] flex flex-col justify-start items-start gap-6">
            <div className="flex flex-col justify-start items-start">
              <div className="text-[#222222] text-8xl font-bold font-poppins leading-[116px]">
                2024
              </div>
              <div className="text-[#222222] text-5xl font-bold font-poppins leading-[72px]">
                Collection
              </div>
            </div>
            <div className="w-[363px] text-[#222222] text-base font-normal font-poppins leading-tight">
              Step into a world of winter elegance and style with our latest
              Winter Collection. As temperatures drop, our curated selection of
              clothing is designed to keep you fashionably warm. From luxurious
              knitwear to trend-setting outerwear, each piece in our collection
              is a celebration of seasonal sophistication. Explore the blend of
              comfort and fashion, as we present you with the must-have
              ensembles to make a statement in the chilly months ahead. Welcome
              to a winter wardrobe that seamlessly combines coziness with chic
              aesthetics.
            </div>
          </div>
          {/* Right Column (Two Cards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Cozy Breeze Card */}
            <div className="relative">
              <div className="h-[462px] p-4 bg-gradient-to-b from-black to-black flex flex-col justify-end items-center gap-4">
                <div className="self-stretch h-8 text-center text-white text-2xl font-bold font-poppins leading-loose">
                  Cozy Breeze
                </div>
                <div className="self-stretch text-center text-white text-base font-normal font-poppins leading-tight">
                  Embrace the season with our carefully curated selection of
                  garments, each piece thoughtfully designed to blend fashion
                  and functionality. From cozy knits to elegant outerwear, our
                  collection invites you to indulge in the allure of winter
                  fashion.
                </div>
                <div className="h-[54px] px-2.5 py-[7px] bg-[#222222] flex justify-center items-center gap-2">
                  <div className="text-white text-base font-normal font-poppins leading-tight">
                    View more
                  </div>
                </div>
              </div>
            </div>
            {/* Flexi Move Card */}
            <div className="relative">
              <div className="h-[462px] p-4 bg-gradient-to-b from-black to-black flex flex-col justify-end items-center gap-4">
                <div className="self-stretch h-8 text-center text-white text-2xl font-bold font-poppins leading-loose">
                  Flexi Move
                </div>
                <div className="self-stretch text-center text-white text-base font-normal font-poppins leading-tight">
                  Step into a world where fashion meets functionality with our
                  latest Sneaker Collection. Designed for those who appreciate
                  the perfect fusion of style and comfort, our curated selection
                  of sneakers is a celebration of urban chic.
                </div>
                <div className="h-[54px] px-2.5 py-[7px] bg-[#222222] flex justify-center items-center gap-2">
                  <div className="text-white text-base font-normal font-poppins leading-tight">
                    View more
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16">
        <div className="w-full flex flex-col justify-center items-center gap-16">
          <div className="text-[#222222] text-[32px] font-bold font-poppins leading-[48px]">
            Featured Product
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Product Card */}
            <div className="w-[267px] flex flex-col justify-start items-start gap-4">
              <img
                className="w-full h-[267px] object-cover rounded-t-lg"
                src="https://via.placeholder.com/267x267"
                alt="Product 1"
              />
              <div className="h-[34px] px-2.5 py-1 bg-[#ff000d] flex justify-start items-center gap-2">
                <div className="text-white text-base font-normal font-poppins leading-tight">
                  - 50%
                </div>
              </div>
              <div className="w-full flex flex-col justify-start items-start gap-2">
                <div className="text-[#222222] text-2xl font-bold font-poppins leading-loose">
                  Reyon Long Sleeve Shirt
                </div>
                <div className="text-[#626262] text-base font-normal font-poppins leading-tight">
                  Elevate your winter style with our cozy flann...
                </div>
                <div className="flex justify-start items-center gap-2">
                  <StarRating rating={4} />
                </div>
                <div className="w-full flex justify-between items-center">
                  <div className="text-[#626262] text-sm font-normal font-poppins line-through leading-tight">
                    2,000
                  </div>
                  <div className="text-right text-[#ff000d] text-2xl font-bold font-poppins leading-loose">
                    THB 1,000
                  </div>
                </div>
              </div>
            </div>
            {/* Repeat similar structure for other products */}
            <div className="w-[267px] flex flex-col justify-start items-start gap-4">
              <img
                className="w-full h-[267px] object-cover rounded-t-lg"
                src="https://via.placeholder.com/267x267"
                alt="Product 2"
              />
              <div className="w-full flex flex-col justify-start items-start gap-2">
                <div className="text-[#222222] text-2xl font-bold font-poppins leading-loose">
                  Pleated Camisole Dress Flor...
                </div>
                <div className="text-[#626262] text-base font-normal font-poppins leading-tight">
                  Our versatile crossbody bag combines fashio...
                </div>
                <div className="flex justify-start items-center gap-2">
                  <StarRating rating={4} />
                </div>
                <div className="w-full flex justify-between items-center">
                  <div className="text-right text-[#222222] text-2xl font-bold font-poppins leading-loose">
                    THB 1,600
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[267px] flex flex-col justify-start items-start gap-4">
              <img
                className="w-full h-[267px] object-cover rounded-t-lg"
                src="https://via.placeholder.com/267x267"
                alt="Product 3"
              />
              <div className="w-full flex flex-col justify-start items-start gap-2">
                <div className="text-[#222222] text-2xl font-bold font-poppins leading-loose">
                  Washable Milano Ribbed Cr...
                </div>
                <div className="text-[#626262] text-base font-normal font-poppins leading-tight">
                  Embrace coziness with our crafted from a so...
                </div>
                <div className="flex justify-start items-center gap-2">
                  <StarRating rating={4} />
                </div>
                <div className="w-full flex justify-between items-center">
                  <div className="text-right text-[#222222] text-2xl font-bold font-poppins leading-loose">
                    THB 1,200
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[267px] flex flex-col justify-start items-start gap-4">
              <img
                className="w-full h-[267px] object-cover rounded-t-lg"
                src="https://via.placeholder.com/267x267"
                alt="Product 4"
              />
              <div className="w-full flex flex-col justify-start items-start gap-2">
                <div className="text-[#222222] text-2xl font-bold font-poppins leading-loose">
                  Flexi Move Sneaker
                </div>
                <div className="text-[#626262] text-base font-normal font-poppins leading-tight">
                  Step into comfort and style with our lightweig...
                </div>
                <div className="flex justify-start items-center gap-2">
                  <StarRating rating={4} />
                </div>
                <div className="w-full flex justify-between items-center">
                  <div className="text-right text-[#222222] text-2xl font-bold font-poppins leading-loose">
                    THB 1,700.00
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mainpage;
