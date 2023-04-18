import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="h-[44px] bg-[#007fe4] absolute top-[33px] w-[calc((100%-1080px)/2)]"></div>
      <div className="h-[44px] bg-[#007fe4] absolute top-[33px] w-[calc((100%-1080px)/2)] right-0"></div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
