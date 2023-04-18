import React from "react";
import { IoHome, IoSearch } from "react-icons/io5";
import { AiFillCaretDown } from "react-icons/ai";
import { useState, useRef, useEffect } from "react";
const Navbar = () => {
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
      <div className="  relative bg-[#0083eb] flex items-center justify-between">
        <div className="menu-conner-left drop-shadow-xl"></div>
        <div className="menu-conner-right drop-shadow-xl"></div>
        <ul className="flex items-center text-[#fff] uppercase text-[12px] font-bold">
          <li className="block hover:bg-gradient-to-b from-[#82b2dc] to-[#428BCA]">
            <a href="#" className="h-[44px] px-[14px] flex items-center">
              <span>
                <IoHome />
              </span>
            </a>
          </li>
          <li className="block group relative hover:bg-gradient-to-b from-[#82b2dc] to-[#428BCA]">
            <a href="#" className="h-[44px] px-[10px] flex items-center">
              <span>Giới thiệu</span>
              <span className="text-[12px] ml-[3px]">
                <AiFillCaretDown />
              </span>
            </a>
            <ul className="bg-[#fff] w-[200px] drop-shadow-xl top-[45px] absolute hidden text-black group-hover:block transition duration-350 ease-in-out">
              <li className="block">
                {" "}
                <a
                  href=""
                  className="block py-[6px] pl-[8px] font-light hover:bg-yellow-300 hover:text-[#fff] hover:font-bold transition duration-0 hover:duration-150 ease-in-out"
                >
                  Giới thiệu chung
                </a>{" "}
              </li>
              <li>
                {" "}
                <a
                  href=""
                  className="block py-[6px] pl-[8px] font-light hover:bg-yellow-300 hover:text-[#fff] hover:font-bold transition duration-0 hover:duration-150 ease-in-out"
                >
                  điều lệ hoạt động
                </a>{" "}
              </li>
              <li>
                {" "}
                <a
                  href=""
                  className="block py-[6px] pl-[8px] font-light hover:bg-yellow-300 hover:text-[#fff] hover:font-bold transition duration-0 hover:duration-150 ease-in-out"
                >
                  ban chấp hành
                </a>{" "}
              </li>
              <li>
                {" "}
                <a
                  href=""
                  className="block py-[6px] pl-[8px] font-light hover:bg-yellow-300 hover:text-[#fff] hover:font-bold transition duration-0 hover:duration-150 ease-in-out"
                >
                  giải pháp cho doanh nghiệp
                </a>{" "}
              </li>
            </ul>
          </li>
          <li className="block group relative hover:bg-gradient-to-b from-[#82b2dc] to-[#428BCA]">
            <a href="#" className="h-[44px] px-[10px] flex items-center">
              <span>Cơ cấu tổ chức</span>
            </a>
          </li>
          <li className="block group relative hover:bg-gradient-to-b from-[#82b2dc] to-[#428BCA]">
            <a href="#" className="h-[44px] px-[10px] flex items-center">
              <span>Hội Viên</span>
              <span className="text-[12px] ml-[3px]">
                <AiFillCaretDown />
              </span>
            </a>
            <ul className="bg-[#fff] w-[200px] drop-shadow-xl top-[45px] absolute hidden text-black group-hover:block transition duration-350 ease-in-out">
              <li className="block">
                {" "}
                <a
                  href=""
                  className="block py-[6px] pl-[8px] font-light hover:bg-yellow-300 hover:text-[#fff] hover:font-bold transition duration-0 hover:duration-150 ease-in-out"
                >
                  Điều kiện tham gia
                </a>{" "}
              </li>
              <li>
                {" "}
                <a
                  href=""
                  className="block py-[6px] pl-[8px] font-light hover:bg-yellow-300 hover:text-[#fff] hover:font-bold transition duration-0 hover:duration-150 ease-in-out"
                >
                  quyền lợi hội viên
                </a>{" "}
              </li>
              <li>
                {" "}
                <a
                  href=""
                  className="block py-[6px] pl-[8px] font-light hover:bg-yellow-300 hover:text-[#fff] hover:font-bold transition duration-0 hover:duration-150 ease-in-out"
                >
                  hướng dẫn đăng kí
                </a>{" "}
              </li>
              <li>
                {" "}
                <a
                  href=""
                  className="block py-[6px] pl-[8px] font-light hover:bg-yellow-300 hover:text-[#fff] hover:font-bold transition duration-0 hover:duration-150 ease-in-out"
                >
                  hội phí
                </a>{" "}
              </li>
            </ul>
          </li>
          <li className="block group relative hover:bg-gradient-to-b from-[#82b2dc] to-[#428BCA]">
            <a href="#" className="h-[44px] px-[10px] flex items-center">
              <span>Tin Tức</span>
              <span className="text-[12px] ml-[3px]">
                <AiFillCaretDown />
              </span>
            </a>
            <ul className="bg-[#fff] w-[200px] drop-shadow-xl top-[45px] absolute hidden text-black group-hover:block transition duration-350 ease-in-out">
              <li className="block">
                {" "}
                <a
                  href=""
                  className="block py-[6px] pl-[8px] font-light hover:bg-yellow-300 hover:text-[#fff] hover:font-bold transition duration-0 hover:duration-150 ease-in-out"
                >
                  Tin hoạt động
                </a>{" "}
              </li>
              <li>
                {" "}
                <a
                  href=""
                  className="block py-[6px] pl-[8px] font-light hover:bg-yellow-300 hover:text-[#fff] hover:font-bold transition duration-0 hover:duration-150 ease-in-out"
                >
                  chỉ đạo điều hành
                </a>{" "}
              </li>
              <li>
                {" "}
                <a
                  href=""
                  className="block py-[6px] pl-[8px] font-light hover:bg-yellow-300 hover:text-[#fff] hover:font-bold transition duration-0 hover:duration-150 ease-in-out"
                >
                  thông tin tuyên truyền
                </a>{" "}
              </li>
              <li>
                {" "}
                <a
                  href=""
                  className="block py-[6px] pl-[8px] font-light hover:bg-yellow-300 hover:text-[#fff] hover:font-bold transition duration-0 hover:duration-150 ease-in-out"
                >
                  thông tin kinh tễ - xã hội
                </a>{" "}
              </li>
              <li>
                {" "}
                <a
                  href=""
                  className="block py-[6px] pl-[8px] font-light hover:bg-yellow-300 hover:text-[#fff] hover:font-bold transition duration-0 hover:duration-150 ease-in-out"
                >
                  tin hội viên
                </a>{" "}
              </li>
              <li>
                {" "}
                <a
                  href=""
                  className="block py-[6px] pl-[8px] font-light hover:bg-yellow-300 hover:text-[#fff] hover:font-bold transition duration-0 hover:duration-150 ease-in-out"
                >
                  tin doanh nhân
                </a>{" "}
              </li>
              <li>
                {" "}
                <a
                  href=""
                  className="block py-[6px] pl-[8px] font-light hover:bg-yellow-300 hover:text-[#fff] hover:font-bold transition duration-0 hover:duration-150 ease-in-out"
                >
                  tin xứ thanh
                </a>{" "}
              </li>
              <li>
                {" "}
                <a
                  href=""
                  className="block py-[6px] pl-[8px] font-light hover:bg-yellow-300 hover:text-[#fff] hover:font-bold transition duration-0 hover:duration-150 ease-in-out"
                >
                  tin kinh tế
                </a>{" "}
              </li>
              <li>
                {" "}
                <a
                  href=""
                  className="block py-[6px] pl-[8px] font-light hover:bg-yellow-300 hover:text-[#fff] hover:font-bold transition duration-0 hover:duration-150 ease-in-out"
                >
                  tin pháp luật
                </a>{" "}
              </li>
            </ul>
          </li>
          <li className="block group relative hover:bg-gradient-to-b from-[#82b2dc] to-[#428BCA]">
            <a href="#" className="h-[44px] px-[10px] flex items-center">
              <span>Giao Thương</span>
              <span className="text-[12px] ml-[3px]">
                <AiFillCaretDown />
              </span>
            </a>
            <ul className="bg-[#fff] w-[200px] drop-shadow-xl top-[45px] absolute hidden text-black group-hover:block transition duration-350 ease-in-out">
              <li className="block ">
                {" "}
                <a
                  href=""
                  className="block py-[6px] px-[8px] font-light hover:bg-yellow-300 hover:text-[#fff] hover:font-bold transition duration-0 hover:duration-150 ease-in-out"
                >
                  doanh nghiệp liên kết
                </a>{" "}
              </li>
              <li>
                {" "}
                <a
                  href=""
                  className="block py-[6px] px-[8px] font-light hover:bg-yellow-300 hover:text-[#fff] hover:font-bold transition duration-0 hover:duration-150 ease-in-out"
                >
                  hợp tác đầu tư
                </a>{" "}
              </li>
              <li>
                {" "}
                <a
                  href=""
                  className="block py-[6px] px-[8px] font-light hover:bg-yellow-300 hover:text-[#fff] hover:font-bold transition duration-0 hover:duration-150 ease-in-out"
                >
                  xúc tiến thương mại
                </a>{" "}
              </li>
            </ul>
          </li>
          <li className="block group relative hover:bg-gradient-to-b from-[#82b2dc] to-[#428BCA]">
            <a href="#" className="h-[44px]  px-[10px] flex items-center">
              <span>Dự án</span>
              <span className="text-[12px] ml-[3px]">
                <AiFillCaretDown />
              </span>
            </a>
            <ul className="bg-[#fff] w-[200px] drop-shadow-xl top-[45px] absolute hidden text-black group-hover:block transition duration-350 ease-in-out">
              <li className="block">
                {" "}
                <a
                  href=""
                  className="block py-[6px] px-[8px] font-light truncate hover:bg-yellow-300 hover:text-[#fff] hover:font-bold transition duration-0 hover:duration-150 ease-in-out"
                >
                  KHU VỰC TRUNG DU VÀ MIỀN NÚI PHÍA BẮC
                </a>{" "}
              </li>
              <li>
                {" "}
                <a
                  href=""
                  className="block py-[6px] px-[8px] font-light truncate hover:bg-yellow-300 hover:text-[#fff] hover:font-bold transition duration-0 hover:duration-150 ease-in-out"
                >
                  KHU VỰC ĐỒNG BẰNG SÔNG HỒNG
                </a>{" "}
              </li>
              <li>
                {" "}
                <a
                  href=""
                  className="block py-[6px] px-[8px] font-light truncate hover:bg-yellow-300 hover:text-[#fff] hover:font-bold transition duration-0 hover:duration-150 ease-in-out"
                >
                  KHU VỰC BẮC TRUNG BỘ
                </a>{" "}
              </li>
              <li>
                {" "}
                <a
                  href=""
                  className="block py-[6px] px-[8px] font-light truncate hover:bg-yellow-300 hover:text-[#fff] hover:font-bold transition duration-0 hover:duration-150 ease-in-out"
                >
                  KHU VỰC DUYÊN HẢI MIỀN TRUNG
                </a>{" "}
              </li>
            </ul>
          </li>
          <li className="block group relative hover:bg-gradient-to-b from-[#82b2dc] to-[#428BCA]">
            <a href="#" className="h-[44px]  px-[10px] flex items-center">
              <span>Sự kiện</span>
              <span className="text-[12px] ml-[3px]">
                <AiFillCaretDown />
              </span>
            </a>
            <ul className="bg-[#fff] w-[200px] drop-shadow-xl top-[45px] absolute hidden text-black group-hover:block transition duration-350 ease-in-out">
              <li className="block">
                {" "}
                <a
                  href=""
                  className="block py-[6px] px-[8px] font-light hover:bg-yellow-300 hover:text-[#fff] hover:font-bold transition duration-0 hover:duration-150 ease-in-out"
                >
                  hội doanh nhân
                </a>{" "}
              </li>
            </ul>
          </li>
          <li className="block group relative hover:bg-gradient-to-b from-[#82b2dc] to-[#428BCA]">
            <a href="#" className="h-[44px]  px-[10px] flex items-center">
              <span>Thành Viên</span>
              <span className="text-[12px] ml-[3px]">
                <AiFillCaretDown />
              </span>
            </a>
            <ul className="bg-[#fff] w-[200px] drop-shadow-xl top-[45px] absolute hidden text-black group-hover:block transition duration-350 ease-in-out">
              <li className="block">
                {" "}
                <a
                  href=""
                  className="block py-[6px] pl-[8px] font-light hover:bg-yellow-300 hover:text-[#fff] hover:font-bold transition duration-0 hover:duration-150 ease-in-out"
                >
                  Đăng nhập
                </a>{" "}
              </li>
              <li>
                {" "}
                <a
                  href=""
                  className="block py-[6px] pl-[8px] font-light hover:bg-yellow-300 hover:text-[#fff] hover:font-bold transition duration-0 hover:duration-150 ease-in-out"
                >
                  đăng ký
                </a>{" "}
              </li>
              <li>
                {" "}
                <a
                  href=""
                  className="block py-[6px] pl-[8px] font-light hover:bg-yellow-300 hover:text-[#fff] hover:font-bold transition duration-0 hover:duration-150 ease-in-out"
                >
                  khôi phục mật khẩu
                </a>{" "}
              </li>
              <li>
                {" "}
                <a
                  href=""
                  className="block py-[6px] pl-[8px] font-light hover:bg-yellow-300 hover:text-[#fff] hover:font-bold transition duration-0 hover:duration-150 ease-in-out"
                >
                  thiết lập tài khoản
                </a>{" "}
              </li>
              <li>
                {" "}
                <a
                  href=""
                  className="block py-[6px] pl-[8px] font-light hover:bg-yellow-300 hover:text-[#fff] hover:font-bold transition duration-0 hover:duration-150 ease-in-out"
                >
                  danh sách thành viên
                </a>{" "}
              </li>
              <li>
                {" "}
                <a
                  href=""
                  className="block py-[6px] pl-[8px] font-light hover:bg-yellow-300 hover:text-[#fff] hover:font-bold transition duration-0 hover:duration-150 ease-in-out"
                >
                  thoát
                </a>{" "}
              </li>
            </ul>
          </li>
          <li className="block group relative hover:bg-gradient-to-b from-[#82b2dc] to-[#428BCA]">
            <a href="#" className="h-[44px] px-[10px] flex items-center">
              <span>Liên hệ</span>
              <span className="text-[12px] ml-[3px]">
                <AiFillCaretDown />
              </span>
            </a>
            <ul className="bg-[#fff] w-[200px] drop-shadow-xl top-[45px] absolute hidden text-black group-hover:block transition duration-350 ease-in-out">
              <li className="block">
                {" "}
                <a
                  href=""
                  className="block py-[6px] px-[8px] font-light truncate hover:bg-yellow-300 hover:text-[#fff] hover:font-bold transition duration-0 hover:duration-150 ease-in-out"
                >
                  Ban biên tập Cổng thông tin điện tử Hội Doanh Nhân Thanh Hóa
                  Tại Hà Nội
                </a>{" "}
              </li>
            </ul>
          </li>
          <li className="block group relative hover:bg-gradient-to-b from-[#82b2dc] to-[#428BCA]">
            <a href="#" className="h-[44px] px-[10px] flex items-center">
              <span>Tìm Kiếm</span>
            </a>
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
