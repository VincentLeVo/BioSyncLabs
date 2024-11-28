/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'selector',
  darkSelector: '.dark-mode', // Define the selector to toggle dark mode
  theme: {
    extend: {
      colors: {
        blue: {
          50: '#EBF1FF',
          100: '#D5E0FF',
          200: '#A8C2FF',
          300: '#7AA3FF',
          400: '#4D85FF',
          500: '#2667FF', // This is your default blue color
          600: '#1F57D4',
          700: '#1945A9',
          800: '#12347F',
          900: '#0B2354',
          950: '#00123D',
        },
      },
      fontFamily: {
        sans: 'Ranade, system-ui, sans-serif',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
}
