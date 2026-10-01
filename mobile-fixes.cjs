const fs = require('fs');

const svgStar = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4"><path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z"/></svg>`;

// 1. Fix Layout.astro
let layout = fs.readFileSync('src/layouts/Layout.astro', 'utf8');
// Fix hamburger tap target
layout = layout.replace(
  '<div class="lg:hidden flex flex-col gap-1.5 cursor-pointer z-[100]"',
  '<div class="lg:hidden flex flex-col justify-center gap-1.5 cursor-pointer z-[100] p-3 -mr-3"'
);
// Fix global overflow-x
layout = layout.replace(
  '<body class="font-body bg-brand-cream text-brand-charcoal antialiased">',
  '<body class="font-body bg-brand-cream text-brand-charcoal antialiased overflow-x-hidden">'
);
// Fix floating CTA position on mobile
layout = layout.replace(
  '<a class="fixed bottom-6 right-6 z-[99] w-14 h-14',
  '<a class="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[99] w-14 h-14'
);
fs.writeFileSync('src/layouts/Layout.astro', layout);

// 2. Fix Hero.astro
let hero = fs.readFileSync('src/components/Hero.astro', 'utf8');
hero = hero.replace(/o/g, svgStar);
// Make stats wrap safer on tiny screens
hero = hero.replace('flex flex-wrap justify-center gap-6 md:gap-12 mt-16', 'grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-4 md:gap-12 mt-16');
fs.writeFileSync('src/components/Hero.astro', hero);

// 3. Fix About.astro
let about = fs.readFileSync('src/components/About.astro', 'utf8');
about = about.replace(/o/g, svgStar);
// Fix the image and badge to prevent overflow
about = about.replace(
  '<img class="w-[85%] aspect-[4/5] object-cover rounded-2xl shadow-soft"',
  '<img class="w-full sm:w-[85%] mx-auto aspect-[4/5] object-cover rounded-2xl shadow-soft"'
);
about = about.replace(
  '<div class="absolute -bottom-8 -right-4 md:-right-8 bg-brand-charcoal',
  '<div class="absolute -bottom-4 -right-2 sm:-bottom-8 sm:-right-8 bg-brand-charcoal'
);
fs.writeFileSync('src/components/About.astro', about);

// 4. Fix Gallery.astro
let gallery = fs.readFileSync('src/components/Gallery.astro', 'utf8');
// Change grid from 2-col to 1-col on mobile to prevent extreme cropping
gallery = gallery.replace(
  'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 auto-rows-[200px] md:auto-rows-[280px]',
  'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[250px] md:auto-rows-[280px]'
);
// Update the featured item span
gallery = gallery.replace(
  'index === 0 ? \\\'col-span-2 row-span-2\\\' : \\\'\\\'',
  'index === 0 ? \\\'sm:col-span-2 sm:row-span-2\\\' : \\\'\\\''
);
// Make sure to match exact strings if backslashes don't work
gallery = gallery.replace(
  "index === 0 ? 'col-span-2 row-span-2' : ''",
  "index === 0 ? 'sm:col-span-2 sm:row-span-2' : ''"
);
fs.writeFileSync('src/components/Gallery.astro', gallery);

console.log('Mobile layout fixes applied.');
