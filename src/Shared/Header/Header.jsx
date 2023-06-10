import React, { useState } from "react";
import { FaBars, FaSignOutAlt } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import useCart from "../../Hooks/useCart";
import { SiGamejolt } from "react-icons/si";
import {RxCross2} from "react-icons/rx"
import useAdmin from "../../Hooks/useAdmin";
import useInstructor from "../../Hooks/useInstructor";

const Header = () => {
  const [isShowNav, setShowNav] = useState(false);
  const { user, LogOut } = useAuth();
  const [carts] = useCart();

  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();

  const handleLogOut = () => {
    LogOut()
      .then(() => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Log Out Success",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const navItems = (
    <>
      <li>
        <NavLink to="/" className="bg-transparent text-lg font-medium md:text-black">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/instructors" className="bg-transparent text-lg font-medium md:text-black">
          Instructors
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/classes"
          className="bg-transparent text-lg font-medium md:text-black"
        >
          Classes
        </NavLink>
      </li>
      {user ? (
        <>
          <li>
            <NavLink
              to="/dashboard"
              className="bg-transparent text-lg font-medium md:text-black"
            >
              Dashboard
            </NavLink>
          </li>

          {
            isAdmin || isInstructor && <li>
            <div className="bg-gray-900 text-white ">
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
                  <span className="badge font-semibold text-lg badge-md indicator-item">
                    {carts.length || 0}
                  </span>
                </div>
              </div>
            </li>
          }
          <li>
            <div>
              <label className="btn btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user?.photoURL} />
                </div>
              </label>
            </div>
          </li>
          <li>
            <button onClick={handleLogOut} className=" btn-md bg-[#313641] py-1 text-white hover:text-slate-800">
              signOut <FaSignOutAlt></FaSignOutAlt>
            </button>
          </li>
        </>
      ) : (
        <>
          <li>
            <NavLink
              to="/login"
              className="bg-transparent text-lg font-medium md:text-black"
            >
              Sign In
            </NavLink>
          </li>
        </>
      )}
    </>
  );


  // #313641

  return (
    <div className="navbar md:py-0 py-5 items-start md:items-center flex-col md:flex-row container bg-base-100">
      <div className="flex-1 flex justify-between items-center w-full">
        <Link to="/" className="btn p-0 btn-ghost normal-case font-mono text-xl  md:text-2xl">
          <SiGamejolt className="md:text-5xl"></SiGamejolt>
          GameOnSummer
        </Link>
        <div className="md:hidden block">
          <button onClick={() => setShowNav(!isShowNav)} className="text-2xl">
           
           {
            isShowNav ? <RxCross2></RxCross2> : 

            <FaBars></FaBars>
           }
          </button>
        </div>
      </div>
      <div className="flex-none">
        <ul
          className={`menu md:static py-8 md:py-4 md:w-auto w-1/2 h-screen md:h-auto absolute z-50 top-20 bg-white items-center duration-300 md:menu-horizontal px-1 ${
            isShowNav ? "left-0" : "-left-96"
          }`}
        >
          {navItems}
        </ul>


      </div>
    </div>
  );
};

export default Header;
