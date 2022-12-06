/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        quicksand: ["Quicksand", "sans-serif"],
        mulish: ["Mulish", "sans-serif"],
      },
      colors: {
        blue: "#000E3D",
      },
    },
  },
  plugins: [],
};
