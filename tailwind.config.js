const plugin = require("tailwindcss/plugin");
/** @type {import('tailwindcss').Config} */

export default {
  content: ["./**/*.{html,js}"],
  theme: {
    screens: {
      sm: "600px",
      md: "768px",
    },
    colors: {
      "dark-blue": "hsl(233, 26%, 24%)",
      green: "hsl(136, 65%, 51%)",
      cyan: "hsl(192, 70%, 51%)",

      "green-light": " hsl(136, 65%, 75%)",
      "cyan-light": "hsl(192, 70%, 75%)",

      "neutral-400": "hsl(233, 8%, 62%)",
      "neutral-300": "hsl(220, 16%, 96%)",
      "neutral-200": "hsl(0, 0%, 98%)",
      white: " hsl(0, 0%, 100%)",
    },

    fontFamily: {
      main: ["Public Sans", "sans-serif"],
    },

    extend: {},
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        html: { fontSize: "18px" },
      });
    }),
  ],
};

