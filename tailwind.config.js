/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mocha: "#754c36",
        dark_brown1: "#412405",
        dark_brown2: "#30190A",
      },
      backgroundImage: {
        "main-background-primary":
          "linear-gradient(166deg, #3F2A1A 0%, #2D1808 42%, #30190A 100%);",
        "main-background-secondary":
          " linear-gradient(15deg, #3F2A1A 0%, #2D1808 42%, #30190A 100%);",
      },
    },
  },
  plugins: [],
};
