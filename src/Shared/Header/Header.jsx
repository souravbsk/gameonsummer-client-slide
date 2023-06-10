import React, { useContext, useState } from "react";
import { FaBars, FaChalkboardTeacher, FaHome, FaMoon, FaSignOutAlt, FaSun, FaUser } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import useCart from "../../Hooks/useCart";
import { SiGamejolt } from "react-icons/si";
import { RxCross2 } from "react-icons/rx";
import useAdmin from "../../Hooks/useAdmin";
import useInstructor from "../../Hooks/useInstructor";
import { ThemeMoodContext } from "../../Providers/ThemeProvider";
import useStudent from "../../Hooks/useStudent";
import {GiTeacher} from "react-icons/gi";
import {AiFillDashboard} from "react-icons/ai"

const Header = () => {
  const [isShowNav, setShowNav] = useState(false);
  const { user, LogOut } = useAuth();
  const [carts] = useCart();
  const { Dark, setDark } = useContext(ThemeMoodContext);
  console.log("theme", Dark);

  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  const [isStudent] = useStudent();

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
        <NavLink to="/" className="bg-transparent  text-lg ">
         <FaHome></FaHome> Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/instructors" className="bg-transparent text-lg  ">
      <GiTeacher></GiTeacher>   Instructors
        </NavLink>
      </li>

      <li>
       <NavLink to="/classes" className="bg-transparent text-lg ">
       <FaChalkboardTeacher></FaChalkboardTeacher>    Classes
        </NavLink>
      </li>
      {user ? (
        <>
          <li>
            <NavLink to="/dashboard" className="bg-transparent text-lg  ">
            <AiFillDashboard></AiFillDashboard>  Dashboard
            </NavLink>
          </li>

          {  isStudent && (
              <li>
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
            )}
          <li className="hidden md:block">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user?.photoURL} />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu  top-10 -left-0 md:mt-10 menu-sm dropdown-content p-2 shadow bg-base-100 rounded-box "
              >
                <li>
                  <button
                    onClick={handleLogOut}
                    className={`btn-sm text-lg ${
                      Dark
                        ? "bg-slate-800 hover:text-slate-900"
                        : "bg-[#75d5e3]"
                    }  flex text-white hover:text-slate-800`}
                  >
                    <FaSignOutAlt></FaSignOutAlt>
                  </button>
                </li>
              </ul>
            </div>
          </li>
        </>
      ) : (
        <>
          <li  className="hidden md:block">
            <NavLink to="/login" className="bg-transparent text-lg">
             <FaUser></FaUser> Sign In
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  // #75d5e3

  return (
    <div
      className={`fixed rounded-b-2xl top-0 z-50 left-0 right-0 shadow-xl ${
        Dark ? "bg-[#1D232A]" : "bg-white "
      }`}
    >
      <div className="navbar bg-none  md:py-0 py-5 items-start md:items-center flex-col md:flex-row container ">
        <div className="flex-1 flex justify-between items-center w-full">
          <div className="md:hidden block">
            <button
              onClick={() => setShowNav(!isShowNav)}
              className="text-2xl bg-[#75D5E3]"
            >
              {isShowNav ? <RxCross2></RxCross2> : <FaBars></FaBars>}
            </button>
          </div>
          <Link
            to="/"
            className={`btn p-0 btn-ghost normal-case font-mono text-xl  md:text-2xl ${
              Dark && "text-white"
            }`}
          >
            <SiGamejolt className="md:text-5xl"></SiGamejolt>
            GameOnSummer
          </Link>
          <ul className="md:hidden block">
            <li>
              <button
                className={` fixed top-40  right-5 shadow-2xl p-3 mt-0 ml-5 rounded-full ${
                  Dark
                    ? "text-slate-800 bg-yellow-50"
                    : " bg-slate-800 text-yellow-50"
                }`}
                onClick={() => setDark(!Dark)}
              >
                {Dark ? <FaSun></FaSun> : <FaMoon></FaMoon>}
              </button>

              <li>

                {
                  user ? 
                  <div className="dropdown dropdown-end">
                  <label tabIndex={0} className="btn btn-circle avatar">
                    <div className="w-10 rounded-full">
                      <img src={user?.photoURL} />
                    </div>
                  </label>
                  <ul
                    tabIndex={0}
                    className="menu  top-16 -left-15 md:mt-10 menu-sm dropdown-content p-2 shadow bg-base-100 rounded-box "
                  >
                    <li>
                      <a className="justify-between">
                        Profile
                        <span className="badge">New</span>
                      </a>
                    </li>
                    <li>
                      <button
                        onClick={handleLogOut}
                        className={`btn-sm text-lg ${
                          Dark
                            ? "bg-slate-800 hover:text-slate-900"
                            : "bg-[#75d5e3]"
                        }  flex text-white hover:text-slate-800`}
                      >
                        <FaSignOutAlt></FaSignOutAlt>
                      </button>
                    </li>
                  </ul>
                </div>
                  : 



           
            <NavLink to="/login" className={`bg-transparent  rounded-full btn btn-md font-medium text-sm ${Dark && "text-white hover:text-black" }`}>
              <FaUser></FaUser>
            </NavLink>
       
                }
                
              </li>
            </li>
          </ul>
        </div>
        <div className="flex-none">
          <ul
            className={`menu md:static  py-8 md:py-4 md:w-auto w-1/2 h-screen md:h-auto absolute z-50 top-20  md:items-center duration-300 md:menu-horizontal px-1 ${
              Dark
                ? "text-white bg-[#1D232A] md:bg-transparent "
                : "text-slate-800 bg-white md:bg-transparent "
            }    ${isShowNav ? "left-0" : "-left-96"}`}
          >
            {navItems}
          </ul>
        </div>
        <ul className="hidden md:block">
          <li>
            <button
              className={`p-2    mt-0 ml-3 rounded-full ${
                Dark
                  ? "text-slate-800 bg-yellow-100"
                  : " bg-slate-800 text-yellow-100"
              }`}
              onClick={() => setDark(!Dark)}
            >
              {Dark ? <FaSun></FaSun> : <FaMoon></FaMoon>}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

//#F97316

//#75d5e3
