import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  "#fdf6ec",
          100: "#fae8cc",
          200: "#f5ce97",
          300: "#efb162",
          400: "#e69437",
          500: "#d4791c",
          600: "#b05f14",
          700: "#8a4910",
          800: "#6a3710",
          900: "#4f2a0d",
        },
        cream: "#faf6ef",
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
