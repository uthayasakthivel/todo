/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // Enables dark mode manually using 'class'
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
      red: "#d81e5b",
      white: "#ffffff",
      "gray-dark": "#273444",
      gray: "#8492a6",
      "gray-light": "#d3dce6",

      // Dark mode colors (prefixed with "dark-")
      dark: {
        bg: "#0F1A1D", // Dark background
        card: "#16213e", // Darker secondary background
        text: "#E0F0DC", // Light text
        muted: "red", // Muted text
        border: "#2a2a3c", // Border color
      },
    },

    extend: {
      fontFamily: {
        verdana: ["Verdana"],
      },
      backgroundImage: {
        "hero-pattern": "url('./src/assets/images/mountain-day.jpg')",

        // Day Mode Gradients
        "btn-gradient-green":
          "linear-gradient(rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0))",
        "btn-gradient-gray":
          "linear-gradient(rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0))",
        "btn-gradient-red":
          "linear-gradient(rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0))",

        // Dark Mode Gradients
        "dark-btn-gradient-green":
          "linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.1))",
        "dark-btn-gradient-gray":
          "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.1))",
        "dark-btn-gradient-red":
          "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.05))",
      },
      backdropBlur: {
        xl: "16px",
      },
      backdropSaturate: {
        180: "180%",
      },
      colors: {
        // Button Colors
        "glass-bg": "rgb(136 142 157 / 26%)",
        "glass-border": "rgba(255, 255, 255, 0.125)",
        "btn-bg-green": "#2ea44f",
        "btn-border-green": "#2ea44f",
        "btn-bg-gray": "#6b7280",
        "btn-border-gray": "#6b7280",
        "btn-bg-red": "#d81e5b",
        "btn-border-red": "#d81e5b",

        // Dark Mode Buttons
        "dark-glass-bg": "rgb(55 139 138 / 19%)",
        "dark-btn-bg-green": "#166534",
        "dark-btn-border-green": "#14532d",
        "dark-btn-bg-gray": "#374151",
        "dark-btn-border-gray": "#1f2937",
        "dark-btn-bg-red": "#7f1d1d",
        "dark-btn-border-red": "#600505",
      },
      borderRadius: {
        xl: "12px",
      },
    },
  },
  plugins: [],
};
