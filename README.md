# Pankaj Kumar — Portfolio

Access Link :- https://portfolio-rho-dusky-wjsa876trm.vercel.app/

A premium, production-ready developer portfolio built with **Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · Framer Motion · React Three Fiber**.

Deep-black theme, blue/purple ambient glow, glassmorphism, animated WebGL starfield + floating gem, an interactive 3D isometric tech grid, magnetic buttons, a custom cursor, and scroll-reveal animations throughout.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

## 📸 Add your profile photo

Save your photo in the **`public/`** folder with the exact filename:

```
public/profile.jpg
```

That's it — the About section picks it up automatically. Until the file exists, it
gracefully shows your initials ("PK") as a fallback, so the site never looks broken.

> Want a different name/format? Change the `src="/profile.jpg"` line in
> `components/sections/About.tsx`. A square image (e.g. 600×600) looks best.

## Editing content

All text, links, projects, tech, and education live in one file — `lib/data.ts`.
Update there; every section reads from it.

- `profile` — name, roles, headline, email, social links, badges
- `about` — bio paragraphs + stat tiles
- `techStack` — the isometric grid tiles (name + accent color)
- `projects` — cards (title, tagline, tags, live/GitHub links, accent)
- `education` — timeline entries

## Structure

```
app/
  layout.tsx        # metadata/OG, fonts, mounts background + cursor
  page.tsx          # section assembly
  globals.css       # theme, glass/ambient utilities, isometric-grid CSS
components/
  Navbar.tsx  CursorFollower.tsx  MagneticButton.tsx  Reveal.tsx  Footer.tsx
  three/            # Scene.tsx (starfield + gem), Background.tsx (lazy wrapper)
  sections/         # Hero, About, TechStack, Projects, Contact
lib/data.ts         # single source of truth for all content
```

## Performance notes

- The WebGL background is lazy-loaded (`next/dynamic`, `ssr: false`) so it never
  blocks first paint; `dpr` is clamped and star counts kept low.
- The tech grid is pure CSS 3D (no second WebGL context) — cheap and crisp.
- `prefers-reduced-motion` is respected; the custom cursor only activates on
  fine-pointer devices.
