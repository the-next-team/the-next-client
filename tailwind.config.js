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
