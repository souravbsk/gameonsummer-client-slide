import React from "react";
import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import ClassCard from "../../Components/ClassCard/ClassCard";

const InstructorsClasses = () => {
  const instructorsData = useLoaderData();

  console.log(instructorsData);
  return (
    <div className="container mt-8">
      <div className="card flex-col md:flex-row border-2 overflow-hidden card-side bg-base-100 shadow-xl">
        <img className="md:w-5/12 w-full max-w-full" src={instructorsData?.user?.image} alt="Movie" />

        <div className="card-body">
          <h2 className="card-title text-xl md:text-4xl">{instructorsData?.user?.name}</h2>
          <p className="text-sm md:text-base font-semibold font-mono">Email: {instructorsData?.user?.email}</p>
          <p className="text-sm md:text-base font-semibold font-mono">Phone: {instructorsData?.user?.phone || "not found"}</p>
          <p className="text-sm md:text-base font-semibold font-mono">Total Student: {instructorsData?.totalEnrolled}</p>
          <p className="text-sm md:text-base font-semibold font-mono">Total Available: {instructorsData?.availableSeats}</p>
          <p className="text-sm md:text-base font-semibold font-mono">Class Quantity: {instructorsData?.classQuantity}</p>
          <p className="text-sm md:text-base font-semibold font-mono">Classes Name: {instructorsData?.ClassesName.map(item => <span className="badge md:text-xl px-3 py-3 mr-2 badge-secondary">{item}</span>) }</p>
        </div>
      </div>
      <div className="mt-12">
    <SectionTitle title={`${instructorsData?.user?.name} Classes`}></SectionTitle>
    <div className="grid gap-8 md:grid-cols-3">

        {
            instructorsData?.classes?.map(item =>  <ClassCard key={item._id} classItem={item}></ClassCard>
            )
        }
    </div>
      </div>
    </div>
  );
};

export default InstructorsClasses;
