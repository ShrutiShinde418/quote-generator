/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        raleway: "Raleway",
      },
      colors: {
        black1: "#4f4f4f",
        black2: "#333333",
        gray1: "#828282",
        white1: "#f2f2f2",
        yellow: "#f7df94",
      },
    },
  },
  plugins: [],
};
