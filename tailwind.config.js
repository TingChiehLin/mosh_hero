/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        celadon: "#DAEED9",
        "light-green": "#F9F9F2",
        "dark-green": "#003d3b",
        "coral-orange": "#FF6340",
      },
      fontFamily: {
        "maison-neue-light": ["var(--font-maison-neue-light)", "sans-serif"],
        "maison-neue-bold": ["var(--font-maison-neue-bold)", "sans-serif"],
        "maison-neue-regular": [
          "var(--font-maison-neue-regular)",
          "sans-serif",
        ],
        "clearface-std": ["var(--font-clearface)", "serif"],
      },
      screens: {
        sm: "320px",
        md: "744px",
        xl: "1440px",
      },
      animation: {
        fade: "fadeOut 0.75s ease-out",
      },
      keyframes: () => ({
        fadeOut: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      }),
    },
  },
  plugins: [],
};
