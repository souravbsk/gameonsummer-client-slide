import axios from "axios";
import React, { useEffect, useState } from "react";
import ClassCard from "../../../Components/ClassCard/ClassCard";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { PushSpinner } from "react-spinners-kit";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { useSpring, animated } from '@react-spring/web'
const PopularClasses = () => {


  const { data: classes, isLoading: isClassLoading } = useQuery(
    ["popularsClasses"],
    async () => {
      const res = await axios.get("https://summer-camp-server-one.vercel.app/topclasses");
      return res.data;
    }
  );


  const springs = useSpring({
    from: { y: 100 },
    to: { y: 0 },
  })



  return (
    <animated.div style={{reverse:true,...springs}} className="mt-8 md:mt-32 container">
      <div>
        <SectionTitle title="Popular Classes"></SectionTitle>
      </div>
      <div className="flex items-center justify-center">
        <PushSpinner size={30} color="#6772E5" loading={isClassLoading} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {classes?.map((classItem) => (
          <ClassCard key={classItem?._id} classItem={classItem}></ClassCard>
        ))}
      </div>
      <div className="text-center mt-12">
        <Link to="/classes">
          {" "}
          <button className="btn hover:text-slate-900 bg-[#75d5e3] text-white">
            Explore More Classes
          </button>
        </Link>
      </div>
    </animated.div>
  );
};

////#75d5e3
//#75d5e3
export default PopularClasses;
