const fs = require('fs');
let content = fs.readFileSync('src/layouts/Layout.astro', 'utf8');

const searchStr = `<a class="w-12 h-12 md:w-14 md:h-14 rounded-full bg-brand-gold text-brand-charcoal flex items-center justify-center shadow-glow hover:scale-110 transition-all duration-300" href={\`tel:\${siteData.salon.bookingPhoneRaw}\`} title="Call Us">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 md:w-6 md:h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" /></svg>
      </a>`;

const replacementStr = `<a class="relative w-12 h-12 md:w-14 md:h-14 rounded-full bg-brand-gold text-brand-charcoal flex items-center justify-center shadow-glow hover:scale-110 transition-all duration-300" href={\`tel:\${siteData.salon.bookingPhoneRaw}\`} title="Call Us">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 md:w-6 md:h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" /></svg>
        <span class="absolute -inset-1.5 border-2 border-brand-gold rounded-full opacity-0 animate-[pulse-ring_2s_ease-out_infinite]" style="animation-delay: 1s;"></span>
      </a>`;

if (content.includes(searchStr)) {
  content = content.replace(searchStr, replacementStr);
  fs.writeFileSync('src/layouts/Layout.astro', content);
  console.log('Added pulse ring to phone FAB');
} else {
  console.log('Search string not found. Please verify the exact string.');
}
