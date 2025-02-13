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
        'primary-dark': '#001523',
        'primary-gold': '#84743c',
      },
      backgroundColor: {
        'dark': '#001523',
        'dark-lighter': '#0a2533',
      },
    },
  },
  plugins: [],
};

export default config;
