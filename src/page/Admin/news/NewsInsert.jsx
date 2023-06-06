import React from "react";
import Form from "../../../components/Form";
import Card from "../../../components/Card/Card";

const NewsInsert = () => {
  const handleFormSubmit = (data) => {
    // Xử lý logic khi submit form

    console.log(data);
  };
  const newsFormFields = [
    { name: "title", label: "Tiêu đề", type: "text", col_span: true },
    {
      name: "sub_title",
      label: "Giới thiệu ngắn",
      type: "text",
      col_span: true,
    },
    {
      name: "category",
      label: "Category",
      type: "select",
      options: [
        { value: "tin_hoat_dong", label: "Tin Hoạt Động" },
        { value: "tin_hoi_vien", label: "Tin Hội Viên" },
        { value: "tin_tuc_thanh_hoa", label: "Tin Tức Thanh Hóa" },
        { value: "phuong_huong_hoat_dong", label: "Phương Hướng Hoạt Động" },
      ],
    },
    { name: "image", label: "Hình ảnh chính", type: "file", value: "" },
    {
      name: "description",
      label: "Mô tả",
      type: "react-quill",
      col_span: true,
    },
  ];
  return (
    <Card title={"Thêm bài viết"} className={"py-2 px-3"}>
      <Form formFields={newsFormFields} onSubmit={handleFormSubmit} />;
    </Card>
  );
};

export default NewsInsert;
