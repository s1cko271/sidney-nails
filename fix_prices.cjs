const fs = require('fs');
const path = 'c:/Users/Admin/Downloads/Opal nails/opal-nails/src/data/site.json';
const data = JSON.parse(fs.readFileSync(path, 'utf8'));

data.pricing.menu.categories = [
  {
    id: 'manicure',
    name: 'Manicure',
    badge: '',
    description: 'Luxurious hand and nail care.',
    items: [
      { name: 'Regular manicure', price: '$45', steps: ['Groom your cuticles', 'Gel polish', 'Massage'] },
      { name: 'Deluxe Manicure', price: '$55', steps: ['Groom your Cuticles', 'Gel polish', 'Hot wax paraffin', 'Massage'] },
      { name: 'Deluxe Royal Manicure', price: '$70', steps: ['Groom your Cuticles', 'Gel polish', 'Hot wax paraffin', 'Ten minute massage'] }
    ]
  },
  {
    id: 'pedicure',
    name: 'Pedicure',
    badge: 'Popular',
    description: 'Rejuvenating spa pedicure treatments.',
    items: [
      { name: 'Basic pedicure', price: '$60', steps: ['Groom your cuticles', 'sea salt treatment', 'Lotion + hot towel', '5 minute massage', 'Gel polish'] },
      { name: 'Deluxe pedicure', price: '$70', steps: ['Groom your cuticles', 'scrub sea salt', 'sea salt treatment', 'lotion + hot towel', '10 minute massage', 'Gel polish'] },
      { name: 'Deluxe super royal pedicure', price: '$80', steps: ['Groom your cuticles', 'Callus remover', 'hot wax paraffin', 'sea salt treatment', 'lotion + hot towel', 'Gel polish', '13 minute massage', 'any extra services would be an extra cost'] }
    ],
    note: 'Bubble Spa Scents: $10 for any flavor of your choice (Radiant Rose, Honey Flower, Calming Lavender, Soothing Peppermint, Zesty Lemon, Mango Delight, Juicy Orange, Dainty Jasmine).'
  },
  {
    id: 'acrylic',
    name: 'Acrylic & Dipping',
    description: 'Full sets, fills, and dipping powders.',
    items: [
      { name: 'Fullset pink & white', price: '$70' },
      { name: 'Regular', price: '$65' },
      { name: 'White Tip', price: '$65' },
      { name: 'Ombre pink & white', price: '$70' },
      { name: 'Dipping color Powder', price: '$60' },
      { name: 'Dipping Ombre', price: '$70' },
      { name: 'Builder gel', price: '$65' },
      { name: 'Regular Fill', price: '$50 up' },
      { name: 'Pink & white Fill', price: '$65' },
      { name: 'Pink Fill', price: '$50' },
      { name: 'Ombre Fill', price: '$65' }
    ]
  },
  {
    id: 'waxing',
    name: 'Waxing & Beauty',
    description: 'Facials, Lashes, and Waxing services.',
    items: [
      { name: 'Facial Treatment', price: '$120' },
      { name: 'Eyelash Extensions', price: '$150' },
      { name: 'Face Wax', price: '$70' },
      { name: 'Bikin wax', price: '$80' },
      { name: 'Leg wax', price: '$80' },
      { name: 'under Arm Wax', price: '$40' },
      { name: 'Eyebrow Wax', price: '$15' },
      { name: 'Upper Lip wax', price: '$10' }
    ]
  },
  {
    id: 'addons',
    name: 'Additional Services',
    description: 'Extras and add-ons for your nails.',
    addOns: [
      { name: 'Regular polish change', price: '$20' },
      { name: 'Gel polish change', price: '$30' },
      { name: 'Nails design', price: '$10 up' },
      { name: 'Nail fix', price: '$5 - 10' },
      { name: 'Remov (Acrylic & Dip)', price: '$20' },
      { name: 'Cofin / Almond / Stiletto', price: '$5' }
    ]
  }
];

fs.writeFileSync(path, JSON.stringify(data, null, 2));
console.log("Prices fixed successfully");
