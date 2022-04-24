const colors = require("tailwindcss/colors");
const { darken, lighten } = require("polished");

function polish(color) {
  const multiplier = 0.1;
  return {
    100: lighten(multiplier * 4, color),
    200: lighten(multiplier * 3, color),
    300: lighten(multiplier * 2, color),
    400: lighten(multiplier, color),
    500: color,
    DEFAULT: color,
    600: darken(multiplier, color),
    700: darken(multiplier * 2, color),
    800: darken(multiplier * 3, color),
    900: darken(multiplier * 4, color),
  };
}

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: polish("#11468F"),
        secondary: polish("#F3C892"),
        error: polish("#B8405E"),
        success: polish("#219F94"),
        warning: polish("#FF9F45"),
      },
    },
  },
  plugins: [],
};
