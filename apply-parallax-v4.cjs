const fs = require('fs');

function applyParallaxSimple(filePath, bgClass, overlayClass) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Normalize line endings to \n for consistent matching
  content = content.replace(/\\r\\n/g, '\\n');
  
  if (filePath.includes('Services')) {
    content = content.replace(
      '<section class="py-24 md:py-32 bg-white" id="services">\\n  <div class="max-w-[1200px] mx-auto px-6">',
      '<section class="py-24 md:py-32 relative bg-fixed bg-center bg-cover" style="background-image: url(\\'/images/marble-bg.webp\\');" id="services">\\n  <div class="absolute inset-0 bg-white/75"></div>\\n  <div class="max-w-[1200px] mx-auto px-6 relative z-10">'
    );
  }
  
  if (filePath.includes('Reviews')) {
    content = content.replace(
      '<section class="py-24 md:py-32 bg-[#fafafa] text-brand-charcoal overflow-hidden" id="reviews">\\n  <div class="max-w-[1200px] mx-auto px-6">',
      '<section class="py-24 md:py-32 text-brand-charcoal overflow-hidden relative bg-fixed bg-center bg-cover" style="background-image: url(\\'/images/marble-bg.webp\\');" id="reviews">\\n  <div class="absolute inset-0 bg-[#fafafa]/85"></div>\\n  <div class="max-w-[1200px] mx-auto px-6 relative z-10">'
    );
  }
  
  fs.writeFileSync(filePath, content);
}

applyParallaxSimple('src/components/Services.astro');
applyParallaxSimple('src/components/Reviews.astro');

console.log('Fixed parallax replacement done.');
