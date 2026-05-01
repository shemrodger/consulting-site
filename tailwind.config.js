/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        body: ['DM Sans', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Courier New', 'monospace'],
      },
      colors: {
        ink: '#0f0f0f',
        paper: '#f5f3ee',
        'paper-dark': '#ede9e1',
        stone: '#8a8278',
        accent: '#c8532a',
        'accent-light': '#e8734a',
      },
      letterSpacing: {
        'widest-xl': '0.25em',
      },
      screens: {
        'tall': { raw: '(min-height: 780px)' },
      },
    },
  },
  plugins: [],
}
