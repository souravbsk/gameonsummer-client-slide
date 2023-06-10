import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "../Shared/Header/Header";
import Footer from "../Shared/Footer/Footer";
import { PushSpinner } from "react-spinners-kit";

const Main = () => {
  const navigation = useNavigate();

  return (
    <div>
      <Header></Header>
      <main className="bg-[#F9F6EF] md:pb-32 pb-8">
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
