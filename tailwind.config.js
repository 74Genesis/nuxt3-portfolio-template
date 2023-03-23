/** @type {import('tailwindcss').Config} */

import colors from "tailwindcss/colors";

module.exports = {
  content: ["./*/*.{vue,js,ts}"],
  theme: {
    colors: {
      ...colors,
      "gray-dark": "#323443",
      "gray-medium": "#272727",
      "white-font": "#FAFAF9",
      "gray-font": "#f5f3f0",
      "link-active": "#62D9FF",
      "link-visited": "#4CA9FF",
      "link-green-active": "#3BF686",
      "link-green-visited": "#80FFA3",
      yellow: "#FFF615",
    },
    extend: {},
  },
  plugins: [],
};
