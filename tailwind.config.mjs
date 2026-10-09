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
          gold: '#5B9BD5', // Sky Blue primary
          sky: '#5B9BD5', // Saturated sky blue
          goldLight: '#8CAAD3', // Lighter blue
          goldDark: '#4A7CA6', // Darker blue
          navy: '#1B3A5C', // Rich Navy secondary
          luxury: '#1B3A5C', // Navy secondary
          charcoal: '#1E293B', // Soft charcoal blue (slate-800)
          cream: '#FFFFFF', // White
          creamDark: '#F8FAFC', // Off-white/slate-50
          offwhite: '#F1F5F9', // Soft silver/slate-100
        }
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['Outfit', 'sans-serif'],
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
