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
      }
    },
  },
  plugins: [],
};
