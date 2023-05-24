import React from "react";
import Card from "../../../components/Card/Card";
import { RiArrowRightSFill } from "react-icons/ri";
import Button from "../../../components/Buttons/Button";
import { TbEdit } from "react-icons/tb";
import { AiOutlineDelete } from "react-icons/ai";
const UserDetail = () => {
  return (
    <div>
      <Card title={"Thông tin chung"}>
        <Card.Content>
          <div className="flex">
            <img
              src="https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-6/345051678_636468057966827_669236983773815341_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=zi5gEJiE2HkAX_N6pC-&_nc_ht=scontent.fhan17-1.fna&oh=00_AfCWMuJVblqJJAr24gKOVidb14LI3oEU_1RgRl_VeLZ9vQ&oe=6472E6CC"
              alt=""
              width={200}
              className=" drop-shadow-xl border border-gray-600 rounded-lg backdrop-blur"
            />

            <div className=" relative w-full pl-5">
              <table className="border border-gray-400 w-full text-base rounded">
                <colgroup>
                  <col width={"30%"} />
                </colgroup>
                <tbody>
                  <tr className="border border-gray-400">
                    <th className="text-left p-2">Họ và tên</th>
                    <td>Ngô Văn Duy</td>
                  </tr>
                  <tr className="border border-gray-400">
                    <th className="text-left p-2">Ngày tháng năm sinh</th>
                    <td>09/08/2001</td>
                  </tr>
                  <tr className="border border-gray-400">
                    <th className="text-left p-2">Giới tính</th>
                    <td>Nam</td>
                  </tr>
                  <tr className="border border-gray-400">
                    <th className="text-left p-2">Ngày tham gia</th>
                    <td>24/05/2023</td>
                  </tr>
                </tbody>
              </table>
              <div className="mt-3">
                <p className="flex items-center">
                  <RiArrowRightSFill className="text-[22px]" />
                  Tài khoản: <b>"tên tài khoản"</b> (email tài khoản)
                </p>
                <p className="flex items-center">
                  <RiArrowRightSFill className="text-[22px]" />
                  Lần truy cập trước: "Thứ sáu, 19/05/2023"
                </p>
              </div>
              <div className="flex justify-end">
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
          </div>
        </Card.Content>
      </Card>
    </div>
  );
};

export default UserDetail;
