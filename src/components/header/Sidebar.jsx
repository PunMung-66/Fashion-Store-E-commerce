import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  genClothingList,
  navlist,
  secondaryNavlist,
  tertiaryNavlist,
} from "./navlist";
import Arrow from "../Icon/Arrow";
import { useCollectionContext } from "../../context/CollectionContextProvider";

function Sidebar({ isShow, onClick }) {
  const { possibleCollectionList } = useCollectionContext();
  const [activeMenu, setActiveMenu] = React.useState("primary");
  const [selectedCategory, setSelectedCategory] = React.useState(null);
  const [selectedCollection, setSelectedCollection] = React.useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const [isCollectionOpen, setIsCollectionOpen] = useState(false);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setActiveMenu("secondary");
    onClick();
    navigate(genClothingList(`${category.path}`));
  };

  const handleCollectionClick = (collection) => {
    const currentPath = location.pathname;
    const pathSegments = currentPath.split("/clothing/");

    // Remove any existing collection from the path
    let basePath = pathSegments[1] || "";
    basePath = basePath.split("&")[0]; // Keep only the category part

    // Create new path with only the new collection
    const newPath = basePath
      ? `${basePath}&${collection.path}`
      : collection.path;

    navigate(genClothingList(newPath));
    onClick?.();
  };

  const handleBack = () => {
    if (activeMenu === "tertiary") {
      setActiveMenu("secondary");
      setSelectedCollection(null);
    } else if (activeMenu === "secondary") {
      setActiveMenu("primary");
      setSelectedCategory(null);
    }
  };

  const handleHomeClick = () => {
    navigate("/");
    onClick(); // Close sidebar after navigation
  };

  const getCollectionsByCategory = (categoryPath) => {
    if (!categoryPath) return [];
    return possibleCollectionList;
  };

  return (
    <aside
      className={`fixed inset-0 flex transition-all duration-300 z-20 ${
        isShow ? "bg-black/50" : "bg-black/0 pointer-events-none"
      }`}
    >
      <div
        className={`bg-white w-80 pt-5 rounded-r-2xl transition-transform duration-300 ease-out
        ${isShow ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="h-full relative overflow-hidden">
          {/* Primary Navigation */}
          <nav
            className={`absolute w-full transition-transform duration-300 ${
              activeMenu !== "primary" ? "-translate-x-full" : ""
            }`}
          >
            <button
              className="font-bold capitalize flex gap-8 items-center w-full px-4 h-12 text-lg"
              onClick={handleHomeClick}
            >
              <span className="text-lg ml-4">home</span>
            </button>
            <ul className="flex flex-col gap-2 text-lg font-semibold px-8 capitalize">
              {navlist.map((category) => (
                <li className="w-64 flex items-center h-12" key={category.path}>
                  <button
                    onClick={() => handleCategoryClick(category)}
                    className="w-full h-full text-start capitalize"
                  >
                    {category.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Secondary Navigation */}
          <nav
            className={`absolute w-full transition-transform duration-300 ${
              activeMenu === "secondary" ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <button
              className="font-bold capitalize flex gap-8 items-center w-full h-12 border-b border-secondary-300 text-2xl"
              onClick={handleBack}
            >
              <Arrow direction="left" />
              {selectedCategory?.label}
            </button>
            <ul className="flex flex-col gap-2 text-lg font-semibold px-8 capitalize">
              {/* Main Categories */}
              {secondaryNavlist(selectedCategory?.label)?.map((item) => (
                <li key={item.path} className="listitem">
                  <Link
                    className={`flex w-64 h-12 items-center justify-between font-normal ${
                      location.pathname.split("&")[0] ===
                        genClothingList(item.path) ||
                      location.pathname.split("&")[0].split("/clothing/")[1] ===
                        item.path
                        ? "bg-[#DEF81C]"
                        : ""
                    }`}
                    to={genClothingList(item.path)}
                    onClick={onClick}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}

              {/* Collections Section */}
              <li className="mt-4">
                <button
                  className="flex w-full items-center justify-between text-lg font-semibold mb-2"
                  onClick={() => setIsCollectionOpen(!isCollectionOpen)}
                >
                  <span>Collections</span>
                  <svg
                    className={`fill-current h-4 w-4 transform transition-transform duration-200 ${
                      isCollectionOpen ? "rotate-180" : ""
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                  </svg>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-200 ${
                    isCollectionOpen ? "max-h-[500px]" : "max-h-0"
                  }`}
                >
                  {getCollectionsByCategory(selectedCategory?.path).map(
                    (collection) => (
                      <button
                        key={collection.path}
                        className={`flex w-64 h-12 items-center font-normal ${
                          location.pathname.includes(`&${collection.path}`)
                            ? "bg-[#DEF81C]"
                            : ""
                        }`}
                        onClick={() => handleCollectionClick(collection)}
                      >
                        {collection.label}
                      </button>
                    )
                  )}
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <button
        className="flex-1 h-full md:hidden"
        onClick={onClick}
        aria-label="Close sidebar"
      />
    </aside>
  );
}

export default Sidebar;
