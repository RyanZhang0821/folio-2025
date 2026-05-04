# Folio 2025 — Personalization checklist

Use this to track swapping Bruno’s content for yours. Check items as you complete them.

**Owner notes (Ryan):** greeting, UCSD Data Science, thank Bruno in Behind the scene, remove Discord & analytics, projects/lab/career TBD in separate doc, time machine → own idea (URL vs 3D assets).

**Task 1 (done):** `index.html` titles + meta + home copy, `Title.js` prefix, `site.webmanifest` names, analytics script removed, `og:url` omitted until you have a public origin (see `.env.example` `VITE_SITE_ORIGIN`). Share images use `/social/share-image.png` (relative to your deploy host).

**Task 2 (done):** `social.js` (8-slot layout + your links + TBD), Discord modal removed, `consoleLog.js` social block, `SocialArea.js` click fix + Instagram canvas overlay + optional X mesh hide (until Blender swap).

**Task 3 (done):** Behind the scene copy in `index.html` — thank Bruno, Ryan voice, fork TBD, sign-off.

---

## Pending (when you have Blender time)

- [ ] **Instagram 3D on pedestal** — In `static/areas/areas.glb`, object **`xPhysicalDynamic`** is the X mesh (separate object). Replace geometry/texture in Blender, re-export `areas.glb`, run `npm run compress`. Then remove `hideXTwitterPedestalMeshes` / `setInstagramGlyphOverFirstPedestal` from `SocialArea.js` if you no longer want the overlay hack.

---

## Quick fixes before you ship

- [ ] **D2 URL:** when you have a host, add `og:url` + optional `<link rel="canonical">` using `%VITE_SITE_ORIGIN%` or hardcode your live URL (no space in path).
- [x] **Instagram / LinkedIn URLs** — in `social.js` (see task 2).
- [x] **Tab title:** **Ryan Zhang's Portfolio** + `Title.js` **Ryan Zhang**.
- [x] **Meta description:** in `index.html`.

---

## A — Identity & home (HTML + title behavior)

- [x] **`sources/index.html`** — `<title>`, `apple-mobile-web-app-title`
- [x] **`sources/index.html`** — Home block (`home-content`)
- [x] **`sources/Game/Title.js`** — tab prefix **Ryan Zhang**

---

## B — SEO & social previews

- [x] **`sources/index.html`** — meta, itemprop, Twitter, Open Graph (no `og:url` until deploy)
- [ ] **Social preview image** — optional: replace `static/social/share-image.png` / absolute URL after deploy

---

## C — Social & contact (in-world)

- [x] **`sources/data/social.js`**
- [x] **`sources/data/consoleLog.js`**

---

## D — Discord

- [x] **`sources/index.html`** — modal removed
- [x] **`sources/data/social.js`**

---

## E — Projects (main gallery)

- [ ] **`sources/data/projects.js`**
- [ ] **`static/`** — textures / `.ktx` per entries
- [ ] **Separate doc** — project list when ready

---

## F — Lab (second gallery)

- [ ] **`sources/data/lab.js`**
- [ ] **`static/`** — lab images
- [ ] **Separate doc**

---

## G — Career boards (3D textures)

- [ ] **Decision** + **`Game.js`** career textures if you replace art
- [ ] **Separate doc**

---

## H — Behind the scene page

- [x] **`sources/index.html`** — `behindTheScene-content`: thank Bruno, Ryan framing, Three.js facts, learning + devlogs TBD, upstream GitHub + fork TBD, music attribution, sign-off **Ryan Zhang**

---

## I — Time machine

- [ ] **URL** in **`TimeMachineArea.js`** or disable / repurpose

---

## J — Analytics

- [x] **`sources/index.html`** — Google Analytics removed
- [ ] **`.env`** — remove `VITE_ANALYTICS_TAG` if set (optional)

---

## K — Server

- [ ] **`VITE_SERVER_URL`** — offline vs your `wss://`

---

## L — Repo, package, license

- [ ] **N1** — Replace **“My public fork URL: TBD”** in behind-the-scene when repo is public
- [ ] **N2** — **`package.json`** `name` (still default upstream-style)
- [ ] **N3** — **`license.md`** if you change copyright

---

## M — Favicons & PWA

- [ ] **`static/favicons/`** / **`site.webmanifest`** beyond name already set

---

## N — Grep cleanup (optional pass)

- [ ] Search `bruno`, `bruno-simon`, `threejs-journey` outside intentional attribution blocks
- [ ] **`TimeMachineArea.js`** — portfolio URL
- [ ] **`readme.md`** — top banner / description if you republish

---

## Summary

| Done | A–D, H intro, J analytics, WebGL note in readme, `.npmrc`, social overlay |
|------|-----------------------------------------------------------------------------|
| Pending | Blender `xPhysicalDynamic` → Instagram, projects/lab/career, fork URL, time machine, server |

---

*Update this file as you finish sections.*
