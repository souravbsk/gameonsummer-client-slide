import React, { useContext } from "react";
import { ThemeMoodContext } from "../../../Providers/ThemeProvider";

const MailingList = () => {
  const { Dark } = useContext(ThemeMoodContext);
  return (
    <div className="md:mt-32 mt-8  ">
      <div className=' bg-[url("https://i.ibb.co/prQ21Ls/newsletterbackground.png")] border shadow-3xl rounded-t-[20%]  overflow-hidden py-8 md:py-32 bg-cover text-center bg-center  bg-no-repeat '>
       <div className="container">
        <form action="">
            <h2 className="text-2xl md:text-5xl mb-4 md:mb-8 font-semibold">Join Our Mailing List</h2>
            <div className=" max-w-full md:w-1/2 mx-auto">
                <input type="email" placeholder="Enter Your Email" className="bg-white h-12 w-full border capitalize rounded-3xl shadow-sm px-3 py-5 mb-3 md:mb-5 text-[#1D232A]" />
                <button className="btn bg-[#75D5E3] text-white rounded-full shadow-xl hover:text-[#1D232A]">Subscribe</button>
            </div>
        </form>
       </div>
      </div>
    </div>
  );
};

export default MailingList;
