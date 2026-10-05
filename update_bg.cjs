const fs = require('fs');

let s = fs.readFileSync('src/components/GiftCardsPromo.astro', 'utf8');
s = s.replace('bg-white" id="promotions"', 'bg-brand-charcoal text-white" id="promotions"');
s = s.replace('text-brand-goldDark text-xs font-bold tracking-[0.2em] uppercase mb-4', 'text-brand-gold text-[0.65rem] font-bold tracking-[0.2em] uppercase mb-4 border border-brand-gold/30 px-3 py-1 rounded-full');
s = s.replace('text-brand-charcoal mb-4', 'text-white mb-4');
s = s.replace('text-brand-charcoal/60 leading-relaxed', 'text-white/60 leading-relaxed');
fs.writeFileSync('src/components/GiftCardsPromo.astro', s);

let svcs = fs.readFileSync('src/components/Services.astro', 'utf8');
svcs = svcs.replace('bg-white/75', 'bg-brand-charcoal text-white');
svcs = svcs.replace('text-brand-goldDark text-xs font-bold tracking-[0.2em] uppercase mb-4', 'text-brand-gold text-[0.65rem] font-bold tracking-[0.2em] uppercase mb-4 border border-brand-gold/30 px-3 py-1 rounded-full');
svcs = svcs.replace('text-brand-charcoal mb-4', 'text-white mb-4');
svcs = svcs.replace('text-brand-charcoal/60 leading-relaxed', 'text-white/60 leading-relaxed');
fs.writeFileSync('src/components/Services.astro', svcs);

console.log('Updated components for dark mode background alternation');
