/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "main-background-primary":
          "linear-gradient(166deg, rgba(96,70,43,1) 0%, rgba(59,32,9,1) 42%, rgba(59,28,14,1) 100%)",
        "main-background-secondary":
          "linear-gradient(191deg, rgba(96,70,43,1) 0%, rgba(70,39,12,1) 38%, rgba(78,40,23,1) 100%)",
      },
    },
  },
  plugins: [],
};
