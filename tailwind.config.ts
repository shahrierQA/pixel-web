import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    container: {
      center: true,
      padding: "25px",
    },
    extend: {
      colors: {
        "ui-brand-primary": "#F33838",
        "ui-brand-secondary": "#EFB5B5",
        "ui-black": "#1A1A1B",
        "ui-white": "#FCF6F6",
        "ui-gray": "#B4B4B4",
        "ui-dark-gray": "#737373",
        "ui-light-gray-primary": "#E9E9E9",
        "ui-light-gray-secondary": "#F1F1F1",
      },
    },
  },
  plugins: [],
};
export default config;
