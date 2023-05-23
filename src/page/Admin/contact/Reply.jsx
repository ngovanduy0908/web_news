import React from "react";
import { BsFileEarmarkText } from "react-icons/bs";

const Reply = () => {
  return (
    <>
      <div className="flex items-center gap-2 mb-2">
        <BsFileEarmarkText />
        <span className="text-[16px] text-[#ccc] font-bold">
          Re: Đây là tiêu đề
        </span>
      </div>
      <table className="border-collapse border border-slate-500 w-full">
        <tbody>
          <tr>
            <td className="py-1 px-2 w-[13%] align-baseline">
              Thông tin người gửi
            </td>
            <td className="border border-slate-700 py-1 px-2">
              <p>
                <span className="text-[#0074a2] mr-[5px]">
                  Họ tên người gửi ở đây
                </span>
                <span>Email ở đây</span>
              </p>
            </td>
          </tr>
          <tr>
            <td className="border border-slate-700 w-[13%] py-1 px-2">
              Phản Hồi Tới
            </td>
            <td className="border border-slate-700 py-1 px-2">
              11:28 23/05/2023
            </td>
          </tr>
          <tr>
            <td className="border border-slate-700 py-1 px-2" colSpan={2}>
              <br />
              <br />
              ----------
              <br />
              Best regards,
              <br />
              <br />
              admin
              <br />
              Administrator
              <br />
              <br />
              E-mail: hoidoanhnhanthanhhoa.hbta@gmail.com
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Reply;
