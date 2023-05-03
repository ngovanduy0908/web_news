import React from "react";
import "./news.css";
import { BiTime, BiMessageRounded } from "react-icons/bi";
import { FaEye } from "react-icons/fa";
import { MdArrowRight } from "react-icons/md";

import Breadcrumbs from "../../components/Breadcrumb";
import HeaderTitle from "../../components/HeaderTitle";
import { useLocation, useNavigate } from "react-router";
import RightBar from "../../components/list/RightBar";
import Category from "../../components/list/Category";
const newsPost = [
  {
    title: "Đại hội Hội Doanh nhân Thanh Hóa tại Hà Nội",
    description:
      "'Chiều 10-9, tại Trung tâm Hội nghị quốc gia Mỹ Đình, Hội Doanh nhân Thanh Hóa tại Hà Nội đã tổ chức Đại hội lần thứ V, nhiệm kỳ 2022-2027. Dự Đại hội có các đồng chí: Trịnh Tuấn Sinh, Phó Bí thư Tỉnh ủy; Nguyễn Văn Thi, Ủy viên Ban Thường vụ Tỉnh ủy, Phó Chủ tịch Thường trực UBND tỉnh; đại diện một số ban, bộ, ngành ở Trung ương; Hội đồng hương Thanh Hoá tại Hà Nội; lãnh đạo Hiệp hội Doanh nghiệp tỉnh, VCCI Thanh Hóa, Câu lạc bộ Doanh nhân Thanh Hóa tại thành phố Hồ Chí Minh và các tỉnh phía Nam, Hiệp hội Doanh nghiệp một số tỉnh, thành phía Bắc.",
    time: "25/11/2022 10:58:00 AM",
    viewed: "31",
    reply: "0",
    image: [
      "https://doanhnhanthanhhoahanoi.com/assets/news/2022_11/197d0083412t2690l8-2.jpg",
      "https://doanhnhanthanhhoahanoi.com/assets/news/2022_11/197d0083412t2690l8-2.jpg",
      "https://doanhnhanthanhhoahanoi.com/assets/news/2022_11/197d0083412t2690l8-2.jpg",
    ],
    subslug: "1",
    infoSource: "nguontin.com",
  },
  {
    title: "HTBC tham gia Hội nghị Xúc tiến và Kết nối đầu tư, kinh doanh",
    description:
      "'Chiều 17/10, Hiệp hội Doanh nghiệp tỉnh Thanh Hóa phối hợp cùng VCCI Đà Nẵng tổ chức Hội nghị Xúc tiến và Kết nối đầu tư, kinh doanh.",
    time: "25/11/2022 10:58:00 AM",
    viewed: "22",
    reply: "0",
    image: [
      "https://doanhnhanthanhhoahanoi.com/assets/news/2022_11/screenshot-2022-11-24-145502.png",
    ],
    titleImage: "hihihihihihi",
    subslug: "2",
    infoSource: "nguontin.com",
  },
  {
    title: "Đại hội Hội Doanh nhân Thanh Hóa tại Hà Nội",
    description:
      "'Chiều 10-9, tại Trung tâm Hội nghị quốc gia Mỹ Đình, Hội Doanh nhân Thanh Hóa tại Hà Nội đã tổ chức Đại hội lần thứ V, nhiệm kỳ 2022-2027. Dự Đại hội có các đồng chí: Trịnh Tuấn Sinh, Phó Bí thư Tỉnh ủy; Nguyễn Văn Thi, Ủy viên Ban Thường vụ Tỉnh ủy, Phó Chủ tịch Thường trực UBND tỉnh; đại diện một số ban, bộ, ngành ở Trung ương; Hội đồng hương Thanh Hoá tại Hà Nội; lãnh đạo Hiệp hội Doanh nghiệp tỉnh, VCCI Thanh Hóa, Câu lạc bộ Doanh nhân Thanh Hóa tại thành phố Hồ Chí Minh và các tỉnh phía Nam, Hiệp hội Doanh nghiệp một số tỉnh, thành phía Bắc.",
    time: "25/11/2022 10:58:00 AM",
    viewed: "31",
    reply: "0",
    image: [
      "https://doanhnhanthanhhoahanoi.com/assets/news/2022_11/197d0083412t2690l8-2.jpg",
    ],
    subslug: "3",
    infoSource: "nguontin.com",
  },
];

const NewDetail = () => {
  const { state } = useLocation();
  const props = state.item;
  const navigate = useNavigate();
  return (
    <div className="bg-white pt-6">
      <Breadcrumbs title={"tin tức"} subtitle={props.title} link={"/news"} />
      <div className=" pb-14 grid grid-cols-4 gap-3 pt-4 px-6">
        <div className="pt-4 col-span-3 ">
          <HeaderTitle title={props.title} />
          <div className="pr-5 list">
            {newsPost.map((post, index) => (
              <div
                key={index}
                className="block text-[14px] py-8 border-b-[2px] border-[#999999] border-solid item"
              >
                <div
                  onClick={() =>
                    navigate(`/news/${props.slug}/${post.subslug}`)
                  }
                  className=" cursor-pointer"
                >
                  <img
                    src={post.image ? post.image[0] : null}
                    alt=""
                    className="float-left mr-3 mt-2"
                    width={170}
                  />
                </div>
                <h2 className="font-bold text-[#375480] text-[16px] mb-1 cursor-pointer">
                  <div
                    onClick={() =>
                      navigate(`/news/${props.slug}/${post.subslug}`)
                    }
                  >
                    {post.title}
                  </div>
                </h2>
                <div className="flex items-center text-[12px] text-[#999999] mb-2">
                  <span className="flex items-center ml-2">
                    <span className="inline-block  mr-1">
                      <BiTime />
                    </span>
                    {post.time}
                  </span>
                  <span className="flex items-center ml-2">
                    <span className="inline-block mr-1">
                      <FaEye />
                    </span>
                    Đã xem: {post.viewed}
                  </span>
                  <span className="flex items-center ml-2">
                    <span className="inline-block mr-1">
                      <BiMessageRounded />
                    </span>
                    Phản hồi: {post.reply}
                  </span>
                </div>
                <p>{post.description}</p>
                <div className="float-right">
                  <button
                    onClick={() =>
                      navigate(`/news/${props.slug}/${post.subslug}`)
                    }
                    className="text-[14px] font-semibold flex items-center text-[#1f9cf8]"
                  >
                    Xem tiếp
                    <span className="text-[16px]">
                      <MdArrowRight />
                    </span>
                  </button>
                </div>
              </div>
            ))}
            {/* <div className="block text-[14px] py-8 border-b-[2px] border-[#999999] border-solid item">
              <a href="">
                <img
                  src="https://doanhnhanthanhhoahanoi.com/assets/news/2022_11/197d0083412t2690l8-2.jpg"
                  alt=""
                  className="float-left mr-3 mt-2"
                  width={170}
                />
              </a>
              <h2 className="font-bold text-[#375480] text-[20px] mb-1">
                <a href="">Đại hội Hội Doanh nhân Thanh Hóa tại Hà Nội</a>
              </h2>
              <div className="flex items-center text-[12px] text-[#999999] mb-2">
                <span className="flex items-center ml-2">
                  <span className="inline-block  mr-1">
                    <BiTime />
                  </span>
                  25/11/2022 10:58:00 AM
                </span>
                <span className="flex items-center ml-2">
                  <span className="inline-block mr-1">
                    <FaEye />
                  </span>
                  Đã xem: 31
                </span>
                <span className="flex items-center ml-2">
                  <span className="inline-block mr-1">
                    <BiMessageRounded />
                  </span>
                  Phản hồi: 0
                </span>
              </div>
              <p>
                Chiều 10-9, tại Trung tâm Hội nghị quốc gia Mỹ Đình, Hội Doanh
                nhân Thanh Hóa tại Hà Nội đã tổ chức Đại hội lần thứ V, nhiệm kỳ
                2022-2027. Dự Đại hội có các đồng chí: Trịnh Tuấn Sinh, Phó Bí
                thư Tỉnh ủy; Nguyễn Văn Thi, Ủy viên Ban Thường vụ Tỉnh ủy, Phó
                Chủ tịch Thường trực UBND tỉnh; đại diện một số ban, bộ, ngành ở
                Trung ương; Hội đồng hương Thanh Hoá tại Hà Nội; lãnh đạo Hiệp
                hội Doanh nghiệp tỉnh, VCCI Thanh Hóa, Câu lạc bộ Doanh nhân
                Thanh Hóa tại thành phố Hồ Chí Minh và các tỉnh phía Nam, Hiệp
                hội Doanh nghiệp một số tỉnh, thành phía Bắc.
              </p>
              <div className="float-right">
                <button className="text-[14px] font-semibold flex items-center text-[#1f9cf8]">
                  Xem tiếp
                  <span className="text-[16px]">
                    <MdArrowRight />
                  </span>
                </button>
              </div>
            </div>
            <div className="block text-[14px] py-8 border-b-[2px] border-[#999999] border-solid item">
              <a href="">
                <img
                  src="https://doanhnhanthanhhoahanoi.com/assets/news/2022_11/197d0083412t2690l8-2.jpg"
                  alt=""
                  className="float-left mr-3 mt-2"
                  width={170}
                />
              </a>
              <h2 className="font-bold text-[#375480] text-[20px] mb-1 truncate">
                <a href="">
                  Đại hội Hội Doanh nhân Thanh Hóa tại Hà Nội Đại hội Hội Doanh
                  nhân Thanh Hóa tại Hà Nội
                </a>
              </h2>
              <div className="flex items-center text-[12px] text-[#999999] mb-2">
                <span className="flex items-center ml-2">
                  <span className="inline-block  mr-1">
                    <BiTime />
                  </span>
                  25/11/2022 10:58:00 AM
                </span>
                <span className="flex items-center ml-2">
                  <span className="inline-block mr-1">
                    <FaEye />
                  </span>
                  Đã xem: 31
                </span>
                <span className="flex items-center ml-2">
                  <span className="inline-block mr-1">
                    <BiMessageRounded />
                  </span>
                  Phản hồi: 0
                </span>
              </div>
              <p>
                Chiều 10-9, tại Trung tâm Hội nghị quốc gia Mỹ Đình, Hội Doanh
                nhân Thanh Hóa tại Hà Nội đã tổ chức Đại hội lần thứ V, nhiệm kỳ
                2022-2027. Dự Đại hội có các đồng chí: Trịnh Tuấn Sinh, Phó Bí
                thư Tỉnh ủy; Nguyễn Văn Thi, Ủy viên Ban Thường vụ Tỉnh ủy, Phó
                Chủ tịch Thường trực UBND tỉnh; đại diện một số ban, bộ, ngành ở
                Trung ương; Hội đồng hương Thanh Hoá tại Hà Nội; lãnh đạo Hiệp
                hội Doanh nghiệp tỉnh, VCCI Thanh Hóa, Câu lạc bộ Doanh nhân
                Thanh Hóa tại thành phố Hồ Chí Minh và các tỉnh phía Nam, Hiệp
                hội Doanh nghiệp một số tỉnh, thành phía Bắc.
              </p>
              <div className="float-right">
                <button className="text-[14px] font-semibold flex items-center text-[#1f9cf8]">
                  Xem tiếp
                  <span className="text-[16px]">
                    <MdArrowRight />
                  </span>
                </button>
              </div>
            </div> */}
          </div>
        </div>
        <div>
          <div>
            <Category />
            <RightBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewDetail;
