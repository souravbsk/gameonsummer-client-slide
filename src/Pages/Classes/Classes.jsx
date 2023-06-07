import React from "react";
import { useLoaderData } from "react-router-dom";
import ClassCard from "../../Components/ClassCard/ClassCard";

const Classes = () => {
  const allClasses = useLoaderData();
  console.log(allClasses);
  return (
    <div className="container">
      <div>
        <h3 className="text-center text-4xl font-bold font-mono underline my-12">
          All Classes
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">{
      allClasses.map(classItem => <ClassCard key={classItem._id} classItem={classItem}></ClassCard>)
      }</div>
    </div>
  );
};

export default Classes;
