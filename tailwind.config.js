/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#690B22", // Custom violet
        secondary: "#27445D", // Custom blue
        nav :"001A6E",
      },
      fontFamily:  
    {
      poppins: ["Poppins", "sans-serif"],
      montserrat: ["Montserrat", "sans-serif"],
      lobster: ["Lobster", "cursive"],
      jost: ["Jost", "sans-serif"],
      sigmar: ["Sigmar", "cursive"],
      josefin: ["Josefin Sans", "sans-serif"],
      nunito: ["Nunito", "sans-serif"],
      yrsa: ["Yrsa", "serif"],
      dmserif: ["DM Serif Text", "serif"],
      inter: ["Inter", "sans-serif"],
      phudu: ["Phudu", "cursive"],
    },},
  },
  plugins: [],
}

