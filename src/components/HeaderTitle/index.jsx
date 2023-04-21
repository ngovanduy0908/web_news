import React from "react";

const HeaderTitle = ({ title }) => {
  return (
    <div>
      <img
        src="https://doanhnhanthanhhoahanoi.com/themes/egov/images/bg-national-emblem.png"
        alt=""
      />
      <span>{title}</span>
    </div>
  );
};

export default HeaderTitle;
