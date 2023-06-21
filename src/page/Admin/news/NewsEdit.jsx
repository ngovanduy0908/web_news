import React, { useCallback, useEffect, useState } from "react";
import Form from "../../../components/Form";
import Card from "../../../components/Card/Card";
import axios from "axios";
import slugify from "slugify";

const NewsEdit = ({ idItem, fetchDataWithFilter, setOpen }) => {
  const [item, setItem] = useState(idItem);

  const handleFormSubmit = async (data) => {
    // console.log(data);
    try {
      const slug = slugify(data.title, {
        replacement: "-", // replace spaces with replacement character, defaults to `-`
        remove: undefined, // remove characters that match regex, defaults to `undefined`
        lower: false, // convert to lower case, defaults to `false`
        strict: false, // strip special characters except replacement, defaults to `false`
        locale: "vi", // language code of the locale to use
        trim: true, // trim leading and trailing replacement chars, defaults to `true`
      });
      const value = { ...data, slug };
      const responre = await axios.put(
        `http://localhost:3001/api/posts/update/${item.id}`,
        value
      );
      console.log(responre);
      setOpen(false);
      fetchDataWithFilter();
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchDataWithFilter();
  }, [item]);

  const newsFormFields = [
    {
      name: "title",
      label: "Tiêu đề",
      type: "text",
      value: item?.title,
      col_span: true,
    },
    {
      name: "subcontent",
      label: "Giới thiệu ngắn",
      type: "text",
      value: item ? item.subcontent : "",
      col_span: true,
    },
    {
      name: "image",
      label: "Hình ảnh chính",
      type: "file",
      value: "",
      // "https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-6/354611404_552136603802009_5411184715209704818_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=IlnTWCz5BlQAX_Mp-Oe&_nc_ht=scontent.fhan17-1.fna&oh=00_AfDJ1DdOAzufc1Ui3MBVJ2aRygRiyDLbYsQoJKnC_HwriQ&oe=64961C34",
    },
    {
      name: "content",
      label: "Mô tả",
      type: "react-quill",
      value: "có khiên",
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
