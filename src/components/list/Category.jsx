import React from "react";

const Category = () => {
  return (
    <div className="border-[1px] border-solid border-[#4f4f4f] rounded mb-3">
      <h2 className="px-3 py-2 bg-blue-500 text-white font-semibold text-lg uppercase">
        Danh mục
      </h2>
      <ul className="mt-4 uppercase text-sm text-[#494949] px-4">
        <li className="py-3 hover:opacity-80">
          <a href="">Tin hoạt động</a>{" "}
        </li>
        <li className="py-3 hover:opacity-80">
          <a href="">chỉ đạo điều hành</a>{" "}
        </li>
        <li className="py-3 hover:opacity-80">
          <a href="">thông tin tuyên truyền</a>{" "}
        </li>
        <li className="py-3 hover:opacity-80">
          <a href="">thông tin kinh tế - xã hội</a>{" "}
        </li>
        <li className="py-3 hover:opacity-80">
          <a href="">tin hội viên</a>{" "}
        </li>
        <li className="py-3 hover:opacity-80">
          <a href="">tin doanh nhân</a>{" "}
        </li>
        <li className="py-3 hover:opacity-80">
          <a href="">tin xứ thanh</a>{" "}
        </li>
        <li className="py-3 hover:opacity-80">
          <a href="">công trình - đề tài</a>{" "}
        </li>
        <li className="py-3 hover:opacity-80">
          <a href="">thông tin thống kê</a>{" "}
        </li>
        <li className="py-3 hover:opacity-80">
          <a href="">tin hội viên</a>{" "}
        </li>
        <li className="py-3 hover:opacity-80">
          <a href="">tinh doanh nhân</a>{" "}
        </li>
        <li className="py-3 hover:opacity-80">
          <a href="">tin kinh tế</a>{" "}
        </li>
        <li className="py-3 hover:opacity-80">
          <a href="">tin pháp luật</a>
        </li>
      </ul>
    </div>
  );
};

export default Category;
