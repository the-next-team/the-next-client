/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#f47213",
        custom: {
          black: "#111625",
          gray: {
            100: "#e2e2e2",
            200: "#8a8a8a",
            300: "#333333",
          },
          blue: {
            100: "#f0f4f9",
          },
        },
      },

      keyframes: {
        "slide-in": {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        "fade-out": {
          "0%": { transform: "translateX(0)", opacity: "1" },
          "100%": { transform: "translateX(100%)", opacity: "0" },
        },
      },
      animation: {
        "slide-in": "slide-in 0.3s ease-out",
        "fade-out": "fade-out 0.5s ease-in 3s forwards",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".drag": {
          "-webkit-app-region": "drag",
        },
        ".no-drag": {
          "-webkit-app-region": "no-drag",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
