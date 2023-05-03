import React, { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { useForm } from "react-hook-form";
import Test from "../../components/ShareSocial/ShareFaceBook";

const Basic = () => {
  const { currentUser } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(watch(data));
  const resetFields = () => {
    reset();
  };
  return (
    <div className="">
      <form
        action=""
        onSubmit={handleSubmit(onSubmit)}
        className="w-[75%] m-auto"
      >
        <div className="flex items-center">
          <p className="w-[23%] text-end mr-2 text-[14px]">Họ và tên đêm</p>
          <input
            type="text"
            className={`w-[66%] outline-none h-full px-3 py-2 mt-2 my-2 text-[13px] border-[1px] border-[#ccc] rounded-md shadow-lg`}
          />
        </div>

        <div className="flex items-center relative">
          <p className="w-[23%] text-end mr-2 text-[14px]">Tên</p>
          <input
            type="text"
            {...register("lastName", {
              required: "Trường này không được để trống",
            })}
            className={`w-[66%] outline-none h-full px-3 py-2 mt-2 my-2 text-[13px] border-[1px] border-[#ccc] rounded-md shadow-lg`}
            defaultValue={currentUser ? currentUser.displayName : ""}
          />
          <span className=" text-red-600 text-[18px] absolute top-[50%] right-[70px] translate-y-[-30%]">
            *
          </span>
        </div>
        {errors.lastName && (
          <p className="text-sm text-center text-red-500">
            {errors.lastName.message}
          </p>
        )}
        <div className="flex items-center ">
          <p className="w-[23%] text-end mr-2 text-[14px]">Giới tính</p>

          <div className="flex bg-white items-center gap-2 w-[66%] px-3 py-2 mt-2 my-2 rounded-md shadow-lg border-[1px] border-[#ccc] ">
            <label htmlFor="" className="flex items-center gap-1">
              <input type="radio" value="N" />
              <span className="text-sm">N/A</span>
            </label>
            <label htmlFor="" className="flex items-center gap-1">
              <input type="radio" value="N" />
              <span className="text-sm">Nam</span>
            </label>
            <label htmlFor="" className="flex items-center gap-1">
              <input type="radio" value="N" />
              <span className="text-sm">Nữ</span>
            </label>
          </div>
        </div>

        <div className="flex items-center relative">
          <p className="w-[23%] text-end mr-2 text-[13.5px]">
            Ngày tháng năm sinh
          </p>

          <input
            type="date"
            {...register("birthday", {
              required: "Trường này không được để trống",
            })}
            className={`w-[27%]  outline-none h-full px-3 pt-3 bg-gray-200 pb-0 mt-2 my-[8px] text-[13px] border-[1px] border-[#ccc] rounded-sm shadow-lg`}
          />
          <span className=" text-red-600 text-[18px] absolute top-[50%] right-[55%] translate-y-[-30%]">
            *
          </span>
        </div>
        {errors.birthday && (
          <p className="text-sm text-center text-red-500">
            {errors.birthday.message}
          </p>
        )}

        <div className="flex items-center">
          <p className="w-[23%] text-end mr-2 text-[14px]">Chữ ký</p>
          <textarea
            type="text"
            className={`w-[66%] outline-none h-full px-3  mt-2 my-2 text-[13px] border-[1px] border-[#ccc] rounded-md shadow-lg`}
          />
        </div>

        <div className="flex items-center">
          <p className="w-[23%] text-end mr-2 text-[14px]">Hiển thị Email</p>

          <select
            name=""
            id=""
            className={`w-[27%] outline-none h-full px-3 py-0  mt-2 my-2 text-[13px] border-[1px] border-[#ccc] rounded-md shadow-lg`}
          >
            <option value="">Có</option>
            <option value="">Không</option>
          </select>
        </div>

        <div className="text-center text-[13px] mt-3">
          <button
            className="bg-gray-50 p-2 mr-4 rounded-lg"
            type="button"
            onClick={resetFields}
          >
            Thiết lập lại
          </button>
          <button
            className="bg-[#428bca] p-2 rounded-lg text-white"
            type="submit"
          >
            Đăng ký thành viên
          </button>
        </div>
      </form>
    </div>
  );
};

export default Basic;
