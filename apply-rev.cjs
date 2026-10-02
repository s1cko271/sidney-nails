const fs = require('fs');

let r = fs.readFileSync('src/components/Reviews.astro', 'utf8');
r = r.replace(/<section class="py-24 md:py-32 bg-\[#fafafa\] text-brand-charcoal overflow-hidden" id="reviews">[\s\S]*?<div class="max-w-\[1400px\] mx-auto px-6 relative z-10">/, '<section class="py-24 md:py-32 text-brand-charcoal overflow-hidden relative bg-fixed bg-center bg-cover" style="background-image: url(\'/images/marble-bg.webp\');" id="reviews">\n  <div class="absolute inset-0 bg-[#fafafa]/85"></div>\n  <div class="max-w-[1400px] mx-auto px-6 relative z-10">');
fs.writeFileSync('src/components/Reviews.astro', r);
console.log('Done');
