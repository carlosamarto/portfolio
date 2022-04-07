module.exports = {
  content: ["./src/**/*.{html,js}", "./public/**/*.{html,js}"],
  theme: {
    screens: {
      xs: "512px",
      sm: "768px",
      md: "976px",
      lg: "1024px",
      xl: "1440px",
    },
    colors: {
      red: "#ef233c",
      dark: "#2b2d42",
      gray: "#8d99ae",
      light: "#edf2f4",
      hover: "#d90429",
      button: "rgba(239, 35, 60, .15)",
    },
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
      moboto: ["Roboto Mono", "monospace"],
    },
    extend: {
      boxShadow: {
        image: "14px 14px 0px 0px",
      },
      fontSize: {
        title: "52px",
        mobile: "32px",
        subtitle: "24px",
        paragraph: "16px",
        small: "14px",
      },
    },
  },
  plugins: [],
};
