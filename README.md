# Alexander Vance — Portfolio (React + Vite)

A luxury dark/gold personal portfolio site, built with **React 18 + Vite + TypeScript + Tailwind CSS**.

This is a plain React version (converted from an original Next.js build) so it can be
hosted for free on static hosts like **Vercel**, **Netlify**, or **GitHub Pages**.

## What changed from the original Next.js version
- Removed Next.js (`app/` router, `next.config.js`) — now a standard Vite `src/` app.
- Removed the 3D Three.js hero canvas — replaced with a placeholder for your own photo.
- Removed `@studio-freight/lenis` (smooth-scroll library) — the native CSS
  `scroll-behavior: smooth` already handles this, so one less dependency to install.
- Removed unused packages (`clsx`, `tailwind-merge`) that weren't referenced anywhere.
- Fixed the custom gold cursor so it only shows on devices with a real mouse —
  previously `cursor: none` was applied globally, which could cause issues on
  touchscreens.
- Everything else (all sections, animations, styling) is unchanged.

## Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the dev server:**
   ```bash
   npm run dev
   ```
   Open the local URL it prints (usually http://localhost:5173).

3. **Build for production:**
   ```bash
   npm run build
   ```
   This creates a `dist/` folder — that's what you deploy.

## Customizing

- **Your name / title:** `src/components/Hero/HeroSection.tsx`
- **Your photo:** put an image file in `public/`, then in
  `src/components/Hero/HeroSection.tsx` replace the `{/* your image is here */}`
  comment with:
  ```jsx
  <img src="/your-photo.png" alt="Your name" className="w-full h-full object-cover rounded-3xl" />
  ```
- **Project screenshots:** put images in `public/projects/`, then update
  `src/components/Sections/Projects.tsx` (see the comment there).
- **Resume:** put a PDF at `public/resume.pdf`.
- **Email / phone / social links:** `src/components/Sections/Contact.tsx`.
- **Colors:** `tailwind.config.js` (`gold` / `obsidian` colors) and `src/index.css`.

## Deploying for free
- **Vercel:** import the GitHub repo, it auto-detects Vite — no config needed.
- **Netlify:** build command `npm run build`, publish directory `dist`.
- **GitHub Pages:** run `npm run build`, then deploy the `dist/` folder (e.g. with
  the `gh-pages` package or GitHub Actions).
