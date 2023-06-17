import React, { useContext } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Rating } from "@smastrom/react-rating";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";



// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";
import { ThemeMoodContext } from "../../../Providers/ThemeProvider";

const Testimonial = () => {
    const {Dark} = useContext(ThemeMoodContext)
  return (
    <div className="container  mt-8 md:mt-32">
      <div className="pb-8">
        <SectionTitle title="Student's Review"></SectionTitle>
        <div >


        <Swiper
       slidesPerView={1}
       spaceBetween={10}
       breakpoints={{
         640: {
           slidesPerView: 2,
           spaceBetween: 20,
         },
        
       }}
       loop={true}
          navigation={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
       modules={[Navigation,Autoplay]}
       className="mySwiper"
      >
        <SwiperSlide>
        <div className=" p-10 h-[360px] border shadow-3xl rounded-3xl">
            <div className="flex flex-col space-y-3 items-center justify-center">
              <div className="avatar">
                <div className="w-16  rounded-full">
                  <img src="https://i.ibb.co/FsDvqfK/Untitled-design.png" />
                </div>
              </div>
              <div className={`text-center ${Dark ? "text-[#A6ADBA]" : "text-[#1D232A]"} space-y-3`}>
                <h3 className="text-2xl font-semibold">Sourav</h3>
                <p >
                I had an absolute blast at the Play course by gameonsummer. The variety of games and activities catered to all interests, and I discovered new hobbies I never thought I would enjoy. The instructors were knowledgeable, and their enthusiasm was contagious. It was the highlight of my summer
                </p>
                <div className="flex items-center justify-center">
                  <Rating
                    style={{ maxWidth: 100 }}
                    value={5}
                    readOnly
                  />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className=" p-10 h-[360px] border shadow-3xl rounded-3xl">
            <div className="flex flex-col space-y-3 items-center justify-center">
              <div className="avatar">
                <div className="w-16  rounded-full">
                  <img src="https://i.ibb.co/xMMfnCm/jackie-hutchinson-lavv-Og0i90o-unsplash-1.jpg" />
                </div>
              </div>
              <div className={`text-center ${Dark ? "text-[#A6ADBA]" : "text-[#1D232A]"} space-y-3`}>
                <h3 className="text-2xl font-semibold">Alexa</h3>
                <p >
                I highly recommend game on summer Play course for anyone looking to have a blast during their summer break. The course was well-structured, and the instructors were energetic and engaging. From outdoor sports to indoor games, there was never a dull moment. It was the best summer vacation experience!
                </p>
                <div className="flex items-center justify-center">
                  <Rating
                    style={{ maxWidth: 100 }}
                    value={5}
                    readOnly
                  />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className=" p-10 h-[360px] border shadow-3xl rounded-3xl">
            <div className="flex flex-col space-y-3 items-center justify-center">
              <div className="avatar">
                <div className="w-16  rounded-full">
                  <img src="https://i.ibb.co/7CkDk44/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction-1.jpg" />
                </div>
              </div>
              <div className={`text-center ${Dark ? "text-[#A6ADBA]" : "text-[#1D232A]"} space-y-3`}>
                <h3 className="text-2xl font-semibold">Emily</h3>
                <p >
                "Enrolling in gameonsummer Play course was the best decision I made this summer. Not only did I get to have fun and play games, but I also learned valuable teamwork and leadership skills. The instructors were friendly and supportive, and the course had a perfect balance of structured activities and free play. I can't wait to come back next year!"
                </p>
                <div className="flex items-center justify-center">
                  <Rating
                    style={{ maxWidth: 100 }}
                    value={4.5}
                    readOnly
                  />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className=" p-10 h-[360px] border shadow-3xl rounded-3xl">
            <div className="flex flex-col space-y-3 items-center justify-center">
              <div className="avatar">
                <div className="w-16  rounded-full">
                  <img src="https://i.ibb.co/HtMBQ1N/indoor-shot-beautiful-happy-african-american-woman-smiling-cheerfully-keeping-her-arms-folded-relaxi.jpg" />
                </div>
              </div>
              <div className={`text-center ${Dark ? "text-[#A6ADBA]" : "text-[#1D232A]"} space-y-3`}>
                <h3 className="text-2xl font-semibold">Sarah</h3>
                <p >
                  I had an incredible time at the summer vacation course on Play
                  offered by gameonsummer. The activities were so much
                  fun, and the instructors were amazing. I learned new games,
                  made new friends, and created unforgettable memories. I can't
                  wait to join again next summer
                </p>
                <div className="flex items-center justify-center">
                  <Rating
                    style={{ maxWidth: 100 }}
                    value={5}
                    readOnly
                  />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        
      </Swiper>




          
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
