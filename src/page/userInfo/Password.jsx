import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../context/authContext";

const Password = () => {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm();
  const resetFields = () => {
    reset();
  };
  const { currentUser } = useContext(AuthContext);
  return (
    <div>
      <form>
        <div className="flex items-center relative">
          <p className="w-[23%] text-end mr-2 text-[14px]">Mật khẩu cũ</p>
          <input
            type="password"
            {...register("passwordOld", {
              required: "Trường này không được để trống",
            })}
            className={`w-[50%] outline-none h-full px-3 py-2 mt-2 my-2 text-[13px] border-[1px] border-[#ccc] rounded-md shadow-lg`}
            // defaultValue={currentUser ? currentUser.displayName : ""}
          />
          <span className=" text-red-600 text-[18px] absolute top-[50%] right-[28%] translate-y-[-30%]">
            *
          </span>
        </div>
        <div className="flex items-center relative">
          <p className="w-[23%] text-end mr-2 text-[14px]">Mật khẩu mới</p>
          <input
            type="password"
            {...register("passwordNew", {
              required: "Trường này không được để trống",
            })}
            className={`w-[50%] outline-none h-full px-3 py-2 mt-2 my-2 text-[13px] border-[1px] border-[#ccc] rounded-md shadow-lg`}
            // defaultValue={currentUser ? currentUser.displayName : ""}
          />
          <span className=" text-red-600 text-[18px] absolute top-[50%] right-[28%] translate-y-[-30%]">
            *
          </span>
        </div>
        <div className="flex items-center relative">
          <p className="w-[23%] text-end mr-2 text-[14px]">
            Nhập lại mật khẩu mới
          </p>
          <input
            type="password"
            {...register("confirmPassword ", {
              required: "Trường này không được để trống",
            })}
            className={`w-[50%] outline-none h-full px-3 py-2 mt-2 my-2 text-[13px] border-[1px] border-[#ccc] rounded-md shadow-lg`}
            // defaultValue={currentUser ? currentUser.displayName : ""}
          />
          <span className=" text-red-600 text-[18px] absolute top-[50%] right-[28%] translate-y-[-30%]">
            *
          </span>
        </div>

        <div className="text-center text-[13px] mt-3 w-[72%]">
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
            Chấp nhận
          </button>
        </div>
      </form>
    </div>
  );
};

export default Password;
