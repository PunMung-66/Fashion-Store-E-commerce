import Header from "../components/header/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import React from "react";

function ErrorPage() {
  React.useEffect(() => {
    document.title = "WDB | 404 Not Found";
  }, [window.location.pathname]);
  return (
    <>
      <Header />

      <div className="min-h-screen flex items-center justify-center p-6">
        <div className="max-w-2xl w-full text-center">
          <div className="relative">
            <h1 className="text-[180px] font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#DFF547] to-[#a8bc35] leading-tight select-none md:text-[220px]">
              404
            </h1>
          </div>

          <h2 className="text-3xl font-bold text-[#DFF547] mb-4 -mt-8">
            Page Not Found
          </h2>
          <p className="text-gray-300 mb-8 max-w-md mx-auto">
            The page you're looking for doesn’t exist or may have been moved.
            Try heading back to the homepage.
          </p>
          <Link
            to="/"
            className="btn btn-primary p-3 rounded-sm bg-secondary-900 text-white hover:bg-primary-500 hover:text-secondary-900"
          >
            Go to Homepage
          </Link>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ErrorPage;
