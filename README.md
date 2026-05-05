PROJECT: Penta Freight Website Clone

LIVE DEMO: https://pentafreight-clone.vercel.app/

GITHUB: https://github.com/Yashchalase/pentafreight-clone

TECH STACK USED:
- React 18 + Vite
- Tailwind CSS
- Framer Motion
- React Router DOM (routing)

PAGES BUILT:
- Homepage (/)
- Industries (/industries)  
- Pentakuhl (/pentakuhl)

APPROACH:
- Analyzed the reference site section by section using browser devtools
- Built shared components first (Navbar, Footer, SideBar, CookieBanner)
- Each page assembled from reusable section components
- Animations added using Framer Motion with whileInView for scroll triggers
- Pixel-perfect matching using exact colors, fonts, spacing from devtools inspection

ASSUMPTIONS:
- Original site uses proprietary images — replaced with Unsplash images of similar content
- Pelican BioThermal and CoolGuard logos replaced with styled text placeholders (copyrighted assets)
- Font approximated as system sans-serif (original font not publicly identified)
- Some dropdown menu content not visible — implemented with placeholder links
- Cookie banner dismissal saved to localStorage

BUGS FOUND IN REFERENCE SITE:
1. No meta description tags on any page (SEO issue)
2. Missing alt text on multiple images (accessibility issue)
3. No 404 page — broken URLs show blank screen
4. Cookie banner reappears on every page refresh (no persistence)
5. Images not optimized — no lazy loading or WebP format
6. No aria-labels on icon-only buttons
7. Page has no favicon

IMPROVEMENTS IMPLEMENTED IN CLONE:
- Added proper meta tags on all pages
- All images have descriptive alt text
- Cookie banner state saved to localStorage
- Smooth scroll behavior added globally
- All buttons have hover and focus states
- Framer Motion scroll animations added (not in original)
- Fully responsive mobile layout
- Clean component-based folder structure

GETTING STARTED:

npm install

npm run dev

DEPLOYMENT:
Deployed on Vercel. Connected to GitHub repo for auto-deploy on push.
