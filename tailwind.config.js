/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontSize: {
        base: "18px",
      },
    },
    screens: {
      mobile: "375px",
      desktop: "1440px",
    },
    colors: {
      // Primary
      "soft-blue": "hsl(215, 51%, 70%)",
      cyan: "hsl(178, 100%, 50%)",

      // Neutral
      "blue-bg": "hsl(217, 54%, 11%)",
      "blue-card": "hsl(216, 50%, 16%)",
      "blue-line": "hsl(215, 32%, 27%)",
      white: "hsl(0, 0%, 100%)",
    },
  },
  plugins: [],
};
