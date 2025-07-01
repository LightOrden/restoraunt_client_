/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Директориї, в яких Tailwind буде шукати класи
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4b1e1e", // Власний кольоровий стиль
        accent: "#ffa500",  // Акцентний колір (оранжевий)
      },
    },
  },
  plugins: [],
};
