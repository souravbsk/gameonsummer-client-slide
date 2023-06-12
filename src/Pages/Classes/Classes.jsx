import React from "react";
import { ScrollRestoration, useLoaderData } from "react-router-dom";
import ClassCard from "../../Components/ClassCard/ClassCard";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import PageHelmet from "../../Components/PageHelmet/PageHelmet";
import { useSpring,animated } from "@react-spring/web";

const Classes = () => {
  const allClasses = useLoaderData();
  console.log(allClasses);

  const springs = useSpring({
    from: { y: 100 },
    to: { y: 0 },
  })

  return (
    <div className="container pt-32 pb-8 md:pb-32">
      <PageHelmet>Classes</PageHelmet>
      <div>
      <SectionTitle title="All Classes"></SectionTitle>
      </div>

      <animated.div style={{reverse:true,...springs}} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{
      allClasses.map(classItem => <ClassCard key={classItem._id} classItem={classItem}></ClassCard>)
      }</animated.div>
      <ScrollRestoration></ScrollRestoration>

    </div>
  );
};

export default Classes;
