/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        secondary: "#1B1A1C",
        primary: "#1ED760",
      },
      fontSize: {
        xxs: "9px",
      },
    },
  },
  plugins: [],
};
