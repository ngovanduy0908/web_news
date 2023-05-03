import React from "react";
import { FaUser } from "react-icons/fa";
import { BiRss } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="max-w-[1080px] m-auto relative drop-shadow-new">
      <div className="w-full h-[30px] bg-[#1f9cf8]">
        <ul className="flex float-right text-[#fff] text-[12px] justify-center items-center pt-[7px] mx-[10px]">
          <li className=" cursor-pointer inline-block px-[5px] border-r-[1px] border-r-[#fff] relative">
            <div href="#" title="Thành viên" className="text-[16px]">
              <FaUser />
            </div>
          </li>
          <li className=" cursor-pointer inline-block px-[5px] border-r-[1px] border-r-[#fff]">
            <div
              onClick={() => navigate("/feeds")}
              href="#"
              title="RSS"
              className="text-[16px]"
            >
              <BiRss />
            </div>
          </li>
          <li className=" cursor-pointer inline-block px-[5px] border-r-[1px] border-r-[#fff] hover:text-[#0256f4]">
            <div onClick={() => navigate("/feeds")} href="#" title="Sơ đồ cổng">
              <span>Sơ đồ cổng</span>
            </div>
          </li>
          <li className=" cursor-pointer inline-block px-[5px] hover:text-[#0256f4]">
            <div href="#" title="Liên kết">
              <span>Liên kết</span>
            </div>
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
