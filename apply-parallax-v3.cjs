const fs = require('fs');

function applyParallaxRobust(filePath, bgClassToRemove, overlayClass) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Use regex to match the section tag flexibly regarding spaces and line endings
  // e.g. <section class="... bg-white ..." id="...">\s*<div class="max-w-[1200px] mx-auto px-6">
  
  const regex = new RegExp(\`<section class="([^"]*?)\\\s*\${bgClassToRemove}\\\s*([^"]*?)" id="([^"]+)">\\\s*<div class="max-w-\\\\[1200px\\\\] mx-auto px-6">\`, 'g');
  
  content = content.replace(regex, (match, beforeClasses, afterClasses, id) => {
    const newClasses = \`\${beforeClasses} \${afterClasses}\`.trim();
    return \`<section class="\${newClasses} relative bg-fixed bg-center bg-cover" style="background-image: url('/images/marble-bg.webp');" id="\${id}">
  <div class="absolute inset-0 \${overlayClass}"></div>
  <div class="max-w-[1200px] mx-auto px-6 relative z-10">\`;
  });
  
  fs.writeFileSync(filePath, content);
}

// 1. Services
applyParallaxRobust('src/components/Services.astro', 'bg-white', 'bg-white/70');

// 2. Reviews
applyParallaxRobust('src/components/Reviews.astro', 'bg-\\\\[#fafafa\\\\]', 'bg-[#fafafa]/85');

console.log('Fixed parallax replacement for Services and Reviews.');
