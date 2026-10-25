/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        lux: {
          bg: {
            light: '#F8F7F4',
            dark: '#121214',
            cardLight: '#FFFFFF',
            cardDark: '#19191D',
          },
          text: {
            primary: '#18181B',
            secondary: '#52525B',
            muted: '#71717A',
            darkPrimary: '#F4F4F5',
            darkSecondary: '#A1A1AA',
            darkMuted: '#71717A'
          },
          gold: {
            DEFAULT: '#C5A880',
            light: '#E5D6C3',
            dark: '#9E7E55',
            metallic: '#D4AF37'
          },
          emerald: {
            DEFAULT: '#10B981',
            glow: '#059669'
          },
          border: {
            light: 'rgba(0, 0, 0, 0.07)',
            dark: 'rgba(255, 255, 255, 0.09)'
          }
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', '"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'lux': '0 10px 30px -10px rgba(0, 0, 0, 0.05)',
        'lux-hover': '0 20px 40px -15px rgba(0, 0, 0, 0.12)',
        'lux-dark': '0 10px 30px -10px rgba(0, 0, 0, 0.5)',
      }
    },
  },
  plugins: [],
}
