/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,ts,css,scss}",
    '../layout/*.liquid',
    '../sections/*.liquid',
    '../snippets/*.liquid',
    '../templates/customers/*.liquid',
    '../templates/*.liquid'
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}