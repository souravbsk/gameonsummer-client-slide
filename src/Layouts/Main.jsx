import React, { useContext, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "../Shared/Header/Header";
import Footer from "../Shared/Footer/Footer";
import { PushSpinner } from "react-spinners-kit";
import { ThemeMoodContext } from "../Providers/ThemeProvider";

const Main = () => {
  const navigation = useNavigate();
  const {Dark} = useContext(ThemeMoodContext)





  return (
    <div>
      <Header></Header>
      <main className={`${Dark ? "bg-[#1D232A]" : "bg-[#75d5e30d] "}`}>
        {navigation.state === "loading" ? (
          <div className="flex items-center h-screen justify-center">
            <PushSpinner size={30} color="#6772E5" loading={true} />
          </div>
        ) : (
          <Outlet></Outlet>
        )}
      </main>
      <Footer></Footer>
    </div>
  );
};

export default Main;


/* 
light yellow
light orange 


*/