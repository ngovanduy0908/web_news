import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import "./news.css";
import { BiTime, BiMessageRounded } from "react-icons/bi";
import { FaEye } from "react-icons/fa";
import { MdArrowRight } from "react-icons/md";

import Breadcrumbs from "../../components/Breadcrumb";
import HeaderTitle from "../../components/HeaderTitle";
import { useLocation, useNavigate } from "react-router-dom";
import RightBar from "../../components/list/RightBar";
import Category from "../../components/list/Category";
import axios from "axios";
import PaginationV2 from "../../components/Pagination/PaginationV2";
import { useSearchParams } from "react-router-dom";

const NewDetail = () => {
  const { state } = useLocation();
  console.log(state);
  const props = state ? state.item : "";
  const [count, setCount] = useState();
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const page = searchParams.get("page");

  const fetchData = async () => {
    try {
      let url = "http://localhost:3001/api/posts/allPost?";
      url += `page=${page || 1}`;
      const res = await axios.get(url);
      //console.log(res);
      setData(res.data.data);
      setCount(res.data.count);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchData();
  }, [page]);

  const handlePageChange = (page) => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set("page", page);
    setSearchParams(newSearchParams.toString());
    navigate(`/news/tin-hoi-vien?page=${page}`, { state: state });
  };

  //console.log(data);
  return (
    <div className="bg-white pt-6">
      <Breadcrumbs
        title={"điểm tin"}
        subtitle={props ? props.title : ""}
        link={"/news"}
      />
      <div className=" pb-14 grid grid-cols-4 gap-3 pt-4 px-6">
        <div className="pt-4 col-span-3 phone:col-span-4 desktop:col-span-3 laptop:col-span-3 tablet:col-span-3">
          <HeaderTitle title={props ? props.title : ""} />
          <div className="desktop:pr-5 list phone:pr-0">
            {data
              ? data.map((post, index) => {
                  return (
                    <div
                      key={index}
                      className="block text-[14px] py-8 border-b-[2px] border-[#999999] border-solid item"
                    >
                      <div
                        onClick={() => navigate(`/${post.slug}`)}
                        className=" cursor-pointer"
                      >
                        <img
                          src={post.image ? post.image[0] : null}
                          alt={post.title}
                          className="float-left mr-3 mt-2"
                          width={170}
                        />
                      </div>
                      <h2 className="font-bold text-[#375480] text-[16px] mb-1 cursor-pointer">
                        <div onClick={() => navigate(`/${post.slug}`)}>
                          {post.title}
                        </div>
                      </h2>
                      <div className="inline-flex items-center text-[12px] phone:font-semibold text-[#999999] my-2">
                        <span className="flex items-center ml-2">
                          <span className="inline-block  mr-1">
                            <BiTime />
                          </span>
                          {dayjs(post.created_at).format("DD/MM/YYYY")}
                        </span>
                        <span className="flex items-center ml-2">
                          <span className="inline-block mr-1">
                            <FaEye />
                          </span>
                          Đã xem: {post.view}
                        </span>
                        <span className="flex items-center ml-2">
                          <span className="inline-block mr-1">
                            <BiMessageRounded />
                          </span>
                          Phản hồi: {post.reply}
                        </span>
                      </div>
                      <p className="desktop:line-clamp-none tablet:line-clamp-none laptop:line-clamp-none phone:line-clamp-3">
                        {post.subcontent}
                      </p>
                      <div className="float-right">
                        <button
                          onClick={() => navigate(`/${post.slug}`)}
                          className="text-[14px] font-semibold flex items-center text-[#1f9cf8]"
                        >
                          Xem tiếp
                          <span className="text-[16px]">
                            <MdArrowRight />
                          </span>
                        </button>
                      </div>
                    </div>
                  );
                })
              : "Không có dữ liệu"}
          </div>
          <PaginationV2
            total={count}
            pageSize={4}
            current={searchParams.get("page") || 1}
            onChange={handlePageChange}
          />
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
