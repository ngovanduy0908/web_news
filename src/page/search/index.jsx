import React from "react";
import Breadcrumbs from "../../components/Breadcrumb";
import Category from "../../components/list/Category";
import { BsPinFill } from "react-icons/bs";
// const optionValue = [
//   {
//     value: "Giới Thiệu",
//   },
//   {
//     value: "Tin Tức",
//   },
//   {
//     value: "Lấy ý kiến người dân",
//   },
//   {
//     value: "Các câu hỏi thường gặp",
//   },
//   {
//     value: "Page",
//   },
//   {
//     value: "Điều khoản sử dụng",
//   },
//   {
//     value: "Hội Viên",
//   },
//   {
//     value: "Giao Thương",
//   },
//   {
//     value: "Dự Án",
//   },
// ];
const SearchPage = () => {
  return (
    <div className="bg-white pt-6">
      <div>
        <Breadcrumbs title={"Tìm kiếm"} />
      </div>

      <div className="grid grid-cols-4 gap-4  px-6 mt-6 ">
        <div className="col-span-3 mb-8">
          <div className="border-2 px-4 pb-4">
            <h3 className="text-center my-4 text-[14px] text-[#333] font-bold">
              Tìm và lấy những gì bạn muốn!
            </h3>
            <form action="" className="border-b-2 pb-3 mb-3">
              <div className="mb-4 ">
                <input
                  type="text"
                  name=""
                  id=""
                  className="w-full rounded-md h-[32px] text-[13px]"
                  placeholder="Từ tìm kiếm"
                />
              </div>
              {/* <div className="mb-4 ">
                <select
                  name=""
                  id=""
                  className="w-full rounded-md py-1 text-[13px] "
                >
                  <option value="">Tìm kiếm trên site</option>
                  {optionValue.map((item, idx) => (
                    <option value="" key={idx}>
                      {item.value}
                    </option>
                  ))}
                </select>
              </div> */}

              <div className="text-center mb-4">
                <button className="bg-[#428bca] text-white text-[12px] py-[6px] px-[12px] border-[1px] rounded-md mr-3 hover:bg-blue-700">
                  Tìm Kiếm
                </button>
                {/* <button className="text-[14px]">Nâng Cao</button> */}
              </div>

              {/* <div className="text-center">
                <label className="text-sm mr-3">
                  <input type="radio" name="search" checked /> Cả cụm từ
                </label>
                <label className="text-sm">
                  <input type="radio" name="search" /> Tối thiểu 1 cụm từ
                </label>
              </div> */}
            </form>

            <div>
              <div className="mb-4">
                <div className="border-b-[1px] flex items-center justify-between">
                  <ul className="inline-flex border-t-[1px] border-l-[1px] border-r-[1px] rounded-t-md px-4 py-2 text-[13px]">
                    <li>Kết quả tìm kiếm trên "Giới Thiệu"</li>
                    <li className="bg-[#5bc0de] ml-2 px-2 text-white text-[8px] flex items-center font-semibold rounded-sm">
                      2
                    </li>
                  </ul>
                  <div className="flex items-center text-sm text-gray-600">
                    <span>
                      <BsPinFill className="mr-2" />
                    </span>{" "}
                    Xem tất cả{" "}
                  </div>
                </div>
                <div>
                  <h3 className="text-[14px] text-[#424141] font-bold mt-4 mb-2">
                    Điều Lệ Hoạt Động
                  </h3>
                  <p className="text-sm">
                    ...tại Điều 16 bản Điều lệ này; Chương II TỔ CHỨC HOẠT ĐỘNG
                    Điều 4: Nguyên tắc hoạt động Hội Doanh nhân Thanh Hóa tại Hà
                    Nội hoạt động dưới sự trợ và định hướng của Hội đồng hương
                    Thanh Hoá tại Hà Nội hoạt động trên nguyên tắc tự nguyện,
                    tập trung dân chủbiểu quyết theo đa số và tự trang...
                  </p>
                </div>
              </div>
              <div className="mb-4">
                <div className="border-b-[1px] flex items-center justify-between">
                  <ul className="inline-flex border-t-[1px] border-l-[1px] border-r-[1px] rounded-t-md px-4 py-2 text-[13px]">
                    <li>Kết quả tìm kiếm trên "Giới Thiệu"</li>
                    <li className="bg-[#5bc0de] ml-2 px-2 text-white text-[8px] flex items-center font-semibold rounded-sm">
                      2
                    </li>
                  </ul>
                  <div className="flex items-center text-sm text-gray-600">
                    <span>
                      <BsPinFill className="mr-2" />
                    </span>{" "}
                    Xem tất cả{" "}
                  </div>
                </div>
                <div>
                  <h3 className="text-[14px] text-[#424141] font-bold mt-4 mb-2">
                    Điều Lệ Hoạt Động
                  </h3>
                  <p className="text-sm">
                    ...tại Điều 16 bản Điều lệ này; Chương II TỔ CHỨC HOẠT ĐỘNG
                    Điều 4: Nguyên tắc hoạt động Hội Doanh nhân Thanh Hóa tại Hà
                    Nội hoạt động dưới sự trợ và định hướng của Hội đồng hương
                    Thanh Hoá tại Hà Nội hoạt động trên nguyên tắc tự nguyện,
                    tập trung dân chủbiểu quyết theo đa số và tự trang...
                  </p>
                </div>
              </div>
              <div className="mb-4">
                <div className="border-b-[1px] flex items-center justify-between">
                  <ul className="inline-flex border-t-[1px] border-l-[1px] border-r-[1px] rounded-t-md px-4 py-2 text-[13px]">
                    <li>Kết quả tìm kiếm trên "Giới Thiệu"</li>
                    <li className="bg-[#5bc0de] ml-2 px-2 text-white text-[8px] flex items-center font-semibold rounded-sm">
                      2
                    </li>
                  </ul>
                  <div className="flex items-center text-sm text-gray-600">
                    <span>
                      <BsPinFill className="mr-2" />
                    </span>{" "}
                    Xem tất cả{" "}
                  </div>
                </div>
                <div>
                  <h3 className="text-[14px] text-[#424141] font-bold mt-4 mb-2">
                    Điều Lệ Hoạt Động
                  </h3>
                  <p className="text-sm">
                    ...tại Điều 16 bản Điều lệ này; Chương II TỔ CHỨC HOẠT ĐỘNG
                    Điều 4: Nguyên tắc hoạt động Hội Doanh nhân Thanh Hóa tại Hà
                    Nội hoạt động dưới sự trợ và định hướng của Hội đồng hương
                    Thanh Hoá tại Hà Nội hoạt động trên nguyên tắc tự nguyện,
                    tập trung dân chủbiểu quyết theo đa số và tự trang...
                  </p>
                </div>
              </div>
              <div className="mb-4">
                <div className="border-b-[1px] flex items-center justify-between">
                  <ul className="inline-flex border-t-[1px] border-l-[1px] border-r-[1px] rounded-t-md px-4 py-2 text-[13px]">
                    <li>Kết quả tìm kiếm trên "Giới Thiệu"</li>
                    <li className="bg-[#5bc0de] ml-2 px-2 text-white text-[8px] flex items-center font-semibold rounded-sm">
                      2
                    </li>
                  </ul>
                  <div className="flex items-center text-sm text-gray-600">
                    <span>
                      <BsPinFill className="mr-2" />
                    </span>{" "}
                    Xem tất cả{" "}
                  </div>
                </div>
                <div>
                  <h3 className="text-[14px] text-[#424141] font-bold mt-4 mb-2">
                    Điều Lệ Hoạt Động
                  </h3>
                  <p className="text-sm">
                    ...tại Điều 16 bản Điều lệ này; Chương II TỔ CHỨC HOẠT ĐỘNG
                    Điều 4: Nguyên tắc hoạt động Hội Doanh nhân Thanh Hóa tại Hà
                    Nội hoạt động dưới sự trợ và định hướng của Hội đồng hương
                    Thanh Hoá tại Hà Nội hoạt động trên nguyên tắc tự nguyện,
                    tập trung dân chủbiểu quyết theo đa số và tự trang...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <Category />
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
