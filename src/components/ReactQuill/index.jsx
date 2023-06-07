import React, { useState, useEffect, useRef } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Quill from "quill";
import ImageResize from "quill-image-resize-module-react";
import { ImageDrop } from "quill-image-drop-module";
import { ReactQuillImageUploader } from "react-quill-image-uploader";
Quill.register("modules/imageResize", ImageResize);
Quill.register("modules/imageDrop", ImageDrop);
// Quill.register("modules/imageUpload", ReactQuillImageUploader);
//Quill.register("modules/imageUploader", ImageUploader);
const ReactQuillEditor = ({ content, setContent }) => {
  const quillRef = useRef(null);
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
      { image: true },
      //[{ handlers: { image: () => {} } }],
      //[{ image: handleImageInsert }],
    ],
    // imageUpload: {
    //   upload: (file) => {
    //     return new Promise((resolve, reject) => {
    //       const reader = new FileReader();
    //       reader.onload = () => {
    //         resolve(reader.result);
    //       };
    //       reader.onerror = reject;
    //       reader.readAsDataURL(file);
    //     });
    //   },
    // },
    imageResize: {
      module: "Resize",
      parchment: Quill.import("parchment"),
      handleStyles: {
        backgroundColor: "black",
        border: "none",
        color: "white",
        boxShadow: "0 0 4px rgba(0,0,0,.4)",
        boxSizing: "",
      },
    },
    imageDrop: true,

    // imageUploader: {
    //   upload: (file) => {
    //     return new Promise((resolve, reject) => {
    //       const reader = new FileReader();
    //       reader.onload = (e) => {
    //         resolve(e.target.result);
    //       };
    //       reader.onerror = (e) => {
    //         reject(e);
    //       };
    //       reader.readAsDataURL(file);
    //     });
    //   },
    // },
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
    "file",
    "video",
    "code-block",
    "color",
    "align",
    "direction",
    "indent",
    "background",
    "script",
  ];

  // useEffect(() => {
  //   if (quillRef.current) {
  //     const quill = quillRef.current.getEditor();

  //     quill.getModule("toolbar").addHandler("image", () => {
  //       const input = document.createElement("input");
  //       input.setAttribute("type", "file");
  //       input.setAttribute("accept", "image/*");
  //       input.click();

  //       input.onchange = async () => {
  //         const file = input.files[0];
  //         const imageUrl = await uploadImage(file);

  //         const range = quill.getSelection(true);
  //         quill.insertEmbed(range.index, "image", imageUrl);
  //       };
  //     });

  //     const uploadImage = (file) => {
  //       return new Promise((resolve, reject) => {
  //         const reader = new FileReader();
  //         reader.onload = () => {
  //           resolve(reader.result);
  //         };
  //         reader.onerror = (error) => {
  //           reject(error);
  //         };
  //         reader.readAsDataURL(file);
  //       });
  //     };

  //     // quill.import("modules/imageUploader", ImageUploader, true);

  //     // quill.setOptions({
  //     //   modules: {
  //     //     imageUploader: {
  //     //       upload: (file) => uploadImage(file),
  //     //     },
  //     //   },
  //     // });
  //   }
  // }, []);

  const handleChange = (value) => {
    setContent(value);
  };

  return (
    <ReactQuill
      ref={quillRef}
      value={content}
      onChange={handleChange}
      modules={modules}
      formats={formats}
      className="border border-slate-400"
    />
  );
};

export default ReactQuillEditor;
