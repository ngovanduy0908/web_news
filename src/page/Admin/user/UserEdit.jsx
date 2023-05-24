import React from "react";
import Form from "../../../components/Form";
import Card from "../../../components/Card/Card";

const UserEdit = () => {
  const handleFormSubmit = (data) => {
    // Xử lý logic khi submit form
    console.log(data);
  };

  const userFormFields = [
    { name: "first_name", label: "Họ và tên đệm", type: "text" },
    { name: "last_name", label: "Tên", type: "text" },
    { name: "account", label: "Tài khoản", type: "text" },
    {
      name: "gender",
      label: "Giới tính",
      type: "select",
      options: [
        { value: "Nam", label: "Nam" },
        { value: "Nữ", label: "Nữ" },
      ],
    },
    { name: "birthday", label: "Ngày tháng năm sinh", type: "date" },
    { name: "email", label: "Email", type: "email" },
    { name: "password", label: "Mật khẩu", type: "password" },
    { name: "confirm_password", label: "Nhập lại mật khẩu", type: "password" },
  ];
  return (
    <Card title={"Chỉnh sửa thông tin tài khoản"} className={"py-2 px-3"}>
      <Form formFields={userFormFields} onSubmit={handleFormSubmit} />
    </Card>
  );
};

export default UserEdit;
