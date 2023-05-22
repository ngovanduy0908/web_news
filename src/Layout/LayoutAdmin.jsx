import { Outlet, useNavigate } from "react-router-dom";
import { AiFillDashboard } from "react-icons/ai";
import { SiLevelsdotfyi } from "react-icons/si";
import { BiNews, BiCategoryAlt } from "react-icons/bi";
import {
  MdCardMembership,
  MdOutlineConnectWithoutContact,
} from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { TbTimelineEventText } from "react-icons/tb";

const prevHref = "/admin";

const navigation = [
  {
    name: "Dashboard",
    href: `${prevHref}`,
    icon: AiFillDashboard,
    current: true,
  },
  {
    name: "Quản Lý Chức Vụ",
    href: `${prevHref}/role`,
    icon: SiLevelsdotfyi,
    current: false,
  },
  {
    name: "Quản Lý Danh Mục",
    href: `${prevHref}/category`,
    icon: BiCategoryAlt,
    current: false,
  },
  {
    name: "Quản Lý Tin Tức",
    href: `${prevHref}/news`,
    icon: BiNews,
    current: false,
  },
  {
    name: "Quản Lý Hội Viên",
    href: `${prevHref}/member`,
    icon: MdCardMembership,
    current: false,
  },
  {
    name: "Quản Lý Người Dùng",
    href: `${prevHref}/user`,
    icon: FaUserAlt,
    current: false,
  },
  {
    name: "Quản Lý Sự Kiện",
    href: `${prevHref}/event`,
    icon: TbTimelineEventText,
    current: false,
  },
  {
    name: "Quản Lý Liên Hệ",
    href: `${prevHref}/contact`,
    icon: MdOutlineConnectWithoutContact,
    current: false,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function LayoutAdmin() {
  const navigate = useNavigate();
  return (
    <>
      <div>
        {/* Static sidebar for desktop */}
        <div className="hidden desktop:fixed desktop:inset-y-0 desktop:z-50 desktop:flex desktop:w-72 desktop:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6">
            <div className="flex h-16 shrink-0 items-center">
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                alt="Your Company"
              />
            </div>
            <nav className="flex flex-1 flex-col">
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul role="list" className="-mx-2 space-y-1">
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <button
                          onClick={() => navigate(item.href)}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "bg-gray-800 text-white"
                              : "text-gray-400 hover:text-white hover:bg-gray-800",
                            "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold w-full"
                          )}
                        >
                          <item.icon
                            className="h-6 w-6 shrink-0"
                            aria-hidden="true"
                          />
                          {item.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                </li>

                <li className="-mx-6 mt-auto">
                  <a
                    href="#"
                    className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-white hover:bg-gray-800"
                  >
                    <img
                      className="h-8 w-8 rounded-full bg-gray-800"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <span className="sr-only">Your profile</span>
                    <span aria-hidden="true">Tom Cook</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="sticky top-0 z-40 flex items-center gap-x-6 bg-gray-900 px-4 py-4 shadow-sm ">
          <span className="sr-only">Open sidebar</span>
          {/* <Bars3Icon className="h-6 w-6" aria-hidden="true" /> */}
          <div className="flex-1 text-sm font-semibold leading-6 text-white">
            Dashboard
          </div>
          <a href="#">
            <span className="sr-only">Your profile</span>
            <img
              className="h-8 w-8 rounded-full bg-gray-800"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          </a>
        </div>

        <main className="py-10 desktop:pl-72">
          <div className="px-4 phone:px-6 desktop:px-8">
            <Outlet />
          </div>
        </main>
      </div>
    </>
  );
}
