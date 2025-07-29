module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"]
      },
      colors: {
        primary: "#28A745",
        dark: "#2C3E50",
        light: "#FFFFFF"
      }
    }
  },
  plugins: []
}; 