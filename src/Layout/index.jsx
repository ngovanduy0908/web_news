import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaFacebookF, FaRss } from "react-icons/fa";

import Feedback from "../components/Feedback";

import { useNavigate } from "react-router-dom";
import PopupEvent from "../components/PopUpEvents";

const Layout = ({ children }) => {
  const navigate = useNavigate();
  return (
    <div className="relative">
      <div className="fixed z-50 right-0 top-[300px]">
        <ul className="text-white">
          <li className="p-3 bg-[#3664a2] mb-1">
            <a
              href="https://www.facebook.com/hoidoanhnhanthanhhoahanoi"
              className="text-[25px]"
              target="blank"
            >
              <FaFacebookF />
            </a>
          </li>
          <li className="p-3 bg-[#fbb22f]">
            <a href="" className="text-[25px]">
              <FaRss />
            </a>
          </li>
        </ul>
      </div>
      <Header />
      <div className="h-[44px] bg-[#007fe4] absolute top-[174px] w-[calc((100%-1080px)/2)]"></div>
      <div className="h-[44px] bg-[#007fe4] absolute top-[174px] w-[calc((100%-1080px)/2)] right-0"></div>
      <Navbar />
      <main className="max-w-[1080px] m-auto drop-shadow-new rounded-b-2xl">
        {children}
      </main>

      {/* <div className="max-w-[1080px] m-auto drop-shadow-new phone:hidden laptop:block desktop:block">
        <Feedback />
      </div> */}
      <Footer />
      <div>
        <PopupEvent />
      </div>
    </div>
  );
};

export default Layout;
