module.exports = {
  content: ["./src/**/*.{html,js}", "./public/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "768px",
      md: "976px",
      lg: "1024px",
    },
    colors: {
      dark: "#2b2d42",
      red: "#ef233c",
      light: "#edf2f4",
      text: "#8d99ae",
      hover: "#d90429",
      alt: "rgba(239, 35, 60, .15)",
      glass: "rgba(43, 45, 66, .95)",
    },
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
      moboto: ["Roboto Mono", "monospace"],
    },
    boxShadow: {
      red: "20px 20px 0px #EF233C;",
    },
    extend: {
      fontSize: {
        title: "52px",
        mobile: "32px",
        subtitle: "24px",
        paragraph: "16px",
        small: "14px",
      },
      height: {
        mini: "1px",
      },
      minHeight: {
        vh: "calc(100vh - 6rem)",
      },
    },
  },
  plugins: [],
};
