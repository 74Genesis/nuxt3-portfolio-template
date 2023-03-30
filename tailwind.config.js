/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./*/*.{vue,js,ts}"],
  theme: {
    extend: {
      colors: {
        "gray-dark": "#272727",
        "gray-dark-blue": "#323443",
        "gray-medium": "#272727",
        "white-font": "#FAFAF9",
        "gray-font": "#f5f3f0",
        "dark-font": "#EFEDE8",
        "link-active": "#62D9FF",
        "link-visited": "#4CA9FF",
        "link-green-active": "#3BF686",
        "link-green-visited": "#80FFA3",
        gr: {
          600: "#3F4152",
        },
        green: "#3bf686",
        blue: "#4ca9ff",
        yellow: "#FFF615",
      },
    },
  },
  plugins: [],
};
