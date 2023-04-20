import React from "react";
import { AiFillHome, AiFillCaretRight } from "react-icons/ai";
import "./breadcum.css";
const Breadcrumbs = ({ title, subtitle, link, sublink }) => {
  return (
    <div className=" inline-flex items-center gap-3 bg-[#ededef] text-[#515050] pl-4 pr-6 py-2  cursor-pointer relative">
      <div>
        <AiFillHome className="w-3 h-3 hover:text-[#000]" />
      </div>
      <div className=" text-sm  mt-0.5 hover:text-[#000]">{title}</div>
      {subtitle ? (
        <>
          {" "}
          <div>
            <AiFillCaretRight className="w-3 h-3 hover:text-[#000]" />
          </div>
          <div className=" text-sm  mt-0.5 hover:text-[#000]">{subtitle}</div>{" "}
        </>
      ) : (
        ""
      )}

      <img
        src="https://doanhnhanthanhhoahanoi.com/themes/egov/images/breadcrumb.png"
        className="absolute top-0 right-[-19px] h-[38px]"
      />
    </div>
  );
};

export default Breadcrumbs;
