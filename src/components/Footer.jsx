import React from "react";
import { TbBrandStackshare } from "react-icons/tb";
import { BsLaptop } from "react-icons/bs";
import { AiOutlineMobile } from "react-icons/ai";
import { BiUpArrow } from "react-icons/bi";
const Footer = () => {
  return (
    <>
      <footer className=" dark:bg-gray-900 footer pb-4">
        <div className="mx-auto  max-w-screen-xl w-[1080px]">
          <div className="grid grid-cols-2 gap-8 px-4 pb-6 pt-4 lg:pb-8 lg:pt-4 md:grid-cols-4">
            <div>
              <h2 class="mb-10 font-semibold text-gray-700 dark:text-white uppercase text-xl">
                Sở / Ban Ngành
              </h2>
              <ul class="text-gray-700 dark:text-gray-400 font-medium">
                <li class="mb-1">
                  <a href="#" class=" hover:underline">
                    Sở Giáo Dục và Đào Tạo
                  </a>
                </li>
                <li class="mb-1">
                  <a href="#" class="hover:underline">
                    Sở khoa học và công nghệ
                  </a>
                </li>
                <li class="mb-1">
                  <a href="#" class="hover:underline">
                    Sở NN&PT Nông thôn
                  </a>
                </li>
                <li class="mb-1">
                  <a href="#" class="hover:underline">
                    Sở công thương
                  </a>
                </li>
                <li class="mb-1">
                  <a href="#" class="hover:underline">
                    Sở tài chính
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="mb-10  font-semibold text-gray-700 dark:text-white uppercase text-xl">
                Bộ / Ngành
              </h2>
              <ul class="text-gray-700 dark:text-gray-400 font-medium">
                <li class="mb-1">
                  <a href="#" class=" hover:underline">
                    Bộ Nông Nghiệp
                  </a>
                </li>
                <li class="mb-1">
                  <a href="#" class="hover:underline">
                    Bộ Giáo Dục
                  </a>
                </li>
                <li class="mb-1">
                  <a href="#" class="hover:underline">
                    Bộ Tài Chính
                  </a>
                </li>
                <li class="mb-1">
                  <a href="#" class="hover:underline">
                    Bộ Giao thông vận tải
                  </a>
                </li>
                <li class="mb-1">
                  <a href="#" class="hover:underline">
                    Bộ Y tế
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="mb-10  font-semibold text-gray-700 dark:text-white uppercase text-xl">
                ĐOÀN HỘI
              </h2>
              <ul class="text-gray-700 dark:text-gray-400 font-medium">
                <li class="mb-1">
                  <a href="#" class=" hover:underline">
                    Liên hiệp các hội KHKT
                  </a>
                </li>
                <li class="mb-1">
                  <a href="#" class="hover:underline">
                    LH Các tổ chức hữu nghị
                  </a>
                </li>
                <li class="mb-1">
                  <a href="#" class="hover:underline">
                    Ngân hàng chính sách xã hội
                  </a>
                </li>
                <li class="mb-1">
                  <a href="#" class="hover:underline">
                    Đoàn thanh niên Việt Nam
                  </a>
                </li>
                <li class="mb-1">
                  <a href="#" class="hover:underline">
                    Hội tin học Việt Nam
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 class="mb-10  font-semibold text-gray-700 dark:text-white uppercase text-xl">
                LIÊN KẾT WEBSITE
              </h2>
              <ul class="text-gray-700 dark:text-gray-400 font-medium">
                <li class="mb-1">
                  <a href="#" class=" hover:underline">
                    Đảng Cộng sản Việt Nam
                  </a>
                </li>
                <li class="mb-1">
                  <a href="#" class="hover:underline">
                    Cổng thông tin Chính Phủ
                  </a>
                </li>
                <li class="mb-1">
                  <a href="#" class="hover:underline">
                    Báo điện tử Chính phủ
                  </a>
                </li>
                <li class="mb-1">
                  <a href="#" class="hover:underline">
                    Thông tấn xã Việt Nam
                  </a>
                </li>
                <li class="mb-1">
                  <a href="#" class="hover:underline">
                    Đài tiếng nói Việt Nam
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class="px-4 pt-6  text-gray-700">
            <div className="text-center">
              <span className="uppercase text-xl">
                <strong>
                  Ban biên tập Cổng thông tin điện tử Hội Doanh Nhân Thanh Hóa
                  Tại Hà Nội
                </strong>
              </span>
              <p>Điện thoại: 0982 885588</p>
              <p>Fax: 0982 885588</p>
              <p>
                Email: <a href="#">hoidoanhnhanthanhhoa.hbta@gmail.com</a>
              </p>
            </div>

            <div className="text-center">
              <div className="text-center">
                © 2022&nbsp;- Bản quyền&nbsp;thuộc về Hội Doanh Nhân Thanh Hóa
                tại Hà Nội.
                <br />
                <a href="">Điều khoản sử dụng</a>" | "
                <a href="">Chính sách bảo mật (Quyền riêng tư)</a>
              </div>
            </div>

            <div className="text-center">
              <p>
                Powered by
                <a href="">NukeViet eGovernment</a>. Designed by
                <a href="">VINADES.,JSC</a>.
              </p>
            </div>
          </div>
        </div>
      </footer>
      <div className="bg-gray-500 py-4">
        <div className="w-[1080px] m-auto flex  justify-between items-center">
          <div className="flex items-center">
            <a
              href="#"
              className="mr-3 w-7 h-7 rounded-full flex items-center bg-sky-500 text-white justify-center"
            >
              <TbBrandStackshare className="font-bold text-lg" />
            </a>
            <a
              href="#"
              className="mr-3 w-7 h-7 rounded-full flex items-center bg-sky-500 text-white justify-center"
            >
              <BsLaptop className="font-bold text-lg" />
            </a>
            <a
              href="#"
              className="mr-3 w-7 h-7 rounded-full flex items-center bg-sky-500 text-white justify-center"
            >
              <AiOutlineMobile className="font-bold text-lg" />
            </a>
          </div>
          <div>
            <button
              className="w-8 h-8 rounded-full flex items-center bg-sky-500 text-white justify-center"
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
            >
              <BiUpArrow className="font-bold text-lg" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
