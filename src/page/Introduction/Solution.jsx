import React from "react";

import Social from "./Social";
import MenuIntroduction from "./MenuIntroduction";
import Category from "../../components/list/Category";
import RightBar from "../../components/list/RightBar";

import Login from "../../Users/Login";
import Breadcrumbs from "../../components/Breadcrumb";
const Solution = () => {
  return (
    <div className="bg-white pt-6">
      <Breadcrumbs title={"Giới Thiệu"} />

      <div className="grid grid-cols-4 gap-3 p-7">
        <div className="px-3 py-4 laptop:col-span-3 desktop:col-span-3 tablet:col-span-4 phone:col-span-4 ">
          <div className="border-[1px] border-solid border-[#4f4f4f] px-6 py-4 rounded">
            <h2 className="font-semibold text-[20px] mb-5">
              Giải pháp cho doanh nghiệp
            </h2>
            <Social />
            <h3>Giải pháp cho doanh nghiệp</h3>
          </div>
          <Login />
          <MenuIntroduction />
        </div>
        <div className="phone:hidden laptop:block desktop:block tablet:hidden">
          <Category />
          <RightBar />
        </div>
      </div>
    </div>
  );
};

export default Solution;
