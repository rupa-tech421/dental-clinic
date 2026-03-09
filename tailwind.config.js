/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        teal: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        },
        dental: {
          blue: '#0284c7',
          teal: '#0d9488',
          light: '#f0f9ff',
          gray: '#f8fafc',
          dark: '#0f172a',
        }
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        body: ['DM Sans', 'Helvetica', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'bounce-slow': 'bounce 3s infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'gradient': 'gradient 8s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        }
      },
      boxShadow: {
        'premium': '0 20px 60px rgba(2, 132, 199, 0.15)',
        'card': '0 4px 20px rgba(0, 0, 0, 0.06)',
        'hover': '0 20px 40px rgba(2, 132, 199, 0.2)',
        'glow': '0 0 40px rgba(14, 165, 233, 0.3)',
      },
      backgroundSize: {
        '200%': '200%',
      }
    },
  },
  plugins: [],
}
