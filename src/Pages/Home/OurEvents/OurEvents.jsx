import React, { useContext } from "react";
import { FaClock, FaFootballBall, FaMapMarked } from "react-icons/fa";
import { MdOutlineEmojiEvents, MdSportsCricket } from "react-icons/md";
import { BiFootball } from "react-icons/bi";
import {TbSwimming} from "react-icons/tb"
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { ThemeMoodContext } from "../../../Providers/ThemeProvider";
const OurEvents = () => {
  const {Dark} = useContext(ThemeMoodContext)
  return (
    <div className="container  mt-8 md:mt-32">
      <div className="pb-8">
        <SectionTitle title="Our Events"></SectionTitle>
      </div>
      <div>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#75d5e3", color: `${Dark ? "#fff" : "#1D232A"  }` }}
            contentArrowStyle={{ borderRight: "7px solid  #75d5e3" }}
          
            iconStyle={{ background: `${Dark ? "#1D232A" : "#F97316"}`, color: "#fff" }}
            icon={<BiFootball />}
          >
            <h3 className="vertical-timeline-element-title">Football Match</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Independent Events
            </h4>

            <p className="flex items-center gap-2">
              <FaClock></FaClock> Nov 25 - Dec 5. Time: 12:00 pm - 5:00 pm
            </p>
            <p className="flex items-center gap-2">
              <FaMapMarked></FaMapMarked> Dhaka , Bangladesh
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#75d5e3", color: `${Dark ? "#fff" : "#1D232A"  }` }}
            contentArrowStyle={{ borderRight: "7px solid  #75d5e3" }}
          
            iconStyle={{ background: `${Dark ? "#1D232A" : "#F97316"}`, color: "#fff" }}
            icon={<MdSportsCricket />}
          >
            <h3 className="vertical-timeline-element-title">Cricket Match</h3>
            <h4 className="vertical-timeline-element-subtitle">
              HolyDay Events
            </h4>

            <p className="flex items-center gap-2">
              <FaClock></FaClock> Jan 25 - Dec 5. Time: 12:00 pm - 5:00 pm
            </p>
            <p className="flex items-center gap-2">
              <FaMapMarked></FaMapMarked> Dhaka , Bangladesh
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#75d5e3", color: `${Dark ? "#fff" : "#1D232A"  }` }}
            contentArrowStyle={{ borderRight: "7px solid  #75d5e3" }}
          
            iconStyle={{ background: `${Dark ? "#1D232A" : "#F97316"}`, color: "#fff" }}
            icon={<TbSwimming />}
          >
            <h3 className="vertical-timeline-element-title">Swimming</h3>
            <h4 className="vertical-timeline-element-subtitle">
            Happy Halloween
            </h4>

            <p className="flex items-center gap-2">
              <FaClock></FaClock> Nov 30 - Dec 5. Time: 12:00 pm - 5:00 pm
            </p>
            <p className="flex items-center gap-2">
              <FaMapMarked></FaMapMarked> Dhaka , Bangladesh
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            iconStyle={{ background: `${Dark ? "#1D232A" : "#F97316"}`, color: "#fff" }}
            icon={<MdOutlineEmojiEvents />}
          >
           
          </VerticalTimelineElement>
          
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default OurEvents;
