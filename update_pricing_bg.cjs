const fs = require('fs');
let content = fs.readFileSync('src/components/Pricing.astro', 'utf8');

content = content.replace(
  '<section class="py-24 md:py-32 bg-[#f4f4f5] relative overflow-hidden" id="pricing">',
  '<section class="py-24 md:py-32 relative overflow-hidden" id="pricing">\n  <div class="absolute inset-0 z-0 bg-brand-cream"></div>\n  <div class="absolute inset-0 z-0 opacity-40 bg-[url(\'/images/marble-bg.webp\')] bg-cover bg-center bg-fixed"></div>\n  <div class="absolute inset-0 z-0 bg-white/40"></div>'
);

fs.writeFileSync('src/components/Pricing.astro', content);
console.log('Added background image to Pricing section');
