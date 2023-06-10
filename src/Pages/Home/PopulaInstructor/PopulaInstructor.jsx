import React, { useContext } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import { PushSpinner } from "react-spinners-kit";
import axios from "axios";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination,Navigation, Autoplay } from "swiper";
import { Link } from "react-router-dom";
import { useSpring,animated } from "@react-spring/web";
import { ThemeMoodContext } from "../../../Providers/ThemeProvider";



const PopulaInstructor = () => {

  const {Dark} = useContext(ThemeMoodContext)

  const { data: Instructors, isLoading: isInstructor } = useQuery(
    ["popularsInstructor"],
    async () => {
      const res = await axios.get("http://localhost:5000/topInstructor");
      return res.data;
    }
  );



  console.log(Instructors);
  const styles = useSpring({
    opacity: 1,
    transform: 'translateY(0)',
    from: { opacity: 0, transform: 'translateY(-100px)' },
    // You can customize the animation properties here, like duration and easing
  });
  return (
    <animated.div style={{...styles}} className="mt-8 md:mt-32 container">
      <div>
        <SectionTitle title="Popular Instructors"></SectionTitle>
      </div>
      <div className="flex items-center justify-center">
        <PushSpinner size={30} color="#6772E5" loading={isInstructor} />
      </div>

      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          loop={true}
          navigation={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Pagination,Navigation,Autoplay]}
          className="mySwiper"
        >
          {Instructors?.map((instructor) => (
            <SwiperSlide className="pb-8 " key={instructor._id}>
              <div className={`card border  shadow-xl ${Dark && "text-[#A6ADBA]"}`}>
                <figure className="px-10 pt-10">
                  <img 

                    src={instructor?.image}
                    alt="Shoes"
                    className="rounded-xl h-48 w-full"
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">{instructor?.name}</h2>
                  <p>Class Quantity: {instructor?.classQuantity}</p>
                  <p>Student: {instructor?.totalEnrolled}</p>
                  <div className="card-actions">
                  <Link to={`/instructorsClasses/${instructor._id}`}> <button className=" btn bg-[#75d5e3] text-white hover:text-slate-800 btn-md">See Classes</button></Link>

                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="text-center mt-12">
        <Link to="/instructors">
          {" "}
          <button className="btn hover:text-slate-900 bg-[#75d5e3] text-white">
            Explore More Instructors
          </button>
        </Link>
      </div>
    </animated.div>
  );
};

export default PopulaInstructor;
