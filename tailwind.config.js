/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    screens: {
      iphone: "360px",
      tablet: "768px",
      // => @media (min-width: 640px) { ... }

      laptop: "992px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
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
