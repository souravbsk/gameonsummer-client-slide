import React from "react";
import HeroSlider from "../HeaoSlider/HeroSlider";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopulaInstructor from "../PopulaInstructor/PopulaInstructor";
import OurEvents from "../OurEvents/OurEvents";
import MailingList from "../MailingList/MailingList";
import Gallery from "../Gallery/Gallery";
import Testimonial from "../Testimonial/Testimonial";
const Home = () => {
  return (
    <div>
      <HeroSlider></HeroSlider>
      <PopularClasses></PopularClasses>
      <PopulaInstructor></PopulaInstructor>
      <Gallery></Gallery>
      <OurEvents></OurEvents>
      <Testimonial></Testimonial>
      <MailingList></MailingList>
    </div>
  );
};

export default Home;
