import React from "react";
import HeroSlider from "../HeaoSlider/HeroSlider";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopulaInstructor from "../PopulaInstructor/PopulaInstructor";
import OurEvents from "../OurEvents/OurEvents";
const Home = () => {
  return (
    <div>
      <HeroSlider></HeroSlider>
      <PopularClasses></PopularClasses>
      <PopulaInstructor></PopulaInstructor>
      <OurEvents></OurEvents>
    </div>
  );
};

export default Home;
