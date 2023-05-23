import React from "react";

const Button = ({ title, colorText, colorBgr, colorHover, click, icon }) => {

  return (
    <button
      type="button"
      onClick={click}

      className={`${colorText} ${colorBgr}  hover:${colorHover} flex items-center focus:outline-none rounded text-sm px-5 py-2 text-center`}
    >
      {icon}
      {title}
    </button>
  );
};

export default Button;
