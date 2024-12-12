/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "main-color": "#545454",
        "main-black": "#1F1F1F",
        "footer-color": "#D1D1D1",
      },
    },
  },
  plugins: [],
};
