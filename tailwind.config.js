module.exports = {
  content: ["./src/**/*.{html,js}", "./public/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
    },
    colors: {
      dark: "#2b2d42",
      red: "#ef233c",
      light: "#edf2f4",
      text: "#8d99ae",
      hover: "#d90429",
      alt: "rgba(239, 35, 60, .35)",
    },
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
      rbtmono: ["Roboto Mono", "monospace"],
    },
    extend: {
      fontSize: {
        title: "64px",
        mobile: "32px",
        subtitle: "24px",
        paragraph: "16px",
        small: "14px",
      },
      height: {
        initial: "calc(100vh - 6rem)",
      },
      minHeight: {
        initial: "calc(100vh - 6rem)",
      },
    },
  },
  plugins: [],
};
