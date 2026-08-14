# Noor Al Maraya — Landing Page

Luxury single-page site for Noor Al Maraya (interior design & construction, Muscat).
Next.js 14 (App Router) · TypeScript · Tailwind CSS · GSAP + ScrollTrigger · Framer Motion.
Bilingual (English / Arabic) with a navbar toggle, full RTL support.

## Run it

This sandbox has no network access, so the dependencies in `package.json` were
never installed here and the app was never built or served — everything below is
written and reviewed by hand, not verified with `next dev`. Do a normal first run
locally and treat that as your QA pass:

```bash
npm install
npm run dev
# open http://localhost:3000
```

```bash
npm run build && npm run start   # production build
```

## What's real vs. placeholder

- **Logo** (`public/logo.png`) — extracted from your uploaded lockup, background keyed to transparent.
- **Hero video** (`public/video/hero.mp4`, poster `hero-poster.jpg`) — your uploaded `IMG-Final.MOV`,
  transcoded to web-friendly H.264/mp4 (was HEVC, which most browsers can't play) and downscaled to 720p
  to keep scroll-scrubbing smooth. Swap in a higher-res export the same way if you want more fidelity.
- **Collection imagery**:
  - Kitchens, Dressing & Closets — hotlinked from Unsplash (`images.unsplash.com`, whitelisted in
    `next.config.mjs`), free to use commercially under the Unsplash License. Stand-ins for your own
    project photography — swap the URLs in the `IMAGES` array in `components/Collection.tsx` when ready.
  - TV & Living Lounges — **real Noor Al Maraya work**: your uploaded site photo, cropped to cut the
    ladder and the still-wrapped pendant light out of frame, then color/contrast/sharpness polished
    (`public/images/tv-lounge.jpg`). Once you have a fully-styled shot of the same wall (fixture unwrapped,
    styled), swap this file out — same filename, same 4:5 crop.
- **Instagram / X links** in `components/Footer.tsx` point to `#` — drop in your real profile URLs.

## Notable decisions

- **"The Collection" cards** — your brief's interaction spec (hover scale, gold glow, frosted chip) was
  originally written for a tea product (Earl Grey / Ceylon Gold / Premium Indian). I kept the interaction
  pattern but swapped the content for the three services you described: **Kitchens**, **Dressing & Closets**,
  **TV & Living Lounges**.
- **Five hero headlines, four given ranges** — you listed five lines but the brief only specified four scroll
  ranges (15–25%, 35–45%, 60–70%, 85–100%). I added a 0–10% opening range for the first line ("Your Partner in
  Building Your Dream Home") so it's visible immediately on load, then fades as the second line takes over.
  Adjust `RANGES` in `components/Hero.tsx` to retime any of this.
- **Hero headline copy** — each title now has a short supporting line beneath it in a light blue accent
  (`azure` in `tailwind.config.js`), and the titles themselves are set in navy (`text-navy`) with a soft
  cream glow behind them for legibility, since the hero video swings from light (paper/wood) to dark
  (charcoal) tones as it scrubs.
- **Language toggle** is a client-side context (`lib/i18n.tsx`), not routed URLs (no `/ar` path) — matches
  "single-page site" with a nav button switch. It persists the choice in `localStorage` and flips `dir`
  to `rtl` with an Arabic font (Tajawal) swapped in automatically.
- **Contact** — footer has a styled phone (tel: link) and address block instead of a WhatsApp CTA.

## Structure

```
app/
  layout.tsx        fonts, providers, cursor + grain overlays
  page.tsx           assembles sections, lazy-loads Collection
  globals.css        grain, vignette, corner-bracket frame, cursor, blend-mode nav
components/
  Navbar.tsx          mix-blend-difference nav, blur-on-scroll, language toggle
  Hero.tsx            450vh sticky scroll-scrubbed video + 5 fading headlines
  Collection.tsx       3 hover cards, gold glow, frosted-glass chip
  WhatsAppCTA.tsx      free-consultation CTA
  Footer.tsx           logo, gold divider, IG/X, © mark
  CustomCursor.tsx     gold-dot cursor with lerp easing, disabled on touch
  GrainOverlay.tsx     fixed ~4% opacity film grain
lib/
  content.ts          EN/AR copy dictionary
  i18n.tsx             language context (persists to localStorage, sets dir/lang)
public/
  logo.png, video/, images/
```

## iOS Safari video notes

`Hero.tsx` sets `muted`, `playsInline`, `preload="auto"`, calls `video.load()` on mount, and only
writes `video.currentTime` while the video is paused (it's never played — scrubbing is the only
thing that moves the frame) — the combination iOS Safari needs to scrub reliably without ever
attempting autoplay.
