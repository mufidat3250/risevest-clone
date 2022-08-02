module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0898a0",
      },
      keyframes:{
        wiggle:{
          '0%, 100%':{trasform:'traslateY(-200px)'},
        }
      },
      animation:{
        wiggle: 'wiggle 1s ease-in-out infinite'
      }
    },
  },
  plugins: [],
};
