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
        // Strategic Surgeon Palette (Charcoal/Bronze Executive)
        charcoal: '#111213',        // Primary background
        charcoalLight: '#2B2D2E',   // Secondary surfaces  
        stone: '#B5B7BB',           // Body text, measured tone
        bronze: '#C28B4A',          // Signature accent, matte finish
        offwhite: '#E6E7E8',        // Softer secondary text
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'system-ui', 'sans-serif'],
        serif: ['Cormorant Garamond', 'serif'],
      },
      borderWidth: {
        thin: '0.5px',
      },
    },
  },
  plugins: [],
};

export default config;
