/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jost: ["Jost", "serif"],
      },
      colors: {
        primary: "#005968",
        secondary: "#47545F",
      },
    },
  },
  plugins: [require("daisyui")],
}