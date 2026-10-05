const fs = require('fs');
let content = fs.readFileSync('src/components/Booking.astro', 'utf8');

const target = `<h3 class="font-display lining-nums text-3xl font-light text-white mb-3">{siteData.booking.formTitle}</h3>
            <p class="text-brand-goldLight/80 font-light text-sm tracking-wide mb-10 max-w-[280px] mx-auto">{siteData.booking.formSubtitle}</p>
            
            <a href={siteData.messengerUrl} target="_blank" rel="noopener noreferrer" class="inline-block bg-brand-gold border border-brand-gold text-brand-charcoal px-10 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-white hover:border-white transition-all shadow-[0_0_20px_rgba(212,175,55,0.3)]">
              {siteData.booking.formButtonText}
            </a>`;

const replacement = `<h3 class="font-display lining-nums text-3xl font-light text-white mb-3">{siteData.booking.formTitle}</h3>
            <p class="text-brand-goldLight/80 font-light text-sm tracking-wide mb-8 max-w-[280px] mx-auto">{siteData.booking.formSubtitle}</p>
            
            <div class="flex flex-col w-full max-w-[280px] gap-4 relative">
              <a href={siteData.messengerUrl} target="_blank" rel="noopener noreferrer" class="w-full flex items-center justify-center gap-3 bg-brand-gold border border-brand-gold text-brand-charcoal px-6 py-4 rounded-full font-bold text-[0.8rem] uppercase tracking-widest hover:bg-white hover:border-white transition-all shadow-[0_0_20px_rgba(212,175,55,0.2)]">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M0 7.76C0 3.301 3.493 0 8 0s8 3.301 8 7.76-3.493 7.76-8 7.76c-.81 0-1.586-.107-2.316-.307a.639.639 0 0 0-.427.03l-1.588.702a.64.64 0 0 1-.898-.566l-.044-1.423a.639.639 0 0 0-.215-.456C.956 12.108 0 10.092 0 7.76zm5.546-1.459-2.35 3.728c-.225.358.214.761.551.506l2.525-1.916a.48.48 0 0 1 .578-.002l1.869 1.402a1.2 1.2 0 0 0 1.735-.32l2.35-3.728c.226-.358-.214-.761-.551-.506L9.728 7.381a.48.48 0 0 1-.578.002L7.281 5.98a1.2 1.2 0 0 0-1.735.32z"/>
                </svg>
                {siteData.booking.formButtonText}
              </a>
              
              <div class="flex items-center justify-center gap-3 my-1">
                <span class="w-12 h-[1px] bg-white/10"></span>
                <span class="text-white/30 text-xs font-medium uppercase tracking-widest">or</span>
                <span class="w-12 h-[1px] bg-white/10"></span>
              </div>
              
              <a href={\`tel:\${siteData.salon.bookingPhoneRaw}\`} class="w-full flex items-center justify-center gap-3 bg-transparent border border-brand-gold/40 text-brand-gold px-6 py-4 rounded-full font-bold text-[0.8rem] uppercase tracking-widest hover:bg-brand-gold/10 hover:border-brand-gold transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                </svg>
                {siteData.booking.formButtonSecondaryText}
              </a>
              
              <div class="text-center mt-3">
                <span class="text-brand-gold font-body font-semibold text-[1.1rem] tracking-wider">{siteData.salon.bookingPhone}</span>
              </div>
            </div>`;

content = content.replace(target, replacement);

fs.writeFileSync('src/components/Booking.astro', content);
console.log('updated Booking.astro');
