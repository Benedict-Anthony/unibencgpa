/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screen: {
        md: "480px",
      },
    },
  },
  plugins: [require("daisyui")],
};
