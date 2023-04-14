/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    screens: {
      "xs": "250px",
      // => @media (min-width: 320px) { ... }
      //
      'sm': '400px',
      // => @media (min-width: 400px) { ... }

      'md': '680px',
      // => @media (min-width: 640px) { ... }

      'md2': '820px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      // ...defaultTheme.screens,
    },
    extend: {
    },
  },
  plugins: [],
};
