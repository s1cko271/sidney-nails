const fs = require('fs');
let content = fs.readFileSync('src/layouts/Layout.astro', 'utf8');
content = content.replace(' style="animation-delay: 1s;"', '');
fs.writeFileSync('src/layouts/Layout.astro', content);
console.log('Removed delay');
