const colors = require("tailwindcss/colors");
const { darken, lighten } = require("polished");

function polish(color) {
  const multiplier = 0.06;
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

const defaultColors = {};
for (const key in colors) {
  if (Object.hasOwnProperty.call(colors, key)) {
    const element = colors[key];
    if (typeof element === "object") {
      defaultColors[key] = { DEFAULT: element["500"] };
    }
  }
}

module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: polish("#148F72"),
        secondary: polish("#FA7365"),
        "tropical-blue": polish("#6478D5"),
        ...defaultColors,
      },
    },
  },
  plugins: [],
};
