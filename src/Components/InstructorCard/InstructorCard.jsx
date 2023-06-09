import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";

const InstructorCard = ({ instructor }) => {
  return (
    <div className="card border bg-base-100 shadow-xl">
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
         <Link to={`/instructorsClasses/${instructor._id}`}> <button className=" btn bg-[#065C97] text-white hover:text-slate-800 btn-md">See Classes</button></Link>
        </div>
      </div>
    </div>
  );
};

export default InstructorCard;
