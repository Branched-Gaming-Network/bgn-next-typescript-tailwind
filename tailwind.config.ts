import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      // Add custom color palette
      // colors: {
      //   'custom': {
      //     50: "#f5f6f6",
      //     100:'#e5e7e8',
      //     200: "#aaaeb6",
      //     300: "#aaaeb6",
      //     400: "#808790",
      //     500: "#656c75",
      //     600: "#565a64",
      //     700: "#4a4d54",
      //     800: "#414349",
      //     900: "#393b40",
      //     950: "#1e1f22"
      //   }
      
    },
  },
  plugins: [],
};
export default config;
