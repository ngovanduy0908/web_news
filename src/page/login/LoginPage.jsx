import React, { useEffect, useState } from "react";

import { auth, provider, providerFB } from "./config";
import { signInWithPopup, signOut } from "firebase/auth";
import LayoutLoginPage from "../../Layout/LayoutLoginPage";
import { FaUserAlt } from "react-icons/fa";
import { MdKey } from "react-icons/md";
import { BsFillCaretRightFill } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  const handleLogin = () => {
    signInWithPopup(auth, provider).then((data) => {
      setUser(data.user);
    });
  };

  const handleLoginWithFB = () => {
    signInWithPopup(auth, providerFB).then((data) => {
      setUser(data.user);
    });
  };
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setUser(null);
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
    window.scrollTo(0, 0);
  }, [user]);

  // console.log(user);

  return (
    <div className="bg-white">
      <div className="">
        <div className="">
          <div className="">
            <LayoutLoginPage
              className={"w-[45%] mx-auto rounded-md shadow-lg mt-6"}
              title="Thành viên đăng nhập"
              subtitle="Hãy đăng nhập thành viên để trải nghiệm đầy đủ các tiện ích trên site"
            >
              <div className="mt-4">
                <div className="w-full">
                  <div className="flex items-center w-full mb-4 border border-sky-500 h-[35px] rounded-md">
                    <div className="py-1 px-2 bg-gray-200 ">
                      <FaUserAlt className="w-4 h-4 text-gray-500" />
                    </div>
                    <div className="w-full h-full border-l border-sky-500">
                      <input
                        type="text"
                        className="w-full outline-none border-none h-full px-2 py-0 rounded-r-md"
                      />
                    </div>
                  </div>

                  <div className="flex items-center w-full mb-4 border border-sky-500 h-[35px] rounded-md">
                    <div className="py-1 px-2 bg-gray-200 ">
                      <MdKey className="w-4 h-4 text-gray-500" />
                    </div>
                    <div className="w-full h-full border-l border-sky-500">
                      <input
                        type="text"
                        className="w-full outline-none border-none h-full px-2 py-0 rounded-r-md"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="text-center text-[13px]">
                  <button className="bg-gray-100 p-2 mr-4 rounded-lg">
                    Thiết lập lại
                  </button>
                  <button className="bg-[#428bca] p-2 rounded-lg text-white">
                    Đăng nhập
                  </button>
                </div>

                <div className="mt-4">
                  <h3 className="text-center text-sm font-bold mb-2">Or</h3>
                  <div className="flex justify-center gap-4 items-center cursor-pointer">
                    <FcGoogle onClick={handleLogin} />
                    <BsFacebook onClick={handleLoginWithFB} />
                  </div>
                </div>

                <ul className="flex justify-center gap-3 mt-3 text-[13px]">
                  <li
                    className="flex items-center cursor-pointer"
                    onClick={() => navigate("/user/register")}
                  >
                    <BsFillCaretRightFill />
                    <span>Đăng ký</span>
                  </li>
                  <li className="flex items-center cursor-pointer">
                    <BsFillCaretRightFill />
                    <span>Khôi phục mật khẩu</span>
                  </li>
                </ul>
              </div>
              {user ? (
                <div>
                  Login successfully : {user.displayName}
                  <div>
                    <button onClick={handleLogout}>Logout</button>
                  </div>
                </div>
              ) : null}
            </LayoutLoginPage>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
