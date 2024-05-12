/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    fontFamily:{
      "serif":["Knewave"]
    },
    colors:{
      "sakura-pink": "#fcd1d7",
      "paper": "#f6eee3",
      "dark-blue": "#0c2e41",
      "wood-brown": "#8e5f27",
      "mustard": "#ca8a04",
      "white": "#fff"
    },
    extend: {
      screens: {
        "xs": "480px"
      }
    },
  },
  plugins: [],
}

