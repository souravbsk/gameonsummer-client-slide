import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { useSpring,animated } from "@react-spring/web";
const HeroSlider = () => {

  const springs = useSpring({
    from: { y: -100 },
    to: { y: 0 },
  })


  return (
    <div className="">
      <animated.div style={{...springs}} className="pt-16 ">
      <Swiper
        navigation={true}
        loop={true}
   
        modules={[Navigation]}
        className="mySwiper rounded-b-[15%] md:rounded-b-[20%]"
      >
        <SwiperSlide>
          <div className="hero  bg-[url('https://i.ibb.co/zQ8HHRj/beach-playground-with-happy-children-1308-114152.jpg')] h-[60vh] md:min-h-screen">
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-2xl">
                <p className="mb-5 badge">Children summer camp</p>
                <h1 className="mb-5 text-3xl md:text-5xl font-bold">
                  {" "}
                  A Chance To Provide Formative Experiences
                </h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero bg-[url('https://i.ibb.co/XLsQ2bX/image-7.jpg')] h-[60vh] md:min-h-screen">
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-2xl">
                <p className="mb-5 badge">spend a great week with</p>
                <h1 className="mb-5 text-3xl md:text-5xl font-bold">
                  {" "}
                  Hello summer children camp
                </h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero bg-[url('https://i.ibb.co/100x8DR/ocean-scene-with-people-having-fun-beach-1308-43808.jpg')] h-[60vh] md:min-h-screen">
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-2xl">
                <p className="mb-5 badge">Level Up Your Summer</p>
                <h1 className="mb-5 text-3xl md:text-5xl font-bold">
                  {" "}
                  Join Our Game Courses for Fun and Skill-building!
                </h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero bg-[url('https://i.ibb.co/vqQb9Pr/image-6.jpg')] h-[60vh] md:min-h-screen">
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-2xl">
                <p className="mb-5 badge">Unleash Your Inner Gamer</p>
                <h1 className="mb-5 text-3xl md:text-5xl font-bold">
                  {" "}
                  Dive into Our Summer Game Courses
                </h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero bg-[url('https://i.ibb.co/K9zk8GD/image-8.jpg')] h-[60vh] md:min-h-screen">
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-2xl">
                <p className="mb-5 badge">Escape Reality this Summer</p>
                <h1 className="mb-5 text-3xl md:text-5xl font-bold">
                  {" "}
                  Immerse Yourself in our Exciting Game Courses!
                </h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </animated.div>
    </div>
  );
};

export default HeroSlider;
