import React from "react";
import { Outlet } from "react-router-dom";
import Breadcrumbs from "../../components/Breadcrumb";
import Category from "../../components/list/Category";

const UserAuth = () => {
  return (
    <div className="bg-white">
      <div className="">
        <div className="pt-4">
          <Breadcrumbs title={"Thành Viên"} link={"/user"} />
        </div>

        <div className="grid grid-cols-4 gap-4 p-4">
          <div className="col-span-3">
            <Outlet />
          </div>

          <div>
            <Category />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserAuth;
