import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center p-10 bg-[#065C97] text-base-content rounded">
        <div className="grid grid-flow-col gap-4">
          <NavLink className="link text-white font-medium text-lg link-hover">About us</NavLink>
          <NavLink className="link text-white font-medium text-lg link-hover">Contact</NavLink>
          <NavLink className="link text-white font-medium text-lg link-hover">Jobs</NavLink>
          <NavLink className="link text-white font-medium text-lg link-hover">Press kit</NavLink>
        </div>
        <div>
          <div className="grid grid-flow-col gap-4">
           <p>fd</p>
           <p>fd</p>
          </div>
        </div>
        <div>
          <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
