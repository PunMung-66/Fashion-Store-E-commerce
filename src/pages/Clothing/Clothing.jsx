import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getData } from "../../utils/apiHandler";
import SortDropdown from "./SortDropdown";
import ProductCard from "../../components/productCard";
import Sidebar from "./Sidebar";
import ProductCardSkeleton from "./ProductCardSkeleton";

function Clothing() {
  const location = useLocation();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortOrder, setSortOrder] = useState("");
  const [category, setCategory] = useState("");
  const [collection, setCollection] = useState("");
  const [gender, setGender] = useState("men");

  const getPageTitle = (path) => {
    switch (path) {
      case "all-men":
        return "Men's Clothing";
      case "all-ladies":
        return "Women's Clothing";
      case "men-shirts":
        return "Men's Shirts";
      case "men-shoes":
        return "Men's Shoes";
      case "men-accessories":
        return "Men's Accessories";
      case "ladies-shirts":
        return "Women's Shirts";
      case "ladies-shoes":
        return "Women's Shoes";
      case "ladies-accessories":
        return "Women's Accessories";
      case "men-shirts,ladies-shirts":
        return "Shirts";
      case "men-shoes,ladies-shoes":
        return "Shoes";
      case "men-accessories,ladies-accessories":
        return "Accessories";
      default:
        return "Clothing";
    }
  };

  useEffect(() => {
    const pathSegments = location.pathname.split("/");
    const lastSegment = pathSegments[pathSegments.length - 1];

    const [cat, col] = lastSegment.split("&");
    setCategory(cat);
    setCollection(col || "");

    if (cat.includes("men")) {
      setGender("men");
    } else if (cat.includes("ladies")) {
      setGender("women");
    }

    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await getData("products", {
          params: {
            categories: cat,
            ...(col && { collection: col }),
            matchAll: col ? true : false,
          },
        });
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
        setError("ไม่สามารถโหลดข้อมูลสินค้าได้");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [location.pathname]);

  React.useEffect(() => {
    if (products.length === 0) {
      document.title = "No Products Found";
    } else {
      const pathname = window.location.pathname;
      let collection = "";
      if (pathname.includes("&")) {
        const paramet = pathname.split("&");
        collection = paramet.pop();
      }

      document.title = `${getPageTitle(category)} ${
        collection ? `| ${collection}` : ""
      }`;
    }
  }, [products, window.location.pathname]);

  const sortProducts = (productsToSort) => {
    switch (sortOrder) {
      case "price-asc":
        return [...productsToSort].sort(
          (a, b) =>
            (a.promotionalPrice || a.price) - (b.promotionalPrice || b.price)
        );
      case "price-desc":
        return [...productsToSort].sort(
          (a, b) =>
            (b.promotionalPrice || b.price) - (a.promotionalPrice || a.price)
        );
      case "best-seller":
        return [...productsToSort].sort(
          (a, b) => (b.ratings || 0) - (a.ratings || 0)
        );
      default:
        return productsToSort;
    }
  };

  return (
    <div className="flex max-w-[1536px] mx-auto mb-14">
      <div className="hidden lg:block min-w-[280px] sticky bg-white top-16 z-[5] py-4 h-screen">
        <Sidebar />
      </div>
      <div className="flex-1 px-10">
        <div className="flex flex-col lg:flex-row justify-between items-center sticky top-14 bg-white z-[5] py-4">
          <h2 className="text-3xl font-bold">{getPageTitle(category)}</h2>
          <div className="lg:flex-1 flex justify-end items-center lg:pr-16 mt-4">
            <SortDropdown sortOrder={sortOrder} setSortOrder={setSortOrder} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-y-[40px]">
          {loading && (
            <>
              {[...Array(6)].map((_, index) => (
                <div
                  key={index}
                  className="w-full flex justify-center lg:block"
                >
                  <ProductCardSkeleton />
                </div>
              ))}
            </>
          )}
          {error && <div className="text-red-500">{error}</div>}

          {!loading &&
            !error &&
            (products.length === 0 ? (
              <div className="col-span-full text-center py-8 text-gray-500">
                No Products Found
              </div>
            ) : (
              sortProducts(products).map((product) => (
                <div
                  key={product.permalink}
                  className="w-full flex justify-center lg:block transition-transform duration-300 hover:-translate-y-2"
                >
                  <ProductCard
                    name={product.name}
                    description={product.description}
                    price={product.price}
                    promotionalPrice={product.promotionalPrice}
                    imageUrl={product.imageUrls[0]}
                    ratings={product.ratings}
                    permalink={product.permalink}
                  />
                </div>
              ))
            ))}
        </div>
      </div>
    </div>
  );
}

export default Clothing;
