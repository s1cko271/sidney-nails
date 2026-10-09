# Sidney Nails Migration Audit & Plan

## 1. Opal-Specific Elements to Remove
- **Colors**: The current gold accents, muddy/dark overlays, and sparkle/star motifs will be entirely removed.
- **Typography**: Existing fonts will be replaced to match Sidney's brand.
- **Media**: All Opal interior/exterior photos, logos, monogram images, and generic stock placeholder images will be replaced.
- **Data (site.json)**: Dickinson, ND addresses, (701) phone numbers, Opal social handles, Opal pricing, and Opal-specific reviews will be purged.
- **SEO/Meta**: Open Graph images, favicons, meta titles, and LocalBusiness schema will be updated to Sidney's details.

## 2. Structural & Layout Plan
- **Hero Section**: Moving away from a centered layout to an asymmetric split layout (balanced text on one side, `salon-1.webp` or similar asset on the other).
- **About Section**: Rethinking the composition—potentially a wide visual with an overlapping content card to feel more airy and artistic.
- **Services & Pricing**: Combining into a cohesive, tabbed full menu (Tabs: Manicure, Pedicure, Acrylic & Dipping, Waxing & Beauty, Additional Services).
- **Services Ticker**: Adding a continuous scrolling text marquee (`marquee`) highlighting key services to break up vertical rhythms.
- **Gallery**: Switching from a uniform masonry/grid to a curated bento-box style grid with varied cell sizes.
- **Reviews**: Transitioning to a "featured review" layout emphasizing quality over quantity.
- **Videos**: Adding a "Salon in Action" section highlighting the 3 videos (`video1`, `video2`, `video3`).
- **Thank You Banner**: Implementing a clean thank-you banner section utilizing `Banner_thankyou.jpg` (if available, or a fallback).
- **Popup System**: Ensuring it fires once per session, handles Escape/backdrop clicks perfectly, and uses the `popup.webp`.
- **Animations**: Refactoring to use literal Tailwind classes (no dynamic string concatenation) and respecting `prefers-reduced-motion`.

## 3. Brand & Styling Choices
- **Palette**: Primary sky/cornflower blue (`#5B9BD5`), secondary rich navy (`#1B3A5C`), soft silver accents, white backgrounds, and soft charcoal-blue text (`text-slate-700`).
- **Typography**: 
  - Headings: **Playfair Display** (elegant serif, fitting the watercolor/feminine brief).
  - Body: **Outfit** (clean sans).
- **Feeling**: Calm, airy, soft-skill, watercolor elegance.
