import React, { useContext } from "react";
import {
  FaBars,
  FaCartPlus,
  FaCreditCard,
  FaHome,
  FaList,
  FaMoon,
  FaSun,
  FaThList,
  FaUser,
  FaUsers,
  FaVideo,
} from "react-icons/fa";
import { SiGamejolt } from "react-icons/si";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import useAuth from "../Hooks/useAuth";
import { MdFormatListBulletedAdd } from "react-icons/md";
import Swal from "sweetalert2";
import useCart from "../Hooks/useCart";
import useAdmin from "../Hooks/useAdmin";
import useInstructor from "../Hooks/useInstructor";
import useStudent from "../Hooks/useStudent";
import { ThemeMoodContext } from "../Providers/ThemeProvider";

const DashBoard = () => {
  const { Dark, setDark } = useContext(ThemeMoodContext);
  const [carts, refetch] = useCart();
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  const [isStudent] = useStudent();
  console.log(isStudent);

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className={` drawer-content h-screen  overflow-auto ${Dark && "bg-[#1D232A] "}`}>
        <label
          htmlFor="my-drawer-2"
          className="btn text-white bg-[#6772e5] m-5 drawer-button lg:hidden"
        >
          <p className="">
            {" "}
            <FaBars></FaBars>
          </p>
        </label>
        <div className="absolute top-8 right-10 ">
        <button
              className={`p-2    mt-0 ml-3 rounded-full ${
                Dark
                  ? "text-slate-800 bg-yellow-100"
                  : " bg-slate-800 text-yellow-100"
              }`}
              onClick={() => setDark(!Dark)}
            >
              {Dark ?  <FaSun ></FaSun> : <FaMoon></FaMoon>}
            </button>
        </div>
        <div>
          <Outlet></Outlet>
        </div>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul
          className={`menu ${
            Dark ? "bg-[#6772e5]" : "bg-[#1D232A]"
          } p-4 space-y-2 max-w-full w-3/4 md:w-80 h-full  text-white`}
        >
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
          <div className={`divider ${Dark || "before:bg-gray-200 after:bg-gray-200 "}`}></div>

          {isAdmin && (
            <>
              <li>
                <NavLink
                  to="/dashboard/homeadmin"
                  className="bg-transparent  md:md:text-lg "
                >
                  <FaHome></FaHome> Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/manageclasses"
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
                <NavLink to="/dashboard/adminProfile" className="bg-transparent  md:text-lg ">
                  <FaUser></FaUser> Admin Profile
                </NavLink>
              </li>
            </>
          )}

          {isInstructor && (
            <>
              <li>
                <NavLink
                  to="/dashboard/homeinstructor"
                  className="bg-transparent  md:md:text-lg "
                >
                  <FaHome></FaHome> Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/addaclass"
                  className="bg-transparent  md:md:text-lg "
                >
                  <MdFormatListBulletedAdd></MdFormatListBulletedAdd> Add a
                  Class
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/dashboard/myClassList"
                  className="bg-transparent  md:text-lg "
                >
                  <FaList></FaList> My Class List
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/instructorProfile" className="bg-transparent  md:text-lg ">
                  <FaUser></FaUser> Instructor Profile
                </NavLink>
              </li>
            </>
          )}

          {
            //  _________________Students route link__________________
            isStudent && (
              <>
                <li>
                  <NavLink
                    to="/dashboard/homestudent"
                    className="bg-transparent  md:md:text-lg "
                  >
                    <FaHome></FaHome> Dashboard
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/myclass"
                    className="bg-transparent md:md:text-lg "
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
                  <NavLink
                    to="/dashboard/paymenthistory"
                    className="bg-transparent  md:text-lg "
                  >
                    <FaCreditCard></FaCreditCard> Payment History
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/StudentProfile" className="bg-transparent  md:text-lg ">
                    <FaUser></FaUser> My Profile
                  </NavLink>
                </li>
              </>
            )
          }

          {/* _____________________________ Global item _____________________________ */}
          <div className={`divider ${Dark || "before:bg-gray-200 after:bg-gray-200  "}`}></div>

          <li>
            <NavLink to="/" className="bg-transparent md:text-lg font-medium">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/instructors"
              className="bg-transparent md:text-lg font-medium"
            >
              Instructors
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/classes"
              className="bg-transparent md:text-lg font-medium"
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
