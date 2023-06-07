import React from "react";

const ClassCard = ({ classItem }) => {
  console.log(classItem);
  const {
    availableSeats,
    className,
    classImage,
    enrolled,
    instructorEmail,
    instructorName,
    price,
  } = classItem || {};
  return (
    <div className="card border-2 bg-base-100 shadow-xl">
      <figure className="">
        <img src={classImage} alt="Shoes" className="rounded-xl rounded-b-none h-64 w-full" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{className}</h2>
        <p>Enrolled: {enrolled}</p>
        <p>Available Seats: {availableSeats}</p>
        <p>Instructor Name: {instructorName}</p>

        <div className=" border-t-2 pt-3 flex items-center w-full">
          <button className="btn text-white hover:text-slate-900 bg-[#065C97]">Buy Now</button>
          <p className="text-right text-2xl font-bold ">${price}</p>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
