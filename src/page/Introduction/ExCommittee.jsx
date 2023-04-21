import React from "react";

import Social from "./Social";
import MenuIntroduction from "./MenuIntroduction";
import Category from "../../components/list/Category";
import RightBar from "../../components/list/RightBar";

import Login from "../../Users/Login";
import Breadcrumbs from "../../components/Breadcrumb";
const ExCommittee = () => {
  return (
    <div className="bg-white pt-6">
      <Breadcrumbs title={"Giới thiệu"} />
      <div className="grid grid-cols-4 gap-3 p-7">
        <div className="px-3 py-4 col-span-3">
          <div className="border-[1px] border-solid border-[#4f4f4f] px-6 py-4 rounded">
            <h2 className="font-semibold text-[20px] mb-5">Ban chấp hành</h2>
            <Social />
            <h3>Danh sách ban chấp hành</h3>
          </div>
          <Login />
          <MenuIntroduction />
        </div>
        <div>
          <Category />
          <RightBar />
        </div>
      </div>
    </div>
  );
};

export default ExCommittee;
