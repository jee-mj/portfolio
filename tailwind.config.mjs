/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      transitionDuration: {
        2000: "2000ms",
      },
      fontFamily: {
        smooch: ["Smooch Sans", "sans-serif"],
      },
      colors: {
        primary: "#ffcd0099",
        secondary: "#012169e6",
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
