import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const navItems = (
    <>
      <li>
        <NavLink className="bg-transparent text-lg font-medium text-black">Home</NavLink>
      </li>
      <li>
        <NavLink className="bg-transparent text-lg font-medium text-black">Instructors</NavLink>
      </li>
      <li>
        <NavLink className="bg-transparent text-lg font-medium text-black">Classes</NavLink>
      </li>
      <li>
        <NavLink className="bg-transparent text-lg font-medium text-black">Dashboard</NavLink>
      </li>
      <li>
        <NavLink>
         
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item">8</span>
            </div>
        
        </NavLink>
      </li>
      <li>
        <div>
          <label className="btn  btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </label>
        </div>
      </li>
    </>
  );

  return (
    <div className="navbar container bg-base-100">
      <div className="flex-1">
        <NavLink className="btn btn-ghost normal-case font-mono  text-2xl">GameOnSummer</NavLink>
      </div>
      <div className="flex-none">
        <ul className="menu items-center menu-horizontal px-1">{navItems}</ul>
      </div>
    </div>
  );
};

export default Header;
