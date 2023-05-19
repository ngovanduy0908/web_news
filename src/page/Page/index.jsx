import React from "react";
import Category from "../../components/list/Category";
import Social from "../Introduction/Social";
import Breadcrumbs from "../../components/Breadcrumb";
import RightBar from "../../components/list/RightBar";

const Page = () => {
  return (
    <div className="bg-white pt-6">
      <Breadcrumbs title={"Thông báo"} />

      <div className="grid grid-cols-4 gap-3 p-3">
        <div className="px-3 py-4 desktop:col-span-3 laptop:col-span-3 tablet:col-span-3 phone:col-span-4">
          <div className="border-[1px] border-solid border-[#4f4f4f] px-2 py-4 rounded">
            <h2 className="font-semibold text-[20px] mb-5">Giới thiệu chung</h2>
            <Social />
            <p className="font-bold text-[14px] pb-5">
              Chỉ dẫn cho người quản trị website:
            </p>
            <p className="text-[14px] pb-3">
              Các liên kết đến bài viết này có nghĩa là menu bạn vừa truy cập là
              mục cần phải có cho website của các cơ quan nhà nước (căn cứ theo
              các quy định hiện hành về website/ cổng thông tin).
              <br />
              <br />
              Với NukeViet eGovernment bạn có nhiều cách để hoàn hiện các hạng
              mục này, bằng cách sử dụng các chức năng có sẵn trên phiên bản
              NukeViet eGovernment mặc định hoặc cài thêm các module có trên
              NukeViet Store
              <br />
              <br />
              Để có thể tìm kiếm và cài đặt các module liên quan tới NukeViet
              eGovernment, bạn có thể truy cập địa chỉ:
              https://nukeviet.vn/vi/store/egovernment/
              <br />
            </p>
          </div>
        </div>
        <div>
          <Category />
          <RightBar />
        </div>
      </div>
    </div>
  );
};

export default Page;
