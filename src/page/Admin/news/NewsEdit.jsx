import React from "react";
import Form from "../../../components/Form";

const NewsEdit = () => {
  const handleFormSubmit = (data) => {
    // Xử lý logic khi submit form
    console.log(data);
  };
  const newsFormFields = [
    { name: "title", label: "Tiêu đề", type: "text" },
    { name: "sub_title", label: "Giới thiệu ngắn", type: "text" },
    { name: "image", label: "Hình ảnh", type: "file" },
    { name: "description", label: "Mô tả", type: "react-quill" },
  ];
  return <Form formFields={newsFormFields} onSubmit={handleFormSubmit} />;
};

export default NewsEdit;
