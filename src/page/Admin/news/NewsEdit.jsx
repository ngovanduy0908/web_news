import React from "react";
import Form from "../../../components/Form";
import Card from "../../../components/Card/Card";

const NewsEdit = () => {
  const handleFormSubmit = (data) => {
    // Xử lý logic khi submit form
    console.log(data);
  };
  const newsFormFields = [
    {
      name: "title",
      label: "Tiêu đề",
      type: "text",
      value: "tao có khiên",
      col_span: true,
    },
    {
      name: "sub_title",
      label: "Giới thiệu ngắn",
      type: "text",
      col_span: true,
    },
    {
      name: "image",
      label: "Hình ảnh chính",
      type: "file",
      value:
        "https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-6/348319700_1703288040100667_8391237883964741134_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=jine-yQVABoAX8O7Wep&_nc_ht=scontent.fhan17-1.fna&oh=00_AfCBGT3jyzogsn1FRPeL0_S9JLyLaP6JZoelZmpVxHPYfA&oe=64793494",
    },
    {
      name: "description",
      label: "Mô tả",
      type: "react-quill",
      value: "bố mày có khiên",
      col_span: true,
    },
  ];
  return (
    <Card title={"Chỉnh sửa thông tin bài viết"} className={"py-2 px-3"}>
      <Form formFields={newsFormFields} onSubmit={handleFormSubmit} />;
    </Card>
  );
};

export default NewsEdit;
