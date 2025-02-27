/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      blue: "#1fb6ff",
      purple: "#7e5bef",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#13ce66",
      yellow: "#ffc82c",
      "gray-dark": "#273444",
      gray: "#8492a6",
      "gray-light": "#d3dce6",
      white: "#fff",
    },

    extend: {
      fontFamily: {
        verdana: ["Verdana"],
      },
      backgroundImage: {
        "hero-pattern":
          "url('https://images.unsplash.com/photo-1519681393784-d120267933ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1124&q=100')",
      },
      backdropBlur: {
        xl: "16px",
      },
      backdropSaturate: {
        180: "180%",
      },
      colors: {
        "glass-bg": "rgba(17, 25, 40, 0.75)",
        "glass-border": "rgba(255, 255, 255, 0.125)",
      },
      borderRadius: {
        xl: "12px",
      },
    },
  },
  plugins: [],
};
