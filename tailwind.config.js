module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkblue: "#1A3580",
        orange: "#ED572F",
        blue: "#3153B2",
        black: "#101820",
        green: "#13ce66",
        "gray-dark": "#667085",
        "gray-light": "#DCDEE2",
        "gray-super-light": "#EFEFEF",
        white: "#FFFFFF",
        bluewhite: "#F7FBFE",
      },
      fontFamily: {
        "archivo-sanseriff": ["Archivo", "sans-serif"],
        "space-grotesk-sanseriff": ["Space Grotesk", "sans-serif"],
      },
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
