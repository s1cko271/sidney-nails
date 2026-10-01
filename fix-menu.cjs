const fs = require('fs');

let layout = fs.readFileSync('src/layouts/Layout.astro', 'utf8');

// Fix Hamburger open
layout = layout.replace(
  /onclick="document\.getElementById\('mobileMenu'\)\.classList\.add\('translate-x-0'\)"/g,
  'onclick="document.getElementById(\\'mobileMenu\\').classList.remove(\\'translate-x-full\\'); document.getElementById(\\'mobileMenu\\').classList.add(\\'translate-x-0\\')"'
);

// Fix Close button & Menu items close
layout = layout.replace(
  /onclick="this\.parentElement\.classList\.remove\('translate-x-0'\)"/g,
  'onclick="this.parentElement.classList.remove(\\'translate-x-0\\'); this.parentElement.classList.add(\\'translate-x-full\\')"'
);

// Fix smooth scroll script block which also manipulates mobile menu
layout = layout.replace(
  /if\(mobileMenu\.classList\.contains\('translate-x-0'\)\) mobileMenu\.classList\.remove\('translate-x-0'\);/g,
  "if(mobileMenu.classList.contains('translate-x-0')) { mobileMenu.classList.remove('translate-x-0'); mobileMenu.classList.add('translate-x-full'); }"
);

fs.writeFileSync('src/layouts/Layout.astro', layout);
console.log('Mobile menu JS fixed');
