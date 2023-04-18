import React from "react";
import { AiFillStar } from "react-icons/ai";

import SliderPage from "../components/Slider";
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
    <div className="w-[1080px] m-auto">
      <SliderPage slides={slides} />
      <div className="bg-white grid grid-cols-5 relative top-[-5px] gap-4 p-8">
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
        <div className="col-span-2 pl-14">
          <div className="flex items-center bg-sky-500 text-white p-2">
            <AiFillStar />
            <h3 className="font-bold ml-2">TIN NỔI BẬT</h3>
          </div>
        </div>
        <div className="col-span-1">
          <div>
            <img
              src="https://doanhnhanthanhhoahanoi.com/themes/egov/images/bg-tittle-map.png"
              alt=""
            />
            <h3 className="font-bold ml-2">TIN NỔI BẬT</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
