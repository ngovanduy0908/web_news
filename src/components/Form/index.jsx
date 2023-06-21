import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { ButtonV2 } from "../Buttons/ButtonV2";
import Button from "../Buttons/Button";
import Select from "react-select";
import ReactQuillEditor from "../ReactQuill";
import { useState } from "react";
const Form = ({ formFields, onSubmit }) => {
  const [imageDeputy, setImageDeputy] = useState({
    firstImage: null,
    secondImage: null,
  });
  const { register, handleSubmit, setValue, watch, getValues } = useForm();
  const contentQuill = formFields.find((item) => item.type === "react-quill");
  useEffect(() => {
    //console.log(contentQuill);
    const imageField = formFields.find((item) => item.name === "image");
    const imageFieldDeputy = formFields.find(
      (item) => item.name === "image_deputy"
    );

    if (imageField) {
      setImageDeputy((prevState) => ({
        ...prevState,
        firstImage: imageField.value,
      }));
      setValue("image", imageField.value[0]);
    }

    if (imageFieldDeputy) {
      setImageDeputy((prevState) => ({
        ...prevState,
        secondImage: imageFieldDeputy.value,
      }));
      setValue("image_deputy", imageFieldDeputy.value);
    }

    formFields.forEach((field) => {
      setValue(field.name, field.value);
    });
  }, [formFields]);

  const [content, setContent] = useState(contentQuill.value);

  //const values = watch();
  const handleFormSubmit = (data) => {
    console.log("day", data);
    // const formData = {
    //   ...data,
    //   file: imageURL || (imageURL && imageDeputy),
    // };

    onSubmit(data);
  };

  const handleSelectChange = (selectedOption, fieldName) => {
    setValue(fieldName, selectedOption);
  };

  const handleImageChange = (e, inputName) => {
    const file = e.target.files[0];
    console.log(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageDeputy((prevState) => ({
          ...prevState,
          [inputName]: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };
  //console.log(imageURL);

  const renderField = (field) => {
    //console.log(defaultValue);
    if (field.type === "react-quill") {
      return (
        <>
          <span className=" font-semibold text-sm ">{field.label}</span>
          <ReactQuillEditor
            {...register(field.name)}
            defaultValue={field.value}
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
              handleSelectChange(selectedOption.value, field.name)
            }
            value={field.value}
            placeholder={`${field.label}`}
          />
        </>
      );
    }

    if (field.type === "file" && field.name === "image") {
      return (
        <div className={field.col_span ? "col-span-2" : ""} key={field.name}>
          <label>
            <span className="block font-semibold text-sm">{field.label}</span>
            {imageDeputy.firstImage ? (
              <div>
                <img
                  width={200}
                  src={imageDeputy.firstImage}
                  alt="Uploaded"
                  style={{ width: "200px" }}
                  className="object-cover"
                />
              </div>
            ) : (
              <div>
                <img
                  width={200}
                  src={
                    field.label === "Hình đại diện"
                      ? "https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-6/347567248_1488831868525963_752115650059248371_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=oSSU2GSFFFsAX_zdckb&_nc_ht=scontent.fhan17-1.fna&oh=00_AfDoE18anvSitq-n8VVv__b3uKMndjGbXEBo-IqSb_6nJg&oe=6479B2B3"
                      : ""
                  }
                  alt="Uploaded"
                  style={{ width: "200px" }}
                  className="object-cover"
                />
              </div>
            )}
            <input
              type={field.type}
              {...register(field.name)}
              onChange={(e) => handleImageChange(e, "firstImage")}
              className="w-full rounded h-[36px] border border-gray-300 cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none"
            />
          </label>
        </div>
      );
    }
    if (field.type === "file" && field.name === "image_deputy") {
      return (
        <div className={field.col_span ? "col-span-2" : ""} key={field.name}>
          <label>
            <span className="block font-semibold text-sm">{field.label}</span>
            {imageDeputy.secondImage ? (
              <div>
                <img
                  width={200}
                  src={imageDeputy.secondImage}
                  alt="Uploaded"
                  style={{ width: "200px" }}
                  className="object-cover"
                />
              </div>
            ) : (
              <div>
                <img
                  width={200}
                  src={
                    field.label === "Hình ảnh người đại diện"
                      ? "https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-6/347567248_1488831868525963_752115650059248371_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=oSSU2GSFFFsAX_zdckb&_nc_ht=scontent.fhan17-1.fna&oh=00_AfDoE18anvSitq-n8VVv__b3uKMndjGbXEBo-IqSb_6nJg&oe=6479B2B3"
                      : ""
                  }
                  alt="Uploaded"
                  style={{ width: "200px" }}
                  className="object-cover"
                />
              </div>
            )}
            <input
              type={field.type}
              {...register(field.name)}
              onChange={(e) => handleImageChange(e, "secondImage")}
              className="w-full rounded h-[36px] border border-gray-300 cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none"
            />
          </label>
        </div>
      );
    }

    // Hiển thị các trường khác
    return (
      <label key={field.name}>
        <span className="block font-semibold text-sm ">{field.label}</span>
        <input
          type={field.type}
          {...register(field.name)}
          defaultValue={field.value}
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
          className={`${field.col_span === true ? "col-span-2" : ""}`}
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
