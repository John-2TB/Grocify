# Grocify Repository Overview

## What this project is
This repository contains a static multi-page grocery storefront prototype called **Grocify**. It uses HTML for page structure, Tailwind CSS (v4 via CLI) for styling, and a small amount of vanilla JavaScript for simple client-side interactions.

## Current pages
- `index.html`: Landing page with hero section and navigation into login/store.
- `store.html`: Product catalog layout with cards, pricing, and add-to-cart controls.
- `login.html`: Login form page with a Spline 3D embed.

## Front-end stack
- Tailwind CSS generated from `src/input.css` into `dist/output.css`.
- AOS (Animate on Scroll) loaded from CDN on pages for motion effects.
- Spline viewer loaded from CDN on `login.html`.

## JavaScript behavior
- `store.js`: Handles pagination button visual state (currently limited to page1/page2 style toggling).
- `login.js`: Captures email/password input and stores an array of user objects in `localStorage` under `registeredUsers`.

## Notes observed while scanning
- Image references use `/images/...` and depend on serving from a matching web root.
- Tailwind utility classes are extensive and custom component classes are defined in `src/input.css` (`.link`, `.hover-link`, `.odd-grid-display`, `.even-grid-display`, `.bg-image`).
- `package.json` includes Tailwind + CLI dependencies but no build/watch scripts yet.
- There are likely implementation bugs to address later (for example, invalid `removeProperty(BackgroundColor)` usage and `JSON.parse("registeredUsers")` parsing a literal string).
