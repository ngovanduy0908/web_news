import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
const ReactQuillEditor = () => {
  const [content, setContent] = useState("");

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "blockquote",
    "code-block",
    "list",
    "bullet",
    "link",
    "image",
    "video",
  ];

  const handleChange = (value) => {
    setContent(value);
  };
  return (
    <ReactQuill
      value={content}
      onChange={handleChange}
      modules={modules}
      formats={formats}
      placeholder="Write something amazing..."
      className="mt-4 border border-slate-400"
    />
  );
};

export default ReactQuillEditor;
