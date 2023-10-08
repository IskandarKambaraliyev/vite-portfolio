/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,html,scss,css}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "body-color": "#FAFBFC",
        "dark-text-color": "#264653",
        "text-color": "#7D86A5",
        "light-text-color": "#dedede",
        "stroke-color": "#E6EAF2",
        "green-color":"#13B48B",
        "orange-color":"#FFA34E",
        "primary-color":"#3C4BDC",
        "danger-color":"#FF0000",
        "shadow-color":"#B1B1B1",
      },
    },
  },
  plugins: [],
}

