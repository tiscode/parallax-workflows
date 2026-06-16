# Chicago Global — Corporate site UI kit

A **light, institutional** recreation of the firm site (`chicago.global`). Principal-to-principal tone,
no fund-performance numbers, navy headings, accent-blue links, single orange CTA.

## Run
Open `index.html`. React + Babel via CDN; tokens + fonts from the root `colors_and_type.css` / `fonts.css`.

## Files
- `index.html` — assembles the page.
- `app.jsx` — `Wordmark` (wide-tracked CHICAGO GLOBAL caps), `CGNav`, `CGHero`, `CGTimeline` (2015 → 2026), `CGQuote` (cream section), `CGTeam`, `CGFooter` (with "Powered by Parallax").

## Fidelity notes
- The hero "light-beam" photograph is **not available** (CORS-locked); a subtle navy radial/conic gradient stands in. Drop the real `Chicago-Beam-3.jpg` when supplied.
- Team uses placeholder tiles per the brand's "AI portrait on black" direction — swap in real portraits.
- Flow follows the brand guide §14: hero/thesis → (research) → timeline → team. Cross-link "Try Parallax →" present.
