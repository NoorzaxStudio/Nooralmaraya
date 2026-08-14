/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0B2544",
          deep: "#061627",
          light: "#123056",
        },
        cream: {
          DEFAULT: "#EDE3D0",
          soft: "#F5EFE2",
        },
        gold: {
          DEFAULT: "#D9B36A",
          light: "#F3D99A",
          dark: "#B8903F",
        },
        bronze: {
          DEFAULT: "#A9672A",
          dark: "#7C4A1D",
        },
        azure: {
          DEFAULT: "#8FB8E0",
          light: "#B9D5EF",
          dark: "#5A87B8",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
        arabic: ["var(--font-arabic)", "sans-serif"],
      },
      letterSpacing: {
        wide: "0.35em",
      },
      transitionTimingFunction: {
        luxe: "cubic-bezier(0.19, 1, 0.22, 1)",
      },
      transitionDuration: {
        "600": "600ms",
        "900": "900ms",
        "1200": "1200ms",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
