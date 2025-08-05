/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      screens: {
        xs: "360px", // Custom smallest screen
        sm: "640px", // Small tablets / large phones
        md: "768px", // Tablets
        mdd: "820px",
        lg: "1024px", // Laptops
        xl: "1280px", // Desktops
        // 2xl: '1536px' // Optional: Ultra-wide monitors
      },
      colors: {
        primary: "#22B286",
        primarygreen: "#1A906B",
        greenlight: "#F7FDF9",
        primarylight: "#F2FFFB",
        gray1: "#D0D5DD",
        navyblue: "#101828",
        gray2: "#667085",
        gray3: "#F9FAFB",
        pink: "#C11574",
        pinklight: "#FDF2FA",
        blue: "#026AA2",
        bluelight: "#F0F9FF",
        purple: "#3538CD",
        purplelight: "#EEF4FF",
        orange: "#FF9B26",
        orangelight: "#FFF9F3",
        light: "#EAECF0",
        footergray: "#98A2B3",
        gray4: "#F2F2F2",
      },
    },
  },
  plugins: [],
};
