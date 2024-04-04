/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "375",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      fontFamily: {
        RubikReg: "RubikReg",
        RubikMed: "RubikMed",
        RubikBold: "RubikBold",
      },
    },
  },
  plugins: [],
};
