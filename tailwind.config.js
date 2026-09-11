/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Bricolage Grotesque', 'system-ui', 'sans-serif'],
        body: ['DM Sans', 'system-ui', 'sans-serif'],
        label: ['Space Grotesk', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Courier New', 'monospace'],
      },
      colors: {
        ink: '#141310',
        'ink-soft': '#1e1c18',
        paper: '#f6f2e9',
        'paper-dark': '#ece5d5',
        accent: '#d0672f',
        'accent-light': '#e8895a',
        cobalt: '#2b3df0',
        'cobalt-light': '#5566ff',
      },
      letterSpacing: {
        'widest-xl': '0.25em',
      },
      borderRadius: {
        '4xl': '1.75rem',
        '5xl': '2.25rem',
      },
      screens: {
        'tall': { raw: '(min-height: 780px)' },
      },
    },
  },
  plugins: [],
}
