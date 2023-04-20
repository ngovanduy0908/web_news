import React from "react";
import { AiFillStar } from "react-icons/ai";

import SliderPage from "../components/Slider";
import Card from "../components/Card";
const slides = [
  {
    id: 1,
    img: "https://doanhnhanthanhhoahanoi.com/uploads/banners/slider1.jpg",
  },
  {
    id: 2,
    img: "https://doanhnhanthanhhoahanoi.com/uploads/banners/slider1.jpg",
  },
  {
    id: 3,
    img: "https://doanhnhanthanhhoahanoi.com/uploads/banners/slider1.jpg",
  },
];
const HomePage = () => {
  return (
    <div className="w-[1080px] m-auto drop-shadow-new">
      <SliderPage slides={slides} />
      <div className="rounded-b-xl bg-white grid grid-cols-5 relative top-[-5px] gap-4 px-[14px] py-8">
        <div className="col-span-2">
          <div className="bg-gray-200 w-[110%]">
            <img
              src="https://doanhnhanthanhhoahanoi.com/data/tmp/news_17_197d0083412t2690l8-2_320-0.jpg"
              alt=""
              className="m-auto w-[90%] h-[215px]"
            />
          </div>
          <div>
            <h2 className="mt-2 font-bold text-lg text-gray-700">
              <a href="#">Đại hội Hội Doanh nhân Thanh Hóa tại Hà Nội</a>
            </h2>
            <span className="text-sm">
              Chiều 10-9, tại Trung tâm Hội nghị quốc gia Mỹ Đình, Hội Doanh
              nhân Thanh Hóa tại Hà Nội đã tổ chức Đại hội lần thứ V, nhiệm kỳ
              2022-2027. Dự Đại hội có các đồng chí: Trịnh Tuấn Sinh, Phó Bí thư
              Tỉnh ủy; Nguyễn Văn Thi, Ủy viên Ban Thường vụ Tỉnh ủy, Phó Chủ
              tịch Thường trực UBND tỉnh; đại diện một số ban, bộ, ngành ở Trung
              ương; Hội đồng hương Thanh Hoá tại Hà Nội; lãnh đạo Hiệp hội Doanh
              nghiệp tỉnh, VCCI Thanh Hóa, Câu lạc bộ Doanh nhân Thanh Hóa tại
              thành phố Hồ Chí Minh và các tỉnh phía Nam, Hiệp hội Doanh nghiệp
              một số tỉnh, thành phía Bắc.
            </span>
          </div>
        </div>
        <div className="col-span-2 pl-14 pr-8">
          <div className="flex items-center bg-sky-500 text-white p-2 mb-3">
            <AiFillStar />
            <h3 className="font-bold ml-2">TIN NỔI BẬT</h3>
          </div>
          <ul>
            <li className="h-[85px] border-b-[1px] border-solid border-[#dadada] last:border-none mb-3">
              <a
                href=""
                title="HTBC tham gia Hội nghị Xúc tiến và Kết nối đầu tư, kinh doanh"
                className="flex justify-between text-[14px] "
              >
                HTBC tham gia Hội nghị Xúc tiến và Kết nối đầu tư, kinh doanh
                <img
                  className="ml-[20px]"
                  src="https://doanhnhanthanhhoahanoi.com/assets/news/2022_11/screenshot-2022-11-24-145502.png"
                  alt=""
                />
              </a>
            </li>
            <li className="h-[85px] border-b-[1px] border-solid border-[#dadada] mb-3">
              <a
                href=""
                title="HTBC tham gia Hội nghị Xúc tiến và Kết nối đầu tư, kinh doanh"
                className="flex justify-between text-[14px] "
              >
                Doanh nhân Hội viên HTBC ủng hộ Quỹ Vì Người Nghèo Thành phố
                <img
                  className="ml-[20px]"
                  src="https://doanhnhanthanhhoahanoi.com/assets/news/2022_11/screenshot-2022-11-24-145502.png"
                  alt=""
                />
              </a>
            </li>
            <li className="h-[85px]">
              <a
                href=""
                title="HTBC tham gia Hội nghị Xúc tiến và Kết nối đầu tư, kinh doanh"
                className="flex justify-between text-[14px] "
              >
                Doanh nhân Thanh Hóa - những người “truyền lửa” cho thế hệ trẻ
                <img
                  className="ml-[20px]"
                  src="https://doanhnhanthanhhoahanoi.com/assets/news/2022_11/screenshot-2022-11-24-145502.png"
                  alt=""
                />
              </a>
            </li>
          </ul>
        </div>
        <div className="col-span-1">
          <div className="flex items-center mb-4">
            <img
              src="https://doanhnhanthanhhoahanoi.com/themes/egov/images/bg-tittle-map.png"
              alt=""
            />
            <h3 className="font-bold ml-2">BẢN ĐỒ HÀNH CHÍNH</h3>
          </div>
          <div>
            <img
              src="https://doanhnhanthanhhoahanoi.com/uploads/banners/bandohc.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <Card />
    </div>
  );
};

export default HomePage;
