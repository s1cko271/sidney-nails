const fs = require('fs');
let content = fs.readFileSync('src/layouts/Layout.astro', 'utf8');

// The string to replace (top FAB classes)
const searchStr = 'bg-white text-brand-charcoal border border-brand-charcoal/10 flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 hover:text-brand-gold';
const replacementStr = 'bg-brand-gold text-brand-charcoal flex items-center justify-center shadow-glow hover:scale-110 transition-all duration-300';

if (content.includes(searchStr)) {
  content = content.replace(searchStr, replacementStr);
  fs.writeFileSync('src/layouts/Layout.astro', content);
  console.log('Replaced top FAB to gold');
} else {
  console.log('Could not find search string');
}
