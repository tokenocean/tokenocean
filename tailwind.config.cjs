module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,svelte}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      colors: {
        primary: "#000041",
        secondary: "#0067D9",
        offblack: "#131313",
        brightgreen: "#0CF574",
        bitcoin: "#F7931A",
      },
    },
  },
  variants: {
    borderWidth: ["responsive", "hover", "focus"],
  },
};
