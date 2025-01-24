/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        'float': {
          '0%, 100%': {
            transform: 'translateY(-50%) translateX(0)'
          },
          '50%': {
            transform: 'translateY(-50%) translateX(-20px)'
          }
        },
        'float-delayed': {
          '0%, 100%': {
            transform: 'translateY(-50%) translateX(0)'
          },
          '50%': {
            transform: 'translateY(-50%) translateX(20px)'
          }
        }
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
        'fade-in': 'fade-in 0.6s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float-delayed 6s ease-in-out infinite 1s',
      }
    },
  },
  plugins: [],
}