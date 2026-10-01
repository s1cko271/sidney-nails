const fs = require('fs');

// 1. Update site.json
let siteData = JSON.parse(fs.readFileSync('src/data/site.json', 'utf8'));
siteData.promo.text = "Thank you for your continued support! Enjoy 10% off your service as a token of our appreciation.";
fs.writeFileSync('src/data/site.json', JSON.stringify(siteData, null, 2));

// 2. Update Gallery.astro
let gallery = fs.readFileSync('src/components/Gallery.astro', 'utf8');
const oldPromoStart = gallery.indexOf('<div class="bg-gradient-to-br from-brand-gold to-brand-goldDark py-20 px-6 text-center relative overflow-hidden">');
const oldPromoEnd = gallery.indexOf(')}', oldPromoStart); // The closing brace for the condition

if (oldPromoStart !== -1 && oldPromoEnd !== -1) {
  const newPromo = `<div class="bg-brand-charcoal relative py-24 px-6 text-center overflow-hidden border-t border-brand-gold/20 shadow-2xl">
    <!-- Luxury Background Accents -->
    <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-goldDark via-brand-goldLight to-brand-goldDark"></div>
    <div class="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-gold/10 via-transparent to-transparent"></div>
    
    <div class="max-w-2xl mx-auto relative z-10">
      <div class="inline-block text-brand-gold text-xs font-bold tracking-[0.2em] uppercase mb-4">Special Offer</div>
      <h2 class="font-display text-4xl md:text-5xl text-white font-light mb-6">{siteData.promo.headline}</h2>
      <p class="text-brand-cream/80 font-light tracking-wide mb-10 text-lg leading-relaxed">{siteData.promo.text}</p>
      <a class="inline-block bg-brand-gold text-brand-charcoal px-10 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-white hover:text-brand-charcoal hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] transition-all duration-300 motion-safe:hover:-translate-y-1" href="/#booking">
        {siteData.promo.buttonText}
      </a>
    </div>
  </div>
`;
  gallery = gallery.substring(0, oldPromoStart) + newPromo + gallery.substring(oldPromoEnd);
  fs.writeFileSync('src/components/Gallery.astro', gallery);
  console.log('Gallery updated');
}

// 3. Update Booking.astro
let booking = fs.readFileSync('src/components/Booking.astro', 'utf8');
const oldBookingStart = booking.indexOf('<!-- Booking Form Column -->');
const oldBookingEnd = booking.indexOf('</div>\n  </div>\n</section>');

if (oldBookingStart !== -1 && oldBookingEnd !== -1) {
  const newBooking = `<!-- Booking Form Column -->
      <div class="bg-brand-charcoal rounded-3xl border border-brand-gold/20 shadow-2xl overflow-hidden flex flex-col reveal sticky top-32 relative">
        <!-- Accent lines -->
        <div class="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-brand-goldDark via-brand-goldLight to-brand-goldDark"></div>
        <div class="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-brand-goldDark via-brand-goldLight to-brand-goldDark"></div>
        
        <div class="p-10 md:px-12 md:pt-12 md:pb-8 text-center relative z-10 border-b border-white/5">
          <h3 class="font-display text-3xl font-light text-white mb-3">{siteData.booking.formTitle}</h3>
          <p class="text-brand-goldLight/80 font-light text-sm tracking-wide">Book your appointment securely via Square.</p>
        </div>
        
        <div class="flex-grow min-h-[400px] relative z-10 bg-brand-charcoal">
          {siteData.booking.bookingUrl === "REPLACE_WITH_SQUARE_BOOKING_LINK" ? (
            <div class="p-12 text-center h-full flex flex-col items-center justify-center">
              <div class="w-20 h-20 rounded-full border border-brand-gold/30 flex items-center justify-center text-brand-gold mb-6 shadow-[0_0_30px_rgba(212,175,55,0.1)] bg-brand-gold/5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="w-10 h-10"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" /></svg>
              </div>
              <p class="mb-8 text-brand-cream/80 font-light"><strong class="text-brand-gold font-normal tracking-wider block mb-2 text-lg">Booking System Ready</strong>Your Square Appointments widget will appear here once linked.</p>
              <a href="#" class="inline-block bg-transparent border-2 border-brand-gold text-brand-gold px-8 py-3 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-brand-gold hover:text-brand-charcoal transition-all shadow-[0_0_15px_rgba(212,175,55,0.2)]">
                {siteData.booking.formButtonText}
              </a>
            </div>
          ) : (
             <div class="p-2">
                <iframe 
                  src={siteData.booking.bookingUrl} 
                  style="width:100%; height: 500px; border:none; display:block;" 
                  title="Square Booking Widget">
                </iframe>
            </div>
          )}
        </div>
      </div>

    </div>
`;
  booking = booking.substring(0, oldBookingStart) + newBooking + booking.substring(oldBookingEnd - 7); 
  // -7 is to keep the closing divs intact if needed, let's just make it precise.
  fs.writeFileSync('src/components/Booking.astro', booking);
  console.log('Booking updated');
}
