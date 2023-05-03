import React from "react";
import { MdOutlineCalendarToday } from "react-icons/md";
import { FaFilter, FaUser } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";
import { IoMdFlash } from "react-icons/io";
import { RiCustomerService2Fill } from "react-icons/ri";
const RightBar = () => {
  return (
    <>
      <div className="mb-3">
        <a href="">
          <img
            src="https://doanhnhanthanhhoahanoi.com/uploads/banners/qc1.jpg"
            alt=""
          />
        </a>
      </div>
      <div className="my-3">
        <a href="">
          <img
            src="https://doanhnhanthanhhoahanoi.com/uploads/banners/qc2.jpg"
            alt=""
          />
        </a>
      </div>
      <div className="my-3">
        <a href="">
          <img
            src="https://doanhnhanthanhhoahanoi.com/uploads/banners/qc3.jpg"
            alt=""
          />
        </a>
      </div>
      <div className="my-3">
        <a href="">
          <img
            src="https://doanhnhanthanhhoahanoi.com/uploads/banners/qc4.jpg"
            alt=""
          />
        </a>
      </div>
      <div className="border-[1px] bobder-solid border-gray-400 rounded p-3">
        <div className="font-semibold text-[14px] text-[#333] pb-2 uppercase pr-[8px] border-b-[2px] bobder-b-solid border-b-gray-500">
          Thống kê truy cập
        </div>
        <ul className="p-2 text-[14px] text-[#333]">
          <li className="flex items-center justify-between py-2">
            <span className="flex items-center ">
              <IoMdFlash className="text-[18px] mr-1" />
              Đang truy cập
            </span>
            <span>1</span>
          </li>
          <li className="flex items-center justify-between py-2">
            <span className="flex items-center ">
              <FaUser className="text-[18px] mr-1" />
              Thành viên online
            </span>
            <span>1</span>
          </li>
          <li className="flex items-center justify-between py-2">
            <span className="flex items-center ">
              <RiCustomerService2Fill className="text-[18px] mr-1" />
              Khách
            </span>
            <span>1</span>
          </li>
          <li className="flex items-center justify-between py-2">
            <span className="flex items-center ">
              <FaFilter className="text-[18px] mr-1" />
              Hôm nay
            </span>
            <span>20</span>
          </li>
          <li className="flex items-center justify-between py-2">
            <span className="flex items-center ">
              <MdOutlineCalendarToday className="text-[18px] mr-1" />
              Tháng hiện tại
            </span>
            <span>461</span>
          </li>
          <li className="flex items-center justify-between py-2">
            <span className="flex items-center ">
              <HiMenu className="text-[18px] mr-1" />
              Tổng lượt truy cập
            </span>
            <span>4,282</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default RightBar;
