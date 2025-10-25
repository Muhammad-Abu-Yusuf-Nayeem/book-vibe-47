import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-green-600 font-bold border border-green-700"
              : "text-gray-700"
          }
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/listedBooks"
          className={({ isActive }) =>
            isActive
              ? "text-green-600 font-bold border border-green-700"
              : "text-gray-700"
          }
        >
          Listed Books
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/pagesToRead"
          className={({ isActive }) =>
            isActive
              ? "text-green-600 font-bold border border-green-700"
              : "text-gray-700"
          }
        >
          Pages to Read
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-2xl font-bold" href="/">
          Book Vibe
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end gap-3">
        <a className="btn rounded-lg bg-green-500 text-white">Sign In</a>
        <a className="btn rounded-lg bg-cyan-500 text-white">Sign Up</a>
      </div>
    </div>
  );
};

export default Navbar;
