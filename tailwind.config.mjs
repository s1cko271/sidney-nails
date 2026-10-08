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
          gold: '#9FB8D4',
          goldLight: '#C9DDF5',
          goldDark: '#6A89B0',
          luxury: '#D4AF37',
          charcoal: '#0D1521',
          cream: '#FFFFFF',
          creamDark: '#F4F7FA',
          offwhite: '#F9FAFB',
        }
      },
      fontFamily: {
        display: ['"Playfair Display"', '"Cormorant Garamond"', 'serif'],
        body: ['Montserrat', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 10px 40px -10px rgba(0,0,0,0.08)',
        'glow': '0 0 15px rgba(159, 184, 212, 0.35), 0 0 25px rgba(235, 165, 205, 0.25)',
        'grounded': '0 2px 4px -1px rgba(23, 23, 23, 0.04), 0 12px 24px -4px rgba(23, 23, 23, 0.06)',
        'grounded-hover': '0 4px 8px -2px rgba(23, 23, 23, 0.05), 0 20px 32px -4px rgba(23, 23, 23, 0.08)',
        'floating': '0 4px 6px -1px rgba(23, 23, 23, 0.05), 0 24px 48px -8px rgba(23, 23, 23, 0.1)',
      }
    },
  },
  plugins: [],
}
