import React from "react";
import { FaBars, FaCartPlus, FaThList, FaUser, FaUsers, FaVideo } from "react-icons/fa";
import { SiGamejolt } from "react-icons/si";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";
import useCart from "../Hooks/useCart";
import useAdmin from "../Hooks/useAdmin";
import useInstructor from "../Hooks/useInstructor";
const DashBoard = () => {
  const [carts, refetch] = useCart();

  const [isAdmin] = useAdmin();
  console.log(isAdmin);
  const isInstructor = useInstructor();
  console.log(isInstructor);

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content  overflow-auto ">
        <label
          htmlFor="my-drawer-2"
          className="btn text-white bg-[#6772e5] m-5 drawer-button lg:hidden"
        >
          <p className="">
            {" "}
            <FaBars></FaBars>
          </p>
        </label>

        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu bg-[#6772e5] p-4 space-y-2 max-w-full w-3/4 md:w-80 h-full  text-white">
          {/* Sidebar content here */}
          <li>
            <NavLink
              to="/"
              className=" bg-none  btn-ghost normal-case font-mono  text-lg md:text-2xl"
            >
              <SiGamejolt className="md:text-3xl"></SiGamejolt>
              GameOnSummer
            </NavLink>
          </li>
          <div className="divider"></div>

          {/* Students route link_____________________________________  */}
          {isAdmin ? 
            <>
            <li>
            <NavLink
              to="/"
              className="bg-transparent  md:md:text-lg "
            >
             <FaVideo></FaVideo> ManageClasses
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/dashboard/manageusers"
              className="bg-transparent  md:text-lg "
            >
              <FaUsers></FaUsers> Manage Users
            </NavLink>
          </li>
          <li>
            <NavLink className="bg-transparent  md:text-lg ">
              <FaUser></FaUser> Admin Profile
            </NavLink>
          </li>
            </>
            :
            <>
            <li>
            <NavLink
              to="/dashboard/myclass"
              className="bg-transparent  md:md:text-lg "
            >
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
                <span className="badge  md:text-lg badge-md indicator-item">
                  {carts.length || 0}
                </span>
              </div>
              {"  "}My Classes
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/dashboard/enrollClasses"
              className="bg-transparent  md:text-lg "
            >
              <FaThList></FaThList> Enrolled Classes
            </NavLink>
          </li>
          <li>
            <NavLink className="bg-transparent  md:text-lg ">
              <FaUser></FaUser> Profile
            </NavLink>
          </li>
            </>
          }
          
          {/* Students route link_____________________________________  */}

          {/* _____________________________ Global item _____________________________ */}
          <div className="divider"></div>

          <li>
            <NavLink
              to="/"
              className="bg-transparent md:text-lg font-medium md:text-black"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="bg-transparent md:text-lg font-medium md:text-black">
              Instructors
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/classes"
              className="bg-transparent md:text-lg font-medium md:text-black"
            >
              Classes
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashBoard;
