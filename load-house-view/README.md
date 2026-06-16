# Chicago Global / Parallax — Design System

> A working design system for **Chicago Global** (the firm) and **Parallax** (the product).
> Built so design agents produce on-brand interfaces, decks, and marketing assets.
>
> **Canonical source:** [`brand-guidelines.md`](brand-guidelines.md) (v1.2, May 2026). Where any
> file here disagrees with the brand guide, **the brand guide wins** — fix the file to match.

---

## 1. Company & product context

**Chicago Global** is a next-generation, quantitative **investment management firm**. It is the parent and regulated counterparty — **Chicago Global Capital Management, LLC** (US) and **Chicago Global Pte Ltd** (Singapore, MAS CMS101590). Methodology is rooted in the Fama-French tradition and University of Chicago Booth research (team formed 2015), and is battle-tested in the live **Polaris Fund** (since 2019).

**Parallax** is the product Chicago Global built and licenses: an **AI-native portfolio intelligence engine** — *"a Large Investment Model that discovers, scores, constructs, and explains investment decisions across 62,000+ securities and 48 markets."* It serves family offices, wealth managers, and fintechs — not just $10B+ institutions — and is workflow-portable (Console, API, MCP — three delivery modes, one price).

**Brand architecture ("Intel Inside"):** Chicago Global is the parent; Parallax appears *inside* Chicago Global deliverables with a *"Powered by Parallax"* tag, never the reverse. Same palette, type, and voice across both; what differs is surface mode.

> **Surface mode follows the medium, not the brand.** Light = default (long-form, print-adjacent, marketing, mixed audiences). Dark = deliberate, for data-dense screens (Parallax Console/dashboard), navy title/cover slides, and special-edition newsletters. *When in doubt, light.*

### Canonical numbers (from `brand-guidelines.md` §6 — verify against `scripts/canonical-facts.yaml` if present)
- **62,000+** securities · **48** markets
- **30+** alpha signals · **15+** factor scores per stock
- **6** factors · **3** delivery modes (Console / API / MCP), one price
- MAS-regulated **CMS101590**; MAS AI Consortium founding member; FSTI + Shariah-AI grants
- Polaris Fund live track record since **2019**; Booth 2015 / Markowitz / Fama lineage

### Surfaces represented
1. **Chicago Global firm site** (`chicago.global`) — light. Hero/thesis → research → timeline → team. No fund performance numbers. Principal-to-principal tone.
2. **Parallax product site** (`parallax.chicago.global`) — dark on screen surfaces. Product-forward: demo, API docs, console screenshots, factor evidence. *"Solve the market"* tagline appears **only here**.
3. **Parallax Console** (login-gated app) — dark, data-dense dashboard (240px sidebar + main). *Pending screenshots from user.*
4. **Docs** (`docs.chicago.global`) — Mintlify; Console guides, API Reference, Methodology, Glossary.
5. **The Brief** — newsletter, three weekly editions (Platform / Institutional / Advisory). Editorial exception (adds Instrument Serif).
6. **Decks, brochures, investor letters** — see slide templates + brochure rules.

---

## 2. Sources

| Source | URL / path | Notes |
|---|---|---|
| **Brand guide (master)** | `brand-guidelines.md` | v1.2, May 2026. Canonical. |
| Firm site | https://chicago.global/ | Light, institutional. |
| Parallax site | https://parallax.chicago.global/ | Dark-primary product site. |
| Docs | https://docs.chicago.global/ | Mintlify. `…/llms.txt` = full page index. |
| Parallax mark | `parallax.chicago.global/favicon.svg` | ✅ → `assets/parallax-favicon.svg` (+ navy/white variants). |
| Brand logos in product | logokit.com CDN | AI-model partners + tickers. |

> **Still pending from user:** screenshots of the **Console** (login-gated) and product/docs surfaces; **licensed font files** (Futura, Gill Sans, Optima, NorPath); the **Chicago Global / Parallax logo artwork** (RESERVED in the guide — tailor/bow-tie motif, not yet designed); any **PPTX/Word/PDF** to mirror in slides.

---

## 3. Content fundamentals — how Chicago Global / Parallax writes

**Voice:** writes as a **skeptical senior colleague**, not an assistant. Assumes the reader is competent and busy. Direct; pushes back when something is wrong; says "I don't know" rather than fabricate confidence; skips preambles, padding, and sycophancy. Dry wit welcome. The **institutional first-person plural** ("we," "our," "the Fund") is standard — even when a letter is signed by one person. (Exception: the **Marco Voss** persona, a recurring fictional analyst who signs analytical calls, never regulatory comms.)

**Five-writer composite:** Michael Lewis (clarity for non-specialists) · John McPhee (structure, technical detail) · Christopher Hitchens (word-level precision) · Joan Didion (rhythm, telling detail) · Warren Buffett (conversational authority, dry self-deprecation).

**Hard rules (non-negotiable):**
1. Every analytical claim anchors to a number ("markets fell 10%," never "declined sharply").
2. No hedge phrases ("it's worth noting," "it bears mentioning").
3. No "not just X, but Y" constructions.
4. Max **two em-dashes** per piece.
5. No bullet points in prose unless requested.
6. Active voice by default.
7. No false agency — name the human actor.
8. No Wh-/How throat-clearing openers.
9. **No exclamation marks. Ever.**
10. Vary sentence rhythm.

**Banned words → replacements** (full table in `brand-guidelines.md` §5): delve→examine · leverage(v)→use · robust(mktg)→reliable · seamless→(skip) · cutting-edge/revolutionary/game-changing/world-class→(skip; show, don't claim) · crucial→important · myriad→many · empower→give/allow · synergy→(describe it) · landscape/realm/tapestry→(describe the field). *Carve-out: "robust" is fine in statistical usage.*

**Casing & punctuation:** sentence case for headlines and body; **Title Case** eyebrows/section labels; the firm name is always two words ("Chicago Global", never "ChicagoGlobal"; "CG" internal-only). Single Unicode arrows allowed (→ ↑ ↓). No emoji anywhere.

**Taglines:**
- **Parallax: "Solve the market."** — *italic, orange `#ED7D31`, footer-only, closes a piece, Parallax-only.*
- Chicago Global has **no tagline** (decision pending). Do not apply "Solve the market" to firm comms.

**Reference patterns:** first long-form mention → *"Parallax by Chicago Global"*; thereafter *"Parallax"*. Inside CG deliverables → *"Powered by Parallax"* footer tag. Inside Parallax → *"A Chicago Global product"*. Co-branded → *"[Partner] × Parallax by Chicago Global"*.

**Stock phrases (use verbatim):** *"Embed your workflows with investment intelligence."* · *"The expert translation layer between foundation model and raw data."* · *"Three layers, one integration."* · *"Same input → same output. Defensible to MAS, FCA, SFC, SEC."*

**Banned (legal):** "guaranteed return," "no risk," "robot PM," "fully automated advice," any specific-outcome promise.

---

## 4. Visual foundations

**Color** — one palette, navy-anchored. Full tokens in [`colors_and_type.css`](colors_and_type.css).
- **Primary Navy `#0C2746`** is the anchor (headers, dark backgrounds). Secondary Blue `#154175`, Accent Blue `#547498` (links/borders/icons), Light Blue `#92A6C1` (decorative/tag fills).
- **CTA Orange `#ED7D31`** — primary CTA **only, max ~10% of any page**, 1–2 instances. Never large backgrounds.
- **Body text `#1F2937` — never pure black.** Mid-grey `#9EA0A9` fails AA; never use for text.
- **Semantic** always paired with text/icon (color is never the only encoding): Success `#15803D`, Error `#B91C1C`, Warning `#B45309`, Alert `#E3140F` (system-critical only; portfolio losses use Error, not Alert).
- **Composition: 60-30-10** — 60% neutrals, 30% navy, 10% orange + semantic combined.
- **Page grounds:** White (default), Cream `#F5F2EB` (print-adjacent), Off-white `#F5F6F8` (digital). **Dark mode:** navy ground, white text, `#547498` secondary, `#92A6C1` underlined links, `#154175` dividers, `#154175` cards / `#285FA0` borders.

**Type** — Futura (headlines, bold, navy) · Gill Sans (body) · Optima (tabular numbers) · NorPath (Parallax wordmark, custom). Instrument Serif is the newsletter-only editorial exception. See `colors_and_type.css` + `fonts.css` for the **Google-Fonts substitution** (Jost / Cabin / Carlito) — flagged below.

**Imagery** *(direction being trialed — §12 placeholders pending)* — geometry and abstract angles, **not stock photography**. Motif is **astronomy**: parallax angles, the **North Star (Polaris**, the fund's namesake), constellation/triangulation maps. Team photos = AI-generated cinematic portraits on black, dramatic lighting. **Banned:** business-handshake stock, skyline filler, **pastel pink-to-purple fintech gradients**, the recurring "big arrow" graphic (remove on sight).

**Treatment / structure**
- Imagery sits **flat** — no drop shadows, glows, or 3D extrusions.
- **Hard corners on images** — no rounded image masks. (UI cards/buttons *do* use the radius scale; image masks do not.)
- Captions mandatory on imagery: Gill Sans, accent blue, 9pt.
- **Elevation:** Stripe-style **dual neutral shadows** (no blue-tinted shadows), 5 levels.
- **Radii:** 2 (badges) / 4 (pills) / 6 (buttons, inputs) / 8 (cards) / 12 (panels) / full (chips).
- **Spacing:** 4px base; 16 component gaps, 32 section padding, 64–96 major sections.
- **Containers:** 1200 marketing / 1440 dashboard / 800 reports; 240px dashboard sidebar.

**Motion** — restrained. **Decks carry no animations or transitions.** Product surfaces may use subtle, functional motion; avoid decorative loops. No carousels, pop-ups, modals, or chat overlays on marketing.

**Data-viz rules** — tabular numerals everywhere numbers compare; label the y-axis with units; source line on every chart; anchor zero on bar charts (annotate truncation); no 3D charts; pie charts only with ≤2 slices; amber and orange never adjacent series.

---

## 5. Iconography

> §13 direction is a **suggestion pending sign-off**, captured here and used as the system default.
- **Thin line icons, 1.5px stroke, navy or accent blue, no fill. Hard corners. 24×24 on a base grid.**
- **SVG only** in client-facing surfaces — **no icon fonts** client-facing. **No emoji.** Single Unicode arrows allowed: → ↑ ↓.
- **Substitution (flagged):** the brand has no published icon set, so this system uses **[Lucide](https://lucide.dev)** (1.5px line, hard-ish corners, CDN-available) as the closest match. Load from CDN; recolor `currentColor` to navy/accent. The **docs site** itself runs **Mintlify + FontAwesome** by icon name — match FontAwesome there to stay faithful to that surface.
- **Six-Factor / model logos:** product surfaces pull partner/AI-model and ticker logos from the **logokit.com** CDN.

---

## 6. Index / manifest

**Root**
- `README.md` — this file.
- `brand-guidelines.md` — **canonical** brand guide (master).
- `colors_and_type.css` — color + type + spacing + radius + shadow tokens (light + dark themes, semantic element styles).
- `fonts.css` — Google-Fonts substitutes for the licensed brand fonts (flagged).

**`assets/`** — `parallax-favicon.svg` (live mark, slate), `parallax-mark-navy.svg`, `parallax-mark-white.svg`, `icons/` (inline Lucide SVGs) + `icons-data.js` (`window.PXICONS` map for inline icons). *(Logo artwork + corporate imagery pending upload.)*

**`preview/`** — Design System tab cards (Brand · Colors · Type · Spacing · Components).

**`ui_kits/`** — per-surface recreations: `parallax-site/` (dark marketing), `console/` (dark dashboard, spec-based), `docs/` (Mintlify light), `chicago-global/` (light firm site). Each has its own README.

**`slides/`** — `index.html` brand deck (7 archetypes) on `deck-stage.js`.

**`SKILL.md`** — Agent-Skill entry point (download-and-use in Claude Code).

---

## 7. Open items / flags (carried from the brand guide + this build)
- 🔤 **Fonts are substituted on web** (Futura→Jost, Gill Sans→Cabin, Optima→Carlito). Swap in licensed webfonts for production. **NorPath wordmark is custom and unavailable** — it renders in Jost/Futura as a stand-in; do not treat as final.
- 🖼️ **Logo artwork is RESERVED** in the brand guide (tailor/bow-tie motif, not yet designed). The three-bar "parallax" mark in `assets/` is the **current live favicon**, used here as a stand-in — not the final brand mark.
- 🎨 Several palette/typography/imagery items are marked PLACEHOLDER in the guide (cream vs off-white, CG/Parallax font split, imagery motif scope). Treated with sensible defaults; revisit when resolved.
- ⚠️ Minor internal conflict: §7 calls for the Three-Layers roman numerals in a *display serif* (orange), while §11/§15 reserve serif (Instrument Serif) for the newsletter. The framework card uses an elegant serif for just those numerals per §7 — confirm.
- 🔒 Console UI kit is **blocked on screenshots** (login-gated).
