const fs = require('fs');

const files = [
  'src/layouts/Layout.astro',
  'src/components/Hero.astro', 
  'src/components/About.astro', 
  'src/components/Services.astro', 
  'src/components/Pricing.astro', 
  'src/components/Gallery.astro', 
  'src/components/GiftCardsPromo.astro', 
  'src/components/Reviews.astro', 
  'src/components/Booking.astro'
];

files.forEach(f => {
  if (fs.existsSync(f)) {
    console.log('\n================================');
    console.log('FILE:', f);
    const content = fs.readFileSync(f, 'utf8');
    
    // Check for potential mobile layout issues
    const lines = content.split('\n');
    lines.forEach((line, idx) => {
      // 1. Flex without wrap or col
      if (line.includes('flex ') && !line.includes('flex-col') && !line.includes('flex-wrap') && !line.includes('md:flex-col') && !line.includes('lg:flex-col')) {
         console.log(`[Line ${idx+1}] Potential strict flex: ${line.trim()}`);
      }
      
      // 2. Fixed widths that break mobile (< 320px)
      if (line.match(/w-\[([4-9]\d{2,}px|[1-9]\d{3,}px)\]/)) {
         console.log(`[Line ${idx+1}] Large fixed width: ${line.trim()}`);
      }
      if (line.match(/min-w-\[([3-9]\d{2,}px)\]/)) {
         console.log(`[Line ${idx+1}] Large min-width: ${line.trim()}`);
      }
      
      // 3. Grid without 1-column mobile
      if (line.includes('grid ') && line.includes('grid-cols-') && !line.includes('grid-cols-1')) {
         console.log(`[Line ${idx+1}] Grid might not be mobile-friendly: ${line.trim()}`);
      }

      // 4. Large text sizes on mobile (text-5xl or more without md/lg modifiers)
      if (line.match(/class="[^"]*\btext-[5-9]xl\b[^"]*"/) && !line.match(/md:text-/)) {
         console.log(`[Line ${idx+1}] Huge text without responsive sizing: ${line.trim()}`);
      }
      
      // 5. Paddings that might be too large on mobile
      if (line.match(/p[xy]-[1-9][0-9]\b/) && !line.match(/md:p[xy]-/)) {
         console.log(`[Line ${idx+1}] Large padding without responsive: ${line.trim()}`);
      }
    });
  }
});
