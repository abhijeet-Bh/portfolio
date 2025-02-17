/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        primaryBlueDark: "#09122C",
        secondaryBlueDark: "#1B1A55",
        accentColor: "#BE3144",
        primaryBlueLight: "#9290C3",
        primaryText: "#9290C3",  // Custom text color
      },
      fontFamily: {
        inter: ['Urbanist', 'sans-serif']
      },
      letterSpacing:{
        '22p': '0.22rem',
      },
      animation: {
        fadeIn: "fadeIn 0.8s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
