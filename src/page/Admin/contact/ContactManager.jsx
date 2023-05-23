import React from "react";
import TableV2 from "../../../components/Table/TableV2";
import Card from "../../../components/Card/Card";
import { HiOutlineMail, HiOutlineMailOpen } from "react-icons/hi";
import { BiTrash } from "react-icons/bi";
import PaginationV2 from "../../../components/Pagination/PaginationV2";
import Button from "../../../components/Buttons/Button";
import { BsFillBookmarkFill, BsBookmark } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
const ContactManager = () => {
  const navigate = useNavigate();
  const columnHeader = [
    <input type="checkbox" />,
    "Tên Người Gửi",
    "Chủ Đề",
    "Tiêu Đề Gửi",
    "Thời Gian Gửi",
  ];

  const data = [
    [
      <input type="checkbox" name="shipping_address" />,

      <div className="flex items-center gap-1">
        <HiOutlineMail className="w-[25px] h-[25px]" />
        <span>Ngo Van Duy</span>
      </div>,
      <div>Gửi Góp Ý</div>,
      <div>Đây là tiêu đề </div>,

      <div>03/05/2023</div>,
    ],
    [
      <input type="checkbox" name="shipping_address" />,
      <div
        className="flex items-center gap-1"
        onClick={() => navigate(`/admin/contact/1`)}
      >
        <HiOutlineMailOpen className="w-[25px] h-[25px]" />
        <span>Ngo Van Duy</span>
      </div>,
      <div>Gửi Góp Ý</div>,
      <div>Đây là tiêu đề </div>,

      <div>03/05/2023</div>,
    ],
  ];
  return (
    <Card title={"Danh sách liên hệ"}>
      <Card.Content>
        <TableV2 columns={columnHeader} dataSource={data} />
        {/* <PaginationV2 /> */}
        <div className="flex gap-2 mt-3">
          <Button
            icon={<BiTrash />}
            title={"Xoá Chọn"}
            colorText={"border border-slate-600 gap-2"}
          />
          <Button
            icon={<BiTrash />}
            title={"Xoá Tất Cả"}
            colorText={"border border-slate-600 gap-2"}
          />
          <Button
            icon={<BsFillBookmarkFill />}
            title={"Đánh Dấu Là Chưa Đọc"}
            colorText={"border border-slate-600 gap-2"}
          />
          <Button
            icon={<BsBookmark />}
            title={"Đánh Dấu Là Đã Đọc"}
            colorText={"border border-slate-600 gap-2"}
          />
        </div>
      </Card.Content>
    </Card>
  );
};

export default ContactManager;
