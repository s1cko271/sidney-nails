const fs = require('fs');
let layout = fs.readFileSync('src/layouts/Layout.astro', 'utf8');
layout = layout.replace(/<body class="([^"]+)">/, '<body class="$1 overflow-x-hidden">');
fs.writeFileSync('src/layouts/Layout.astro', layout);
console.log('Body fixed');
