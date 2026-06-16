# Parallax Console — Dashboard UI kit (dark)

> ⚠️ **Reconstruction, not a copy.** The real Console is **login-gated** — I have no screenshots of it.
> Everything here is assembled strictly from the **dark-mode component specs in `brand-guidelines.md`**
> (240px sidebar + main, navy surfaces, `#154175` cards / `#285FA0` borders, striped tables, BUY/SELL/HOLD
> badges, tabular numerals) plus the product description. **Replace with a screenshot-accurate build when
> Console captures are supplied.**

## Run
Open `index.html`. React + Babel via CDN; `assets/icons-data.js` for inline Lucide icons; root tokens/fonts.

## Files
- `index.html` — mounts `ConsoleApp`.
- `app.jsx` — `Sidebar` (nav + user), `TopBar` (search + new-analysis CTA), `StatCards`, `Holdings` (dark striped table, rating badges), `FactorPanel` (the six factors as scored bars), `Card`, `CIcon`.

## Fidelity notes
- Demonstrates the **dark theme** of the design system in a realistic dashboard context.
- The six factors (Quality / Defensive / Momentum / Value / Size / Tactical) are shown as 0–100 scores — illustrative, not real model output.
- Icons are inline Lucide (substitute for the brand's unpublished 1.5px line set).
