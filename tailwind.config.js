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
      dark: "#2b2d42",
      red: "#ef233c",
      light: "#edf2f4",
      gray: "#8d99ae",
      hover: "#d90429",
      btn: "rgba(239, 35, 60, .15)",
    },
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
      moboto: ["Roboto Mono", "monospace"],
    },
    boxShadow: {
      red: "20px 20px 0px #EF233C;",
    },
    extend: {
      minHeight: {
        sections: "80vh",
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
