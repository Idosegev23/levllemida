/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2D3648',        // כחול-אפור כהה ומקצועי
        secondary: '#4A5D6B',      // אפור כחלחל
        accent: '#7C9885',         // ירוק חכם ועדין
        warm: '#A67C5A',           // חום עדין
        neutral: '#F8F9FA',        // לבן חם
        'text-dark': '#1A1D23',    // שחור רך
        'text-light': '#6B7280',   // אפור בינוני
        // שמירה על תאימות עם קוד קיים
        'light-pink': '#E5E7EB',   // אפור בהיר
        'soft-pink': '#F3F4F6',    // אפור בהיר מאוד
        'highlight-yellow': '#A67C5A', // חום במקום צהוב
        'text-black': '#1A1D23',
      },
      fontFamily: {
        heebo: ['Heebo', 'sans-serif'],
      },
      boxShadow: {
        'sm': '0 1px 2px rgba(0, 0, 0, 0.05)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      }
    },
  },
  plugins: [],
} 