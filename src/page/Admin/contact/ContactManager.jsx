import React from "react";
import TableV2 from "../../../components/Table/TableV2";
import Card from "../../../components/Card/Card";
import { HiOutlineMail } from "react-icons/hi";
import PaginationV2 from "../../../components/Pagination/PaginationV2";

const ContactManager = () => {
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
  ];
  return (
    <Card title={"Danh sách liên hệ"}>
      <Card.Content>
        <TableV2 columns={columnHeader} dataSource={data} />
        {/* <PaginationV2 /> */}
      </Card.Content>
    </Card>
  );
};

export default ContactManager;
