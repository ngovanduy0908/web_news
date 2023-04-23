import React from "react";

import { IoHome, IoSearch } from "react-icons/io5";
import { AiFillCaretDown } from "react-icons/ai";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavbarArr from "./NavbarArr";

const contentArr = [
  [
    {
      href: "/people",
    },
    [
      {
        title: "Điều kiện tham gia",
        slug: "dieu-kien-tham-gia",
      },
      {
        title: "Quyền lợi Hội Viên",
        slug: "quyen-loi-hoi-vien",
      },
      {
        title: "Hướng dẫn đăng ký",
        slug: "huong-dan-dang-ky",
      },
      {
        title: "Hội Phí",
        slug: "hoi-phi",
      },
    ],
  ],
  [
    { href: "/news" },

    [
      {
        title: "Tin hoạt động",
        slug: "tin-hoat-dong",
      },
      {
        title: "Chỉ đạo điều",
        slug: "chi-dao-dieu",
      },
      {
        title: "Thông tin tuyên",
        slug: "thong-tin-tuyen",
      },
      {
        title: "Thông tin kinh",
        slug: "thong-tin-kinh",
      },
      {
        title: "Tin hội viên",
        slug: "tin-hoi-viên",
      },
      {
        title: "Tin doanh nhân",
        slug: "tin-doanh-nhan",
      },
      {
        title: "Tin xứ thanh",
        slug: "tin-xu-thanh",
      },
      {
        title: "Tin kinh tế",
        slug: "tin-kinh-te",
      },
      {
        title: "Tin pháp luật",
        slug: "tin-phap-luat",
      },
    ],
  ],
];

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [inputRef]);
  return (
    <div className="w-[1080px] m-auto">
      <div className="  relative bg-[#0083eb] flex items-center justify-between z-30">
        <div className="menu-conner-left drop-shadow-xl"></div>
        <div className="menu-conner-right drop-shadow-xl"></div>
        <ul className="flex items-center  text-[#fff] uppercase text-[12px] font-bold">
          <li className="block hover:bg-gradient-to-b from-[#82b2dc] to-[#428BCA]">
            <div
              className="h-[44px] px-[14px] flex items-center"
              onClick={() => navigate("/")}
            >
              <span>
                <IoHome />
              </span>
            </div>
          </li>
          <li className="block group relative hover:bg-gradient-to-b from-[#82b2dc] to-[#428BCA]">
            <div
              onClick={() => navigate("/introduction")}
              className="h-[44px] px-[10px] flex items-center cursor-pointer"
            >
              <span>Giới thiệu</span>
              <span className="text-[12px] ml-[3px]">
                <AiFillCaretDown />
              </span>
            </div>
            <ul className="bg-[#fff] w-[200px] drop-shadow-xl top-[44px] absolute hidden text-black group-hover:block transition duration-350 ease-in-out">
              <li className="block">
                {" "}
                <div
                  className="cursor-pointer block py-[6px] pl-[8px] font-light hover:bg-yellow-300 hover:text-[#fff] hover:font-bold transition duration-0 hover:duration-150 ease-in-out"
                  onClick={() => navigate("/introduction")}
                >
                  Giới thiệu chung
                </div>{" "}
              </li>
              <li>
                {" "}
                <div
                  className="cursor-pointer block py-[6px] pl-[8px] font-light hover:bg-yellow-300 hover:text-[#fff] hover:font-bold transition duration-0 hover:duration-150 ease-in-out"
                  onClick={() => navigate("/regulations")}
                >
                  điều lệ hoạt động
                </div>{" "}
              </li>
              <li>
                {" "}
                <div
                  className="cursor-pointer block py-[6px] pl-[8px] font-light hover:bg-yellow-300 hover:text-[#fff] hover:font-bold transition duration-0 hover:duration-150 ease-in-out"
                  onClick={() => navigate("/exCommittee")}
                >
                  ban chấp hành
                </div>{" "}
              </li>
              <li>
                {" "}
                <div
                  className="cursor-pointer block py-[6px] pl-[8px] font-light hover:bg-yellow-300 hover:text-[#fff] hover:font-bold transition duration-0 hover:duration-150 ease-in-out"
                  onClick={() => navigate("/solution")}
                >
                  giải pháp cho doanh nghiệp
                </div>{" "}
              </li>
            </ul>
          </li>
          <li className="block group relative hover:bg-gradient-to-b from-[#82b2dc] to-[#428BCA]">
            <div
              className="h-[44px] px-[10px] flex items-center cursor-pointer"
              onClick={() => navigate("/incorporation")}
            >
              <span>Cơ cấu tổ chức</span>
            </div>
          </li>
          <li className="block group relative hover:bg-gradient-to-b from-[#82b2dc] to-[#428BCA]">
            <div
              href="#"
              className="h-[44px] px-[10px] flex items-center cursor-pointer"
              onClick={() => navigate("/people")}
            >
              <span>Hội Viên</span>
              <span className="text-[12px] ml-[3px]">
                <AiFillCaretDown />
              </span>
            </div>
            <NavbarArr arr={contentArr[0]} />
          </li>
          <li className="cursor-pointer block group relative hover:bg-gradient-to-b from-[#82b2dc] to-[#428BCA]">
            <div
              onClick={() => navigate("/news")}
              className="h-[44px] px-[10px] flex items-center"
            >
              <span>Tin Tức</span>
              <span className="text-[12px] ml-[3px]">
                <AiFillCaretDown />
              </span>
            </div>
            <NavbarArr arr={contentArr[1]} />

            {/* <ul className="bg-[#fff] w-[200px] drop-shadow-xl top-[44px] absolute hidden text-black group-hover:block transition duration-350 ease-in-out">
              <li className="block">
                {" "}
                <div className="block py-[6px] pl-[8px] font-light hover:bg-yellow-300 hover:text-[#fff] hover:font-bold transition duration-0 hover:duration-150 ease-in-out">
                  Tin hoạt động
                </div>{" "}
              </li>
              <li>
                {" "}
                <div className="block py-[6px] pl-[8px] font-light hover:bg-yellow-300 hover:text-[#fff] hover:font-bold transition duration-0 hover:duration-150 ease-in-out">
                  chỉ đạo điều hành
                </div>{" "}
              </li>
              <li>
                {" "}
                <div className="block py-[6px] pl-[8px] font-light hover:bg-yellow-300 hover:text-[#fff] hover:font-bold transition duration-0 hover:duration-150 ease-in-out">
                  thông tin tuyên truyền
                </div>{" "}
              </li>
              <li>
                {" "}
                <div className="block py-[6px] pl-[8px] font-light hover:bg-yellow-300 hover:text-[#fff] hover:font-bold transition duration-0 hover:duration-150 ease-in-out">
                  thông tin kinh tễ - xã hội
                </div>{" "}
              </li>
              <li>
                {" "}
                <div className="block py-[6px] pl-[8px] font-light hover:bg-yellow-300 hover:text-[#fff] hover:font-bold transition duration-0 hover:duration-150 ease-in-out">
                  tin hội viên
                </div>{" "}
              </li>
              <li>
                {" "}
                <div className="block py-[6px] pl-[8px] font-light hover:bg-yellow-300 hover:text-[#fff] hover:font-bold transition duration-0 hover:duration-150 ease-in-out">
                  tin doanh nhân
                </div>{" "}
              </li>
              <li>
                {" "}
                <div className="block py-[6px] pl-[8px] font-light hover:bg-yellow-300 hover:text-[#fff] hover:font-bold transition duration-0 hover:duration-150 ease-in-out">
                  tin xứ thanh
                </div>{" "}
              </li>
              <li>
                {" "}
                <div className="block py-[6px] pl-[8px] font-light hover:bg-yellow-300 hover:text-[#fff] hover:font-bold transition duration-0 hover:duration-150 ease-in-out">
                  tin kinh tế
                </div>{" "}
              </li>
              <li>
                {" "}
                <div className="block py-[6px] pl-[8px] font-light hover:bg-yellow-300 hover:text-[#fff] hover:font-bold transition duration-0 hover:duration-150 ease-in-out">
                  tin pháp luật
                </div>{" "}
              </li>
            </ul> */}
          </li>
          <li className="cursor-pointediv block group relative hover:bg-gradient-to-b from-[#82b2dc] to-[#428BCA]">
            <div href="#" className="h-[44px] px-[10px] flex items-center">
              <span>Giao Thương</span>
              <span className="text-[12px] ml-[3px]">
                <AiFillCaretDown />
              </span>
            </div>
            <ul className="bg-[#fff] w-[200px] drop-shadow-xl top-[44px] absolute hidden text-black group-hover:block transition duration-350 ease-in-out">
              <li className="block ">
                {" "}
                <div className="block py-[6px] px-[8px] font-light hover:bg-yellow-300 hover:text-[#fff] hover:font-bold transition duration-0 hover:duration-150 ease-in-out">
                  doanh nghiệp liên kết
                </div>{" "}
              </li>
              <li>
                {" "}
                <div className="block py-[6px] px-[8px] font-light hover:bg-yellow-300 hover:text-[#fff] hover:font-bold transition duration-0 hover:duration-150 ease-in-out">
                  hợp tác đầu tư
                </div>{" "}
              </li>
              <li>
                {" "}
                <div className="block py-[6px] px-[8px] font-light hover:bg-yellow-300 hover:text-[#fff] hover:font-bold transition duration-0 hover:duration-150 ease-in-out">
                  xúc tiến thương mại
                </div>{" "}
              </li>
            </ul>
          </li>
          <li className="cursor-pointer block group relative hover:bg-gradient-to-b from-[#82b2dc] to-[#428BCA]">
            <div className="h-[44px]  px-[10px] flex items-center">
              <span>Dự án</span>
              <span className="text-[12px] ml-[3px]">
                <AiFillCaretDown />
              </span>
            </div>
            <ul className="bg-[#fff] w-[200px] drop-shadow-xl top-[44px] absolute hidden text-black group-hover:block transition duration-350 ease-in-out">
              <li className="block">
                {" "}
                <div className="block py-[6px] px-[8px] font-light truncate hover:bg-yellow-300 hover:text-[#fff] hover:font-bold transition duration-0 hover:duration-150 ease-in-out">
                  KHU VỰC TRUNG DU VÀ MIỀN NÚI PHÍA BẮC
                </div>{" "}
              </li>
              <li>
                {" "}
                <div className="block py-[6px] px-[8px] font-light truncate hover:bg-yellow-300 hover:text-[#fff] hover:font-bold transition duration-0 hover:duration-150 ease-in-out">
                  KHU VỰC ĐỒNG BẰNG SÔNG HỒNG
                </div>{" "}
              </li>
              <li>
                {" "}
                <div className="block py-[6px] px-[8px] font-light truncate hover:bg-yellow-300 hover:text-[#fff] hover:font-bold transition duration-0 hover:duration-150 ease-in-out">
                  KHU VỰC BẮC TRUNG BỘ
                </div>{" "}
              </li>
              <li>
                {" "}
                <div className="block py-[6px] px-[8px] font-light truncate hover:bg-yellow-300 hover:text-[#fff] hover:font-bold transition duration-0 hover:duration-150 ease-in-out">
                  KHU VỰC DUYÊN HẢI MIỀN TRUNG
                </div>{" "}
              </li>
            </ul>
          </li>
          <li className="cursor-pointer block group relative hover:bg-gradient-to-b from-[#82b2dc] to-[#428BCA]">
            <div href="#" className="h-[44px]  px-[10px] flex items-center">
              <span>Sự kiện</span>
              <span className="text-[12px] ml-[3px]">
                <AiFillCaretDown />
              </span>
            </div>
            <ul className="bg-[#fff] w-[200px] drop-shadow-xl top-[44px] absolute hidden text-black group-hover:block transition duration-350 ease-in-out">
              <li className="block">
                {" "}
                <div className="block py-[6px] px-[8px] font-light hover:bg-yellow-300 hover:text-[#fff] hover:font-bold transition duration-0 hover:duration-150 ease-in-out">
                  hội doanh nhân
                </div>{" "}
              </li>
            </ul>
          </li>
          <li className="block group relative hover:bg-gradient-to-b from-[#82b2dc] to-[#428BCA]">
            <div href="#" className="h-[44px]  px-[10px] flex items-center">
              <span>Thành Viên</span>
              <span className="text-[12px] ml-[3px]">
                <AiFillCaretDown />
              </span>
            </div>
            <ul className="bg-[#fff] w-[200px] drop-shadow-xl top-[44px] absolute hidden text-black group-hover:block transition duration-350 ease-in-out">
              <li className="block">
                {" "}
                <div className="block py-[6px] pl-[8px] font-light hover:bg-yellow-300 hover:text-[#fff] hover:font-bold transition duration-0 hover:duration-150 ease-in-out">
                  Đăng nhập
                </div>{" "}
              </li>
              <li>
                {" "}
                <div className="block py-[6px] pl-[8px] font-light hover:bg-yellow-300 hover:text-[#fff] hover:font-bold transition duration-0 hover:duration-150 ease-in-out">
                  đăng ký
                </div>{" "}
              </li>
              <li>
                {" "}
                <div className="block py-[6px] pl-[8px] font-light hover:bg-yellow-300 hover:text-[#fff] hover:font-bold transition duration-0 hover:duration-150 ease-in-out">
                  khôi phục mật khẩu
                </div>{" "}
              </li>
              <li>
                {" "}
                <div className="block py-[6px] pl-[8px] font-light hover:bg-yellow-300 hover:text-[#fff] hover:font-bold transition duration-0 hover:duration-150 ease-in-out">
                  thiết lập tài khoản
                </div>{" "}
              </li>
              <li>
                {" "}
                <div className="block py-[6px] pl-[8px] font-light hover:bg-yellow-300 hover:text-[#fff] hover:font-bold transition duration-0 hover:duration-150 ease-in-out">
                  danh sách thành viên
                </div>{" "}
              </li>
              <li>
                {" "}
                <div className="block py-[6px] pl-[8px] font-light hover:bg-yellow-300 hover:text-[#fff] hover:font-bold transition duration-0 hover:duration-150 ease-in-out">
                  thoát
                </div>{" "}
              </li>
            </ul>
          </li>
          <li className="cursor-pointer block group relative hover:bg-gradient-to-b from-[#82b2dc] to-[#428BCA]">
            <div className="h-[44px] px-[10px] flex items-center">
              <span>Liên hệ</span>
              <span className="text-[12px] ml-[3px]">
                <AiFillCaretDown />
              </span>
            </div>
            <ul className="bg-[#fff] w-[200px] drop-shadow-xl top-[44px] absolute hidden text-black group-hover:block transition duration-350 ease-in-out">
              <li className="block">
                {" "}
                <div className="block py-[6px] px-[8px] font-light truncate hover:bg-yellow-300 hover:text-[#fff] hover:font-bold transition duration-0 hover:duration-150 ease-in-out">
                  Ban biên tập Cổng thông tin điện tử Hội Doanh Nhân Thanh Hóa
                  Tại Hà Nội
                </div>{" "}
              </li>
            </ul>
          </li>
          <li className="block group relative hover:bg-gradient-to-b from-[#82b2dc] to-[#428BCA]">
            <div
              onClick={() => navigate("/search")}
              className="h-[44px] px-[10px] flex items-center"
            >
              <span>Tìm Kiếm</span>
            </div>
          </li>
        </ul>
        <div className=" relative">
          <span
            className=" block p-[10px] pl-[13px] text-[#fff] border-l-[2px] border-l-[#085798]"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <IoSearch />
          </span>
          {isOpen && (
            <div
              class="w-[400px] bg-slate-100 absolute group-active:block left-[-360px] bottom-[-60px] py-[10px] px-[10px]"
              ref={inputRef}
            >
              <div class="sm:col-span-12">
                <div className="relative">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autocomplete="given-name"
                    class="block w-full rounded-md border-0 py-1.5 pr-8 text-[#555555] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-[#66afe9] sm:text-sm sm:leading-6"
                  />
                  <span className=" absolute right-[10px] top-[10px] text-[16px] text-[#0256f4]">
                    <IoSearch />
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
