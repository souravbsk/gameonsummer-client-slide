import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  FaFacebook,
  FaInstagramSquare,
  FaMapMarkedAlt,
  FaTwitterSquare,
} from "react-icons/fa";
import { SiGamejolt } from "react-icons/si";
import { MdImportContacts } from "react-icons/md";
import { ThemeMoodContext } from "../../Providers/ThemeProvider";




const Footer = () => {
  const {Dark} = useContext(ThemeMoodContext)
  return (
    <div className={`bg-gradient-to-r from-[#3db7d5] to-[#76e1f1] ${Dark && "from-[#1D232A] to-slate-800"}`}>
      <div className=" pt-8 md:pt-32 container">
        <div className="grid grid-cols-1 md:grid-cols-3 mb-10 gap-8">
          <div>
            <div>
              <Link className="text-2xl items-center mb-3 text-center flex justify-center gap-2 font-bold font-mono text-white">
                <SiGamejolt className="text-5xl"></SiGamejolt>
                <h3>GameOnSummer</h3>
              </Link>
              <p className="text-center text-white">
                Welcome to gameonsummer! We are passionate about creating
                unforgettable summer vacations filled with adventure,
                relaxation, and cherished memories.
              </p>
            </div>
          </div>
          <div className="text-center text-white">
            <p className="flex justify-center text-5xl mb-3 font-bold ">
              <FaMapMarkedAlt></FaMapMarkedAlt>
            </p>
            <p>
              Address: 123, Hello Summer Way,
              <br /> Palmyra, VA 22233
              <br />
              Postal mail: P.O.Box 123, Palmyra, VA 22333
            </p>
          </div>
          <div className="text-center text-white">
            <p className="flex justify-center text-5xl mb-3 font-bold ">
              <MdImportContacts></MdImportContacts>
            </p>
            <p>
              Office hours: 9:00am – 5:00pm <br />
              Telephone: (123) 456-78-90
              <br />
              Email: info@example.com
            </p>
          </div>
        </div>

        <div className="footer footer-center text-base-content rounded">
          <div className="grid grid-flow-col gap-4">
            <Link className="link text-white font-medium text-lg link-hover">
              About us
            </Link>
            <Link className="link text-white font-medium text-lg link-hover">
              Contact
            </Link>
            <Link className="link text-white font-medium text-lg link-hover">
              Jobs
            </Link>
            <Link className="link text-white font-medium text-lg link-hover">
              Press kit
            </Link>
          </div>
          <div>
            <div className="grid text-2xl text-white grid-flow-col gap-4">
              <Link>
                <FaFacebook></FaFacebook>
              </Link>
              <Link>
                <FaInstagramSquare></FaInstagramSquare>
              </Link>
              <Link>
                <FaTwitterSquare></FaTwitterSquare>
              </Link>
            </div>
          </div>
          <div className="pb-10">
            <p className="text-white">
              Copyright © 2023 - All right reserved by GameOnSummer
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
