import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
const HeroSlider = () => {
  return (
    <div>
      <Swiper
        navigation={true}
        loop={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className=" md:px-36 px-3  flex items-center justify-end md:h-screen bg-center  bg-no-repeat h-56 bg-cover bg-[url('https://i.ibb.co/DrcBx5d/Kids-club-background-01.jpg')]">
            <div className="flex-1 md:block hidden"></div>
            <div className="flex-1 ">
              <p className="text-[#ffffff] text-right md:mb-4 font-semibold  md:text-2xl">
                Children summer camp
              </p>
              <h1 className="text-2xl md:text-6xl font-bold text-right text-white">
                A Chance To <br /> Provide Formative Experiences
              </h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" px-3 md:px-36  flex items-center justify-end md:h-screen bg-center  bg-no-repeat h-56 bg-cover bg-[url('https://i.ibb.co/8XgCf56/Soccer-club-background-05.jpg')]">
            <div className="flex-1">
              <p className="text-slate-700 md:mb-4 font-semibold md:text-2xl">
               spend a great week with
              </p>
              <h1 className="text-3xl md:text-6xl font-bold text-slate-700">
                Hello summer children camp
              </h1>
            </div>
            <div className="flex-1 md:block hidden"></div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSlider;
