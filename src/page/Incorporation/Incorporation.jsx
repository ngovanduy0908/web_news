import React, { useEffect, useRef, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import RightBar from "../../components/list/RightBar";
const Incorporation = () => {
  const [open, setOpen] = useState(false);
  const ulRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ulRef.current && !ulRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ulRef]);
  return (
    <div>
      <div className="bg-white pb-14 grid grid-cols-4 gap-3 pt-4 px-6">
        <div className="px-5 pt-4  col-span-3 ">
          <div className="flex items-center justify-between">
            <h2 className="text-[#0707CE] font-bold hover:opacity-70 hover:underline">
              <a href="">Ban Tổ Chức</a>
            </h2>
            <div className=" relative  ">
              <button
                className="px-2 py-1 hover:bg-gray-100 border-[1px] border-[#838383] rounded"
                onClick={() => {
                  setOpen(!open);
                }}
              >
                <IoMdArrowDropdown />
              </button>
              {open && (
                <ul
                  ref={ulRef}
                  className="w-[150px] bg-white z-20 drop-shadow-new text-sm py-3 border-[1px] border-solid border-[#ababab] rounded-xl absolute left-0"
                >
                  <li className="py-1 px-6 hover:bg-gray-100">
                    {" "}
                    <a href="">Văn phòng</a>{" "}
                  </li>
                  <li className="py-1 px-6 hover:bg-gray-100">
                    {" "}
                    <a href="">Ban tổ chức</a>{" "}
                  </li>
                  <li className="py-1 px-6 hover:bg-gray-100">
                    {" "}
                    <a href="">Ban Tuyên giáo</a>{" "}
                  </li>
                  <li className="py-1 px-6 hover:bg-gray-100">
                    {" "}
                    <a href="">Ban Dân vận</a>{" "}
                  </li>
                  <li className="py-1 px-6 hover:bg-gray-100">
                    {" "}
                    <a href="">Ủy ban kiểm tra</a>{" "}
                  </li>
                  <li className="py-1 px-6 hover:bg-gray-100">
                    {" "}
                    <a href="">Ban nội chính</a>{" "}
                  </li>
                </ul>
              )}
            </div>
          </div>

          <div class="relative overflow-x-auto mt-4">
            <table class="table-auto border border-collapse w-full text-center border-[#dddddd] text-sm text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-900 uppercase dark:text-gray-400">
                <tr>
                  <th
                    scope="col"
                    class="px-6 py-3 border border-collapse border-[#dddddd]"
                  >
                    STT
                  </th>
                  <th
                    scope="col"
                    class=" border border-collapse border-[#dddddd] px-6 py-3"
                  >
                    Họ tên
                  </th>
                  <th
                    scope="col"
                    class=" border border-collapse border-[#dddddd] px-6 py-3"
                  >
                    Chức danh chính
                  </th>
                  <th
                    scope="col"
                    class=" border border-collapse border-[#dddddd] px-6 py-3"
                  >
                    Ảnh
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white dark:bg-gray-800">
                  <th
                    scope="row"
                    class="px-6 py-4 border border-collapse border-[#dddddd] font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    1
                  </th>
                  <td class="px-6 py-4 text-[#0707CE] border border-collapse border-[#dddddd] font-bold hover:opacity-70 hover:underline">
                    <a href="">Nguyễn Hùng Dũng</a>
                  </td>
                  <td class=" text-[#333] border border-collapse border-[#dddddd] px-6 py-4">
                    <strong>Chủ tịch - Trưởng ban</strong>
                  </td>
                  <td class=" border border-collapse border-[#dddddd] px-6 py-4">
                    <a href="">
                      <img
                        src="https://doanhnhanthanhhoahanoi.com/themes/default/images/organs/no-avatar.jpg"
                        className="max-w-[60px] text-center inline"
                        alt=""
                      />
                    </a>
                  </td>
                </tr>
                <tr class="bg-white dark:bg-gray-800">
                  <th
                    scope="row"
                    class="px-6 py-4 border border-collapse border-[#dddddd] font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    1
                  </th>
                  <td class="px-6 py-4 text-[#0707CE] border border-collapse border-[#dddddd] font-bold hover:opacity-70 hover:underline">
                    <a href="">Nguyễn Hùng Dũng</a>
                  </td>
                  <td class=" text-[#333] border border-collapse border-[#dddddd] px-6 py-4">
                    <strong>Chủ tịch - Trưởng ban</strong>
                  </td>
                  <td class=" border border-collapse border-[#dddddd] px-6 py-4">
                    <a href="">
                      <img
                        src="https://doanhnhanthanhhoahanoi.com/themes/default/images/organs/no-avatar.jpg"
                        className="max-w-[60px] text-center inline"
                        alt=""
                      />
                    </a>
                  </td>
                </tr>
                <tr class="bg-white dark:bg-gray-800">
                  <th
                    scope="row"
                    class="px-6 py-4 border border-collapse border-[#dddddd] font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    1
                  </th>
                  <td class="px-6 py-4 text-[#0707CE] border border-collapse border-[#dddddd] font-bold hover:opacity-70 hover:underline">
                    <a href="">Nguyễn Hùng Dũng</a>
                  </td>
                  <td class=" text-[#333] border border-collapse border-[#dddddd] px-6 py-4">
                    <strong>Chủ tịch - Trưởng ban</strong>
                  </td>
                  <td class=" border border-collapse border-[#dddddd] px-6 py-4">
                    <a href="">
                      <img
                        src="https://doanhnhanthanhhoahanoi.com/themes/default/images/organs/no-avatar.jpg"
                        className="max-w-[60px] text-center inline"
                        alt=""
                      />
                    </a>
                  </td>
                </tr>
                <tr class="bg-white dark:bg-gray-800">
                  <th
                    scope="row"
                    class="px-6 py-4 border border-collapse border-[#dddddd] font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    1
                  </th>
                  <td class="px-6 py-4 text-[#0707CE] border border-collapse border-[#dddddd] font-bold hover:opacity-70 hover:underline">
                    <a href="">Nguyễn Hùng Dũng</a>
                  </td>
                  <td class=" text-[#333] border border-collapse border-[#dddddd] px-6 py-4">
                    <strong>Chủ tịch - Trưởng ban</strong>
                  </td>
                  <td class=" border border-collapse border-[#dddddd] px-6 py-4">
                    <a href="">
                      <img
                        src="https://doanhnhanthanhhoahanoi.com/themes/default/images/organs/no-avatar.jpg"
                        className="max-w-[60px] text-center inline"
                        alt=""
                      />
                    </a>
                  </td>
                </tr>
                <tr class="bg-white dark:bg-gray-800">
                  <th
                    scope="row"
                    class="px-6 py-4 border border-collapse border-[#dddddd] font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    1
                  </th>
                  <td class="px-6 py-4 text-[#0707CE] border border-collapse border-[#dddddd] font-bold hover:opacity-70 hover:underline">
                    <a href="">Nguyễn Hùng Dũng</a>
                  </td>
                  <td class=" text-[#333] border border-collapse border-[#dddddd] px-6 py-4">
                    <strong>Chủ tịch - Trưởng ban</strong>
                  </td>
                  <td class=" border border-collapse border-[#dddddd] px-6 py-4">
                    <a href="">
                      <img
                        src="https://doanhnhanthanhhoahanoi.com/themes/default/images/organs/no-avatar.jpg"
                        className="max-w-[60px] text-center inline"
                        alt=""
                      />
                    </a>
                  </td>
                </tr>
                <tr class="bg-white dark:bg-gray-800">
                  <th
                    scope="row"
                    class="px-6 py-4 border border-collapse border-[#dddddd] font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    1
                  </th>
                  <td class="px-6 py-4 text-[#0707CE] border border-collapse border-[#dddddd] font-bold hover:opacity-70 hover:underline">
                    <a href="">Nguyễn Hùng Dũng</a>
                  </td>
                  <td class=" text-[#333] border border-collapse border-[#dddddd] px-6 py-4">
                    <strong>Chủ tịch - Trưởng ban</strong>
                  </td>
                  <td class=" border border-collapse border-[#dddddd] px-6 py-4">
                    <a href="">
                      <img
                        src="https://doanhnhanthanhhoahanoi.com/themes/default/images/organs/no-avatar.jpg"
                        className="max-w-[60px] text-center inline"
                        alt=""
                      />
                    </a>
                  </td>
                </tr>
                <tr class="bg-white dark:bg-gray-800">
                  <th
                    scope="row"
                    class="px-6 py-4 border border-collapse border-[#dddddd] font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    1
                  </th>
                  <td class="px-6 py-4 text-[#0707CE] border border-collapse border-[#dddddd] font-bold hover:opacity-70 hover:underline">
                    <a href="">Nguyễn Hùng Dũng</a>
                  </td>
                  <td class=" text-[#333] border border-collapse border-[#dddddd] px-6 py-4">
                    <strong>Chủ tịch - Trưởng ban</strong>
                  </td>
                  <td class=" border border-collapse border-[#dddddd] px-6 py-4">
                    <a href="">
                      <img
                        src="https://doanhnhanthanhhoahanoi.com/themes/default/images/organs/no-avatar.jpg"
                        className="max-w-[60px] text-center inline"
                        alt=""
                      />
                    </a>
                  </td>
                </tr>
                <tr class="bg-white dark:bg-gray-800">
                  <th
                    scope="row"
                    class="px-6 py-4 border border-collapse border-[#dddddd] font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    1
                  </th>
                  <td class="px-6 py-4 text-[#0707CE] border border-collapse border-[#dddddd] font-bold hover:opacity-70 hover:underline">
                    <a href="">Nguyễn Hùng Dũng</a>
                  </td>
                  <td class=" text-[#333] border border-collapse border-[#dddddd] px-6 py-4">
                    <strong>Chủ tịch - Trưởng ban</strong>
                  </td>
                  <td class=" border border-collapse border-[#dddddd] px-6 py-4">
                    <a href="">
                      <img
                        src="https://doanhnhanthanhhoahanoi.com/themes/default/images/organs/no-avatar.jpg"
                        className="max-w-[60px] text-center inline"
                        alt=""
                      />
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <RightBar />
        </div>
      </div>
    </div>
  );
};

export default Incorporation;
