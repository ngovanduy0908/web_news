import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { MdKey } from "react-icons/md";
import { AuthContext } from "../../context/authContext";

const SafeMode = () => {
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
      <div className="flex items-center justify-center gap-2 font-bold text-[20px] mb-2">
        <AiFillSafetyCertificate />
        <h3>Bật chế độ an toàn</h3>
      </div>

      <div className="text-[14px] bg-gray-50 shadow-md p-2 rounded-md">
        <span className="font-bold">Chế độ an toàn đang ở trạng thái tắt!</span>
        <br />
        - Nếu không có nhu cầu chỉnh sửa thông tin tài khoản, bạn nên bật chế độ
        này. Nó sẽ giúp cho bạn tránh được những thay đổi ngoài ý muốn.
        <br />
        - Khi bạn kích hoạt chế độ an toàn, hệ thống sẽ gửi đến email của bạn
        một mã xác minh. Mã xác minh này cũng được dùng để tắt chế độ an toàn.
        Nó có hiệu lực trong khoảng thời gian giữa hai lần bật - tắt. Sau khi
        bạn tắt chế độ an toàn, mã xác minh này sẽ vô giá trị.
        <br />
        - Để bật chế độ an toàn, bạn hãy thực hiện theo các bước sau:
        <br />
        1.Khai báo lại mật khẩu đăng nhập
        <br />
        2.Click vào nút Gửi mã xác minh
        <br />
        3.Kiểm tra mail thông báo Mã xác minh và chép mã đó vào ô Mã xác minh
        dưới đây
        <br />
        4.Click vào nút Chấp nhận.
      </div>

      <form action="" className="mt-2">
        <div className="flex items-center relative">
          <p className="w-[23%] text-end mr-2 text-[14px]">Mật khẩu</p>
          <div className="border-t-[1px] border-l-[1px] border-b-[1px] border-[#ccc] py-[7.5px] px-[8px] rounded-l-md">
            <MdKey />
          </div>
          <input
            type="password"
            {...register("lastName", {
              required: "Trường này không được để trống",
            })}
            className={`w-[48%] outline-none h-full px-3 py-2 mt-2 my-2 text-[13px] border-[1px] border-[#ccc] rounded-r-md shadow-lg`}
            // defaultValue={currentUser ? currentUser.displayName : ""}
          />
          <span className=" text-red-600 text-[18px] absolute top-[50%] right-[25%] translate-y-[-30%]">
            *
          </span>
        </div>

        <div className="flex items-center relative">
          <p className="w-[23%] text-end mr-2 text-[14px]">Mã xác minh</p>
          <div className="border-t-[1px] border-l-[1px] border-b-[1px] border-[#ccc] py-[7.5px] px-[8px] rounded-l-md">
            <AiFillSafetyCertificate />
          </div>
          <input
            type="text"
            {...register("lastName", {
              required: "Trường này không được để trống",
            })}
            className={`w-[34%] outline-none h-full px-3 py-2 mt-2 my-2 text-[13px] border-[1px] border-[#ccc]  shadow-lg`}
            // defaultValue={currentUser ? currentUser.displayName : ""}
          />
          <div className="text-[13px] py-[6px] px-[12px] bg-[#F0AD4E] rounded-r-md text-white">
            Gửi mã xác minh
          </div>
          <span className=" text-red-600 text-[18px] absolute top-[50%] right-[38%] translate-y-[-30%]">
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

export default SafeMode;
