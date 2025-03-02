import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "instrument-serif-italic": [
          "var(--font-instrument-serif-italic)",
          "sans-serif",
        ],
        "instrument-serif-regular": [
          "var(--font-instrument-serif-regular)",
          "sans-serif",
        ],
        "instrument-sans-italic": [
          "var(--font-instrument-sans-italic)",
          "sans-serif",
        ],
        "instrument-sans-regular": [
          "var(--font-instrument-sans-regular)",
          "sans-serif",
        ],
        "tinos-regular": ["var(--font-tinos-regular)", "sans-serif"],
        "tinos-bold": ["var(--font-tinos-bold)", "sans-serif"],
        "tinos-bold-italic": ["var(--font-tinos-bold-italic)", "sans-serif"],
        "tinos-italic": ["var(--font-tinos-italic", "san-serif"],
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [],
} satisfies Config;
