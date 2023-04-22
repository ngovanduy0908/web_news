import React from "react";
import { useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/Breadcrumb";
import HeaderTitle from "../../components/HeaderTitle";
import { useSearchParams } from "react-router-dom";

const People = () => {
  return (
    <div>
      <Breadcrumbs title={"Hội viên"} />
    </div>
  );
};

export default People;
