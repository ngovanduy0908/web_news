import React, { useState } from "react";
import Card from "../../../components/Card/Card";
import ReactQuillEditor from "../../../components/ReactQuill";
import Button from "../../../components/Buttons/Button";
import { useNavigate } from "react-router-dom";

const ContactReply = () => {
  const navigate = useNavigate();
  const [content, setContent] = useState(
    `<br><br>----------<br>Best regards,<br><br>admin<br>Administrator<br><br>E-mail: hoidoanhnhanthanhhoa.hbta@gmail.com`
  );

  const sendReply = () => {
    const strippedContent = content.replace(/(<([^>]+)>)/gi, "").trim();

    if (strippedContent === "") {
      // Nếu nội dung sau khi loại bỏ các thẻ HTML và khoảng trắng trống,
      // hiển thị thông báo lỗi hoặc thực hiện các xử lý khác
      alert("Vui lòng nhập nội dung");
      return;
    }
    console.log("content: ", content);
    navigate("/admin/contact/1");
  };
  return (
    <Card title={"Gửi Phản Hồi"}>
      <Card.Content>
        <table class="border-collapse border border-slate-500">
          <tbody>
            <tr>
              <td class="border border-slate-700 px-2 py-1">Tiêu đề gửi</td>
              <td class="border border-slate-700 px-2 py-1">
                Lấy tiêu đề từ api để vào đây
              </td>
            </tr>
            <tr>
              <td class="border border-slate-700 px-2 py-1">
                Gửi liên hệ tới email
              </td>
              <td class="border border-slate-700 px-2 py-1">
                Lấy Email từ api để vào đây
              </td>
            </tr>
            <tr>
              <td class="border border-slate-700 " colSpan={2}>
                <ReactQuillEditor content={content} setContent={setContent} />
              </td>
            </tr>

            <tr>
              <td class="border border-slate-700 py-2" colSpan={2}>
                <Button
                  colorBgr={
                    "bg-[#428bca] border border-[#357ebd] m-auto text-white "
                  }
                  title={"Gửi phản hồi"}
                  click={sendReply}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </Card.Content>
    </Card>
  );
};

export default ContactReply;
