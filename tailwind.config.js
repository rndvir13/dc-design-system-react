module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    colors: {
      black: "#000000",
      white: "#FFFFFF",
      transparent: 'transparent',
      neutral: {
        10: "#E0E0E0",
        20: "#AEAEAE",
        30: "#9E9E9E",
        40: "#3F3F3F",
        50: "#333333",
      },
      primary: {
        05: "hsl(224, 100%, 75%)",
        10: "hsl(224, 100%, 58%)",
        15: "hsl(231, 99%, 62%)",
        20: "hsl(223, 100%, 40%)",
      },
      secondary: {
        05: "hsl(199, 18%, 50%)",
        10: "hsl(199, 18%, 33%)",
        15: "hsl(206, 17%, 37%)",
        20: "hsl(198, 35%, 17%)",
      },
      danger: {
        05: "hsl(0, 65%, 68%)",
        10: "hsl(0, 65%, 51%)",
        15: "hsl(5, 64%, 55%)",
        20: "hsl(357, 100%, 30%)",
      },
    },
    boxShadow: {
      sm: '0px 2px 3px 0px rgba(0, 0, 0, 0.2)'
    },
    extend: {
    },
  },
  plugins: [],
}
