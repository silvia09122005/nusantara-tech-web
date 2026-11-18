/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#071426",
          900: "#0b1f3a",
          800: "#102e52",
          700: "#17416f",
        },
        ocean: {
          500: "#2585e5",
          400: "#52a7f5",
          100: "#eaf4ff",
        },
      },
      boxShadow: {
        soft: "0 24px 70px -32px rgba(7, 20, 38, 0.28)",
      },
      backgroundImage: {
        "hero-grid":
          "linear-gradient(rgba(255,255,255,0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.055) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
