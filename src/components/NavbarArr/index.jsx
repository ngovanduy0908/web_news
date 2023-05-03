import React from "react";
import { useNavigate } from "react-router";

const NavbarArr = ({ arr }) => {
  const navigate = useNavigate();
  const href = arr[0].href;

  const handleClick = (item) => {
    navigate(`${href}/${item.slug}`, { state: { item } });
  };
  return (
    <ul className="bg-[#fff] w-[200px]  drop-shadow-xl top-[44px] absolute hidden text-black group-hover:block transition duration-350 ease-in-out">
      {arr[1].map((item, idx) => (
        <li
          key={idx}
          onClick={() => handleClick(item)}
          className="cursor-pointer"
        >
          {" "}
          <div className=" cursor-pointer truncate block py-[6px] pl-[8px] font-light hover:bg-yellow-300 hover:text-[#fff] hover:font-bold transition duration-0 hover:duration-150 ease-in-out">
            {item.title}
          </div>{" "}
        </li>
      ))}
    </ul>
  );
};

export default NavbarArr;
