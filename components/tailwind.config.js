/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/styles/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}