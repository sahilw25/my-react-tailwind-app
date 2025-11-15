/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        worksans: ['"Work Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};