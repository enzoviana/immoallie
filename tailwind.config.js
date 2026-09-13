/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2E66F6',
          hover: '#1E50E0',
          light: '#4B7DF8',
        },
        slate: {
          DEFAULT: '#263238',
          light: '#37474F',
          dark: '#1A2328',
        },
        neutral: {
          50: '#FFFFFF',
          100: '#F8FAFC',
          200: '#F1F5F9',
          300: '#E2E8F0',
          400: '#CBD5E1',
          500: '#78889B',
          600: '#64748B',
          700: '#475569',
          800: '#334155',
          900: '#1E293B',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-33.333%)' },
        }}
    },
    animation: {
        marquee: 'marquee 25s linear infinite',
      },
  },
  plugins: [],
}
