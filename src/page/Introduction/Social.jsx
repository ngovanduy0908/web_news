import React from "react";

import { AiFillLike } from "react-icons/ai";
import ShareFaceBook from "../../components/ShareSocial/ShareFaceBook";

const Social = () => {
  return (
    <ul className="flex items-center text-[14px] px-4 py-5 bg-slate-300 rounded-2xl mb-5">
      <li className="inline-block px-2 bg-blue-500 text-white rounded mr-3 hover:opacity-80">
        <a href="" className="flex items-center">
          <AiFillLike />
          Thích
          <span className="ml-2 ">0</span>
        </a>
      </li>
      <li className="inline-block px-2 bg-blue-500 text-white rounded hover:opacity-80">
        <ShareFaceBook
          title="Giới thiệu chung"
          description="doanhnhanthanhhoahanoi"
          url="https://doanhnhanthanhhoahanoi.com/vi/about/"
        />
      </li>
    </ul>
  );
};

export default Social;
