module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["HuluFont", "Helvetica", "Arial", "sans-serif"],
      },
      keyframes: {
        authTransitionInSm: {
          "0%": { left: "-20px" },
          "90%": { left: "55%" },
          "100%": { left: "50%", transform: "translateX(-50%)" },
        },
        authTransitionInMd: {
          "0%": { left: "-20px" },
          "90%": { left: "55px" },
          "100%": { left: "50px" },
        },
      },

      animation: {
        authTransitionInSm: "authTransitionInSm .7s forwards",
        authTransitionInMd: "authTransitionInMd .7s forwards",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
