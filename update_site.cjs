
const fs = require('fs');
const path = 'c:/Users/Admin/Downloads/Opal nails/opal-nails/src/data/site.json';
const data = JSON.parse(fs.readFileSync(path, 'utf8'));

data.services.items = [
  {
    name: 'Manicure',
    description: 'Regular manicure, Deluxe Manicure, Deluxe Royal Manicure.',
    price: 'From ',
    image: '/images/services/manicure.jpg'
  },
  {
    name: 'Pedicure Spa',
    description: 'Basic pedicure, Deluxe pedicure, Deluxe super royal pedicure. Ten dollars any flavor your choice for bubble spa scents.',
    price: 'From ',
    image: '/images/services/pedicure.jpg'
  },
  {
    name: 'Acrylic & Dipping',
    description: 'Fullset pink & white, Regular, White Tip, Ombre, Builder gel, Fills, Dipping color Powder, Dipping Ombre.',
    price: 'From ',
    image: '/images/services/dipping.webp'
  },
  {
    name: 'Waxing & Beauty',
    description: 'Facial Treatment, Eyelash Extensions, and full face/body waxing services.',
    price: 'From ',
    image: '/images/services/enhancement.jpg'
  },
  {
    name: 'Additional Services',
    description: 'Polish changes, nail designs, fixes, removals, and custom shapes.',
    price: 'From ',
    image: '/images/services/addons.jpg'
  }
];

data.pricing.menu.categories = [
  {
    id: 'manicure',
    name: 'Manicure',
    badge: '',
    description: 'Luxurious hand and nail care.',
    items: [
      { name: 'Regular manicure', price: '', steps: ['Groom your cuticles', 'Gel polish', 'Massage'] },
      { name: 'Deluxe Manicure', price: '', steps: ['Groom your Cuticles', 'Gel polish', 'Hot wax paraffin', 'Massage'] },
      { name: 'Deluxe Royal Manicure', price: '', steps: ['Groom your Cuticles', 'Gel polish', 'Hot wax paraffin', 'Ten minute massage'] }
    ]
  },
  {
    id: 'pedicure',
    name: 'Pedicure',
    badge: 'Popular',
    description: 'Rejuvenating spa pedicure treatments.',
    items: [
      { name: 'Basic pedicure', price: '', steps: ['Groom your cuticles', 'sea salt treatment', 'Lotion + hot towel', '5 minute massage', 'Gel polish'] },
      { name: 'Deluxe pedicure', price: '', steps: ['Groom your cuticles', 'scrub sea salt', 'sea salt treatment', 'lotion + hot towel', '10 minute massage', 'Gel polish'] },
      { name: 'Deluxe super royal pedicure', price: '', steps: ['Groom your cuticles', 'Callus remover', 'hot wax paraffin', 'sea salt treatment', 'lotion + hot towel', 'Gel polish', '13 minute massage', 'any extra services would be an extra cost'] }
    ],
    note: 'Bubble Spa Scents:  for any flavor of your choice (Radiant Rose, Honey Flower, Calming Lavender, Soothing Peppermint, Zesty Lemon, Mango Delight, Juicy Orange, Dainty Jasmine).'
  },
  {
    id: 'acrylic',
    name: 'Acrylic & Dipping',
    description: 'Full sets, fills, and dipping powders.',
    items: [
      { name: 'Fullset pink & white', price: '' },
      { name: 'Regular', price: '' },
      { name: 'White Tip', price: '' },
      { name: 'Ombre pink & white', price: '' },
      { name: 'Dipping color Powder', price: '' },
      { name: 'Dipping Ombre', price: '' },
      { name: 'Builder gel', price: '' },
      { name: 'Regular Fill', price: ' up' },
      { name: 'Pink & white Fill', price: '' },
      { name: 'Pink Fill', price: '' },
      { name: 'Ombre Fill', price: '' }
    ]
  },
  {
    id: 'waxing',
    name: 'Waxing & Beauty',
    description: 'Facials, Lashes, and Waxing services.',
    items: [
      { name: 'Facial Treatment', price: '' },
      { name: 'Eyelash Extensions', price: '' },
      { name: 'Face Wax', price: '' },
      { name: 'Bikin wax', price: '' },
      { name: 'Leg wax', price: '' },
      { name: 'under Arm Wax', price: '' },
      { name: 'Eyebrow Wax', price: '' },
      { name: 'Upper Lip wax', price: '' }
    ]
  },
  {
    id: 'addons',
    name: 'Additional Services',
    description: 'Extras and add-ons for your nails.',
    addOns: [
      { name: 'Regular polish change', price: '' },
      { name: 'Gel polish change', price: '' },
      { name: 'Nails design', price: ' up' },
      { name: 'Nail fix', price: ' - 10' },
      { name: 'Remov (Acrylic & Dip)', price: '' },
      { name: 'Cofin / Almond / Stiletto', price: '' }
    ]
  }
];

fs.writeFileSync(path, JSON.stringify(data, null, 2));

