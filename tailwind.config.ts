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
      ////Tailwind palette generator | https://uicolors.app/create
      ////Color theory wheel | https://www.canva.com/colors/color-wheel/
      colors: {
        'primary': {
          //base - 500
          '50': '#effef2',
          '100': '#dafee2',
          '200': '#b8fac8',
          '300': '#80f59e',
          '400': '#42e66d',
          '500': '#18c947',//
          '600': '#0eab38',
          '700': '#0f862f',
          '800': '#116a2a',
          '900': '#105725',
          '950': '#033011',
        },

        'secondary': {
          //base - 800
          '50': '#f2f2ff',
          '100': '#e9e8ff',
          '200': '#d6d3ff',
          '300': '#b7b0ff',
          '400': '#9484ff',
          '500': '#7252ff',
          '600': '#602ef9',
          '700': '#511ce5',
          '800': '#4718c9',//
          '900': '#39159d',
          '950': '#200a6b',
      },
    
      'tertiary': {
          //base - 700
          '50': '#fef7ee',
          '100': '#fdecd7',
          '200': '#f9d5af',
          '300': '#f5b77c',
          '400': '#f18f46',
          '500': '#ed7022',
          '600': '#de5718',
          '700': '#c94718',//
          '800': '#933519',
          '900': '#762e18',
          '950': '#40150a',
      },
    
      },
    },
  },
  plugins: [],
};

export default config;
