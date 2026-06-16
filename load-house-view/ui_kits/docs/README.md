# Parallax Docs — Documentation UI kit (Mintlify-style, light)

A faithful recreation of the **docs site** (`docs.chicago.global`), which runs on **Mintlify**.

## Run
Open `index.html`. React + Babel via CDN; `assets/icons-data.js`; root tokens/fonts.

## Files
- `index.html` — mounts `DocsApp`.
- `app.jsx` — `DocsTop` (logo + ⌘K search + nav), `DocsSidebar` (grouped nav tree), `DocsContent`
  (breadcrumb, h1, `Card`/CardGroup grid, the Six-Factor framework grid, "Who uses Parallax" table),
  `DocsTOC` (right "On this page" rail), `DIcon`.

## Fidelity notes
- Real docs content (Introduction copy, the four platform cards, six factors, user-type table).
- The real Mintlify site uses **FontAwesome** icon names (rocket, desktop, code, microscope, scale-balanced,
  gem, arrow-trend-up, shield-halved, magnifying-glass-chart, crosshairs). This kit maps them to the nearest
  inline **Lucide** equivalents (telescope≈microscope, scale≈scale-balanced, shield-half≈shield-halved,
  crosshair≈crosshairs) — flagged. Match FontAwesome exactly in production to stay true to Mintlify.
