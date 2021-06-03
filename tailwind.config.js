const plugin = require("tailwindcss/plugin");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        "offset-gray": "8px 8px rgb(65, 65, 65)",
      },
      colors: {
        primary: {
          50: "#f5f8f8",
          100: "#ebf2f2",
          200: "#cddede",
          300: "#afcaca",
          400: "#74a2a2",
          500: "#387a7a",
          600: "#326e6e",
          700: "#2a5c5c",
          800: "#224949",
          900: "#1b3c3c",
        },
      },
      gridTemplateColumns: {
        footer: " 1fr 3fr 1fr 1fr",
      },
    },
  },
  variants: {
    extend: {
      ringWidth: ["active"],
      ringColor: ["active"],
    },
  },
  plugins: [
    plugin(function ({ addComponents, theme }) {
      const containers = {
        ".page-container": {
          display: "flex",
          height: "100vh",
        },
        ".box-container": {
          backgroundColor: theme("backgroundColor.white"),
          boxShadow: theme("boxShadow.offset-gray"),
        },
      };

      addComponents(containers);
    }),
  ],
};
