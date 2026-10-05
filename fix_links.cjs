const fs = require('fs');

const components = fs.readdirSync('src/components/').filter(f => f.endsWith('.astro')).map(f => 'src/components/' + f);
const layouts = fs.readdirSync('src/layouts/').filter(f => f.endsWith('.astro')).map(f => 'src/layouts/' + f);
const pages = fs.readdirSync('src/pages/').filter(f => f.endsWith('.astro')).map(f => 'src/pages/' + f);

const allFiles = [...components, ...layouts, ...pages];

for (const file of allFiles) {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;
  
  // Replace direct href="/#booking"
  content = content.replace(/href="\/#booking"/g, 'href={siteData.messengerUrl} target="_blank" rel="noopener noreferrer"');
  
  // Replace onclick in Pricing.astro
  content = content.replace(/onclick="document\.getElementById\('booking'\)\?\.scrollIntoView.*?window\.location\.href='\/#booking'\)"/g, 'onclick={`window.open(\'${siteData.messengerUrl}\', \'_blank\')`}');
  
  // Hardcoded Book Now in Pricing.astro
  content = content.replace(/>\s*Book Now\s*<\/button>/g, '>Message to Book</button>');

  if (original !== content) {
    fs.writeFileSync(file, content);
    console.log('Updated ' + file);
  }
}
