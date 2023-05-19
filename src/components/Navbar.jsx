import React from "react";
import NavbarArr from "./NavbarArr";
import { IoHome, IoSearch } from "react-icons/io5";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { AiFillCaretDown } from "react-icons/ai";
import SideBar from "./Sidebar";

import Test from "./Test";

const contentArr = [
  [
    { href: "/news" },

    [
      {
        title: "Tin tức",
        slug: "tin-tuc",
      },
      {
        title: "Tin hoạt động",
        slug: "tin-hoat-dong",
      },
    ],
  ],

  [
    {
      href: "/trade",
    },
    [
      {
        title: "Doanh nghiệp liên kết",
        slug: "doanh-nghiep-lien-ket",
      },
      {
        title: "Hợp tác đầu tư",
        slug: "hop-tac-dau-tu",
      },
      {
        title: "Xúc tiến thương mại",
        slug: "xuc-tien-thuong-mai",
      },
    ],
  ],

  [
    {
      href: "/projects-page",
    },
    [
      {
        title: "Khu vực Duyên hải miền Trung",
        slug: "khu-vuc-duyen-hai-mien-trung",
      },
      {
        title: "Khu vực Đồng bằng sông Hồng",
        slug: "khu-vuc-dong-bang-song-hong",
      },
      {
        title: "Khu vực Bắc Trung Bộ",
        slug: "khu-vuc-bac-trung-bo",
      },
      {
        title: "Khu vực Duyên hải miền Trung",
        slug: "khu-vuc-duyen-hai-mien-trung",
      },
    ],
  ],
  [
    { href: "/user" },

    [
      {
        title: "Đăng nhập",
        slug: "login",
      },
      {
        title: "Đăng ký",
        slug: "register",
      },
      {
        title: "Khôi phục mật khẩu",
        slug: "lostpass",
      },
      {
        title: "Thiết lập tài khoản",
        slug: "editinfo",
      },
      {
        title: "Danh sách thành viên",
        slug: "",
      },
      {
        title: "Thoát",
        slug: "quyen-loi-hoi-voi",
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
    <div className="max-w-[1080px] m-auto">
      <div className=" laptop:flex desktop:flex tablet:flex phone:hidden relative bg-[#0083eb] flex items-center justify-between z-30">
        <div className="menu-conner-left drop-shadow-xl"></div>
        <div className="menu-conner-right drop-shadow-xl laptop:hidden desktop:block"></div>
        <ul className="flex items-center  text-[#fff] uppercase desktop:text-[12px] laptop:text-[12px] tablet:text-[7px] font-bold">
          <li className="block hover:bg-gradient-to-b from-[#82b2dc] to-[#428BCA] tablet:text-[12px]">
            <div
              className="laptop:h-[44px] laptop:text-[16px] laptop:px-4 desktop:px-4 desktop:text-[18px] tablet:h-[40px] px-[14px] tablet:px-[8px] flex items-center"
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
              className="laptop:h-[44px] tablet:h-[40px] desktop:text-[14px] laptop:text-[14px] px-6 flex items-center cursor-pointer"
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
              {/* <li>
                {" "}
                <div
                  className="cursor-pointer block py-[6px] pl-[8px] font-light hover:bg-yellow-300 hover:text-[#fff] hover:font-bold transition duration-0 hover:duration-150 ease-in-out"
                  onClick={() => navigate("/solution")}
                >
                  giải pháp cho doanh nghiệp
                </div>{" "}
              </li> */}
            </ul>
          </li>
          {/* <li className="block group relative hover:bg-gradient-to-b from-[#82b2dc] to-[#428BCA]">
            <div
              className="laptop:h-[44px] tablet:h-[40px] desktop:text-[14px] laptop:text-[14px] px-6 flex items-center cursor-pointer"
              onClick={() => navigate("/incorporation")}
            >
              <span>Cơ cấu tổ chức</span>
            </div>
          </li> */}
          <li className="block group relative hover:bg-gradient-to-b from-[#82b2dc] to-[#428BCA]">
            <div
              href="#"
              className="laptop:h-[44px] tablet:h-[40px] desktop:text-[14px] laptop:text-[14px] px-6 flex items-center cursor-pointer"
              onClick={() => navigate("/member")}
            >
              <span>Hội Viên</span>
              <span className="text-[12px] ml-[3px]">
                <AiFillCaretDown />
              </span>
            </div>
            <ul className="bg-[#fff] w-[200px] drop-shadow-xl top-[44px] absolute hidden text-black group-hover:block transition duration-350 ease-in-out">
              <li
                className="block cursor-pointer"
                onClick={() => navigate("/ban-chap-hanh-hiep-hoi")}
              >
                {" "}
                <div className="block py-[6px] px-[8px] font-light hover:bg-yellow-300 hover:text-[#fff] hover:font-bold transition duration-0 hover:duration-150 ease-in-out">
                  Ban chấp hành hiệp hội
                </div>{" "}
              </li>
              <li className="block cursor-pointer">
                {" "}
                <div className="block py-[6px] px-[8px] font-light hover:bg-yellow-300 hover:text-[#fff] hover:font-bold transition duration-0 hover:duration-150 ease-in-out">
                  Danh sách hội viên
                </div>{" "}
              </li>
              <li
                className="block cursor-pointer"
                onClick={() => navigate("/quyen-loi-hoi-vien")}
              >
                {" "}
                <div className="block py-[6px] px-[8px] font-light hover:bg-yellow-300 hover:text-[#fff] hover:font-bold transition duration-0 hover:duration-150 ease-in-out">
                  Quyền lợi hội viên
                </div>{" "}
              </li>
              <li
                className="block cursor-pointer"
                onClick={() => navigate("/dang-ky-hoi-vien")}
              >
                {" "}
                <div className="block py-[6px] px-[8px] font-light hover:bg-yellow-300 hover:text-[#fff] hover:font-bold transition duration-0 hover:duration-150 ease-in-out">
                  Đăng ký hội viên
                </div>{" "}
              </li>
            </ul>
          </li>
          <li className="cursor-pointer block group relative hover:bg-gradient-to-b from-[#82b2dc] to-[#428BCA]">
            <div
              onClick={() => navigate("/news")}
              className="laptop:h-[44px] tablet:h-[40px] desktop:text-[14px] laptop:text-[14px] px-6 flex items-center"
            >
              <span>Điểm tin</span>
              <span className="text-[12px] ml-[3px]">
                <AiFillCaretDown />
              </span>
            </div>
            <NavbarArr arr={contentArr[0]} />
          </li>
          {/* <li className="cursor-pointer block group relative hover:bg-gradient-to-b from-[#82b2dc] to-[#428BCA]">
            <div
              onClick={() => navigate("/trade")}
              className="laptop:h-[44px] tablet:h-[40px] desktop:text-[14px] laptop:text-[14px] px-6 flex items-center"
            >
              <span>Giao Thương</span>
              <span className="text-[12px] ml-[3px]">
                <AiFillCaretDown />
              </span>
            </div>
            <NavbarArr arr={contentArr[1]} />
          </li>
          <li className="cursor-pointer block group relative hover:bg-gradient-to-b from-[#82b2dc] to-[#428BCA]">
            <div
              onClick={() => navigate("/projects-page")}
              className="laptop:h-[44px] tablet:h-[40px] desktop:text-[14px] laptop:text-[14px]  px-6 flex items-center"
            >
              <span>Dự án</span>
              <span className="text-[12px] ml-[3px]">
                <AiFillCaretDown />
              </span>
            </div>
            <NavbarArr arr={contentArr[2]} />
          </li> */}
          <li className="cursor-pointer block group relative hover:bg-gradient-to-b from-[#82b2dc] to-[#428BCA]">
            <div
              className="laptop:h-[44px] tablet:h-[40px] desktop:text-[14px] laptop:text-[14px]  px-6 flex items-center"
              onClick={() => navigate("/events-page")}
            >
              <span>Sự kiện</span>
              {/* <span className="text-[12px] ml-[3px]">
                <AiFillCaretDown />
              </span> */}
            </div>
            {/* <ul className="bg-[#fff] w-[200px] drop-shadow-xl top-[44px] absolute hidden text-black group-hover:block transition duration-350 ease-in-out">
              <li className="block">
                {" "}
                <div className="block py-[6px] px-[8px] font-light hover:bg-yellow-300 hover:text-[#fff] hover:font-bold transition duration-0 hover:duration-150 ease-in-out">
                  hội doanh nhân
                </div>{" "}
              </li>
            </ul> */}
          </li>
          <li className="block group cursor-pointer relative hover:bg-gradient-to-b from-[#82b2dc] to-[#428BCA]">
            <div
              href="#"
              className="laptop:h-[44px] tablet:h-[40px] desktop:text-[14px] laptop:text-[14px]  px-6 flex items-center"
              onClick={() => navigate("/user")}
            >
              <span>Thành Viên</span>
              <span className="text-[12px] ml-[3px]">
                <AiFillCaretDown />
              </span>
            </div>
            <NavbarArr arr={contentArr[3]} />
          </li>
          <li className="cursor-pointer block group relative hover:bg-gradient-to-b from-[#82b2dc] to-[#428BCA]">
            <div
              onClick={() => navigate("/contact-page")}
              className="laptop:h-[44px] tablet:h-[40px] desktop:text-[14px] laptop:text-[14px] px-6 flex items-center"
            >
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
          {/* <li className="block group relative cursor-pointer hover:bg-gradient-to-b from-[#82b2dc] to-[#428BCA]">
            <div
              onClick={() => navigate("/search")}
              className="laptop:h-[44px] tablet:h-[40px] desktop:text-[14px] laptop:text-[14px] px-6 flex items-center"
            >
              <span>Tìm Kiếm</span>
            </div>
          </li> */}
        </ul>
        {/* <div className=" relative">
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
              className="w-[400px] bg-slate-100 absolute group-active:block left-[-360px] bottom-[-60px] py-[10px] px-6"
              ref={inputRef}
            >
              <div className="sm:col-span-12">
                <div className="relative">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autocomplete="given-name"
                    className="block w-full rounded-md border-0 py-1.5 pr-8 text-[#555555] shadow-sm ring-1 ring-inset ring-white placeholder:text-white focus:ring-[#66afe9] sm:text-sm sm:leading-6"
                  />
                  <span className=" absolute right-[10px] top-[10px] text-[16px] text-[#0256f4]">
                    <IoSearch />
                  </span>
                </div>
              </div>
            </div>
          )}
        </div> */}
      </div>
      <div className=" laptop:hidden desktop:hidden phone:block tablet:block">
        <SideBar />
      </div>
    </div>
  );
};

export default Navbar;
