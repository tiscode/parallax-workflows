# Parallax × Chicago Global — "House View" deck (alt3) · design spec

Static export of the JS-rendered reference, for rebuilding as a PowerPoint deck.

- **Native design frame:** **1280 × 800 px = 16:10** (authored to fit a 16" MacBook).
- **Your target:** 960 × 540 pt = **16:9**. ⚠️ **Aspect ratios differ.** See "Scaling" below before you copy any number.
- Per-slide PNGs: `pitch/screenshots/01-alt3.png … 11-alt3.png` (full-frame, native aspect).

---

## Scaling 1280×800 → 960×540

The reference is **16:10**; a 960×540 slide is **16:9**. There is no single uniform scale that maps one onto the other. Pick one:

| Strategy | Horizontal scale | Vertical scale | Result |
|---|---|---|---|
| **A. Uniform 0.75 (recommended for type/spacing fidelity)** | ×0.75 | ×0.75 | Layout becomes 960×**600** — 60pt taller than a 16:9 slide. Either author a 16:10 slide, or absorb the extra 60pt by tightening vertical gaps. Proportions & type relationships stay exact. |
| **B. Non-uniform (fill 16:9 exactly)** | ×0.75 (960/1280) | ×0.675 (540/800) | Fills the slide but squashes vertically ~10%. Circles/icons distort. Only if you must fill the frame. |

**All "pt @960" columns below use Strategy A (×0.75).** For x-positions multiply px by 0.75; for y-positions use 0.75 (Strategy A) or 0.675 (Strategy B). Fractions of the frame are also given so you can scale to anything.

> px → pt @960 = px × 0.75.  Fraction-W = px ÷ 1280.  Fraction-H = px ÷ 800.

---

## Color palette

### Dark slides (1, 2, 3, 7, 8, 9 — and the deep cover/closers 1, 10, 11)
| Token | Hex / value | Role |
|---|---|---|
| `--bg-a` | `#0B1B3F` | radial gradient inner |
| `--bg-b` | `#06122E` | radial gradient outer |
| `--bg-deep` | `#040A1E` | cover / closing ground |
| `--cy` | `#6FC3E8` | **accent** (single — cyan) |
| `--cy-pale` | `#B8D4ED` | accent light |
| `--cy-deep` | `#5A9CD8` | accent deep / arrows |
| `--pos` | `#2FD673` | gains (terminal green) |
| `--neg` | `#E08585` | losses |
| `--w` | `#F4F8FD` | primary text / headings |
| `--w-2` | `#C4D2E6` | secondary / body |
| `--w-3` | `#8295B4` | muted / meta / labels |
| `--line` | `rgba(111,195,232,0.18)` | table rule / divider |
| `--card` | `rgba(255,255,255,0.035)` | card fill |
| `--card-line` | `rgba(159,183,214,0.16)` | card border |

**Standard slide background:** `radial-gradient(120% 130% at 28% 12%, #0B1B3F 0%, #06122E 60%, #050E24 100%)`
**`.deep` (cover/closers):** `radial-gradient(120% 130% at 50% 18%, #0A1838 0%, #040A1E 70%)`

### Light split slides (4, 5, 6 — white body under a navy header band)
| Token | Hex | Role |
|---|---|---|
| body bg | `radial-gradient(…, #FFFFFF 0%, #EEF2F8 100%)` | white ground |
| `--w` | `#0C2746` | headings / values (navy) |
| `--w-2` | `#374151` | body / subhead (ink) |
| `--w-3` | `#6B7280` | muted / labels |
| `--cy` | `#2563EB` | accent (strong blue — cyan fails on white) |
| `--cy-deep` | `#1D4ED8` | accent deep |
| `--cy-pale` | `#1E3A8A` | accent pale |
| `--pos` | `#15803D` | gains |
| `--neg` | `#B91C1C` | losses |
| `--line` | `#E4E9F1` | rule / divider |
| `--card` | `#FFFFFF` | card fill |
| `--card-line` | `#DBE1EA` | card border |
| card shadow | `0 1px 3px rgba(12,39,70,.07), 0 1px 2px rgba(12,39,70,.04)` | tile elevation |
| band fill | `#EEF4FD`, border `#D6E2F5` | highlight band |

**Navy header band (slides 4–6):** `radial-gradient(130% 240% at 26% -70%, #0B1B3F 0%, #06122E 72%)` · padding `104 84 40` · min-height `272px`. Inside the band, text reverts to the dark-slide tokens (`--w #F4F8FD`, `--cy #6FC3E8`).

---

## Typography

Two families. **Display = Inter** (weights 400/500/600/700). **Body = Futura → Jost fallback** (the brand spec calls for Futura/Gill Sans; this web build substitutes Inter/Jost). Numbers use `font-variant-numeric: tabular-nums`.

| Role | Family | px @1280 | pt @960 (×0.75) | Weight | Color | Letter-spacing | Case |
|---|---|---|---|---|---|---|---|
| Eyebrow / label | Inter | 13 | 9.75 | 600 | `--cy` | .26em | UPPER |
| Title (default) | Inter | 40 | 30 | 600 | `--w` | −.015em | — |
| · Title — cover (s1) | Inter | 72 | 54 | 600 | `--w` / `--cy` | −.015em | — |
| · Title — thank-you (s11) | Inter | 84 | 63 | 600 | `--w` | −.015em | — |
| · Title — closing (s10) | Inter | 46 | 34.5 | 600 | `--w` | −.015em | — |
| · Title — risk lens (s5) | Inter | 34 | 25.5 | 600 | `--w` | −.015em | — |
| Subhead / lede | Futura/Jost | 18 | 13.5 | 400 | `--w-2` | — | — |
| Body (p-card) | Futura/Jost | 14 | 10.5 | 400 | `--w-2` | — | — |
| Foot-note | Futura/Jost | 13 | 9.75 | 400 | `--w-3` | — | — |
| Card title (h-card) | Inter | 19 | 14.25 | 600 | `--w` | — | — |
| Kicker | Inter | 11 | 8.25 | 600 | `--w-3` / `--cy` | .20em | UPPER |
| **KPI number (stat)** | Inter | 78 | 58.5 | 700 | `--cy` | −.02em | — |
| · KPI number — s4 fill | Inter | 96 | 72 | 700 | `--cy` | −.02em | — |
| KPI label (stat-label) | Futura/Jost | 16 | 12 | 400 | `--w-2` | — | — |
| · KPI label — s4 fill | Futura/Jost | 18 | 13.5 | 400 | `--w-2` | — | — |
| Metric value (.mv, s9) | Inter | 36 | 27 | 700 | `--cy` | — | — |
| Step number (stepno, s7) | Inter | 14 | 10.5 | 700 | `--cy` | .10em | — |
| Table header (th) | Inter | 11 | 8.25 | 600 | `--w-3` | .14em | UPPER |
| Table value (td) | Inter | 16 | 12 | 400 | `--w` | — | — |
| Table label (td.lab) | Futura/Jost | 15 | 11.25 | 400 | `--w-2` | — | — |
| Chip value (chip b) | Inter | 22 | 16.5 | 700 | `--w` | — | — |
| Chip label (chip span) | Inter | 10.5 | 7.875 | 400 | `--w-3` | .14em | UPPER |
| Band kicker (.bk) | Inter | 12 | 9 | 600 | `--cy` | .18em | UPPER |
| Band text (.bt) | Futura/Jost | 14 | 10.5 | 400 | `--w-2` | — | — |
| Cover meta | Inter | 12 | 9 | 400 | `--w-3` | .20em | UPPER |
| Footer text (.foot) | Inter | 11.5 | 8.625 | 400 | `--w-3` | .16em | UPPER |
| Page counter (.foot .r) | Inter | 11.5 | 8.625 | 400 | `--cy` | .16em | tnum |
| Top-right "Parallax" stamp | Inter | 12.5 | 9.375 | 600 | `--cy` | .22em | UPPER |
| · Cover "Parallax" stamp | Inter | 23 | 17.25 | 600 | `--cy` | .10em | — |

Line-heights (unitless, scale-free): title 1.08 · lede/body/p-card 1.5 · stat 1.0 · band text 1.45.

---

## Layout & safe area (per 1280×800 frame)

| Element | px | pt @960 | Fraction |
|---|---|---|---|
| Left / right margin | 84 | 63 | 6.56% W |
| Top padding — content slides | 112 | 84 | 14.0% H |
| Top padding — cover/closers (`.center`) | 78 (then vertically centered) | 58.5 | 9.75% H |
| Bottom padding | 72 | 54 | 9.0% H |
| Content column x-start | 84 | 63 | 6.56% W |
| Content column width | 1112 | 834 | 86.88% W |
| Title default max-width | 1040 | 780 | 81.25% W |
| Lede max-width | 940 | 705 | 73.4% W |

### Header
| Element | Position | Size |
|---|---|---|
| Logo (img, content slides) | x 84, top 34 | height **26px** (w auto) |
| Logo (cover) | x 84, top 44 | height **52px** |
| "Parallax" stamp (content) | right 84, top 40 | 12.5px text |
| "Parallax" stamp (cover) | right 84, top 58 | 23px text |

(px fractions: x84 = 6.56% W; top34 = 4.25% H; top40 = 5.0% H.)

### Footer
| Element | Position |
|---|---|
| Footer text (.foot .l) | left 84, bottom 36 |
| Page counter (.foot .r) | right 84, bottom 36 |

(bottom36 = 4.5% H.)

---

## KPI / tile blocks

| Block | Slide | Grid | Gap | Tile padding | Radius | Border |
|---|---|---|---|---|---|---|
| `stats3` (big numbers) | 4 | 3 × 1fr, centered | 20px | — (numbers + 1px `--line` dividers between cols) | — | divider only |
| `metrics4` | 9 | 4 × 1fr | 14px | 20×18px | 12px | 1px `--card-line` |
| `cards4` (governance) | 6 | 2 × 2 | 20px | 20×32px (gap 24px icon↔text) | 12px | 1px `--card-line` + card shadow |
| `chip` row (risk lens) | 5 | 4 × 1fr | 10px | 12×16px | 10px | 1px `--card-line` |
| `flow` nodes | 2 | 3 nodes + arrows | 18px | 24×24×26px | 12px | 1px `--card-line` (last node `--cy` border) |
| `cols3` | 3 | 3 × 1fr | 18px | 24px | 12px | 1px `--card-line` |
| `steps` (monthly cycle) | 7 | 5 steps + arrows | 12px | 28×22px, min-h 206px | 12px | 1px `--card-line` |

Number-vs-label sizing inside tiles: see Typography (KPI number 78px / label 16px; s4-fill 96/18; s9 metric value 36px over 14px p-card).

**Other radii:** generic card/node/step/metric 12px · chip 10px · bar 99px (pill) · disclaimer flag 4px · `limbox` 12px.
**Icons:** line icons, `stroke-width 1.6`, `currentColor`; sizes 30–36px (s6 cards 36, s10 reasons 30, s6 inline 32).

---

## Per-slide index

| # | Label | Variant | Signature content |
|---|---|---|---|
| 01 | Cover | `.deep .center` | 72px title, hero constellation |
| 02 | Partnership model | dark | 3-node `flow` (CIO → CIO → Parallax) |
| 03 | Bottom-up in action | dark | 3 `cols3` + highlight band |
| 04 | Implementation capability | `.splitlight` | navy header + 3 big KPIs (62,000+ / 48 / 6) |
| 05 | Total-portfolio risk lens | `.splitlight` | dual risk/return tables + 4 chips + capture band |
| 06 | Governance & trust | `.splitlight` | 2×2 `cards4` |
| 07 | Monthly cycle | dark | 5-step `steps` row (Publish→Deliver) |
| 08 | Operating detail | dark | roles list + `limbox` bullets |
| 09 | Adoption & proof | dark | `metrics4` (3h / 82% / −74% / 1 cycle) + band w/ +13.8% |
| 10 | Why Chicago Global | `.deep` | 2×2 `reasons` cards + CTA |
| 11 | Thank you | `.deep .center` | 84px "Thank you.", North-Star motif |

---

## JSON token block

```json
{
  "frame": { "w": 1280, "h": 800, "aspect": "16:10" },
  "target": { "w": 960, "h": 540, "aspect": "16:9", "scaleUniform": 0.75, "scaleX": 0.75, "scaleY": 0.675 },
  "colorsDark": {
    "bgA": "#0B1B3F", "bgB": "#06122E", "bgDeep": "#040A1E",
    "accent": "#6FC3E8", "accentPale": "#B8D4ED", "accentDeep": "#5A9CD8",
    "pos": "#2FD673", "neg": "#E08585",
    "text": "#F4F8FD", "text2": "#C4D2E6", "text3": "#8295B4",
    "line": "rgba(111,195,232,0.18)", "card": "rgba(255,255,255,0.035)", "cardLine": "rgba(159,183,214,0.16)"
  },
  "colorsLight": {
    "bgFrom": "#FFFFFF", "bgTo": "#EEF2F8",
    "text": "#0C2746", "text2": "#374151", "text3": "#6B7280",
    "accent": "#2563EB", "accentDeep": "#1D4ED8", "accentPale": "#1E3A8A",
    "pos": "#15803D", "neg": "#B91C1C",
    "line": "#E4E9F1", "card": "#FFFFFF", "cardLine": "#DBE1EA",
    "bandFill": "#EEF4FD", "bandLine": "#D6E2F5",
    "cardShadow": "0 1px 3px rgba(12,39,70,.07), 0 1px 2px rgba(12,39,70,.04)"
  },
  "headerBand": { "gradient": "radial-gradient(130% 240% at 26% -70%, #0B1B3F 0%, #06122E 72%)", "padding": [104,84,40], "minHeight": 272 },
  "fonts": { "display": "Inter", "body": "Futura, Jost" },
  "type_px": {
    "eyebrow": 13, "title": 40, "titleCover": 72, "titleThanks": 84, "titleClosing": 46, "titleRisk": 34,
    "lede": 18, "pCard": 14, "footNote": 13, "hCard": 19, "kicker": 11,
    "stat": 78, "statS4": 96, "statLabel": 16, "statLabelS4": 18, "metricValue": 36, "stepno": 14,
    "tableTh": 11, "tableTd": 16, "tableLab": 15, "chipB": 22, "chipSpan": 10.5,
    "bandBk": 12, "bandBt": 14, "meta": 12, "foot": 11.5, "stampR": 12.5, "stampCover": 23
  },
  "layout_px": {
    "marginX": 84, "padTopContent": 112, "padTopCover": 78, "padBottom": 72,
    "contentX": 84, "contentW": 1112, "titleMaxW": 1040, "ledeMaxW": 940,
    "logoTopContent": 34, "logoHContent": 26, "logoTopCover": 44, "logoHCover": 52,
    "stampTop": 40, "footBottom": 36
  },
  "tiles": {
    "stats3": { "cols": 3, "gap": 20 },
    "metrics4": { "cols": 4, "gap": 14, "pad": [20,18], "radius": 12 },
    "cards4": { "grid": "2x2", "gap": 20, "pad": [20,32], "radius": 12 },
    "chips": { "cols": 4, "gap": 10, "pad": [12,16], "radius": 10 },
    "radiiOther": { "card": 12, "chip": 10, "bar": 99, "flag": 4 }
  }
}
```
