import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
const HeroSlider = () => {
  return (
    <div className="">
      <Swiper
        navigation={true}
        loop={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="hero bg-[url('https://i.ibb.co/DrcBx5d/Kids-club-background-01.jpg')] min-h-screen">
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-2xl">
                <p className="mb-5 badge">Children summer camp</p>
                <h1 className="mb-5 text-5xl font-bold">
                  {" "}
                  A Chance To Provide Formative Experiences
                </h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero bg-[url('https://i.ibb.co/8XgCf56/Soccer-club-background-05.jpg')] min-h-screen">
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-2xl">
                <p className="mb-5 badge">spend a great week with</p>
                <h1 className="mb-5 text-5xl font-bold">
                  {" "}
                  Hello summer children camp
                </h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSlider;
