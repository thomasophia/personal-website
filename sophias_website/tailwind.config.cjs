/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#FFFFFF",
        rose: "#F2A8B7",
        terracotta: "#CA7B55",
        palm: "#404B35",
        earth: "#D9CBBA"
      },
      fontFamily: {
        main: ["Merriweather", "serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};