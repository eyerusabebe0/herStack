/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        pink: {
          50: '#fdf2f8',
          100: '#fce7f3',
          200: '#fbcfe8',
          300: '#f9a8d4',
          400: '#f472b6',
          500: '#ec4899',
          600: '#db2777',
          700: '#be185d',
          800: '#9d174d',
          900: '#831843',
          950: '#500724',
        },
        ink: {
          50: '#f4f6fb',
          100: '#e8ecf5',
          200: '#cdd5e8',
          300: '#a3b0d1',
          400: '#7284b5',
          500: '#52639a',
          600: '#3e4d7d',
          700: '#323f66',
          800: '#1f2a4d',
          900: '#141d38',
          950: '#0b1228',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        display: ['Clash Display', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      backgroundImage: {
        'pink-radial': 'radial-gradient(circle at 30% 20%, rgba(236,72,153,0.15), transparent 50%)',
        'pink-gradient': 'linear-gradient(135deg, #ec4899 0%, #db2777 50%, #be185d 100%)',
        'pink-soft': 'linear-gradient(135deg, #fdf2f8 0%, #fce7f3 100%)',
        'dark-gradient': 'linear-gradient(180deg, #0b1228 0%, #141d38 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'gradient-shift': 'gradient-shift 8s ease infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      boxShadow: {
        'pink': '0 10px 40px -10px rgba(236, 72, 153, 0.4)',
        'pink-lg': '0 20px 60px -15px rgba(236, 72, 153, 0.5)',
        'glass': '0 8px 32px rgba(15, 23, 42, 0.08)',
        'card': '0 4px 24px rgba(15, 23, 42, 0.06)',
        'card-hover': '0 20px 50px -10px rgba(15, 23, 42, 0.15)',
      },
    },
  },
  plugins: [],
};
