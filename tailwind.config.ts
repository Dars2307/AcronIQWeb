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
        // Legacy colors (keeping for compatibility)
        navy: {
          DEFAULT: '#0A1931',
          dark: '#050D1A',
          light: '#1A2F4A',
        },
        blue: {
          gradient: {
            start: '#1E40AF',
            middle: '#3B82F6',
            end: '#60A5FA',
          },
        },
        // New Charcoal/Bronze Executive Palette
        charcoal: {
          deep: '#111213',      // Primary background. The room. The silence.
          matte: '#2B2D2E',     // Secondary surfaces, panels, UI chrome.
        },
        stone: {
          grey: '#B5B7BB',      // Body text. Measured. Unemotional.
        },
        bronze: {
          matte: '#C28B4A',     // Signature accent. Linework. Highlights. Seal.
        },
        offwhite: '#E6E7E8',    // Softer white for secondary text
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
