module.exports = {
  purge: ["./components/**/*.js", "./pages/**/*.js"],
  theme: {
    extend: {
      colors: {
        charcoal: "#264653",
        "brand-yellow": "#ffc400",
      },
    },
  },
  variants: {
    extend: {
      cursor: ["hover"],
    },
  },
};
