const fs = require('fs');
const data = JSON.parse(fs.readFileSync('src/data/site.json', 'utf8'));

// Fix Manicure
const manicure = data.pricing.menu.categories.find(c => c.id === 'manicure');
manicure.items[0].price = '$45';
manicure.items[1].price = '$60';

// Fix Dipping
const dipping = data.pricing.menu.categories.find(c => c.id === 'dipping');
dipping.items[0].price = '$60';
dipping.items[1].price = '$65';

// Fix Pedicure
const pedicure = data.pricing.menu.categories.find(c => c.id === 'pedicure');
pedicure.items[0].price = '$55';
pedicure.items[1].price = '$65';
pedicure.items[2].price = '$80';
pedicure.items[3].price = '$90';
pedicure.items[3].note = 'Extra Massage 10 min: $15 · Paraffin: $10';

// Fix Nail Enhancement
const enhancement = data.pricing.menu.categories.find(c => c.id === 'enhancement');
enhancement.items[0].price = '$60+';
enhancement.items[1].price = '$70+';
enhancement.items[2].price = '$70+';
enhancement.items[3].price = '$65+';
enhancement.items[4].price = '$50+';
enhancement.items[5].price = '$60+';
enhancement.items[6].price = '$65+';
enhancement.items[7].price = '$60+';

// Fix Add-Ons
const addons = data.pricing.menu.categories.find(c => c.id === 'addons-polish');
addons.addOns[0].price = '$10';
addons.addOns[1].price = '$10';
addons.addOns[2].price = '$10';
addons.addOns[3].price = '$10';
addons.addOns[4].price = '$10';
addons.addOns[5].price = '$10';
addons.addOns[6].price = '$15';
addons.addOns[7].price = '$10';

// Update packages at the top
data.pricing.packages[0].price = '$45';
data.pricing.packages[1].price = '$80';
data.pricing.packages[2].price = '$90';

// Wait, I should also fix the Services section prices that were corrupted.
data.services.items.forEach(item => {
  if (item.description.includes('Nail shaping, cuticle care')) {
    item.price = 'From $45';
  } else if (item.description.includes('Seasalt foot soak')) {
    item.price = 'From $55';
  } else if (item.description.includes('Lightweight, odor-free dipping')) {
    item.price = 'From $60';
  } else if (item.description.includes('Full set acrylic gel')) {
    item.price = 'From $50+';
  } else if (item.description.includes('French tip, cat eye')) {
    item.price = 'From $10';
  }
});

fs.writeFileSync('src/data/site.json', JSON.stringify(data, null, 2));
console.log('Prices updated successfully!');
