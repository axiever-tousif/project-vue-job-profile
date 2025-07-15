/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#0ef",            // neon cyan
        darkBg: "#0f172a",          // dark background
        darkCard: "#1e293b",        // dark card background
        textMain: "#f1f5f9",        // light text
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
}
