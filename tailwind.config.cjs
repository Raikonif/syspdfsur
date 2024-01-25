/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
// const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Ubuntu", ...defaultTheme.fontFamily.sans],
    },
    // colors: {
    //   primary: colors.violet["600"],
    //   secondary: colors.violet["400"],
    //   neutral: colors.slate["800"],
    //   light: colors.fuchsia["400"],
    //   accentColor: colors.fuchsia["600"],
    //   textColor: colors.slate["800"],
    //   secondaryTextColor: colors.slate["600"],
    //   dividerColor: colors.slate["400"],
    // },
    extend: {},
  },
  plugins: [],
};
