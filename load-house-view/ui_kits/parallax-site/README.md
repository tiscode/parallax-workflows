# Parallax — Marketing site UI kit

A faithful, dark-theme recreation of the **Parallax product/marketing site** (`parallax.chicago.global`).
Product screen surfaces default to **dark** (brand rule: surface mode follows the medium).

## Run
Open `index.html`. React + Babel via CDN; tokens from `../../colors_and_type.css`, fonts from `../../fonts.css`.

## Files
- `index.html` — assembles the full scrollable homepage.
- `primitives.jsx` — `Icon` (Lucide-static via CSS mask, recolorable), `Logo`, `Eyebrow`, `Button` (cta / secondary / ghost), `Badge`, `StatChip`.
- `sections.jsx` — `Nav` (sticky, blurred), `Hero` + `AnalyzerFrame` (browser-framed portfolio table), `FeatureBento` (4-up), `FAQ` (accordion), `CTA`, `Footer` (with "A Chicago Global product →" + *Solve the market.* tagline).

## Fidelity notes
- Copy is taken from the live site, with **canonical numbers** from `brand-guidelines.md` (62,000+ securities, 48 markets, 15+ factors).
- Icons substitute **Lucide** (≈2px stroke) for the brand's unpublished 1.5px line set — flagged.
- The three-bar mark is the **current live favicon** used as a stand-in; the real logo (tailor/bow-tie motif) is RESERVED in the brand guide.
- Interactions are cosmetic (tab/accordion/nav state) — not production logic.
