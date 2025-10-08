/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    {
      pattern: /^(bg|text|border)-(primary|secondary|accent|destructive|muted-foreground)/,
    },
    {
      pattern: /hover:bg-(primary|secondary|accent|destructive)/,
      variants: ['hover'],
    },
    'neon-text',
    'neon-border',
    'neon-glow',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}