module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0898a0",
      },
      boxShadow: {
        "4xl": "0px 12px 24px rgb(64 187 195 / 15%)",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { trasform: "traslateY(-200px)" },
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
