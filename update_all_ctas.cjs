const fs = require('fs');

const filesToUpdate = [
  'src/layouts/Layout.astro',
  'src/components/Gallery.astro',
  'src/components/Hero.astro',
  'src/components/Pricing.astro',
  'src/components/Services.astro'
];

for (const file of filesToUpdate) {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    
    // Replace anchor tags targeting Messenger
    content = content.replace(/href=\{siteData\.messengerUrl\} target="_blank" rel="noopener noreferrer"/g, 'href="/#booking"');
    
    // Replace JS onclick targeting Messenger
    content = content.replace(/onclick=\{`window\.open\('\$\{siteData\.messengerUrl\}', '_blank'\)`\}/g, 'onclick="window.location.href=\'/#booking\'"');
    
    // Handle specific hero replace if necessary
    // E.g. if I need it to be smooth scroll, `/` + `#booking` is fine.
    
    fs.writeFileSync(file, content);
    console.log('Updated ' + file);
  }
}
