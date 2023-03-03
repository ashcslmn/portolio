import defaultTheme from "tailwindcss/defaultTheme";
/** @type {import('tailwindcss').Config} */

module.exports = {
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
  ],
  theme: {
    fontFamily: {
      sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      mono: [...defaultTheme.fontFamily.mono],
    }
  },
};
