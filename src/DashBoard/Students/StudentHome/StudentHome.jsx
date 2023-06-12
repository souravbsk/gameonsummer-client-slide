import React, { useContext, useEffect, useState } from "react";
import PageHelmet from "../../../Components/PageHelmet/PageHelmet";
import useAuth from "../../../Hooks/useAuth";
import { ThemeMoodContext } from "../../../Providers/ThemeProvider";
import { FaGraduationCap, FaMoneyBill, FaShoppingCart } from "react-icons/fa";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
const StudentHome = () => {
    const { Dark } = useContext(ThemeMoodContext);
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();
  
    const [StackData, setData] = useState([]);
    useEffect(() => {
        axiosSecure.get(`/studentStack/${user?.email}`)
        .then((dataStack) => {
            setData(dataStack.data)
        }
        )
    }, [user]);
  
  return (
    <div className="p-5 md:p-16">
      <PageHelmet>DashBoard</PageHelmet>
      <h1 className={`text-2xl mb-8 font-semibold ${Dark && "text-white"}`}>
        Welcome, {user?.displayName}{" "}
      </h1>

      <div>
        <div className={`stats border py-6 stats-vertical w-full lg:stats-horizontal shadow ${!Dark && "bg-[#1E293B] text-white" }`}>
          <div className="stat">
            <div className={`stat-title text-xl font-bold ${!Dark && "text-white"}`}>Cart Items</div>
            <div className="flex items-center gap-5">
              <FaShoppingCart className="text-4xl text-[#6772E5]"></FaShoppingCart>
              <div className="stat-value">{StackData?.quantity}</div>
            </div>
          </div>

          <div className="stat">
            <div className={`stat-title text-xl font-bold ${!Dark && "text-white"}`}>Money</div>
            <div className="flex items-center gap-5">
              <FaMoneyBill className="text-4xl text-[#6772E5]"></FaMoneyBill>
              <div className="stat-value">${StackData?.totalPrice}</div>
            </div>
          </div>

          <div className="stat">
            <div className={`stat-title text-xl font-bold ${!Dark && "text-white"}`}>Enroll Class</div>
            <div className="flex items-center gap-5">
              <FaGraduationCap className="text-4xl text-[#6772E5]"></FaGraduationCap>
              <div className="stat-value">{StackData?.totalEnroll}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentHome;
