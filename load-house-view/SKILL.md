---
name: chicago-global-design
description: Use this skill to generate well-branded interfaces and assets for Chicago Global and its product Parallax — for production or for throwaway prototypes/mocks/decks. Contains essential design guidelines, colors, type, fonts, assets, and UI-kit components for prototyping.
user-invocable: true
---

# Chicago Global / Parallax — design skill

Read `README.md` first — it is the system map. The canonical brand rules live in `brand-guidelines.md`
(v1.2); **where anything disagrees, the brand guide wins.**

## Start here
1. `README.md` — company/product context, content fundamentals (voice, banned words, taglines),
   visual foundations, iconography, and the file manifest.
2. `brand-guidelines.md` — the master brand guide (full voice + visual + governance rules).
3. `colors_and_type.css` — all design tokens (color, type, spacing, radii, shadows; light + dark themes,
   semantic element styles). `fonts.css` — web-font substitutes for the licensed brand fonts.
4. `preview/` — Design System cards (palette, type, components, frameworks).
5. `ui_kits/` — high-fidelity recreations: `parallax-site/` (dark marketing), `console/` (dark dashboard,
   spec-based), `docs/` (Mintlify light), `chicago-global/` (light firm site).
6. `slides/` — brand deck templates (deck-stage.js).
7. `assets/` — logo marks (navy/white), inline Lucide icon data (`icons-data.js` → `window.PXICONS`).

## Working rules (the essentials)
- **Brand = one system, two surfaces.** Chicago Global (firm) is the parent; Parallax (product) appears
  inside CG deliverables as "Powered by Parallax", never the reverse.
- **Surface mode follows the medium, not the brand.** Light is the default; **dark** is deliberate for
  data-dense screens (Console), navy title/cover slides, and special newsletters. *When in doubt, light.*
- **Color:** navy `#0C2746` anchor; **CTA orange `#ED7D31` for the primary CTA only, max ~10%**; body text
  `#1F2937` (never pure black); semantic colors always paired with text/icon. Compose **60-30-10**.
- **Type:** Futura→Jost (headlines, navy) · Gill Sans→Cabin (body) · Optima→Carlito (tabular numbers).
  Instrument Serif is newsletter-only. Pull tokens from `colors_and_type.css`; don't hardcode hexes.
- **Voice:** skeptical senior colleague. Every analytical claim anchors to a number. No exclamation marks,
  no emoji, no banned words (see `brand-guidelines.md` §5). *"Solve the market."* is Parallax-only, footer-only.
- **Imagery:** geometry/astronomy (Polaris), not stock photos; flat, hard corners on images; no
  pink-purple fintech gradients.
- **Icons:** thin line icons (Lucide substitute), SVG only, no emoji. Single Unicode arrows (→ ↑ ↓) allowed.

## How to use this skill
- **Visual artifacts** (slides, mocks, throwaway prototypes): copy the assets you need out of this folder
  and produce **static HTML files** the user can open. Reuse the UI-kit components and `colors_and_type.css`.
- **Production code:** read the rules here and in `brand-guidelines.md` to become an expert in the brand;
  copy assets/tokens as needed.
- If invoked with no guidance, ask what the user wants to build, ask a few focused questions, then act as an
  expert brand designer and output **HTML artifacts or production code** depending on the need.

## Known substitutions / gaps (flag to the user)
- Brand fonts (Futura, Gill Sans, Optima, NorPath wordmark) are **substituted** on web — swap for licensed
  webfonts in production. NorPath is custom and unavailable.
- The **logo artwork is RESERVED** in the brand guide (tailor/bow-tie motif, not yet designed); the three-bar
  mark in `assets/` is the current live favicon used as a stand-in.
- The **Console** kit is reconstructed from documented components (login-gated; no screenshots).
- Corporate imagery (light-beam hero, illustrations) is **not bundled** (CORS-locked) — request from the user.
