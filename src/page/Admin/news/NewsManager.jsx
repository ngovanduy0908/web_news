import React from "react";
import { useState } from "react";
import Select from "react-select";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { AiOutlinePlusCircle, AiOutlineDelete } from "react-icons/ai";
import { TbEdit } from "react-icons/tb";
import Button from "../../../components/Buttons/Button";
import ReactQuillEditor from "../../../components/ReactQuill";
const options = [
  { label: "Tin tức hoạt động", value: "tin-tuc-hoat-dong" },
  { label: "Tin tức Xứ Thanh", value: "tin-tuc-xu-thanh" },
  { label: "Tin Hội viên", value: "tin-hoi-vien" },
  { label: "Hoạt động", value: "hoat-dong" },
];

const options_post = [
  { value: "chua_duyet", label: "Chưa duyệt" },
  { value: "da_duyet", label: "Đã duyệt" },
];
const NewsManager = () => {
  const [open, setOpen] = useState(false);
  const {
    register,
    setValue,
    formState: { errors },
    handleSubmit,
  } = useForm({ criteriaMode: "all" });
  const onSubmit = (data) => console.log(data);

  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <div className="relative transition-all ease-linear">
      <div className="bg-white p-4 rounded-xl drop-shadow-new transition-all ease-linear">
        <div className="grid grid-cols-5 gap-4">
          <Select
            options={options}
            className="col-span-2"
            placeholder={"------Tìm danh mục theo------"}
          />
          <Select
            options={options_post}
            className="col-span-2"
            placeholder={"------ Lọc bài viết ------"}
          />
          <button className="py-2 px-4 font-semibold text-base bg-gray-500 rounded text-white hover:bg-primaryColor">
            Tìm kiếm
          </button>
        </div>
        <table className="border border-blue-400 w-full mt-10 bg-white overflow-y-auto relative">
          <thead>
            <tr>
              <th scope="col" className="p-4 border border-blue-400">
                <div className="flex items-center">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="checkbox-all-search" className="sr-only">
                    checkbox
                  </label>
                </div>
              </th>
              <th className="border border-blue-400">Tên bài viết</th>
              <th className="border border-blue-400">Người đăng</th>
              <th className="border border-blue-400">Mô tả</th>
              <th className="border border-blue-400">Thời gian</th>
              <th className="border border-blue-400">Trạng thái</th>
              <th className="border border-blue-400">Chức năng</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="w-4 p-4 text-center">
                <div className="flex items-center">
                  <input
                    id="checkbox-table-search-1"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="checkbox-table-search-1" className="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <td className="text-center line-clamp-1 w-[100px]">
                HTBC tham gia Hội nghị Xúc tiến và Kết nối đầu tư, kinh doanh
              </td>
              <td className="text-center">Mạnh Dũng</td>
              <td className="text-center line-clamp-1 w-[200px]">
                HTBC tham gia Hội nghị Xúc tiến và Kết nối đầu tư, kinh doanh{" "}
              </td>
              <td className="text-center">27/05/2021</td>
              <td className="text-center text-[12px]">Chưa duyệt</td>
              <td className="flex items-center justify-center p-2">
                <Button
                  colorText={"text-white"}
                  colorBgr={"bg-blue-600"}
                  colorHover={"bg-blue-700"}
                  icon={<TbEdit className="text-[18px]" />}
                />
                <Button
                  colorText={"text-white"}
                  colorBgr={"bg-red-700"}
                  colorHover={"bg-red-800"}
                  icon={<AiOutlineDelete className="text-[18px]" />}
                />
              </td>
            </tr>
          </tbody>
        </table>

        <div className="mt-5">
          <div className="flex">
            <Button
              click={handleOpen}
              type="button"
              className="flex items-center"
              title={"Thêm danh mục"}
              colorText={"text-black"}
              colorBgr={"border border-gray-700"}
              colorHover={"bg-gray-100"}
              icon={<AiOutlinePlusCircle className="text-[18px]" />}
            />
            <Button
              title={"Xóa các lựa chọn"}
              colorBgr={"bg-red-500"}
              colorText={"text-white"}
              colorHover={"bg-red-800"}
            />
            <Button
              title={"Duyệt các lựa chọn"}
              colorBgr={"bg-yellow-400 hover:bg-yellow-600"}
              colorText={"text-white"}
            />
          </div>

          {open && (
            <form onSubmit={handleSubmit(onSubmit)} className="w-full mt-2">
              <div>
                <div className="w-full relative">
                  <input
                    type="text"
                    className={`block bg-white rounded focus:outline-none w-full h-[32px] text-[13px] leading-[15px] border-[#cccccc] ${
                      errors.title ? "border-red-500 border-[1px]" : ""
                    }`}
                    {...register("title", {
                      required: "Không được bỏ trống trường này",
                    })}
                    placeholder="Thêm Tiêu đề"
                  />
                  <span className=" text-red-600 text-[18px] absolute top-[50%] right-[10px] translate-y-[-30%]">
                    *
                  </span>
                </div>
                <ErrorMessage
                  errors={errors}
                  name="title"
                  render={({ messages }) => {
                    //console.log("messages", messages);
                    return messages
                      ? Object.entries(messages).map(([type, message]) => (
                          <p
                            className="ml-10 text-[14px] text-red-500"
                            key={type}
                          >
                            {message}
                          </p>
                        ))
                      : null;
                  }}
                />
              </div>
              <div className="mt-2">
                <div className="w-full relative">
                  <input
                    type="text"
                    className={`block bg-white rounded focus:outline-none w-full h-[32px] text-[13px] leading-[15px] border-[#cccccc] ${
                      errors.sub_title ? "border-red-500 border-[1px]" : ""
                    }`}
                    {...register("sub_title", {
                      required: "Không được bỏ trống trường này",
                    })}
                    placeholder="Giới thiệu ngắn gọn"
                  />
                  <span className=" text-red-600 text-[18px] absolute top-[50%] right-[10px] translate-y-[-30%]">
                    *
                  </span>
                </div>
                <ErrorMessage
                  errors={errors}
                  name="sub_title"
                  render={({ messages }) => {
                    //console.log("messages", messages);
                    return messages
                      ? Object.entries(messages).map(([type, message]) => (
                          <p
                            className="ml-10 text-[14px] text-red-500"
                            key={type}
                          >
                            {message}
                          </p>
                        ))
                      : null;
                  }}
                />
              </div>
              <div className="bg-white">
                <ReactQuillEditor
                  {...register("content", {
                    required: true,
                  })}
                  onContentChange={(value) => {
                    setValue("content", value);
                  }}
                  placeholder={"Nhập content..."}
                />
              </div>

              <button
                type="submit"
                className="text-white mt-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Thêm{" "}
              </button>
              <button
                onClick={() => setOpen(false)}
                type="button"
                className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2 ml-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
              >
                Hủy
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsManager;
