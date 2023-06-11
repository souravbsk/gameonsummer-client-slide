import React from "react";
import HeroSlider from "../HeaoSlider/HeroSlider";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopulaInstructor from "../PopulaInstructor/PopulaInstructor";
import OurEvents from "../OurEvents/OurEvents";
import MailingList from "../MailingList/MailingList";
const Home = () => {
  return (
    <div>
      <HeroSlider></HeroSlider>
      <PopularClasses></PopularClasses>
      <PopulaInstructor></PopulaInstructor>
      <OurEvents></OurEvents>
      <MailingList></MailingList>
    </div>
  );
};

export default Home;
