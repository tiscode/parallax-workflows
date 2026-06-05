# Load House View

**🔗 Live deck:** https://tiscode.github.io/parallax-workflows/workflows/

Pitch deck for **Load House View** — the flagship workflow in the Chicago Global × Parallax investment-intelligence toolkit.

## What is Load House View?

Load House View turns a firm's house view — the CIO memo, investment-committee strategy doc, or macro-desk PDF that anchors the book — into a first-class, structured object that every portfolio workflow automatically loads and respects.

Load it once with `/parallax-load-house-view <pdf, .md, or url>`, and the extracted tilts (regions, sectors, factors) are consumed by portfolio construction, rebalancing, thematic screens, morning briefs, and client reviews — so every recommendation is aligned with the bank's official view, and conflicts are flagged rather than silently overridden.

Key design choices:

- **Your LLM, your prompt.** Extraction runs in your own harness against your own model — documents never leave your machine.
- **Local by default.** The active view lives on disk under restrictive permissions; nothing is hosted externally.
- **Audit-first.** Every save and consume appends to a hash-chained audit log with Ed25519-signed reasoning chains and per-tilt provenance — exportable as a regulator-grade compliance bundle.

## Viewing the deck

Self-contained HTML (fonts, styles, scripts, and animations inlined). Open in any modern browser; use the arrow keys to navigate slides.
