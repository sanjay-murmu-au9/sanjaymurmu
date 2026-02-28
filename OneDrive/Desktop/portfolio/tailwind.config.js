/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "Roboto", "Helvetica Neue", "sans-serif"],
      },
      colors: {
        slate: {
          50: '#f8fafc',
          100: '#e2e8f0',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        teal: {
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
        },
        navy: {
          800: '#0a192f',
          900: '#020c1b',
        },
        'light-navy': '#112240',
        'lightest-navy': '#233554',
        'green-accent': '#64ffda',
      }
    },
  },
  plugins: [],
}
