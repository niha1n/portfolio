/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],

  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        'mark-pro': ['Mark Pro', 'sans-serif'],
        'd-din': ['D-DIN Condensed', 'sans-serif'],
        terminal: ['Ubuntu Mono', 'monospace'],
      },
      backgroundImage: {
        'landing-grad': 'radial-gradient(circle, #0b0b0b 50%, rgba(0,0,0,1) 100%);',
      },
      boxShadow:{
        'custom': 'rgb(69,162,158,0.7) 3px 10px 20px, rgb(69,162,158,0.3) 0px 0px 60px ',
        'navbar': 'rgb(0,0,0,0.8) 0px 5px 10px',
      },
      animation: {
        rotate: 'rotate 10s linear infinite',
        blink: 'blink 0.7s infinite',
      },
      colors: {
        cyan: '#66fcf1',
        'cyan-dark': '#45a29e',
        grey: 'c5c6c7',
        'dark-grey': '#1f2833',
        dark: '#0b0b0b',
      },
      keyframes: {
        rotate: {
          '0%': { transform: 'rotate(0deg) scale(10)' },
          '100%': { transform: 'rotate(-360deg) scale(10)' },
        },
        blink: {
          '0%': { opacity: 0 },
        },
      },
    },
  },
  plugins: [require('@xpd/tailwind-3dtransforms')],
};
