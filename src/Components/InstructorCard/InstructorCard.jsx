import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeMoodContext } from "../../Providers/ThemeProvider";

const InstructorCard = ({ instructor }) => {
  const {Dark} = useContext(ThemeMoodContext)
  return (
    <div className={`card border  shadow-xl ${Dark && "text-[#A6ADBA]"} `}>
      <figure>
        <img
          src={instructor?.image}
          alt="Shoes "
          className="w-full h-56"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
        {instructor?.name}
          <div className="badge text-white badge-info">{instructor?.role}</div>
        </h2>
        <p>Classes: {instructor?.classQuantity}</p>
        <p>Email: {instructor?.email}</p>
        <p>Students: {instructor?.totalEnrolled}</p>
        <p>{instructor?.ClassName.map(item => <span className="badge text-white badge-outline badge-secondary">{item}  </span>)  || "not available"}</p>
        <div className="card-actions justify-end">
         <Link to={`/instructorsClasses/${instructor._id}`}> <button className=" btn bg-[#75d5e3] text-white hover:text-slate-800 btn-md">See Classes</button></Link>
        </div>
      </div>
    </div>
  );
};

export default InstructorCard;
