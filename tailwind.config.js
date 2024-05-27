/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        "420": '420px',
        "mainPage": "calc(100% - 420px)"
      },
      colors: {
        'base-bg': '#121212'
      }
    },
  },
  plugins: [],
}