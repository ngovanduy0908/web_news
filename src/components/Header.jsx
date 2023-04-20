import React from "react";
import { FaUser } from "react-icons/fa";
import { BiRss } from "react-icons/bi";

const Header = () => {
  return (
    <div className="w-[1080px] m-auto relative drop-shadow-new">
      <div className="w-full h-[30px] bg-[#1f9cf8]">
        <ul className="flex float-right text-[#fff] text-[12px] justify-center items-center pt-[7px] mx-[10px]">
          <li className="inline-block px-[5px] border-r-[1px] border-r-[#fff] relative">
            <a href="#" title="Thành viên" className="text-[16px]">
              <FaUser />
            </a>
          </li>
          <li className="inline-block px-[5px] border-r-[1px] border-r-[#fff]">
            <a href="#" title="RSS" className="text-[16px]">
              <BiRss />
            </a>
          </li>
          <li className="inline-block px-[5px] border-r-[1px] border-r-[#fff] hover:text-[#0256f4]">
            <a href="#" title="Sơ đồ cổng">
              <span>Sơ đồ cổng</span>
            </a>
          </li>
          <li className="inline-block px-[5px] hover:text-[#0256f4]">
            <a href="#" title="Liên kết">
              <span>Liên kết</span>
            </a>
          </li>
        </ul>
      </div>
      <div className=" header_banner_img items-center grid grid-flow-col auto-cols-max gap-6 relative">
        <img
          src="/assets/images/logo-107x107.png"
          alt=""
          className="px-[10px] py-[12px]"
        />
        <div>
          <span className="text-[21px] text-[#0256f4]">
            Cổng thông tin điện tử
          </span>
          <h2 className="font-bold text-[25px] text-[#0256f4]">
            Hội Doanh Nhân Thanh Hóa Tại Hà Nội
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Header;
