import React from "react";
import { useForm } from "react-hook-form";
import { ButtonV2 } from "../Buttons/ButtonV2";
import Button from "../Buttons/Button";
import Select from "react-select";
import ReactQuillEditor from "../ReactQuill";
import { useState } from "react";
const Form = ({ formFields, onSubmit }) => {
  const [content, setContent] = useState();
  const { register, handleSubmit, setValue } = useForm();

  const handleFormSubmit = (data) => {
    onSubmit(data);
  };

  const handleSelectChange = (selectedOption, fieldName) => {
    setValue(fieldName, selectedOption);
  };

  const renderField = (field) => {
    if (field.type === "react-quill") {
      return (
        <>
          <span className=" font-semibold text-sm ">{field.label}</span>
          <ReactQuillEditor
            {...register(field.name, { required: true })}
            content={content}
            setContent={(value) => {
              setContent(value);
              setValue(field.name, value);
            }}
            // onContentChange={(value) => {
            //   setValue("content", value);
            // }}
          />
        </>
      );
    }

    if (field.type === "select") {
      return (
        <>
          <span className=" font-semibold text-sm ">{field.label}</span>
          <Select
            options={field.options}
            onChange={(selectedOption) =>
              handleSelectChange(selectedOption, field.name)
            }
            placeholder={`${field.label}`}
          />
        </>
      );
    }

    // Hiển thị các trường khác
    return (
      <label key={field.name}>
        <span className="block font-semibold text-sm ">{field.label}</span>
        <input
          type={field.type}
          {...register(field.name)}
          className="w-full rounded h-[36px] border border-gray-300 cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none"
        />
      </label>
    );
  };
  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className="grid grid-cols-2 gap-5 text-left"
    >
      {formFields.map((field, index) => (
        <div
          className={`${field.type === "react-quill" ? "col-span-2" : ""}`}
          key={index}
        >
          {renderField(field)}
        </div>
      ))}

      <Button
        type={"submit"}
        colorBgr={
          "col-span-2 bg-blue-500 hover:bg-blue-700 text-white font-semibold justify-center"
        }
        title={"Save"}
      />
    </form>
  );
};

export default Form;
