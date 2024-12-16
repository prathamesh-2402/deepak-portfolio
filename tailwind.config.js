/** @type {import('tailwindcss').Config} */

import plugin from 'tailwindcss/plugin';

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        wave: {
          '0%, 100%': {
            transform: 'translateY(0%)',
            animationTimingFunction: 'cubic-bezier(0,0,0.2,1)'
          },
          '50%': {
              transform: 'translateY(-25%)',
              animationTimingFunction: 'cubic-bezier(0.8,0,1,1)'
          }
        }
      },
      animation: {
        wave1: 'wave 1s ease-in-out 1',
        wave2: 'wave 1s linear 1',
        wave3: 'wave 1s linear 1'
      }
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'animate-delay': (value) => ({
            animationDelay: value,
          }),
        },
        { values: theme('transitionDelay') }
      )
    }),
  ],
  darkMode: "class",
};
