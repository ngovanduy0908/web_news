import React, { useState } from "react";
import Card from "../../../components/Card/Card";
import ReactQuillEditor from "../../../components/ReactQuill";
import Button from "../../../components/Buttons/Button";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
const ContactReply = ({ dataReply }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  //console.log(id);
  const [content, setContent] = useState(
    `<br/><br/>----------<br/>Best regards,<br/><br/>admin<br/>Administrator<br/><br/>E-mail: hoidoanhnhanthanhhoa.hbta@gmail.com`
  );

  const sendReply = async () => {
    const strippedContent = content.replace(/(<([^>]+)>)/gi, "").trim();

    if (strippedContent === "") {
      // Nếu nội dung sau khi loại bỏ các thẻ HTML và khoảng trắng trống,
      // hiển thị thông báo lỗi hoặc thực hiện các xử lý khác
      alert("Vui lòng nhập nội dung");
      return;
    }
    console.log("content: ", content);
    const data = { contactId: id, content: content };
    try {
      await toast.promise(axios.post("http://localhost:3001/api/rely", data), {
        pending: "Đang xử lý...",
        success: "Gửi phản hồi thành công",
        error: "Lỗi! Không thể gửi phản hồi... ",
      });
      //console.log(res.data);
      //navigate(`/admin/contact/${dataReply.contact_id}`, { reload: true });
      window.location.href = `/admin/contact/${dataReply.contact_id}`;
    } catch (error) {
      console.log(error.message);
    }
    //console.log(data);
  };
  return (
    <Card title={"Gửi Phản Hồi"}>
      <Card.Content>
        <table class="border-collapse border border-slate-500">
          <tbody>
            <tr>
              <td class="border border-slate-700 px-2 py-1">Tiêu đề gửi</td>
              <td class="border border-slate-700 px-2 py-1">
                {dataReply.title}
              </td>
            </tr>
            <tr>
              <td class="border border-slate-700 px-2 py-1">
                Gửi liên hệ tới email
              </td>
              <td class="border border-slate-700 px-2 py-1">
                {dataReply.email}
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
                  onClick={sendReply}
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
