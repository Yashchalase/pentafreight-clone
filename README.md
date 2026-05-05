# Penta Freight Website Clone

This project is a frontend clone of the Penta Freight website built to practice UI replication, component structuring, and animation handling.

##  Live Demo
https://pentafreight-clone.vercel.app/

##  GitHub Repository
https://github.com/Yashchalase/pentafreight-clone

---

##  Tech Stack

- React 18 (with Vite)
- Tailwind CSS
- Framer Motion
- React Router DOM

---

##  Pages Implemented

- `/` – Homepage  
- `/industries` – Industries page  
- `/pentakuhl` – Pentakuhl page  

---

##  Approach

I started by analyzing the original site section-by-section using browser devtools to understand layout, spacing, and styling.

Then I built reusable components like Navbar, Footer, Sidebar, and Cookie Banner so they can be shared across pages.

Each page is structured using smaller section components to keep the code clean and maintainable.

For animations, I used Framer Motion with `whileInView` to trigger animations on scroll.

The goal was to keep the UI as close as possible to the original by matching colors, spacing, and layout through inspection.

---

##  Assumptions

- Used Unsplash images instead of original proprietary images  
- Replaced some logos (Pelican BioThermal, CoolGuard) with text placeholders  
- Used system sans-serif font as the original font wasn't clearly identifiable  
- Added placeholder links where dropdown content was not visible  
- Cookie banner state is stored in localStorage  

---

##  Issues Found in Original Site

- No meta description tags (SEO issue)  
- Missing alt text on several images (accessibility issue)  
- No 404 page (invalid routes show blank screen)  
- Cookie banner resets on refresh  
- Images not optimized (no lazy loading/WebP)  
- No aria-labels on icon-only buttons  
- No favicon  

---

##  Improvements Added

- Added meta tags for SEO  
- Added alt text for all images  
- Cookie banner persists using localStorage  
- Smooth scrolling enabled  
- Added hover and focus states  
- Scroll animations using Framer Motion  
- Fully responsive design  
- Cleaner component-based structure  

---

##  Getting Started

```bash
npm install
npm run dev
