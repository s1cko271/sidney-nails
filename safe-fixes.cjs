const fs = require('fs');

const svgStar = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4"><path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z"/></svg>';

function fixStar(line) {
  if (line.includes('animate-spin-slow')) {
    return line.replace(/>[^<]+</, '>' + svgStar + '<');
  }
  return line;
}

// 1. Fix Hero.astro
let heroLines = fs.readFileSync('src/components/Hero.astro', 'utf8').split('\\n');
heroLines = heroLines.map(line => {
  line = fixStar(line);
  if (line.includes('flex flex-wrap justify-center gap-6 md:gap-12 mt-16')) {
    line = line.replace('flex flex-wrap justify-center gap-6 md:gap-12 mt-16', 'grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-4 md:gap-12 mt-16');
  }
  return line;
});
fs.writeFileSync('src/components/Hero.astro', heroLines.join('\\n'));

// 2. Fix About.astro
let aboutLines = fs.readFileSync('src/components/About.astro', 'utf8').split('\\n');
aboutLines = aboutLines.map(line => {
  line = fixStar(line);
  if (line.includes('<img class="w-[85%] aspect-[4/5] object-cover rounded-2xl shadow-soft"')) {
    line = line.replace('w-[85%]', 'w-full sm:w-[85%] mx-auto');
  }
  if (line.includes('<div class="absolute -bottom-8 -right-4 md:-right-8 bg-brand-charcoal')) {
    line = line.replace('-bottom-8 -right-4 md:-right-8', '-bottom-4 -right-2 sm:-bottom-8 sm:-right-8');
  }
  return line;
});
fs.writeFileSync('src/components/About.astro', aboutLines.join('\\n'));
console.log('Safe fixes applied');
