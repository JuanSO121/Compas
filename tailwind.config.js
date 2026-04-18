/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy:  { DEFAULT: '#00162D', light: '#001f42', dark: '#000e1c' },
        brand: { DEFAULT: '#FF6B00', light: '#FF9A50', dark: '#cc5500' },
        // alias para index.css
        multimedia: { DEFAULT: '#FF6B00', light: '#ffe0cc', dark: '#cc5500' },
        sistemas:   { DEFAULT: '#00162D', light: '#ccd9e8', dark: '#001f42' },
      },
      fontFamily: {
        sans:    ['DM Sans', 'sans-serif'],
        display: ['DM Serif Display', 'serif'],
      },
    },
  },
  plugins: [],
};