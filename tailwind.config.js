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
    large: "900px",
    tablet: "700px",
    smallTab: "550px",
    bigPhone: "410px",
    mobile: "330px",
  },
};
export const plugins = [];
