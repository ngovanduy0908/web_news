/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    fontFamily: {
      regu: ['"Times New Roman"', '"Times"', "serif"],
    },
    extend: {
      dropShadow: {
        "3xl": "0 35px 35px rgba(0, 0, 0, 0.25)",
        new: [
          "rgba(0, 0, 0, 0.25) 0px 14px 28px",
          "rgba(0, 0, 0, 0.22) 0px 10px 10px",
        ],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
