/** @type {import('tailwindcss').Config} */
export default {
  future: {
    hoverOnlyWhenSupported: true,
  },
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          gold: '#d4af37',
          goldLight: '#e6c86a',
          goldDark: '#b5952f',
          charcoal: '#171717',
          cream: '#faf8f4',
          creamDark: '#f0ede6',
          offwhite: '#fcfcfc',
        }
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        body: ['Montserrat', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 10px 40px -10px rgba(0,0,0,0.08)',
        'glow': '0 0 20px rgba(212, 175, 55, 0.3)',
        'grounded': '0 2px 4px -1px rgba(23, 23, 23, 0.04), 0 12px 24px -4px rgba(23, 23, 23, 0.06)',
        'grounded-hover': '0 4px 8px -2px rgba(23, 23, 23, 0.05), 0 20px 32px -4px rgba(23, 23, 23, 0.08)',
        'floating': '0 4px 6px -1px rgba(23, 23, 23, 0.05), 0 24px 48px -8px rgba(23, 23, 23, 0.1)',
      }
    },
  },
  plugins: [],
}
