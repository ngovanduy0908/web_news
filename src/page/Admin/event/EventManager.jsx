import React, { useState } from "react";
import Card from "../../../components/Card/Card";
import TableV2 from "../../../components/Table/TableV2";
import ModalV2 from "../../../components/Modal/ModalV2";
import Button from "../../../components/Buttons/Button";
import FormEvent from "./FormEvent";
import Modal from "../../../components/Modal/Modal";
import { AiFillEdit } from "react-icons/ai";

const EventManager = () => {
  const [open, setOpen] = useState(false);
  const columns = [
    <input type="checkbox" name="" id="" />,
    "Thời Gian Diễn Ra",
    "Sự Kiện",
    "Thao Tác",
  ];

  const data = [
    [
      <input type="checkbox" name="" id="" />,

      <p>
        <p>16/04/2019</p>
        <span>"7:30 - 11:30"</span>
      </p>,
      <span>
        "Hội nghị Lãnh đạo thành phố gặp gỡ chuyên gia tri thức, doanh nhân kiều
        ...
      </span>,
      <div>
        <Button icon={<AiFillEdit />} />
      </div>,
    ],
  ];
  return (
    <>
      <Button
        title="Thêm Mới"
        colorBgr="bg-blue-500"
        colorText="text-white mb-2"
        onClick={() => setOpen(true)}
      />
      <Card title={"Danh Sách Sự Kiện"}>
        <Card.Content>
          <TableV2 columns={columns} dataSource={data} />
        </Card.Content>
      </Card>

      <Modal
        open={open}
        setOpen={setOpen}
        title={"Thêm mới sự kiện"}
        classNameChildren={"w-[1000px] left-[8%]"}
      >
        <FormEvent />
      </Modal>
    </>
  );
};

export default EventManager;
