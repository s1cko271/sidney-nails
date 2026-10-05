const fs = require('fs');
let site = JSON.parse(fs.readFileSync('src/data/site.json', 'utf8'));
site.hero.ctaSecondary = 'Text / Call to Book';
fs.writeFileSync('src/data/site.json', JSON.stringify(site, null, 2));

let hero = fs.readFileSync('src/components/Hero.astro', 'utf8');
hero = hero.replace('href="/#services"', 'href={`tel:${siteData.salon.bookingPhoneRaw}`}');
fs.writeFileSync('src/components/Hero.astro', hero);
console.log('Hero updated');
