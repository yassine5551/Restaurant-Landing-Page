/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero1: "url('./img/hero/hero1.jpg')",
        // card1:"url('https://res.cloudinary.com/dkusr7var/image/upload/v1725405036/brooke-lark-08bOYnH_r_E-unsplash_lugfpc.jpg')"
      },
      colors: {
        primary: "#76453B",
        secondary: "#43766C",
        lightBrown: "#B19470",
      },

      fontFamily: {
        petrona: ["Petrona", "serif"],
        boogaloo: ["Boogaloo", "serif"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
    },
  },
  plugins: [],
};
