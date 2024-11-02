import React, { useEffect, useState } from "react";
import { useCollectionContext } from "../context/CollectionContextProvider";
import { Link } from "react-router-dom";
import Skeleton from "./Skeleton";

const ColloctionCard = ({ title, imageUrl, description, permalink }) => {
  return (
    <div className="relative min-w-[343px] h-[500px] max-w-[575px] md:h-[500px] md:w-[575px] xl:h-[462px] 2xl:h-[500px] xl:flex-1 xl:w-auto p-4 bg-gradient-to-b from-[rgba(0,0,0,)] to-black flex-col justify-end items-center gap-4 inline-flex">
      <img
        className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
        src={imageUrl}
        alt={title + " promation image"}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent rounded-lg" />
      <div className="relative z-10 flex flex-col items-center gap-4 mt-auto">
        <div className="self-stretch h-8 line-clamp-1 text-center text-white text-2xl font-bold leading-loose">
          {title}
        </div>
        <div className="self-stretch text-center text-white text-base font-normal font-['Poppins'] leading-tight">
          {description}
        </div>
        <Link
          to={`/clothing/all-men&`}
          className="h-[54px] px-2.5 py-[7px] bg-[#222222] justify-center items-center gap-2 inline-flex"
        >
          <div className="text-white text-base font-normal font-['Poppins'] leading-tight">
            View more
          </div>
        </Link>
      </div>
    </div>
  );
};

const CollectionSection = () => {
  const { collectionList, isLoading } = useCollectionContext();
  const [page, setPage] = useState(0);
  const { name, description, items, permalink } = collectionList?.[page] ?? {
    name: "Collections",
    description: "",
    items: [],
    permalink: "",
  };
  useEffect(() => {
    const n = collectionList?.length ?? 0;
    const id = setTimeout(() => {
      if (page === n - 1) {
        setPage(0);
        return;
      }
      setPage((p) => p + 1);
    }, 30 * 1000);
    return () => clearTimeout(id);
  }, [page]);
  if (isLoading)
    return (
      <section className="py-16 px-[1.125rem] lg:px-32">
        <div className="w-full flex flex-col xl:flex-row justify-center items-center gap-16">
          <Skeleton className="h-[458px] flex-col justify-start items-start gap-6 inline-flex xl:flex-1 w-full">
            <Skeleton
              bgColor="dark"
              style={{ height: "188px", width: "90%" }}
            />
            <Skeleton
              bgColor="light"
              style={{ width: "100%", height: "54px" }}
            />
            <div className="flex flex-col gap-2 w-full">
              <Skeleton
                bgColor="light"
                style={{
                  height: "20px",
                  width: `${40 * (1 + Math.random())}%`,
                }}
              />
              <Skeleton
                bgColor="light"
                style={{
                  height: "20px",
                  width: `${40 * (1 + Math.random())}%`,
                }}
              />
              <Skeleton
                bgColor="light"
                style={{
                  height: "20px",
                  width: `${40 * (1 + Math.random())}%`,
                }}
              />
              <Skeleton
                bgColor="light"
                style={{
                  height: "20px",
                  width: `${40 * (1 + Math.random())}%`,
                }}
              />
            </div>
          </Skeleton>
          <Skeleton className="h-[458px] flex-col justify-start items-start gap-6 inline-flex xl:flex-1 w-full">
            <Skeleton
              bgColor="light"
              style={{ width: "100%", height: "54px" }}
              className="mt-auto"
            />
            <Skeleton />
            <Skeleton
              bgColor="dark"
              className="w-full h-1/3 flex flex-col justify-end items-center pb-7"
            >
              <Skeleton className="w-1/2 h-[54px]" />
            </Skeleton>
          </Skeleton>
          <Skeleton className="h-[458px] flex-col justify-start items-start gap-6 inline-flex xl:flex-1 w-full">
            <Skeleton
              bgColor="light"
              style={{ width: "100%", height: "54px" }}
              className="mt-auto"
            />
            <Skeleton />
            <Skeleton
              bgColor="dark"
              className="w-full h-1/3 flex flex-col justify-end items-center pb-7"
            >
              <Skeleton className="w-1/2 h-[54px]" />
            </Skeleton>
          </Skeleton>
        </div>
      </section>
    );

  return (
    <section className="py-16 px-[1.125rem] lg:px-32">
      <div className="w-full flex flex-col xl:flex-row justify-center items-center gap-16">
        {/* Left Column (Title & Description) */}
        <div className="h-[458px] flex-col justify-start items-start gap-6 inline-flex max-w-[575px] xl:flex-1">
          <div className="flex-col justify-start items-start flex">
            <div className="text-[#222222] text-8xl font-bold leading-[116px]">
              2024
            </div>
            <div className="text-[#222222] text-5xl font-bold leading-[72px]">
              {name}
            </div>
          </div>
          <div className="text-[#222222] text-base font-normal leading-tight">
            {description}
          </div>
        </div>

        {items?.map(({ title, description, imageUrl }) => (
          <ColloctionCard
            key={title}
            {...{ title, description, imageUrl, permalink }}
          />
        ))}
      </div>
    </section>
  );
};

export default CollectionSection;
