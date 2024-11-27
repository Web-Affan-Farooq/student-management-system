import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
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

        background: "#2117d4",
        foreground: "var(--foreground)",
        link:'#60c5db'
      },
      backgroundColor: {
        sharp:"#7228e0",
        dark:"#0b0d2e",
        medium:"#202242",
        graylight: "#515691",
        pinktext:"#9185df",
        pink:"#d69ccd",
      },

      backgroundImage: { // -- bg class
        custom_1:'radial-gradient(#080363,#000)'
      }
      , 
      boxShadow : {
        dark:"0px 0px 90px 10px #60c5db"
      }
    },
  },
  plugins: [],
} satisfies Config;
