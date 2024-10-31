import React from "react";
import Header from "../components/header/Header";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import GobalModal from "../components/GobalModal";
import { formatTitle } from "../utils/tittile";

function Layout() {
  const location = useLocation();
  React.useEffect(() => {
    const pathname = window.location.pathname;
    const subdirectories = pathname.split("/");
    if (subdirectories.includes("clothing")) {
      return;
    } else{
      const lastSubdirectory = subdirectories.pop();
      lastSubdirectory || subdirectories.pop();
      document.title = ` ${formatTitle(lastSubdirectory) || "WDB Home"}`;
    }
  }, [location.pathname]);

  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location.pathname]);
  return (
    <>
      <GobalModal />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
