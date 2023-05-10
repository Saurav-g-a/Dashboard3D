/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";

// components

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  function isAuthenticated() {
    const token = localStorage.getItem("Token");
    // verify the token
    if (token) {
      // return true if the token is valid
      return true;
    } else {
      // return false if the token is invalid or not present
      return false;
    }
  }
  const authenticated = isAuthenticated();
  return (
    <>
      <nav className="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              className="text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
              to={authenticated ? "/admin/dashboard" : "/login"}
            >
              3D React
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="text-white fas fa-bars"></i>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
