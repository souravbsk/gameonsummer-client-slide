import React from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
const Gallery = () => {
  const onBeforeSlide = (detail) => {
    const { index, prevIndex } = detail;
  };
  return (
    <div className="container  mt-8 md:mt-32">
      <div className="pb-8">
        <SectionTitle title="Our Gallery's"></SectionTitle>
        <div>
          <LightGallery
            onInit={onBeforeSlide}
            speed={500}
            plugins={[lgThumbnail, lgZoom]}
          >
            <a
              className=" overflow-hidden    shadow-xl w-full h-60 rounded-2xl"
              href="https://i.ibb.co/VDtPTK4/ocean-scene-with-people-having-fun-beach-1308-43808.jpg"
            >
              <img
                className="duration-300 hover:scale-125 w-full h-60 border object-cover"
                alt="img1"
                src="https://i.ibb.co/VDtPTK4/ocean-scene-with-people-having-fun-beach-1308-43808.jpg"
              />
            </a>
            <a
              className=" overflow-hidden    shadow-xl w-full h-60 rounded-2xl"
              href="https://i.ibb.co/hcDCz4c/image-3.jpg"
            >
              <img
                className="duration-300 hover:scale-125 w-full h-60 border object-cover"
                alt="img2"
                src="https://i.ibb.co/hcDCz4c/image-3.jpg"
              />
            </a>
            <a
              className=" overflow-hidden    shadow-xl w-full h-60 rounded-2xl"
              href="https://i.ibb.co/K0fhTBw/image-2.jpg"
            >
              <img
                className="duration-300 hover:scale-125 w-full h-60 border object-cover"
                alt="img3"
                src="https://i.ibb.co/K0fhTBw/image-2.jpg"
              />
            </a>
            <a
              className=" overflow-hidden    shadow-xl w-full h-60 rounded-2xl"
              href="https://i.ibb.co/NFTxrvB/children-playing-hopscotch-game-park-1308-104929-1.jpg"
            >
              <img
                className="duration-300 hover:scale-125 w-full h-60 border object-cover"
                alt="img4"
                src="https://i.ibb.co/NFTxrvB/children-playing-hopscotch-game-park-1308-104929-1.jpg"
              />
            </a>
            <a
              className=" overflow-hidden    shadow-xl w-full h-60 rounded-2xl"
              href="https://i.ibb.co/PmnnhLY/children-playing-hopscotch-game-park-1308-104929.jpg"
            >
              <img
                className="duration-300 hover:scale-125 w-full h-60 border object-cover"
                alt="img5"
                src="https://i.ibb.co/PmnnhLY/children-playing-hopscotch-game-park-1308-104929.jpg"
              />
            </a>
            <a
              className=" overflow-hidden    shadow-xl w-full h-60 rounded-2xl"
              href="https://i.ibb.co/5hsKcBG/kids-school-field-trip-1308-110659.jpg"
            >
              <img
                className="duration-300 hover:scale-125 w-full h-60 border object-cover"
                alt="img6"
                src="https://i.ibb.co/5hsKcBG/kids-school-field-trip-1308-110659.jpg"
              />
            </a>
            <a
              className=" overflow-hidden    shadow-xl w-full h-60 rounded-2xl"
              href="https://i.ibb.co/xJndx3K/people-doing-outdoor-activities-with-flat-design-23-2147864795.jpg"
            >
              <img
                className="duration-300 hover:scale-125 w-full h-60 border object-cover"
                alt="img7"
                src="https://i.ibb.co/xJndx3K/people-doing-outdoor-activities-with-flat-design-23-2147864795.jpg"
              />
            </a>
            <a
              className=" overflow-hidden    shadow-xl w-full h-60 rounded-2xl"
              href="https://i.ibb.co/N7wjM2m/kids-doing-physical-activity-1308-105299.jpg"
            >
              <img
                className="duration-300 hover:scale-125 w-full h-60 border object-cover"
                alt="img8"
                src="https://i.ibb.co/N7wjM2m/kids-doing-physical-activity-1308-105299.jpg"
              />
            </a>
            <a
              className=" overflow-hidden    shadow-xl w-full h-60 rounded-2xl"
              href="https://i.ibb.co/m5zSRG6/image-10.jpg"
            >
              <img
                className="duration-300 hover:scale-125 w-full h-60 border object-cover"
                alt="img9"
                src="https://i.ibb.co/m5zSRG6/image-10.jpg"
              />
            </a>
           
          </LightGallery>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
