/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#275DAD",
        dark: "#3d3d3d",
      },
      borderWidth: {
        1: "1px",
      },
    },
  },
  plugins: [],
};
