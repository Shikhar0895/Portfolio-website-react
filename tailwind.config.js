/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      black: "#171321",
      dkblue: " #0d314b",
      plum: " #4b0d49",
      hotmag: " #ff17e4",
      magenta: " #e310cb",
      aqua: " #86fbfb",
      white: " #f7f8fa",
    },
    container: {
      center: true,
    },
    fontFamily: {},
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".writing-vertical": {
          "writing-mode": "vertical-rl",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
