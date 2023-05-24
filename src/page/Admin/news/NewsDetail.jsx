import React from "react";
import Card from "../../../components/Card/Card";
import { RiArrowRightSFill } from "react-icons/ri";
import Button from "../../../components/Buttons/Button";
import { TbEdit } from "react-icons/tb";
import { AiOutlineDelete } from "react-icons/ai";
const NewsDetail = () => {
  return (
    <Card title={"Chi tiết bài viết"}>
      <div className=" relative w-full p-5">
        <table className="border border-gray-400 w-full text-base rounded">
          <colgroup>
            <col width={"30%"} />
          </colgroup>
          <tbody>
            <tr className="border border-gray-400">
              <th className="text-left p-2">Tiêu đề</th>
              <td>Ngô Văn Duy</td>
            </tr>
            <tr className="border border-gray-400">
              <th className="text-left p-2">Giới thiệu ngắn gọn</th>
              <td>09/08/2001</td>
            </tr>
            <tr className="border border-gray-400">
              <th className="text-left p-2">Nội dung chi tiết</th>
              <td>Nam</td>
            </tr>
            <tr className="border border-gray-400">
              <th className="text-left p-2">Hình ảnh</th>
              <td>24/05/2023</td>
            </tr>
          </tbody>
        </table>

        <div className="flex justify-end mt-4">
          <Button
            icon={<TbEdit className="text-[18px]" />}
            colorBgr={"bg-green-500 text-white hover:bg-green-800"}
          />
          <Button
            icon={<AiOutlineDelete className="text-[18px]" />}
            colorBgr={"bg-red-600 text-white hover:bg-red-800"}
          />
        </div>
      </div>
    </Card>
  );
};

export default NewsDetail;
