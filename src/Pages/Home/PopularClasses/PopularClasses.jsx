import axios from "axios";
import React, { useEffect, useState } from "react";
import ClassCard from "../../../Components/ClassCard/ClassCard";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { PushSpinner } from "react-spinners-kit";

const PopularClasses = () => {
  // const [classes, setClasses] = useState([]);

  const { data: classes, isLoading: isClassLoading } = useQuery(
    ["popularsClasses"],
    async () => {
      const res = await axios.get("http://localhost:5000/topclasses");
      return res.data;
    }
  );
  // useEffect(() => {
  //   axios.get("http://localhost:5000/topclasses").then((res) => {
  //     setClasses(res.data);
  //   });
  // }, []);

  return (
    <div className="mt-32 container">
      <div>
        <h3 className="text-center text-4xl font-bold font-mono underline mb-12">
          Popular Classes
        </h3>
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
          <button className="btn hover:text-slate-900 bg-[#065C97] text-white">
            Explore More Classes
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PopularClasses;
