/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#0a0a0f',
          surface: '#111118',
          border: '#1e1e2e',
        },
        primary: '#6366f1',
        secondary: '#a855f7',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Space Grotesk', 'sans-serif'],
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'bounce-arrow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(8px)' },
        },
      },
      animation: {
        'cursor-blink': 'blink 1s step-end infinite',
        float: 'float 6s ease-in-out infinite',
        'bounce-arrow': 'bounce-arrow 1.5s ease-in-out infinite',
      },
      boxShadow: {
        'glow-indigo': '0 0 30px rgba(99, 102, 241, 0.3)',
        'glow-purple': '0 0 30px rgba(168, 85, 247, 0.3)',
        'glow-pink': '0 0 30px rgba(236, 72, 153, 0.3)',
      },
    },
  },
  plugins: [],
}
