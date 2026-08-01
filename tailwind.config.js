/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          yellow: '#F5C518', // Theme color for CTA/highlight cards
          blue: '#3B82F6',   // Theme color for hero subheading and contact CTA card
        },
        navy: {
          DEFAULT: '#0F1226', // Projects section background
          light: '#1E2238',
          dark: '#080A15',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
