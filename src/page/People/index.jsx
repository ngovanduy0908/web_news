import React from "react";
import { useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/Breadcrumb";
import HeaderTitle from "../../components/HeaderTitle";
import { useSearchParams } from "react-router-dom";
import RightBar from "../../components/list/RightBar";

const People = () => {
  return (
    <div className="bg-white pt-6">
      <Breadcrumbs title={"Hội viên"} />
      <div className=" pb-14 grid grid-cols-4 gap-3 pt-4 px-6">
        <div className="px-5 pt-4  col-span-3 "></div>
        <div>
          <RightBar />
        </div>
      </div>
    </div>
  );
};

export default People;
