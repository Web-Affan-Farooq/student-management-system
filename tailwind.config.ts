import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sharp:"#7228e0",
        dark:"#0b0d2e",
        medium:"#202242",
        graylight: "#515691",
        pinktext:"#9185df",
        pink:"#d69ccd",
      },
      backgroundColor: {
        sharp:"#7228e0",
        dark:"#0b0d2e",
        medium:"#202242",
        graylight: "#515691",
        pinktext:"#9185df",
        pink:"#d69ccd",
      },
    },
  },
  plugins: [],
} satisfies Config;
