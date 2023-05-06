/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        BG_Basic: "#5956E9",
        BG_Footer: "#232233",
        BG_Menu: "#6C6C72",
        white: "#fff",
        blue: "#0096FF",
        BG_Wel: "#000080",
      },
    },
  },
  plugins: [],
};
