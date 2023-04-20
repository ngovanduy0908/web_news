import React from "react";

import { IoIosChatbubbles } from "react-icons/io";
const Login = () => {
  return (
    <div>
      <div>{/* đã đăng nhập */}</div>
      {/* chưa đăng nhập */}
      <div className="mt-6 border-[1px] border-solid border-[#4f4f4f] px-6 py-4 rounded">
        <div className="grid grid-cols-2">
          <h2 className="flex items-center">
            <IoIosChatbubbles />Ý kiến bạn đọc
          </h2>
          <select name="" id="" className="float-right rounded">
            <option value="">sắp xếp theo bình luận mới</option>
            <option value="">1</option>
            <option value="">1</option>
          </select>
        </div>
        <div className="mt-6">
          <div className="border-[1px] border-solid border-[#ddd] px-3 py-4 rounded bg-pink-200">
            <a href="" title="Đăng nhập">
              Bạn cần đăng nhập với tư cách là
              <strong> Thành viên chính thức</strong> để có thể bình luận.
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
