/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", 
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "#00008B",
        buttonBgColor: "#00008B",
        yellowColor: "#B8860B",
        purpleColor: "#800080",
        irisColor: "#5A4FCF",
        headingColor: "#333333",
        textColor: "#333333",
      },
      boxShadow: {
        panelShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px",
      },
    },
  },
  plugins: [],
}
