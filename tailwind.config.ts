import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#FF7E00",
        secondary: "#FFFFFF",
        tertiary: "#000000",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        dmSerif: ["DM Serif Display", "serif"],
      },
      boxShadow: {
        "top-bottom":
          "0 -10px 20px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
export default config;
