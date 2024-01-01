/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#E8BF5A",
      },
      backgroundImage: {
        "vector-pattern": "url('/src/assets/svgs/Vector 4.svg')",
        hero: "url('/src/assets/images/hero_img.jpg')",
      },
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
};
