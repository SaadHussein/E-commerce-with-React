/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
  extend: {
    fontFamily: {
      bodyFont: "Poppins",
      titleFont: "Nunito Sans",
    },
  },
  screens: {
    xl: "1280px",
    tablet: "700px",
    mobile: "330px",
  },
};
export const plugins = [];
