import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "navy-blue": '#00152b',
        "background": '#f8f9fa',
        "primary": '#007bff',
        'highlight': '#ffc107',
        "light-blue": '#0053a8'
      }
    }
  },
  plugins: [],
};
export default config;
