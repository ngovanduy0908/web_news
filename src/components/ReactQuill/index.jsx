import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Quill from "quill";
import ImageResize from "quill-image-resize-module-react";
import { ImageDrop } from "quill-image-drop-module";

Quill.register("modules/imageResize", ImageResize);
Quill.register("modules/imageDrop", ImageDrop);
const ReactQuillEditor = ({ onContentChange, placeholder }) => {
  const [content, setContent] = useState("");

  const modules = {
    toolbar: [
      [
        { header: "1" },
        { header: "2" },
        { header: [3, 4, 5, 6] },
        { font: [] },
      ],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "video", "image"],
      ["clean"],
      ["code-block"],
      [{ color: [] }],
      [{ background: [] }], // dropdown with defaults from theme
      [{ font: [] }],
      [{ align: [] }],
      [{ script: "sub" }, { script: "super" }], // superscript/subscript
      [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
      [{ direction: "rtl" }],
    ],
    imageResize: {
      parchment: Quill.import("parchment"),
      modules: ["Resize", "DisplaySize"],
    },
    imageDrop: true,
  };

  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "link",
    "image",
    "video",
    "code-block",
    "color",
    "align",
    "direction",
    "indent",
    "background",
    "script",
  ];

  const handleChange = (value) => {
    setContent(value);
    onContentChange(value);
  };
  return (
    <ReactQuill
      value={content}
      onChange={handleChange}
      modules={modules}
      formats={formats}
      placeholder={placeholder}
      className="mt-4 border border-slate-400"
    />
  );
};

export default ReactQuillEditor;
