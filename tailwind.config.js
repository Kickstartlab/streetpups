/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {},
    colors: {
      orange: {
        "50": "#D78D00",
        "100": "#FB901A",
        "200": "#FF5D31",
      },
      blue: {
        "50": "#3183FF",
        "100": "#000958",
        "200": "#3C3C51"
      },
      black: {
        "50": "#5E6085",
        "100": "#06071B"
      },
      white: {
        "50": "#fffaf6",
        "100": "#fff",
      },
      green: {
        "50": "#5BD6E2",
      },
      yellow: {
        "50": "#D78D00",
        "100": "#FABF3E",
      },
    },
    fontFamily: {
      'poppins': ["'Poppins', sans-serif"],
      'slackey': ["'Slackey', cursive"],
    }
  },
  plugins: [],
}
