import React, { useContext, useState } from "react";
import Breadcrumbs from "../../components/Breadcrumb";
import {
  FaFolderOpen,
  FaUser,
  FaPhoneAlt,
  FaHome,
  FaFax,
} from "react-icons/fa";
import { BiLogIn } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { BsCardHeading } from "react-icons/bs";
import { GrPowerReset } from "react-icons/gr";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

import generateCaptcha from "../../uitls";
import LoginPage from "../login/LoginPage";
import Modal from "../../components/Modal/Modal";
import { AuthContext } from "../../context/authContext";
function ContactPage() {
  const [captcha, setCaptcha] = useState(generateCaptcha);
  const [open, setOpen] = useState(false);
  const { currentUser } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({ criteriaMode: "all" });

  const onSubmit = (data) => {
    console.log(data.checkCaptcha);
    console.log(captcha);
    if (data.checkCaptcha !== captcha) {
      return console.log("ngu");
    }
    return console.log("khôn");
    //reset();
  };

  const onReset = (data) => {
    reset();
  };

  const resetCaptcha = (data) => {
    setCaptcha(generateCaptcha);
    reset(data.checkCaptcha);
  };

  return (
    <>
      <div className="bg-white pt-6 relative">
        <Breadcrumbs title={"Liên hệ"} />
        <div className="p-2 bg-slate-200">
          <p>
            Để không ngừng nâng cao chất lượng dịch vụ và đáp ứng tốt hơn nữa
            các yêu cầu của Quý khách, chúng tôi mong muốn nhận được các thông
            tin phản hồi. Nếu Quý khách có bất kỳ thắc mắc hoặc đóng góp nào,
            xin vui lòng liên hệ với chúng tôi theo thông tin dưới đây. Chúng
            tôi sẽ phản hồi lại Quý khách trong thời gian sớm nhất.
          </p>
        </div>
        <div className="grid laptop:grid-cols-5 desktop:grid-cols-5 phone:grid-cols-2 tablet:grid-cols-2 gap-4 py-4 px-2">
          <div className=" col-span-3 rounded border-[#cccccc] border-solid border-[1px]">
            <div>
              <h2 className=" rounded font-bold text-[16px] bg-slate-200 py-2 px-3">
                Ban biên tập Cổng thông tin điện tử Hội Doanh Nhân Thanh Hóa Tại
                Hà Nội
              </h2>
              <div className="text-[14px] px-3 py-4">
                <p className="mb-3">
                  Bộ phận tiếp nhận và giải quyết các yêu cầu, đề nghị, ý kiến
                  liên quan đến hoạt động chính của doanh nghiệp
                </p>
                <span className="flex items-center text-[14px]">
                  <FaPhoneAlt className="mr-3" />
                  Điện thoại: 0982 885588
                </span>
                <span className="flex items-center text-[14px]">
                  <FaFax className="mr-3" />
                  Fax: 0982 885588
                </span>
                <span className="flex items-center text-[14px]">
                  <MdEmail className="mr-3" />
                  Email: hoidoanhnhanthanhhoa.hbta@gmail.com
                </span>
              </div>
            </div>
          </div>
          <div className=" col-span-2">
            <div className="border-[1px] border-[#cccccc] border-solid rounded">
              <h2 className="text-center py-2 bg-blue-600 text-white uppercase font-bold rounded-t mb-2">
                Gửi phản hồi
              </h2>
              <form
                action=""
                className="text-[#555555] p-4"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="mb-4">
                  <div className="flex items-center rounded overflow-hidden">
                    <span className="px-[12px] py-[6px] text-[18px] bg-slate-200 border-[1px] border-[#cccccc]">
                      <FaFolderOpen />
                    </span>
                    <select
                      name=""
                      id=""
                      className="w-full h-[32px] text-[13px] leading-[15px] rounded-r border-[#cccccc]"
                    >
                      <option value="">Chủ đề bạn quan tâm</option>
                      <option value="">Gửi góp ý</option>
                      <option value="">Gửi câu hỏi</option>
                    </select>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="flex items-center rounded overflow-hidden">
                    <span className="px-[12px] py-[6px] text-[18px] bg-slate-200 border-[1px] border-[#cccccc] ">
                      <BsCardHeading />
                    </span>
                    <div className="w-full relative">
                      <input
                        type="text"
                        className={`block focus:outline-none w-full h-[32px] text-[13px] leading-[15px] rounded-r border-[#cccccc] ${
                          errors.title ? "border-red-500 border-[1px]" : ""
                        }`}
                        {...register("title", {
                          required: "Không được bỏ trống trường này",
                          minLength: {
                            value: 10,
                            message: `Vui lòng nhập ít nhất 10 ký tự`,
                          },
                        })}
                        placeholder="Tiêu đề"
                      />
                      <span className=" text-red-600 text-[18px] absolute top-[50%] right-[10px] translate-y-[-30%]">
                        *
                      </span>
                    </div>
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
                <div className="mb-4">
                  <div className="flex items-center rounded overflow-hidden">
                    <span className="px-[12px] py-[6px] text-[18px] bg-slate-200 border-[1px] border-[#cccccc] ">
                      <FaUser />
                    </span>
                    <div className="w-full relative">
                      <input
                        type="text"
                        className={`block focus:outline-none w-full h-[32px] text-[13px] leading-[15px] border-[#cccccc] ${
                          currentUser ? "bg-gray-200 cursor-not-allowed" : ""
                        } ${
                          errors.fullname ? "border-red-500 border-[1px]" : ""
                        }`}
                        {...register("fullname", {
                          required: "Không được bỏ trống trường này",
                          minLength: {
                            value: 10,
                            message: `Vui lòng nhập ít nhất 10 ký tự`,
                          },
                        })}
                        placeholder="Họ và tên"
                        defaultValue={
                          currentUser ? currentUser.displayName : ""
                        }
                        disabled={currentUser ? true : false}
                      />
                      <span className=" text-red-600 text-[18px] absolute top-[50%] right-[10px] translate-y-[-30%]">
                        *
                      </span>
                    </div>
                    {currentUser ? (
                      ""
                    ) : (
                      <button
                        type="button"
                        onClick={() => setOpen(true)}
                        className="px-[12px] py-[6px] text-[18px] bg-slate-200 border-[1px] border-[#cccccc] "
                      >
                        <BiLogIn />
                      </button>
                    )}
                  </div>
                  <ErrorMessage
                    errors={errors}
                    name="fullname"
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
                <div className="mb-4">
                  <div className="flex items-center rounded overflow-hidden">
                    <span className="px-[12px] py-[6px] text-[18px] bg-slate-200 border-[1px] border-[#cccccc] ">
                      <MdEmail />
                    </span>
                    <div className="w-full relative">
                      <input
                        type="text"
                        className={`block focus:outline-none w-full h-[32px] text-[13px] leading-[15px] border-[#cccccc] 
                        ${currentUser ? "bg-gray-200 cursor-not-allowed" : ""}
                        ${
                          errors.fullname ? "border-red-500 border-[1px]" : ""
                        }`}
                        {...register("email", {
                          required: "Không được bỏ trống trường này",
                          pattern: {
                            value:
                              /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                            message: `Vui lòng nhập đúng email VD: 'ten123@gmail.com'`,
                          },
                        })}
                        placeholder="Email"
                        defaultValue={currentUser ? currentUser.email : ""}
                        disabled={currentUser ? true : false}
                      />
                      <span className=" text-red-600 text-[18px] absolute top-[50%] right-[10px] translate-y-[-30%]">
                        *
                      </span>
                    </div>
                  </div>
                  <ErrorMessage
                    errors={errors}
                    name="email"
                    render={({ messages }) => {
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
                <div className="mb-4">
                  <div className="flex items-center rounded overflow-hidden">
                    <span className="px-[12px] py-[6px] text-[18px] bg-slate-200 border-[1px] border-[#cccccc] ">
                      <FaPhoneAlt />
                    </span>
                    <input
                      type="text"
                      className={`block focus:outline-none w-full h-[32px] text-[13px] leading-[15px] border-[#cccccc] ${
                        errors.phone ? "border-red-500 border-[1px]" : ""
                      }`}
                      {...register("phone", {
                        pattern: {
                          value: /^\d{10,}$/,
                          message: "Vui lòng chỉ nhập bằng số VD: '0912...'",
                        },
                        minLength: {
                          value: 10,
                          message: `Vui lòng nhập ít nhất 10 ký tự`,
                        },
                      })}
                      placeholder="Số điện thoại"
                    />
                  </div>
                  <ErrorMessage
                    errors={errors}
                    name="phone"
                    render={({ messages }) => {
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
                <div className="mb-4">
                  <div className="flex items-center rounded overflow-hidden">
                    <span className="px-[12px] py-[6px] text-[18px] bg-slate-200 border-[1px] border-[#cccccc] ">
                      <FaHome />
                    </span>
                    <input
                      type="text"
                      className={`block focus:outline-none w-full h-[32px] text-[13px] leading-[15px] border-[#cccccc] ${
                        errors.address ? "border-red-500 border-[1px]" : ""
                      }`}
                      {...register("address")}
                      placeholder="Địa chỉ"
                    />
                  </div>
                  <ErrorMessage
                    errors={errors}
                    name="address"
                    render={({ messages }) => {
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
                <div className="mb-4">
                  <div className=" relative">
                    <textarea
                      name=""
                      id=""
                      className="w-full rounded text-sm"
                      cols="10"
                      rows="2"
                      placeholder="Nội dung"
                      {...register("content", {
                        required: "Không được bỏ trống trường này",
                        minLength: {
                          value: 30,
                          message: `Vui lòng nhập ít nhất 30 ký tự`,
                        },
                      })}
                    ></textarea>
                    <span className=" text-red-600 text-[18px] absolute top-[20%] right-[10px] translate-y-[-30%]">
                      *
                    </span>
                  </div>
                  <ErrorMessage
                    errors={errors}
                    name="content"
                    render={({ messages }) => {
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
                <div className="mb-4">
                  <div className="flex items-center">
                    <div className="wrapper">
                      <h2 className="title">{captcha}</h2>
                    </div>
                    <button
                      type="button"
                      className="ml-3"
                      onClick={resetCaptcha}
                    >
                      <GrPowerReset />
                    </button>
                  </div>
                  <div className="inline relative">
                    <input
                      type="text"
                      className="mt-2 rounded-xl text-sm"
                      {...register("checkCaptcha", {
                        required: "Bạn chưa nhập mã",
                      })}
                      placeholder="Mã bảo mật"
                    />
                    <span className=" text-red-600 text-[18px] absolute top-[50%] right-[10px] translate-y-[-30%]">
                      *
                    </span>
                  </div>
                  <ErrorMessage
                    errors={errors}
                    name="checkCaptcha"
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
                <div className="text-center">
                  <button
                    type="button"
                    onClick={onReset}
                    className="border-[1px] border-solid border-[#ccc] px-3 py-2 text-[13px] rounded-xl mr-2 hover:bg-slate-200"
                  >
                    Nhập lại
                  </button>
                  <button
                    type="submit"
                    className="bg-blue-500 px-3 py-2 text-white text-[13px] rounded-xl hover:bg-blue-700"
                  >
                    Gửi đi
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <Modal open={open} setOpen={setOpen}>
          <LoginPage className={"w-[80%]"} />
        </Modal>
      </div>
    </>
  );
}

export default ContactPage;
