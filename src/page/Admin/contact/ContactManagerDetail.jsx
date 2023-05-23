import React from "react";
import Card from "../../../components/Card/Card";
import { BsFileEarmarkText } from "react-icons/bs";
import Button from "../../../components/Buttons/Button";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import ContactReply from "./ContactReply";
import Reply from "./Reply";

const ContactManagerDetail = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const { id } = useParams();
  const op = searchParams.get("op");

  console.log("op = ", op);
  const reply = () => {
    navigate("/admin/contact/1?op=reply");
  };

  const back = () => {
    navigate("/admin/contact");
  };
  return (
    <>
      {op ? (
        // truyền value qua props
        <ContactReply />
      ) : (
        <Card title={"Chi Tiết Liên Hệ"}>
          <Card.Content>
            <div className="flex items-center gap-2 mb-2">
              <BsFileEarmarkText />
              <span className="text-[16px] text-[#ccc] font-bold">
                Đây là tiêu đề
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
                    <p>
                      <span>Điện thoại: </span>
                      <span>0123456789</span>
                    </p>
                    <p>
                      <span>Địa chỉ: </span>
                      <span>thanh xuan thanh ha hai duong</span>
                    </p>
                    <p>11:28 23/05/2023</p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-700 w-[13%] py-1 px-2">
                    Chủ đề
                  </td>
                  <td className="border border-slate-700 py-1 px-2">
                    Đây là chủ đề
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-700 py-1 px-2" colSpan={2}>
                    Đây là nội dung
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="mt-2 py-2 border border-slate-500 bg-[#f4f4f4] flex justify-center gap-2">
              <Button
                title={"Gửi phản hồi"}
                colorText={"border border-slate-500  bg-white"}
                click={reply}
              />
              <Button
                title={"Xóa"}
                colorText={"border border-slate-500  bg-white"}
              />
              <Button
                title={"Quay Lại"}
                colorText={"border border-slate-500  bg-white"}
                click={back}
              />
              <Button
                title={"Đánh dấu là chưa đọc"}
                colorText={"border border-slate-500  bg-white"}
              />
            </div>
          </Card.Content>

          <Card.Content>
            {/* se truyen data qua prop */}
            <Reply />
          </Card.Content>
        </Card>
      )}
    </>
  );
};

export default ContactManagerDetail;
