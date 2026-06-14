/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: '#ffffff',
        border: {
          DEFAULT: '#dde3ed',
          mid: '#c8d2e0',
        },
        navy: {
          400: '#1c3e72',
          500: '#163058',
          600: '#122543',
          700: '#0d1e36',
          800: '#091524',
          900: '#050f1e',
        },
        blue: {
          brand: '#1354c8',
          mid: '#1a65e0',
          bright: '#2478f5',
          light: '#dbeafe',
        },
        gold: {
          brand: '#c8861a',
          light: '#fdf4e7',
        },
        green: {
          brand: '#0e7c55',
          light: '#dcf5ec',
        },
        t: {
          1: '#08152a',
          2: '#2c3e58',
          3: '#5a6e88',
          4: '#8fa0b8',
        },
        bg: {
          brand: '#f5f7fa',
          2: '#eef1f6',
        }
      },
      boxShadow: {
        s1: '0 1px 4px rgba(5, 15, 30, .06)',
        s2: '0 4px 16px rgba(5, 15, 30, .09)',
        s3: '0 12px 40px rgba(5, 15, 30, .13)',
        s4: '0 24px 72px rgba(5, 15, 30, .18)',
      },
      borderRadius: {
        DEFAULT: '10px',
        lg: '16px',
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        outfit: ['Outfit', 'sans-serif'],
        bebas: ['Bebas Neue', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
