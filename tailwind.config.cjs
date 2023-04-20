/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{jsx, js}"
  ],
  theme: {
    extend: {
      colors: {
        'modal': '#000000b1'
      }
    },
  },
  plugins: [],
}
