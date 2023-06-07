import React from "react";
import { FaCartPlus, FaThList, FaUser } from "react-icons/fa";
import { SiGamejolt } from "react-icons/si";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import {FiLogOut} from "react-icons/fi"
import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";
const DashBoard = () => {
    const {LogOut} = useAuth();
    const navigate =useNavigate();

    //logout 
    const handleLogOut = () => {
        LogOut()
        .then((res) => {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Your work has been saved',
                showConfirmButton: false,
                timer: 1500
            })
            navigate("/login")
        })
        .catch((err) =>{
            console.log(err.message);
        })
    }

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
    <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 space-y-2 w-80 h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          <li>
            <NavLink className=" bg-none hover:text-slate-950  btn-ghost normal-case font-mono  text-2xl">
              <SiGamejolt className="text-3xl"></SiGamejolt>
              GameOnSummer
            </NavLink>
          </li>
          <li>
            <NavLink to="/myclass" className="bg-transparent text-slate-950 text-lg font-semibold">
              {" "}
              <FaCartPlus></FaCartPlus> My Classes
            </NavLink>
          </li>
          
          <li>
            <NavLink className="bg-transparent text-slate-950 text-lg font-semibold">
              <FaThList></FaThList> Enrolled Classes
            </NavLink>
          </li>
          <li>
            <NavLink className="bg-transparent text-slate-950 text-lg font-semibold">
              <FaUser></FaUser> Profile
            </NavLink>
          </li>
          <li>
            <button onClick={handleLogOut} className="bg-transparent text-slate-950 text-lg font-semibold">
              <FiLogOut></FiLogOut> LogOut
            </button>
          </li>

          {/* _____________________________ Global item _____________________________ */}
          <div className="divider"></div>

          <li>
            <NavLink className="bg-transparent text-lg font-medium md:text-black">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="bg-transparent text-lg font-medium md:text-black">
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
        </ul>
      </div>
    </div>
  );
};

export default DashBoard;
