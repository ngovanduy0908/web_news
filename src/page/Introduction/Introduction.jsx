import React from "react";

import Social from "./Social";
import Category from "../../components/list/Category";
import RightBar from "../../components/list/RightBar";
import MenuIntroduction from "./MenuIntroduction";

import Login from "../../Users/Login";
import Breadcrumbs from "../../components/Breadcrumb";
const Introduction = () => {
  return (
    <div className="bg-white p-7">
      <Breadcrumbs title={"Giới Thiệu"} subtitle={"Điều Kiện Tham Gia"} />

      <div className="grid grid-cols-4 gap-3">
        <div className="px-3 py-4 col-span-3">
          <div className="border-[1px] border-solid border-[#4f4f4f] px-6 py-4 rounded">
            <h2 className="font-semibold text-[20px] mb-5">Giới thiệu chung</h2>
            <Social />
            <p>
              Trân trọng kính mời các ACE Doanh nhân Thanh Hoá tại Hà Nội đến
              tham dự Đại hội nhiệm kỳ V (2022-2027) và Hội nghị xúc tiến kết
              nối đầu tư, kinh doanh giữa Hội DN Thanh Hoá tại Hà Nội và Hiệp
              hội Doanh nghiệp tỉnh Thanh Hoá.
              <br />
              &nbsp; &nbsp; Đại hội nhằm mục đích đánh giá lại hoạt động nhiệm
              kỳ vừa qua đồng thời đề ra phương hướng hoạt động nhiệm kỳ tiếp
              theo hướng tới sự đoàn kết, tôn vinh những doanh nhân xứ Thanh đã
              và đang hoạt động sản xuất kinh doanh tại Hà Nội và các tỉnh lân
              cận. Bên cạnh đó là hoạt động xúc tiến, kết nối đầu tư, kinh doanh
              giữa các doanh nhân Thanh Hoá ba miền: Thanh Hoá, Hà Nội, Phía Nam
              thông qua hội nghị xúc tiến đầu tư, tại sự kiện các doanh nhân
              cũng nhận được thông tin về tình hình phát triển của tỉnh Thanh
              Hoá và kêu gọi đầu tư của lãnh đạo tỉnh Thanh Hoá. Trong khuôn
              viên sự kiện có các gian hàng trưng bày giới thiệu sản phẩm dịch
              vụ của các Doanh nghiệp.&lt;br/&gt;
              <br />
              &nbsp; &nbsp; Ngoài ra, Đại Hội có sự tham dự của các đồng chí
              Lãnh đạo tỉnh Thanh Hoá, Lãnh đạo các Bộ, ngành, TW và Hà Nội, các
              tướng lĩnh Công an, Quân đội là người Thanh Hoá. Đây là dịp để các
              Doanh nhân giao lưu gặp gỡ tình đồng hương cũng như kết nối sự
              chia sẻ hỗ trợ .<br />
              &nbsp; &nbsp; Đại hội cũng là ngày hội của Doanh nhân Thanh Hoá
              tại Hà Nội gặp gỡ giao lưu nhân ngày Doanh nhân Việt Nam 13/10
              <br />
              BCH Hội DNTH tại Hà Nội
            </p>
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

export default Introduction;
