import React from "react";
import { useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/Breadcrumb";
import HeaderTitle from "../../components/HeaderTitle";
import { useSearchParams } from "react-router-dom";

const People = () => {
  const { state } = useLocation();
  const [searchParams] = useSearchParams();
  const slug = searchParams.get("slug");

  return (
    <div>
      <Breadcrumbs title={"Hội viên"} subtitle={state.item.title} />
      <HeaderTitle title={state?.item.title} />
    </div>
  );
};

export default People;
