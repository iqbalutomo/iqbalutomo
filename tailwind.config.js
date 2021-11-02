module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "darkmode": "#202023",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
