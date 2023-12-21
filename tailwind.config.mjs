/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      transitionDuration: {
        2000: "2000ms",
        2500: "2500ms",
        3000: "3000ms",
        3500: "3500ms",
        4000: "4000ms",
        4500: "4500ms",
        5000: "5000ms",
        5500: "5500ms",
        6000: "6000ms",
        6500: "6500ms",
        7000: "7000ms",
        7500: "7500ms",
        8000: "8000ms",
      },
      fontFamily: {
        smooch: ["Smooch Sans", "sans-serif"],
      },
      colors: {
        primary: "#ffcd0099",
        secondary: "#01216955",
        tertiary: "#222222CC",
        danger: "#f6511d",
        success: "#2ecf63",
        info: "#39c2e1",
        warning: "#cf25de",
      },
      borderRadius: {
        none: "0",
        sm: "0.125rem",
        DEFAULT: "0.25rem",
        DEFAULT: "4px",
        md: "0.375rem",
        lg: "0.5rem",
        full: "9999px",
        large: "12px",
      },
    },
  },
  plugins: [],
};
