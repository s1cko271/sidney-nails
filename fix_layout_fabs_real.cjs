const fs = require('fs');
let content = fs.readFileSync('src/layouts/Layout.astro', 'utf8');

const startMarker = '<!-- CTA FLOAT -->';
const endMarker = '<style is:global>';

const startIndex = content.indexOf(startMarker);
const endIndex = content.indexOf(endMarker);

if (startIndex > -1 && endIndex > -1) {
  const newFabs = `<!-- CTA FLOAT -->
    <div class="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[99] flex flex-col gap-3 md:gap-4 items-center">
      <a class="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white text-brand-charcoal border border-brand-charcoal/10 flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 hover:text-brand-gold" href={\`tel:\${siteData.salon.bookingPhoneRaw}\`} title="Call Us">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 md:w-6 md:h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" /></svg>
      </a>
      
      <a class="relative w-12 h-12 md:w-14 md:h-14 rounded-full bg-brand-gold text-brand-charcoal flex items-center justify-center shadow-glow hover:scale-110 transition-transform duration-300" href="/#booking" title={\`Book at \${siteData.salon.name}\`}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 md:w-6 md:h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" /></svg>
        <span class="absolute -inset-1.5 border-2 border-brand-gold rounded-full opacity-0 animate-[pulse-ring_2s_ease-out_infinite]"></span>
      </a>
    </div>
  
    `;
    
  content = content.substring(0, startIndex) + newFabs + content.substring(endIndex);
  fs.writeFileSync('src/layouts/Layout.astro', content);
  console.log('Successfully replaced FABS');
} else {
  console.log('Markers not found');
}
