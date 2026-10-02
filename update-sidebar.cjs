const fs = require('fs');

let layout = fs.readFileSync('src/layouts/Layout.astro', 'utf8');

const oldSidebar = `    <!-- STICKY SOCIAL SIDEBAR -->
    <div class="fixed left-0 top-1/2 -translate-y-1/2 z-[90] hidden md:flex flex-col bg-white shadow-[8px_8px_24px_rgba(0,0,0,0.1)] rounded-r-2xl border border-gray-100 overflow-hidden w-[60px] py-3 transition-transform duration-500 hover:translate-x-0 -translate-x-1">`;

const newSidebar = `    <!-- COLLAPSIBLE SOCIAL SIDEBAR -->
    <div id="social-sidebar" class="fixed left-0 top-1/2 -translate-y-1/2 z-[90] flex flex-col bg-white shadow-[8px_8px_24px_rgba(0,0,0,0.1)] rounded-r-2xl border border-gray-100 w-[50px] md:w-[60px] py-3 transition-transform duration-500 -translate-x-full">
      
      <!-- Toggle Button -->
      <button id="social-toggle" class="absolute top-1/2 -translate-y-1/2 -right-8 w-8 h-14 bg-white border border-gray-100 border-l-0 shadow-[4px_0_12px_rgba(0,0,0,0.05)] rounded-r-xl flex items-center justify-center text-brand-charcoal hover:text-brand-gold transition-colors focus:outline-none" aria-label="Toggle Social Menu">
        <svg id="social-icon" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div class="flex flex-col w-full h-full overflow-hidden items-center">`;

// Add closing div for the new wrapper
// The original sidebar ends right before <!-- FOOTER -->
const oldFooterMarker = `    <!-- FOOTER -->`;
const newFooterMarker = `      </div>
    </div>

    <!-- SOCIAL SIDEBAR SCRIPT -->
    <script>
      document.addEventListener('DOMContentLoaded', () => {
        const sidebar = document.getElementById('social-sidebar');
        const toggleBtn = document.getElementById('social-toggle');
        const icon = document.getElementById('social-icon');
        let isOpen = false;
        
        if(toggleBtn && sidebar) {
          toggleBtn.addEventListener('click', () => {
            isOpen = !isOpen;
            if (isOpen) {
              sidebar.classList.remove('-translate-x-full');
              sidebar.classList.add('translate-x-0');
              icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />';
            } else {
              sidebar.classList.remove('translate-x-0');
              sidebar.classList.add('-translate-x-full');
              icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />';
            }
          });
        }
      });
    </script>

    <!-- FOOTER -->`;

layout = layout.replace(oldSidebar, newSidebar);
layout = layout.replace(oldFooterMarker, newFooterMarker);

fs.writeFileSync('src/layouts/Layout.astro', layout);
console.log('Sidebar updated to be collapsible and visible on mobile');
