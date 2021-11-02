module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "darkmode": "#202023",
        "lightmode": "#f0e7db",
        "grey": "#313134"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
