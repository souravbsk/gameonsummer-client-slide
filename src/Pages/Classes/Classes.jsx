import React from "react";
import { ScrollRestoration, useLoaderData } from "react-router-dom";
import ClassCard from "../../Components/ClassCard/ClassCard";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";

const Classes = () => {
  const allClasses = useLoaderData();
  console.log(allClasses);
  return (
    <div className="container pt-32">
      <div>
      <SectionTitle title="All Classes"></SectionTitle>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">{
      allClasses.map(classItem => <ClassCard key={classItem._id} classItem={classItem}></ClassCard>)
      }</div>
      <ScrollRestoration></ScrollRestoration>

    </div>
  );
};

export default Classes;
