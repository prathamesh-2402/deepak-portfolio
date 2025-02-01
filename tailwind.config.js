/** @type {import('tailwindcss').Config} */

import plugin from 'tailwindcss/plugin';

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'light-background': '#e6e3ee',
        'light-foreground': '#1c4571',
        'light-hover-background': '#1c457110',
        'light-black': '#000000',
        'light-navbar': '#e6e3ee98',

        'dark-background': '#0e1012',
        'dark-foreground': '#f3f6fa',
        'dark-hover-background': '#f9fafb10',
        'dark-white': '#ffffff',
        'dark-navbar': '#0e101230',
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      dropShadow: {
        glow: [
          "0 0px 20px rgba(255,255, 255, 55)",
          "0 0px 65px rgba(255, 255,255, 4)"
        ]
      },
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
