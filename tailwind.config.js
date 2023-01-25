/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "400px",
      // => @media (min-width: 400px) { ... }

      md: "547px",
      // => @media (min-width: 547px) { ... }

      lg: "768px",
      // => @media (min-width: 768px) { ... }

      xl: "1024px",
      // => @media (min-width: 1024px) { ... }

      "2xl": "1680px",
      // => @media (min-width: 1680px) { ... }
    },
    extend: {},
    fontSize: {
      sm: "0.8rem",
      base: "0.80rem",
      xl: "1.2rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "3rem",
      "5xl": "6.052rem",
    },
  },
  plugins: [],
};
