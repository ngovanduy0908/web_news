import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaFacebookF, FaRss } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Layout = ({ children }) => {
  const navigate = useNavigate();
  return (
    <div className="relative">
      <div className="fixed right-0 top-[300px]">
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
      <main className="w-[1080px] m-auto drop-shadow-new rounded-b-2xl">
        {children}
      </main>
      <div className="w-[1080px] m-auto drop-shadow-new">
        <div className="grid grid-cols-4 gap-3 rounded-t-xl p-6 bg-white mt-3">
          <div className="">
            <img
              src="https://doanhnhanthanhhoahanoi.com/uploads/menu/lay-y-kien.png"
              alt=""
              className="float-left"
            />
            <a
              href=""
              className=" uppercase rounded bg-[#10bcff] text-[14px] font-bold block text-center leading-[40px] text-[#fff] font-['Roboto_Condensed']"
            >
              <span>lấy ý kiến người dân</span>
            </a>
          </div>
          <div className="">
            <img
              src="https://doanhnhanthanhhoahanoi.com/uploads/menu/y-kien-du-thao.png"
              alt=""
              className="float-right"
            />
            <a
              href=""
              className=" uppercase rounded rounded-r-xl bg-[#10bcff] text-[12px] font-bold block text-center leading-[40px] text-[#fff] font-['Roboto_Condensed']"
            >
              <span>Lấy ý kiến dự thảo văn bản</span>
            </a>
          </div>
          <div className="" onClick={() => navigate("/page")}>
            <img
              src="https://doanhnhanthanhhoahanoi.com/uploads/menu/duong-day-nong.png"
              alt=""
              className="float-left"
            />
            <span
              href=""
              className=" uppercase rounded rounded-l-xl bg-[#10bcff] text-[14px] font-bold block text-center leading-[20px] text-[#fff] font-['Roboto_Condensed']"
            >
              Đường dây nóng
              <span className="inline-block text-[10px]">
                Sở/ Ban ngành/ Quận/ Huyện
              </span>
            </span>
          </div>
          <div className="" onClick={() => navigate("/page")}>
            <img
              src="https://doanhnhanthanhhoahanoi.com/uploads/menu/chi-dan-thu-tuc.png"
              alt=""
              className="float-right"
            />
            <a
              href=""
              className=" uppercase rounded rounded-r-xl bg-[#10bcff] text-[12px] font-bold block text-center leading-[20px] text-[#fff] font-['Roboto_Condensed']"
            >
              chỉ dẫn thủ tục hành chính
              <span className="inline-block text-[8px]">
                Hỗ trợ trực tuyến qua điện thoại
              </span>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
