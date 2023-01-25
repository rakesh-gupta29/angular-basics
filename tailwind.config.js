/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    fontSize: {
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "2rem",
      "4xl": "3rem",
      "5xl": "3.25rem",
      "6xl": "4rem",
    },

    extend: {
      colors: {
        primary: "rgb(37,99,235)",
      },
      spacing: {
        banner: "calc(100vh - 80px ) ",
      },
      borderWidth: {
        1: "1px",
      },
      backgroundImage: {
        "hero-pattern": "url('assets/background_gradient.jpg')",
      },
    },
  },
  plugins: [],
};
