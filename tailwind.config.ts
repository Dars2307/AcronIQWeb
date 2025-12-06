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
        // Brand palette (charcoal/bronze executive)
        charcoal: '#111213',        // Primary background
        charcoalLight: '#2B2D2E',   // Secondary surfaces (kept for compatibility)
        graphite: '#2B2D2E',        // Alias for secondary surfaces
        stone: '#B5B7BB',           // Body text
        bronze: '#C28B4A',          // Signature accent
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
