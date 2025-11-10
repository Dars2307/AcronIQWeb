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
        // Previous welcoming color palette
        charcoal: '#1f2937',        // Dark gray for contrast sections
        charcoalLight: '#374151',   // Lighter gray for secondary sections  
        stone: '#6b7280',           // Medium gray for text
        bronze: '#3b82f6',          // Blue accent color
        offwhite: '#f9fafb',        // Light background
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
