/* @ds-bundle: {"format":3,"namespace":"ChicagoGlobalParallaxDesignSystem_019e29","components":[],"sourceHashes":{"assets/icons-data.js":"39c0075692d0","pitch/anim.js":"eb167bebbe91","pitch/suite-tweaks.jsx":"ccaee2ef923a","pitch/suite.js":"237d26918c8a","pitch/tweaks-panel.jsx":"6591467622ed","slides/deck-stage.js":"eac2199dccb4","ui_kits/chicago-global/app.jsx":"39e7f9994453","ui_kits/console/app.jsx":"ae251d9a3448","ui_kits/docs/app.jsx":"3fb95e69e05f","ui_kits/parallax-site/primitives.jsx":"c79d7ece357f","ui_kits/parallax-site/sections.jsx":"e3d71ce30aa1"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ChicagoGlobalParallaxDesignSystem_019e29 = window.ChicagoGlobalParallaxDesignSystem_019e29 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// assets/icons-data.js
try { (() => {
/* Inline Lucide icon paths. window.PXICONS[name] = inner SVG markup.
   Source: lucide-static@0.460.0 (ISC). */
window.PXICONS = {
  "layout-dashboard": "<rect width=\"7\" height=\"9\" x=\"3\" y=\"3\" rx=\"1\"></rect> <rect width=\"7\" height=\"5\" x=\"14\" y=\"3\" rx=\"1\"></rect> <rect width=\"7\" height=\"9\" x=\"14\" y=\"12\" rx=\"1\"></rect> <rect width=\"7\" height=\"5\" x=\"3\" y=\"16\" rx=\"1\"></rect>",
  "chart-pie": "<path d=\"M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z\"></path> <path d=\"M21.21 15.89A10 10 0 1 1 8 2.83\"></path>",
  "chart-line": "<path d=\"M3 3v16a2 2 0 0 0 2 2h16\"></path> <path d=\"m19 9-5 5-4-4-3 3\"></path>",
  "search": "<circle cx=\"11\" cy=\"11\" r=\"8\"></circle> <path d=\"m21 21-4.3-4.3\"></path>",
  "filter": "<polygon points=\"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3\"></polygon>",
  "file-text": "<path d=\"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z\"></path> <path d=\"M14 2v4a2 2 0 0 0 2 2h4\"></path> <path d=\"M10 9H8\"></path> <path d=\"M16 13H8\"></path> <path d=\"M16 17H8\"></path>",
  "bell": "<path d=\"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9\"></path> <path d=\"M10.3 21a1.94 1.94 0 0 0 3.4 0\"></path>",
  "layers": "<path d=\"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z\" /> <path d=\"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65\" /> <path d=\"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65\" />",
  "cpu": "<rect width=\"16\" height=\"16\" x=\"4\" y=\"4\" rx=\"2\"></rect> <rect width=\"6\" height=\"6\" x=\"9\" y=\"9\" rx=\"1\"></rect> <path d=\"M15 2v2\"></path> <path d=\"M15 20v2\"></path> <path d=\"M2 15h2\"></path> <path d=\"M2 9h2\"></path> <path d=\"M20 15h2\"></path> <path d=\"M20 9h2\"></path> <path d=\"M9 2v2\"></path> <path d=\"M9 20v2\"></path>",
  "globe": "<circle cx=\"12\" cy=\"12\" r=\"10\"></circle> <path d=\"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20\"></path> <path d=\"M2 12h20\"></path>",
  "arrow-right": "<path d=\"M5 12h14\"></path> <path d=\"m12 5 7 7-7 7\"></path>",
  "calendar-range": "<rect width=\"18\" height=\"18\" x=\"3\" y=\"4\" rx=\"2\"></rect> <path d=\"M16 2v4\"></path> <path d=\"M3 10h18\"></path> <path d=\"M8 2v4\"></path> <path d=\"M17 14h-6\"></path> <path d=\"M13 18H7\"></path> <path d=\"M7 14h.01\"></path> <path d=\"M17 18h.01\"></path>",
  "minus": "<path d=\"M5 12h14\"></path>",
  "plus": "<path d=\"M5 12h14\"></path> <path d=\"M12 5v14\"></path>",
  "chevron-right": "<path d=\"m9 18 6-6-6-6\"></path>",
  "shield-half": "<path d=\"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z\"></path> <path d=\"M12 22V2\"></path>",
  "trending-up": "<polyline points=\"22 7 13.5 15.5 8.5 10.5 2 17\"></polyline> <polyline points=\"16 7 22 7 22 13\"></polyline>",
  "gem": "<path d=\"M6 3h12l4 6-10 13L2 9Z\"></path> <path d=\"M11 3 8 9l4 13 4-13-3-6\"></path> <path d=\"M2 9h20\"></path>",
  "scale": "<path d=\"m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z\"></path> <path d=\"m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z\"></path> <path d=\"M7 21h10\"></path> <path d=\"M12 3v18\"></path> <path d=\"M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2\"></path>",
  "crosshair": "<circle cx=\"12\" cy=\"12\" r=\"10\"></circle> <line x1=\"22\" x2=\"18\" y1=\"12\" y2=\"12\"></line> <line x1=\"6\" x2=\"2\" y1=\"12\" y2=\"12\"></line> <line x1=\"12\" x2=\"12\" y1=\"6\" y2=\"2\"></line> <line x1=\"12\" x2=\"12\" y1=\"22\" y2=\"18\"></line>",
  "telescope": "<path d=\"m10.065 12.493-6.18 1.318a.934.934 0 0 1-1.108-.702l-.537-2.15a1.07 1.07 0 0 1 .691-1.265l13.504-4.44\"></path> <path d=\"m13.56 11.747 4.332-.924\"></path> <path d=\"m16 21-3.105-6.21\"></path> <path d=\"M16.485 5.94a2 2 0 0 1 1.455-2.425l1.09-.272a1 1 0 0 1 1.212.727l1.515 6.06a1 1 0 0 1-.727 1.213l-1.09.272a2 2 0 0 1-2.425-1.455z\"></path> <path d=\"m6.158 8.633 1.114 4.456\"></path> <path d=\"m8 21 3.105-6.21\"></path> <circle cx=\"12\" cy=\"13\" r=\"2\"></circle>",
  "book-open": "<path d=\"M12 7v14\"></path> <path d=\"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z\"></path>",
  "code": "<polyline points=\"16 18 22 12 16 6\"></polyline> <polyline points=\"8 6 2 12 8 18\"></polyline>",
  "rocket": "<path d=\"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z\"></path> <path d=\"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z\"></path> <path d=\"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0\"></path> <path d=\"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5\"></path>",
  "activity": "<path d=\"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2\"></path>",
  "user-check": "<path d=\"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2\" /> <circle cx=\"9\" cy=\"7\" r=\"4\" /> <polyline points=\"16 11 18 13 22 9\" />",
  "shield-check": "<path d=\"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z\" /> <path d=\"m9 12 2 2 4-4\" />",
  "repeat": "<path d=\"m17 2 4 4-4 4\" /> <path d=\"M3 11v-1a4 4 0 0 1 4-4h14\" /> <path d=\"m7 22-4-4 4-4\" /> <path d=\"M21 13v1a4 4 0 0 1-4 4H3\" />",
  "share-2": "<circle cx=\"18\" cy=\"5\" r=\"3\" /> <circle cx=\"6\" cy=\"12\" r=\"3\" /> <circle cx=\"18\" cy=\"19\" r=\"3\" /> <line x1=\"8.59\" x2=\"15.42\" y1=\"13.51\" y2=\"17.49\" /> <line x1=\"15.41\" x2=\"8.59\" y1=\"6.51\" y2=\"10.49\" />",
  "git-compare": "<circle cx=\"18\" cy=\"18\" r=\"3\" /> <circle cx=\"6\" cy=\"6\" r=\"3\" /> <path d=\"M13 6h3a2 2 0 0 1 2 2v7\" /> <path d=\"M11 18H8a2 2 0 0 1-2-2V9\" />",
  "award": "<path d=\"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526\" /> <circle cx=\"12\" cy=\"8\" r=\"6\" />",
  "lock": "<rect width=\"18\" height=\"11\" x=\"3\" y=\"11\" rx=\"2\" ry=\"2\" /> <path d=\"M7 11V7a5 5 0 0 1 10 0v4\" />"
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "assets/icons-data.js", error: String((e && e.message) || e) }); }

// pitch/anim.js
try { (() => {
/* Count-up animation for [data-countup] elements, triggered when a slide
   becomes active. Bars are pure CSS (scaleX) — this only handles numbers. */
(function () {
  function easeOut(t) {
    return 1 - Math.pow(1 - t, 3);
  }

  // Preserve each count-up's authored final text before any animation overwrites it.
  function snapshotFinals() {
    document.querySelectorAll("[data-countup]").forEach(function (el) {
      if (!el.dataset.finalText) el.dataset.finalText = (el.textContent || "").trim();
    });
  }
  function runCountUp(el) {
    if (window.__capture) {
      if (el.dataset.finalText) el.textContent = el.dataset.finalText;
      return;
    }
    if (el._cuRunning) cancelAnimationFrame(el._cuRunning);
    var target = parseFloat(el.getAttribute("data-countup"));
    var dec = parseInt(el.getAttribute("data-decimals") || "0", 10);
    var pre = el.getAttribute("data-prefix") || "";
    var suf = el.getAttribute("data-suffix") || "";
    var dur = parseInt(el.getAttribute("data-dur") || "1100", 10);
    var sign = target < 0 ? "-" : el.getAttribute("data-plus") ? "+" : "";
    var abs = Math.abs(target);
    var start = performance.now();
    function frame(now) {
      var p = Math.min(1, (now - start) / dur);
      var v = abs * easeOut(p);
      var s = dec > 0 ? v.toFixed(dec) : Math.round(v).toLocaleString("en-US");
      el.textContent = pre + sign + s + suf;
      if (p < 1) el._cuRunning = requestAnimationFrame(frame);
    }
    el.textContent = pre + sign + (dec > 0 ? 0 .toFixed(dec) : "0") + suf;
    el._cuRunning = requestAnimationFrame(frame);
  }
  function animateSlide(slide) {
    if (!slide) return;
    slide.querySelectorAll("[data-countup]").forEach(runCountUp);
  }
  function init() {
    var deck = document.querySelector("deck-stage");
    if (!deck) return;
    snapshotFinals();
    deck.addEventListener("slidechange", function (e) {
      // small delay so it reads as part of the entrance choreography
      setTimeout(function () {
        animateSlide(e.detail.slide);
      }, 260);
    });
    // first slide (in case init event fired before listener attached)
    var active = deck.querySelector("[data-deck-active]");
    if (active) setTimeout(function () {
      animateSlide(active);
    }, 400);
  }

  // Settle every slide to its final, fully-visible state for static capture
  // (PPTX export / screenshots). Call after navigating to a slide.
  window.__finalizeForCapture = function () {
    window.__capture = true;
    snapshotFinals();
    if (!document.getElementById("cap-final")) {
      var s = document.createElement("style");
      s.id = "cap-final";
      s.textContent = "*{animation:none!important;transition:none!important}" + ".anim,.wipe,.pop{opacity:1!important;transform:none!important;clip-path:none!important}" + ".bar>i{transform:scaleX(1)!important}";
      document.head.appendChild(s);
    }
    document.querySelectorAll("[data-countup]").forEach(function (el) {
      if (el.dataset.finalText) el.textContent = el.dataset.finalText;
    });
  };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);else init();
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "pitch/anim.js", error: String((e && e.message) || e) }); }

// pitch/suite-tweaks.jsx
try { (() => {
/* Polaris Exhibit Suite — Tweaks: palette · display type · motion (mirrors the
   benchmark's bottom-right theme switcher). */

const SUITE_TWEAKS = /*EDITMODE-BEGIN*/{
  "palette": "warm",
  "display": "house",
  "settle": "standard"
} /*EDITMODE-END*/;

// accent ramps — [accent, bright, accent-hair]
const SUITE_PALETTES = {
  warm: ["#c9a55f", "#e9d8b0", "rgba(201,165,95,.28)"],
  cerulean: ["#3e92cc", "#cfe3f5", "rgba(62,146,204,.30)"],
  mono: ["#9fb3c8", "#e2e8f0", "rgba(159,179,200,.28)"]
};
const SUITE_DISPLAY = {
  // headline / display family
  house: '"NorPath","Norpeth","Source Serif 4",Georgia,serif',
  modern: '"Futura","Futura PT","Jost","Century Gothic",sans-serif'
};
const SUITE_SETTLE = {
  subtle: ".55s",
  standard: ".8s",
  dramatic: "1.15s"
};
function applySuiteVars(t) {
  const r = document.documentElement.style;
  const p = SUITE_PALETTES[t.palette] || SUITE_PALETTES.warm;
  r.setProperty('--accent', p[0]);
  r.setProperty('--bright', p[1]);
  r.setProperty('--accent-hair', p[2]);
  r.setProperty('--serif', SUITE_DISPLAY[t.display] || SUITE_DISPLAY.house);
  // when display = modern sans, headlines read better upright than italic
  document.body.classList.toggle('disp-modern', t.display === 'modern');
  r.setProperty('--settle-dur', SUITE_SETTLE[t.settle] || SUITE_SETTLE.standard);
}
function SuiteTweaks() {
  const [t, setTweak] = useTweaks(SUITE_TWEAKS);
  React.useEffect(() => {
    applySuiteVars(t);
  }, [t.palette, t.display, t.settle]);
  return /*#__PURE__*/React.createElement(TweaksPanel, null, /*#__PURE__*/React.createElement(TweakSection, {
    label: "Accent palette"
  }), /*#__PURE__*/React.createElement(TweakRadio, {
    label: "Ramp",
    value: t.palette,
    options: ['warm', 'cerulean', 'mono'],
    onChange: v => setTweak('palette', v)
  }), /*#__PURE__*/React.createElement(TweakSection, {
    label: "Display type"
  }), /*#__PURE__*/React.createElement(TweakRadio, {
    label: "Headlines",
    value: t.display,
    options: ['house', 'modern'],
    onChange: v => setTweak('display', v)
  }), /*#__PURE__*/React.createElement(TweakSection, {
    label: "Entrance motion"
  }), /*#__PURE__*/React.createElement(TweakRadio, {
    label: "Settle",
    value: t.settle,
    options: ['subtle', 'standard', 'dramatic'],
    onChange: v => setTweak('settle', v)
  }));
}

// apply persisted/default vars immediately, before React mounts
applySuiteVars(SUITE_TWEAKS);
ReactDOM.createRoot(document.getElementById('tweak-root')).render(/*#__PURE__*/React.createElement(SuiteTweaks, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "pitch/suite-tweaks.jsx", error: String((e && e.message) || e) }); }

// pitch/suite.js
try { (() => {
/* =============================================================================
   Polaris Exhibit Suite — navigation, grid overview, count-ups, keyboard.
   Single-document model: exhibits are sibling <section>s; only the active one
   shows. The "settle" entrance replays on each activation via the .play class.
   ============================================================================= */
(function () {
  var stage = document.getElementById('stage');
  var EX = Array.prototype.slice.call(stage.querySelectorAll('.exhibit'));
  var tabsEl = document.getElementById('tabs');
  var subdesc = document.getElementById('subdesc');
  var menu = document.getElementById('menu');
  var menuCards = document.getElementById('menuCards');
  var progress = document.getElementById('progress');
  var cur = 0;

  // ---- inject line-icons -----------------------------------------------------
  document.querySelectorAll('[data-ic]').forEach(function (el) {
    var inner = window.PXICONS && window.PXICONS[el.getAttribute('data-ic')] || '';
    var sz = el.getAttribute('data-sz') || 24;
    el.innerHTML = '<svg width="' + sz + '" height="' + sz + '" viewBox="0 0 24 24" fill="none" ' + 'stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + inner + '</svg>';
  });

  // ---- build tabs + grid cards ----------------------------------------------
  EX.forEach(function (ex, i) {
    var label = ex.getAttribute('data-tab') || 'Exhibit ' + (i + 1);
    var desc = ex.getAttribute('data-desc') || '';
    var n = ('0' + (i + 1)).slice(-2);
    var tab = document.createElement('button');
    tab.className = 'tab';
    tab.innerHTML = '<span class="tnum">' + n + '</span><span class="tlab">' + label + '</span>';
    tab.addEventListener('click', function () {
      go(i);
    });
    tabsEl.appendChild(tab);
    var card = document.createElement('button');
    card.className = 'mcard';
    card.innerHTML = '<span class="mnum">' + n + '</span><span><span class="mtitle">' + label + '</span><span class="msub">' + desc + '</span></span>';
    card.addEventListener('click', function () {
      closeGrid();
      go(i);
    });
    menuCards.appendChild(card);
  });
  var tabEls = Array.prototype.slice.call(tabsEl.children);

  // ---- count-up --------------------------------------------------------------
  function countUp(ex) {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      ex.querySelectorAll('[data-count]').forEach(function (el) {
        el.textContent = fmt(+el.getAttribute('data-count')) + (el.getAttribute('data-suffix') || '');
      });
      return;
    }
    ex.querySelectorAll('[data-count]').forEach(function (el) {
      var target = +el.getAttribute('data-count');
      var suffix = el.getAttribute('data-suffix') || '';
      var dur = 1100,
        t0 = null;
      function step(ts) {
        if (!t0) t0 = ts;
        var p = Math.min((ts - t0) / dur, 1);
        var e = 1 - Math.pow(1 - p, 3); // ease-out cubic
        el.textContent = fmt(Math.round(target * e)) + suffix;
        if (p < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    });
  }
  function fmt(n) {
    return n.toLocaleString('en-US');
  }

  // ---- navigate --------------------------------------------------------------
  function go(i) {
    i = (i + EX.length) % EX.length;
    cur = i;
    EX.forEach(function (ex, k) {
      var on = k === i;
      ex.classList.toggle('active', on);
      ex.classList.remove('play');
      if (on) {
        ex.scrollTop = 0;
        // force reflow so the settle animation replays from the start
        void ex.offsetWidth;
        ex.classList.add('play');
        countUp(ex);
      }
    });
    tabEls.forEach(function (t, k) {
      t.classList.toggle('active', k === i);
    });
    // keep active tab in view
    if (tabEls[i]) tabEls[i].scrollIntoView ? scrollTabIntoView(i) : null;
    subdesc.innerHTML = '<b>' + ('0' + (i + 1)).slice(-2) + ' / ' + ('0' + EX.length).slice(-2) + '</b> &nbsp; ' + (EX[i].getAttribute('data-desc') || '');
    progress.style.width = (i + 1) / EX.length * 100 + '%';
    if (location.hash !== '#' + (i + 1)) history.replaceState(null, '', '#' + (i + 1));
  }
  function scrollTabIntoView(i) {
    var t = tabEls[i];
    var left = t.offsetLeft - tabsEl.offsetWidth / 2 + t.offsetWidth / 2;
    tabsEl.scrollTo({
      left: Math.max(0, left),
      behavior: 'smooth'
    });
  }

  // expose nav for PPTX/export capture
  window.__go = go;

  // ---- grid overview ---------------------------------------------------------
  function openGrid() {
    menu.classList.add('open');
  }
  function closeGrid() {
    menu.classList.remove('open');
  }
  function toggleGrid() {
    menu.classList.toggle('open');
  }
  document.querySelectorAll('[data-act]').forEach(function (b) {
    b.addEventListener('click', function () {
      var a = b.getAttribute('data-act');
      if (a === 'prev') go(cur - 1);else if (a === 'next') go(cur + 1);else if (a === 'grid') toggleGrid();else if (a === 'closegrid') closeGrid();
    });
  });

  // ---- keyboard --------------------------------------------------------------
  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight' || e.key === 'PageDown') {
      go(cur + 1);
    } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
      go(cur - 1);
    } else if (e.key === 'm' || e.key === 'M') {
      toggleGrid();
    } else if (e.key === 'Escape') {
      closeGrid();
    } else if (e.key >= '1' && e.key <= '9') {
      go(+e.key - 1);
    } else if (e.key === '0') {
      go(9);
    }
  });

  // ---- capture / print finalize: settle every exhibit to its end state ------
  window.__finalizeForCapture = function () {
    EX.forEach(function (ex) {
      ex.classList.add('play');
      ex.querySelectorAll('.anim, .settle-lg').forEach(function (el) {
        el.style.animation = 'none';
        el.style.opacity = '1';
        el.style.transform = 'none';
      });
      ex.querySelectorAll('[data-count]').forEach(function (el) {
        el.textContent = (+el.getAttribute('data-count')).toLocaleString('en-US') + (el.getAttribute('data-suffix') || '');
      });
    });
  };

  // ---- boot ------------------------------------------------------------------
  var start = parseInt((location.hash || '').slice(1), 10);
  go(isFinite(start) && start >= 1 && start <= EX.length ? start - 1 : 0);
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "pitch/suite.js", error: String((e && e.message) || e) }); }

// pitch/tweaks-panel.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)

/* BEGIN USAGE */
// tweaks-panel.jsx
// Reusable Tweaks shell + form-control helpers.
// Exports (to window): useTweaks, TweaksPanel, TweakSection, TweakRow, TweakSlider,
//   TweakToggle, TweakRadio, TweakSelect, TweakText, TweakNumber, TweakColor, TweakButton.
//
// Owns the host protocol (listens for __activate_edit_mode / __deactivate_edit_mode,
// posts __edit_mode_available / __edit_mode_set_keys / __edit_mode_dismissed) so
// individual prototypes don't re-roll it. Ships a consistent set of controls so you
// don't hand-draw <input type="range">, segmented radios, steppers, etc.
//
// Usage (in an HTML file that loads React + Babel):
//
//   const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
//     "primaryColor": "#D97757",
//     "palette": ["#D97757", "#29261b", "#f6f4ef"],
//     "fontSize": 16,
//     "density": "regular",
//     "dark": false
//   }/*EDITMODE-END*/;
//
//   function App() {
//     const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
//     return (
//       <div style={{ fontSize: t.fontSize, color: t.primaryColor }}>
//         Hello
//         <TweaksPanel>
//           <TweakSection label="Typography" />
//           <TweakSlider label="Font size" value={t.fontSize} min={10} max={32} unit="px"
//                        onChange={(v) => setTweak('fontSize', v)} />
//           <TweakRadio  label="Density" value={t.density}
//                        options={['compact', 'regular', 'comfy']}
//                        onChange={(v) => setTweak('density', v)} />
//           <TweakSection label="Theme" />
//           <TweakColor  label="Primary" value={t.primaryColor}
//                        options={['#D97757', '#2A6FDB', '#1F8A5B', '#7A5AE0']}
//                        onChange={(v) => setTweak('primaryColor', v)} />
//           <TweakColor  label="Palette" value={t.palette}
//                        options={[['#D97757', '#29261b', '#f6f4ef'],
//                                  ['#475569', '#0f172a', '#f1f5f9']]}
//                        onChange={(v) => setTweak('palette', v)} />
//           <TweakToggle label="Dark mode" value={t.dark}
//                        onChange={(v) => setTweak('dark', v)} />
//         </TweaksPanel>
//       </div>
//     );
//   }
//
// TweakRadio is the segmented control for 2–3 short options (auto-falls-back to
// TweakSelect past ~16/~10 chars per label); reach for TweakSelect directly when
// options are many or long. For color tweaks always curate 3-4 options rather than
// a free picker; an option can also be a whole 2–5 color palette (the stored value
// is the array). The Tweak* controls are a floor, not a ceiling — build custom
// controls inside the panel if a tweak calls for UI they don't cover.
/* END USAGE */
// ─────────────────────────────────────────────────────────────────────────────

const __TWEAKS_STYLE = `
  .twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:280px;
    max-height:calc(100vh - 32px);display:flex;flex-direction:column;
    transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom right;
    background:rgba(250,249,247,.78);color:#29261b;
    -webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);
    border:.5px solid rgba(255,255,255,.6);border-radius:14px;
    box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);
    font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
  .twk-hd{display:flex;align-items:center;justify-content:space-between;
    padding:10px 8px 10px 14px;cursor:move;user-select:none}
  .twk-hd b{font-size:12px;font-weight:600;letter-spacing:.01em}
  .twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);
    width:22px;height:22px;border-radius:6px;cursor:default;font-size:13px;line-height:1}
  .twk-x:hover{background:rgba(0,0,0,.06);color:#29261b}
  .twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px;
    overflow-y:auto;overflow-x:hidden;min-height:0;
    scrollbar-width:thin;scrollbar-color:rgba(0,0,0,.15) transparent}
  .twk-body::-webkit-scrollbar{width:8px}
  .twk-body::-webkit-scrollbar-track{background:transparent;margin:2px}
  .twk-body::-webkit-scrollbar-thumb{background:rgba(0,0,0,.15);border-radius:4px;
    border:2px solid transparent;background-clip:content-box}
  .twk-body::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.25);
    border:2px solid transparent;background-clip:content-box}
  .twk-row{display:flex;flex-direction:column;gap:5px}
  .twk-row-h{flex-direction:row;align-items:center;justify-content:space-between;gap:10px}
  .twk-lbl{display:flex;justify-content:space-between;align-items:baseline;
    color:rgba(41,38,27,.72)}
  .twk-lbl>span:first-child{font-weight:500}
  .twk-val{color:rgba(41,38,27,.5);font-variant-numeric:tabular-nums}

  .twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;
    color:rgba(41,38,27,.45);padding:10px 0 0}
  .twk-sect:first-child{padding-top:0}

  .twk-field{appearance:none;box-sizing:border-box;width:100%;min-width:0;height:26px;padding:0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;
    background:rgba(255,255,255,.6);color:inherit;font:inherit;outline:none}
  .twk-field:focus{border-color:rgba(0,0,0,.25);background:rgba(255,255,255,.85)}
  select.twk-field{padding-right:22px;
    background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='rgba(0,0,0,.5)' d='M0 0h10L5 6z'/></svg>");
    background-repeat:no-repeat;background-position:right 8px center}

  .twk-slider{appearance:none;-webkit-appearance:none;width:100%;height:4px;margin:6px 0;
    border-radius:999px;background:rgba(0,0,0,.12);outline:none}
  .twk-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;
    width:14px;height:14px;border-radius:50%;background:#fff;
    border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}
  .twk-slider::-moz-range-thumb{width:14px;height:14px;border-radius:50%;
    background:#fff;border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}

  .twk-seg{position:relative;display:flex;padding:2px;border-radius:8px;
    background:rgba(0,0,0,.06);user-select:none}
  .twk-seg-thumb{position:absolute;top:2px;bottom:2px;border-radius:6px;
    background:rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(0,0,0,.12);
    transition:left .15s cubic-bezier(.3,.7,.4,1),width .15s}
  .twk-seg.dragging .twk-seg-thumb{transition:none}
  .twk-seg button{appearance:none;position:relative;z-index:1;flex:1;border:0;
    background:transparent;color:inherit;font:inherit;font-weight:500;min-height:22px;
    border-radius:6px;cursor:default;padding:4px 6px;line-height:1.2;
    overflow-wrap:anywhere}

  .twk-toggle{position:relative;width:32px;height:18px;border:0;border-radius:999px;
    background:rgba(0,0,0,.15);transition:background .15s;cursor:default;padding:0}
  .twk-toggle[data-on="1"]{background:#34c759}
  .twk-toggle i{position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;
    background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}
  .twk-toggle[data-on="1"] i{transform:translateX(14px)}

  .twk-num{display:flex;align-items:center;box-sizing:border-box;min-width:0;height:26px;padding:0 0 0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;background:rgba(255,255,255,.6)}
  .twk-num-lbl{font-weight:500;color:rgba(41,38,27,.6);cursor:ew-resize;
    user-select:none;padding-right:8px}
  .twk-num input{flex:1;min-width:0;height:100%;border:0;background:transparent;
    font:inherit;font-variant-numeric:tabular-nums;text-align:right;padding:0 8px 0 0;
    outline:none;color:inherit;-moz-appearance:textfield}
  .twk-num input::-webkit-inner-spin-button,.twk-num input::-webkit-outer-spin-button{
    -webkit-appearance:none;margin:0}
  .twk-num-unit{padding-right:8px;color:rgba(41,38,27,.45)}

  .twk-btn{appearance:none;height:26px;padding:0 12px;border:0;border-radius:7px;
    background:rgba(0,0,0,.78);color:#fff;font:inherit;font-weight:500;cursor:default}
  .twk-btn:hover{background:rgba(0,0,0,.88)}
  .twk-btn.secondary{background:rgba(0,0,0,.06);color:inherit}
  .twk-btn.secondary:hover{background:rgba(0,0,0,.1)}

  .twk-swatch{appearance:none;-webkit-appearance:none;width:56px;height:22px;
    border:.5px solid rgba(0,0,0,.1);border-radius:6px;padding:0;cursor:default;
    background:transparent;flex-shrink:0}
  .twk-swatch::-webkit-color-swatch-wrapper{padding:0}
  .twk-swatch::-webkit-color-swatch{border:0;border-radius:5.5px}
  .twk-swatch::-moz-color-swatch{border:0;border-radius:5.5px}

  .twk-chips{display:flex;gap:6px}
  .twk-chip{position:relative;appearance:none;flex:1;min-width:0;height:46px;
    padding:0;border:0;border-radius:6px;overflow:hidden;cursor:default;
    box-shadow:0 0 0 .5px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.06);
    transition:transform .12s cubic-bezier(.3,.7,.4,1),box-shadow .12s}
  .twk-chip:hover{transform:translateY(-1px);
    box-shadow:0 0 0 .5px rgba(0,0,0,.18),0 4px 10px rgba(0,0,0,.12)}
  .twk-chip[data-on="1"]{box-shadow:0 0 0 1.5px rgba(0,0,0,.85),
    0 2px 6px rgba(0,0,0,.15)}
  .twk-chip>span{position:absolute;top:0;bottom:0;right:0;width:34%;
    display:flex;flex-direction:column;box-shadow:-1px 0 0 rgba(0,0,0,.1)}
  .twk-chip>span>i{flex:1;box-shadow:0 -1px 0 rgba(0,0,0,.1)}
  .twk-chip>span>i:first-child{box-shadow:none}
  .twk-chip svg{position:absolute;top:6px;left:6px;width:13px;height:13px;
    filter:drop-shadow(0 1px 1px rgba(0,0,0,.3))}
`;

// ── useTweaks ───────────────────────────────────────────────────────────────
// Single source of truth for tweak values. setTweak persists via the host
// (__edit_mode_set_keys → host rewrites the EDITMODE block on disk).
function useTweaks(defaults) {
  const [values, setValues] = React.useState(defaults);
  // Accepts either setTweak('key', value) or setTweak({ key: value, ... }) so a
  // useState-style call doesn't write a "[object Object]" key into the persisted
  // JSON block.
  const setTweak = React.useCallback((keyOrEdits, val) => {
    const edits = typeof keyOrEdits === 'object' && keyOrEdits !== null ? keyOrEdits : {
      [keyOrEdits]: val
    };
    setValues(prev => ({
      ...prev,
      ...edits
    }));
    window.parent.postMessage({
      type: '__edit_mode_set_keys',
      edits
    }, '*');
    // Same-window signal so in-page listeners (deck-stage rail thumbnails)
    // can react — the parent message only reaches the host, not peers.
    window.dispatchEvent(new CustomEvent('tweakchange', {
      detail: edits
    }));
  }, []);
  return [values, setTweak];
}

// ── TweaksPanel ─────────────────────────────────────────────────────────────
// Floating shell. Registers the protocol listener BEFORE announcing
// availability — if the announce ran first, the host's activate could land
// before our handler exists and the toolbar toggle would silently no-op.
// The close button posts __edit_mode_dismissed so the host's toolbar toggle
// flips off in lockstep; the host echoes __deactivate_edit_mode back which
// is what actually hides the panel.
function TweaksPanel({
  title = 'Tweaks',
  children
}) {
  const [open, setOpen] = React.useState(false);
  const dragRef = React.useRef(null);
  const offsetRef = React.useRef({
    x: 16,
    y: 16
  });
  const PAD = 16;
  const clampToViewport = React.useCallback(() => {
    const panel = dragRef.current;
    if (!panel) return;
    const w = panel.offsetWidth,
      h = panel.offsetHeight;
    const maxRight = Math.max(PAD, window.innerWidth - w - PAD);
    const maxBottom = Math.max(PAD, window.innerHeight - h - PAD);
    offsetRef.current = {
      x: Math.min(maxRight, Math.max(PAD, offsetRef.current.x)),
      y: Math.min(maxBottom, Math.max(PAD, offsetRef.current.y))
    };
    panel.style.right = offsetRef.current.x + 'px';
    panel.style.bottom = offsetRef.current.y + 'px';
  }, []);
  React.useEffect(() => {
    if (!open) return;
    clampToViewport();
    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', clampToViewport);
      return () => window.removeEventListener('resize', clampToViewport);
    }
    const ro = new ResizeObserver(clampToViewport);
    ro.observe(document.documentElement);
    return () => ro.disconnect();
  }, [open, clampToViewport]);
  React.useEffect(() => {
    const onMsg = e => {
      const t = e?.data?.type;
      if (t === '__activate_edit_mode') setOpen(true);else if (t === '__deactivate_edit_mode') setOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({
      type: '__edit_mode_available'
    }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);
  const dismiss = () => {
    setOpen(false);
    window.parent.postMessage({
      type: '__edit_mode_dismissed'
    }, '*');
  };
  const onDragStart = e => {
    const panel = dragRef.current;
    if (!panel) return;
    const r = panel.getBoundingClientRect();
    const sx = e.clientX,
      sy = e.clientY;
    const startRight = window.innerWidth - r.right;
    const startBottom = window.innerHeight - r.bottom;
    const move = ev => {
      offsetRef.current = {
        x: startRight - (ev.clientX - sx),
        y: startBottom - (ev.clientY - sy)
      };
      clampToViewport();
    };
    const up = () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
  };
  if (!open) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, __TWEAKS_STYLE), /*#__PURE__*/React.createElement("div", {
    ref: dragRef,
    className: "twk-panel",
    "data-omelette-chrome": "",
    style: {
      right: offsetRef.current.x,
      bottom: offsetRef.current.y
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-hd",
    onMouseDown: onDragStart
  }, /*#__PURE__*/React.createElement("b", null, title), /*#__PURE__*/React.createElement("button", {
    className: "twk-x",
    "aria-label": "Close tweaks",
    onMouseDown: e => e.stopPropagation(),
    onClick: dismiss
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    className: "twk-body"
  }, children)));
}

// ── Layout helpers ──────────────────────────────────────────────────────────

function TweakSection({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "twk-sect"
  }, label), children);
}
function TweakRow({
  label,
  value,
  children,
  inline = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: inline ? 'twk-row twk-row-h' : 'twk-row'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label), value != null && /*#__PURE__*/React.createElement("span", {
    className: "twk-val"
  }, value)), children);
}

// ── Controls ────────────────────────────────────────────────────────────────

function TweakSlider({
  label,
  value,
  min = 0,
  max = 100,
  step = 1,
  unit = '',
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label,
    value: `${value}${unit}`
  }, /*#__PURE__*/React.createElement("input", {
    type: "range",
    className: "twk-slider",
    min: min,
    max: max,
    step: step,
    value: value,
    onChange: e => onChange(Number(e.target.value))
  }));
}
function TweakToggle({
  label,
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-row twk-row-h"
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "twk-toggle",
    "data-on": value ? '1' : '0',
    role: "switch",
    "aria-checked": !!value,
    onClick: () => onChange(!value)
  }, /*#__PURE__*/React.createElement("i", null)));
}
function TweakRadio({
  label,
  value,
  options,
  onChange
}) {
  const trackRef = React.useRef(null);
  const [dragging, setDragging] = React.useState(false);
  // The active value is read by pointer-move handlers attached for the lifetime
  // of a drag — ref it so a stale closure doesn't fire onChange for every move.
  const valueRef = React.useRef(value);
  valueRef.current = value;

  // Segments wrap mid-word once per-segment width runs out. The track is
  // ~248px (280 panel − 28 body pad − 4 seg pad), each button loses 12px
  // to its own padding, and 11.5px system-ui averages ~6.3px/char — so 2
  // options fit ~16 chars each, 3 fit ~10. Past that (or >3 options), fall
  // back to a dropdown rather than wrap.
  const labelLen = o => String(typeof o === 'object' ? o.label : o).length;
  const maxLen = options.reduce((m, o) => Math.max(m, labelLen(o)), 0);
  const fitsAsSegments = maxLen <= ({
    2: 16,
    3: 10
  }[options.length] ?? 0);
  if (!fitsAsSegments) {
    // <select> emits strings — map back to the original option value so the
    // fallback stays type-preserving (numbers, booleans) like the segment path.
    const resolve = s => {
      const m = options.find(o => String(typeof o === 'object' ? o.value : o) === s);
      return m === undefined ? s : typeof m === 'object' ? m.value : m;
    };
    return /*#__PURE__*/React.createElement(TweakSelect, {
      label: label,
      value: value,
      options: options,
      onChange: s => onChange(resolve(s))
    });
  }
  const opts = options.map(o => typeof o === 'object' ? o : {
    value: o,
    label: o
  });
  const idx = Math.max(0, opts.findIndex(o => o.value === value));
  const n = opts.length;
  const segAt = clientX => {
    const r = trackRef.current.getBoundingClientRect();
    const inner = r.width - 4;
    const i = Math.floor((clientX - r.left - 2) / inner * n);
    return opts[Math.max(0, Math.min(n - 1, i))].value;
  };
  const onPointerDown = e => {
    setDragging(true);
    const v0 = segAt(e.clientX);
    if (v0 !== valueRef.current) onChange(v0);
    const move = ev => {
      if (!trackRef.current) return;
      const v = segAt(ev.clientX);
      if (v !== valueRef.current) onChange(v);
    };
    const up = () => {
      setDragging(false);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    ref: trackRef,
    role: "radiogroup",
    onPointerDown: onPointerDown,
    className: dragging ? 'twk-seg dragging' : 'twk-seg'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-seg-thumb",
    style: {
      left: `calc(2px + ${idx} * (100% - 4px) / ${n})`,
      width: `calc((100% - 4px) / ${n})`
    }
  }), opts.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.value,
    type: "button",
    role: "radio",
    "aria-checked": o.value === value
  }, o.label))));
}
function TweakSelect({
  label,
  value,
  options,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("select", {
    className: "twk-field",
    value: value,
    onChange: e => onChange(e.target.value)
  }, options.map(o => {
    const v = typeof o === 'object' ? o.value : o;
    const l = typeof o === 'object' ? o.label : o;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })));
}
function TweakText({
  label,
  value,
  placeholder,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("input", {
    className: "twk-field",
    type: "text",
    value: value,
    placeholder: placeholder,
    onChange: e => onChange(e.target.value)
  }));
}
function TweakNumber({
  label,
  value,
  min,
  max,
  step = 1,
  unit = '',
  onChange
}) {
  const clamp = n => {
    if (min != null && n < min) return min;
    if (max != null && n > max) return max;
    return n;
  };
  const startRef = React.useRef({
    x: 0,
    val: 0
  });
  const onScrubStart = e => {
    e.preventDefault();
    startRef.current = {
      x: e.clientX,
      val: value
    };
    const decimals = (String(step).split('.')[1] || '').length;
    const move = ev => {
      const dx = ev.clientX - startRef.current.x;
      const raw = startRef.current.val + dx * step;
      const snapped = Math.round(raw / step) * step;
      onChange(clamp(Number(snapped.toFixed(decimals))));
    };
    const up = () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-num"
  }, /*#__PURE__*/React.createElement("span", {
    className: "twk-num-lbl",
    onPointerDown: onScrubStart
  }, label), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: value,
    min: min,
    max: max,
    step: step,
    onChange: e => onChange(clamp(Number(e.target.value)))
  }), unit && /*#__PURE__*/React.createElement("span", {
    className: "twk-num-unit"
  }, unit));
}

// Relative-luminance contrast pick — checkmarks drawn over a swatch need to
// read on both #111 and #fafafa without per-option configuration. Hex input
// only (#rgb / #rrggbb); named or rgb()/hsl() colors fall through to "light".
function __twkIsLight(hex) {
  const h = String(hex).replace('#', '');
  const x = h.length === 3 ? h.replace(/./g, c => c + c) : h.padEnd(6, '0');
  const n = parseInt(x.slice(0, 6), 16);
  if (Number.isNaN(n)) return true;
  const r = n >> 16 & 255,
    g = n >> 8 & 255,
    b = n & 255;
  return r * 299 + g * 587 + b * 114 > 148000;
}
const __TwkCheck = ({
  light
}) => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 14 14",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M3 7.2 5.8 10 11 4.2",
  fill: "none",
  strokeWidth: "2.2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  stroke: light ? 'rgba(0,0,0,.78)' : '#fff'
}));

// TweakColor — curated color/palette picker. Each option is either a single
// hex string or an array of 1-5 hex strings; the card adapts — a lone color
// renders solid, a palette renders colors[0] as the hero (left ~2/3) with the
// rest stacked in a sharp column on the right. onChange emits the
// option in the shape it was passed (string stays string, array stays array).
// Without options it falls back to the native color input for back-compat.
function TweakColor({
  label,
  value,
  options,
  onChange
}) {
  if (!options || !options.length) {
    return /*#__PURE__*/React.createElement("div", {
      className: "twk-row twk-row-h"
    }, /*#__PURE__*/React.createElement("div", {
      className: "twk-lbl"
    }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("input", {
      type: "color",
      className: "twk-swatch",
      value: value,
      onChange: e => onChange(e.target.value)
    }));
  }
  // Native <input type=color> emits lowercase hex per the HTML spec, so
  // compare case-insensitively. String() guards JSON.stringify(undefined),
  // which returns the primitive undefined (no .toLowerCase).
  const key = o => String(JSON.stringify(o)).toLowerCase();
  const cur = key(value);
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-chips",
    role: "radiogroup"
  }, options.map((o, i) => {
    const colors = Array.isArray(o) ? o : [o];
    const [hero, ...rest] = colors;
    const sup = rest.slice(0, 4);
    const on = key(o) === cur;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      type: "button",
      className: "twk-chip",
      role: "radio",
      "aria-checked": on,
      "data-on": on ? '1' : '0',
      "aria-label": colors.join(', '),
      title: colors.join(' · '),
      style: {
        background: hero
      },
      onClick: () => onChange(o)
    }, sup.length > 0 && /*#__PURE__*/React.createElement("span", null, sup.map((c, j) => /*#__PURE__*/React.createElement("i", {
      key: j,
      style: {
        background: c
      }
    }))), on && /*#__PURE__*/React.createElement(__TwkCheck, {
      light: __twkIsLight(hero)
    }));
  })));
}
function TweakButton({
  label,
  onClick,
  secondary = false
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: secondary ? 'twk-btn secondary' : 'twk-btn',
    onClick: onClick
  }, label);
}
Object.assign(window, {
  useTweaks,
  TweaksPanel,
  TweakSection,
  TweakRow,
  TweakSlider,
  TweakToggle,
  TweakRadio,
  TweakSelect,
  TweakText,
  TweakNumber,
  TweakColor,
  TweakButton
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "pitch/tweaks-panel.jsx", error: String((e && e.message) || e) }); }

// slides/deck-stage.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
/* BEGIN USAGE */
/**
 * <deck-stage> — reusable web component for HTML decks.
 *
 * Handles:
 *  (a) speaker notes — reads <script type="application/json" id="speaker-notes">
 *      and posts {slideIndexChanged: N} to the parent window on nav.
 *  (b) keyboard navigation — ←/→, PgUp/PgDn, Space, Home/End, number keys.
 *      On touch devices, tapping the left/right half of the stage goes
 *      prev/next — taps on links, buttons and other interactive slide
 *      content are left alone.
 *  (c) press R to reset to slide 0 (with a tasteful keyboard hint).
 *  (d) bottom-center overlay showing slide count + hints, fades out on idle.
 *  (e) auto-scaling — inner canvas is a fixed design size (default 1920×1080)
 *      scaled with `transform: scale()` to fit the viewport, letterboxed.
 *      Set the `noscale` attribute to render at authored size (1:1) — the
 *      PPTX exporter sets this so its DOM capture sees unscaled geometry.
 *  (f) print — `@media print` lays every slide out as its own page at the
 *      design size, so the browser's Print → Save as PDF produces a clean
 *      one-page-per-slide PDF with no extra setup.
 *  (g) thumbnail rail — resizable left-hand column of per-slide thumbnails
 *      (static clones). Click to navigate; ↑/↓ with a thumbnail focused to
 *      step between slides; drag to reorder; right-click for
 *      Skip / Move up / Move down / Delete (opens a Cancel/Delete confirm
 *      dialog). Drag the rail's right edge to resize; width persists to
 *      localStorage. Skipped slides carry `data-deck-skip`, are dimmed in
 *      the rail, omitted from prev/next navigation, and hidden at print.
 *      The rail is suppressed in presenting mode, in the host's Preview
 *      mode (ViewerMode='none'), on `noscale`, on narrow viewports
 *      (≤640px), and via the `no-rail` attribute. Rail mutations dispatch
 *      a `deckchange`
 *      CustomEvent on the element: detail = {action, from, to, slide}.
 *
 * Slides are HIDDEN, not unmounted. Non-active slides stay in the DOM with
 * `visibility: hidden` + `opacity: 0`, so their state (videos, iframes,
 * form inputs, React trees) is preserved across navigation.
 *
 * Lifecycle event — the component dispatches a `slidechange` CustomEvent on
 * itself whenever the active slide changes (including the initial mount).
 * The event bubbles and composes out of shadow DOM, so you can listen on
 * the <deck-stage> element or on document:
 *
 *   document.querySelector('deck-stage').addEventListener('slidechange', (e) => {
 *     e.detail.index         // new 0-based index
 *     e.detail.previousIndex // previous index, or -1 on init
 *     e.detail.total         // total slide count
 *     e.detail.slide         // the new active slide element
 *     e.detail.previousSlide // the prior slide element, or null on init
 *     e.detail.reason        // 'init' | 'keyboard' | 'click' | 'tap' | 'api'
 *   });
 *
 * Persistence: none at the deck level. The host app keeps the current slide
 * in its own URL (?slide=) and re-delivers it via location.hash on load, so a
 * bare load with no hash always starts at slide 1.
 *
 * Usage:
 *   <style>deck-stage:not(:defined){visibility:hidden}</style>
 *   <deck-stage width="1920" height="1080">
 *     <section data-label="Title">...</section>
 *     <section data-label="Agenda">...</section>
 *   </deck-stage>
 *   <script src="deck-stage.js"></script>
 *
 * The :not(:defined) rule prevents a flash of the first slide at its
 * authored styles before this script runs and attaches the shadow root.
 *
 * Slides are the direct element children of <deck-stage>. Each slide is
 * automatically tagged with:
 *   - data-screen-label="NN Label"   (1-indexed, for comment flow)
 *   - data-om-validate="no_overflowing_text,no_overlapping_text,slide_sized_text"
 *
 * Speaker notes stay in sync because the component posts {slideIndexChanged: N}
 * to the parent — just include the #speaker-notes script tag if asked for notes.
 *
 * Authoring guidance:
 *   - Write slide bodies as static HTML inside <deck-stage>, with sizing via
 *     CSS custom properties in a <style> block rather than JS constants.
 *     Static slide markup is what lets the user click a heading in edit mode
 *     and retype it directly; a slide rendered through <script type="text/babel">,
 *     React, or a loop over a JS array has to round-trip every tweak through a
 *     chat message instead. Reach for script-generated slides only when the
 *     content genuinely needs interactive behaviour static HTML can't express.
 *   - Do NOT set position/inset/width/height on the slide <section> elements —
 *     the component absolutely positions every slotted child for you.
 *   - Entrance animations: make the visible end-state the base style and
 *     animate *from* hidden, so print and reduced-motion show content.
 *     Gate the animation on [data-deck-active] and the motion query, e.g.
 *     `@media (prefers-reduced-motion:no-preference){ [data-deck-active] .x{animation:fade-in .5s both} }`.
 *     Avoid infinite decorative loops on slide content.
 */
/* END USAGE */

(() => {
  const DESIGN_W_DEFAULT = 1920;
  const DESIGN_H_DEFAULT = 1080;
  const OVERLAY_HIDE_MS = 1800;
  const VALIDATE_ATTR = 'no_overflowing_text,no_overlapping_text,slide_sized_text';
  const FINE_POINTER_MQ = matchMedia('(hover: hover) and (pointer: fine)');
  const NARROW_MQ = matchMedia('(max-width: 640px)');
  // Slide-authored controls that should keep a tap instead of it navigating.
  const INTERACTIVE_SEL = 'a[href], button, input, select, textarea, summary, label, video[controls], audio[controls], [role="button"], [onclick], [tabindex]:not([tabindex^="-"]), [contenteditable]:not([contenteditable="false" i])';
  const pad2 = n => String(n).padStart(2, '0');

  // Label precedence: data-label → data-screen-label (number stripped) → first heading → "Slide".
  const getSlideLabel = el => {
    const explicit = el.getAttribute('data-label');
    if (explicit) return explicit;
    const existing = el.getAttribute('data-screen-label');
    if (existing) return existing.replace(/^\s*\d+\s*/, '').trim() || existing;
    const h = el.querySelector('h1, h2, h3, [data-title]');
    const t = h && (h.textContent || '').trim().slice(0, 40);
    if (t) return t;
    return 'Slide';
  };
  const stylesheet = `
    :host {
      position: fixed;
      inset: 0;
      display: block;
      background: #000;
      color: #fff;
      font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, Arial, sans-serif;
      overflow: hidden;
      -webkit-tap-highlight-color: transparent;
    }
    /* connectedCallback holds this until document.fonts.ready (capped 2s) so
     * the first visible paint has the deck's real typography + final rail
     * layout. opacity (not visibility) so the active slide can't un-hide
     * itself via the ::slotted([data-deck-active]) visibility:visible rule.
     * Only the stage/rail hide — the black :host background stays, so the
     * iframe doesn't flash the page's default white. */
    :host([data-fonts-pending]) .stage,
    :host([data-fonts-pending]) .rail { opacity: 0; pointer-events: none; }

    .stage {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .canvas {
      position: relative;
      transform-origin: center center;
      flex-shrink: 0;
      background: #fff;
      will-change: transform;
    }

    /* Slides live in light DOM (via <slot>) so authored CSS still applies.
       We absolutely position each slotted child to stack them. */
    ::slotted(*) {
      position: absolute !important;
      inset: 0 !important;
      width: 100% !important;
      height: 100% !important;
      box-sizing: border-box !important;
      overflow: hidden;
      opacity: 0;
      pointer-events: none;
      visibility: hidden;
    }
    ::slotted([data-deck-active]) {
      opacity: 1;
      pointer-events: auto;
      visibility: visible;
    }

    .overlay {
      position: fixed;
      left: 50%;
      bottom: 22px;
      transform: translate(-50%, 6px) scale(0.92);
      filter: blur(6px);
      display: flex;
      align-items: center;
      gap: 4px;
      padding: 4px;
      background: #000;
      color: #fff;
      border-radius: 999px;
      font-size: 12px;
      font-feature-settings: "tnum" 1;
      letter-spacing: 0.01em;
      opacity: 0;
      pointer-events: none;
      transition: opacity 260ms ease, transform 260ms cubic-bezier(.2,.8,.2,1), filter 260ms ease;
      transform-origin: center bottom;
      z-index: 2147483000;
      user-select: none;
    }
    .overlay[data-visible] {
      opacity: 1;
      pointer-events: auto;
      transform: translate(-50%, 0) scale(1);
      filter: blur(0);
    }

    .btn {
      appearance: none;
      -webkit-appearance: none;
      background: transparent;
      border: 0;
      margin: 0;
      padding: 0;
      color: inherit;
      font: inherit;
      cursor: default;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      height: 28px;
      min-width: 28px;
      border-radius: 999px;
      color: rgba(255,255,255,0.72);
      transition: background 140ms ease, color 140ms ease;
      -webkit-tap-highlight-color: transparent;
    }
    .btn:hover { background: rgba(255,255,255,0.12); color: #fff; }
    .btn:active { background: rgba(255,255,255,0.18); }
    .btn:focus { outline: none; }
    .btn:focus-visible { outline: none; }
    .btn::-moz-focus-inner { border: 0; }
    .btn svg { width: 14px; height: 14px; display: block; }
    .btn.reset {
      font-size: 11px;
      font-weight: 500;
      letter-spacing: 0.02em;
      padding: 0 10px 0 12px;
      gap: 6px;
      color: rgba(255,255,255,0.72);
    }
    .btn.reset .kbd {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-width: 16px;
      height: 16px;
      padding: 0 4px;
      font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace;
      font-size: 10px;
      line-height: 1;
      color: rgba(255,255,255,0.88);
      background: rgba(255,255,255,0.12);
      border-radius: 4px;
    }

    .count {
      font-variant-numeric: tabular-nums;
      color: #fff;
      font-weight: 500;
      padding: 0 8px;
      min-width: 42px;
      text-align: center;
      font-size: 12px;
    }
    .count .sep { color: rgba(255,255,255,0.45); margin: 0 3px; font-weight: 400; }
    .count .total { color: rgba(255,255,255,0.55); }

    .divider {
      width: 1px;
      height: 14px;
      background: rgba(255,255,255,0.18);
      margin: 0 2px;
    }

    /* ── Thumbnail rail ──────────────────────────────────────────────────
       Fixed column on the left; each thumbnail is a static deep-clone of
       the light-DOM slide scaled into a 16:9 (or design-aspect) frame. The
       stage re-fits around it (see _fit); hidden during present / noscale
       / print so capture geometry and fullscreen output are unchanged. */
    .rail {
      position: fixed;
      left: 0;
      top: 0;
      bottom: 0;
      width: var(--deck-rail-w, 188px);
      background: #141414;
      border-right: 1px solid rgba(255,255,255,0.08);
      overflow-y: auto;
      overflow-x: hidden;
      padding: 12px 10px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      gap: 12px;
      z-index: 2147482500;
      scrollbar-width: thin;
      scrollbar-color: rgba(255,255,255,0.18) transparent;
    }
    .rail::-webkit-scrollbar { width: 8px; }
    .rail::-webkit-scrollbar-track { background: transparent; margin: 2px; }
    .rail::-webkit-scrollbar-thumb {
      background: rgba(255,255,255,0.18);
      border-radius: 4px;
      border: 2px solid transparent;
      background-clip: content-box;
    }
    .rail::-webkit-scrollbar-thumb:hover {
      background: rgba(255,255,255,0.28);
      border: 2px solid transparent;
      background-clip: content-box;
    }
    :host([no-rail]) .rail,
    :host([noscale]) .rail { display: none; }
    .rail[data-presenting] { display: none; }
    @media (max-width: 640px) {
      .rail, .rail-resize { display: none; }
    }
    /* User-driven show/hide (the TweaksPanel toggle) slides instead of
       popping. Transitions are gated on :host([data-rail-anim]) — set only
       for the 200ms around the toggle — so window-resize and rail-width
       drag (which also call _fit) don't lag behind the cursor. */
    .rail[data-user-hidden] { transform: translateX(-100%); }
    :host([data-rail-anim]) .rail { transition: transform 200ms cubic-bezier(.3,.7,.4,1); }
    :host([data-rail-anim]) .stage { transition: left 200ms cubic-bezier(.3,.7,.4,1); }
    :host([data-rail-anim]) .canvas { transition: transform 200ms cubic-bezier(.3,.7,.4,1); }
    /* transition shorthand replaces rather than merges — repeat the base
       .overlay opacity/transform/filter transitions so visibility changes
       during the 200ms toggle window still fade instead of popping. */
    :host([data-rail-anim]) .overlay {
      transition: margin-left 200ms cubic-bezier(.3,.7,.4,1),
                  opacity 260ms ease,
                  transform 260ms cubic-bezier(.2,.8,.2,1),
                  filter 260ms ease;
    }

    .thumb {
      position: relative;
      display: flex;
      align-items: flex-start;
      gap: 8px;
      cursor: pointer;
      user-select: none;
    }
    .thumb .num {
      width: 16px;
      flex-shrink: 0;
      font-size: 11px;
      font-weight: 500;
      text-align: right;
      color: rgba(255,255,255,0.55);
      padding-top: 2px;
      font-variant-numeric: tabular-nums;
    }
    .thumb .frame {
      position: relative;
      flex: 1;
      min-width: 0;
      aspect-ratio: var(--deck-aspect);
      background: #fff;
      border-radius: 4px;
      outline: 2px solid transparent;
      outline-offset: 0;
      overflow: hidden;
      transition: outline-color 120ms ease;
    }
    .thumb:hover .frame { outline-color: rgba(255,255,255,0.25); }
    .thumb { outline: none; }
    .thumb:focus-visible .frame { outline-color: rgba(255,255,255,0.5); }
    .thumb[data-current] .num { color: #fff; }
    .thumb[data-current] .frame { outline-color: #D97757; }
    .thumb[data-dragging] { opacity: 0.35; }
    .thumb::before {
      content: '';
      position: absolute;
      left: 24px;
      right: 0;
      height: 3px;
      border-radius: 2px;
      background: #D97757;
      opacity: 0;
      pointer-events: none;
    }
    .thumb[data-drop="before"]::before { top: -8px; opacity: 1; }
    .thumb[data-drop="after"]::before { bottom: -8px; opacity: 1; }
    .thumb[data-skip] .frame { opacity: 0.35; }
    .thumb[data-skip] .frame::after {
      content: 'Skipped';
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(0,0,0,0.45);
      color: #fff;
      font-size: 10px;
      font-weight: 500;
      letter-spacing: 0.04em;
    }

    .ctxmenu {
      position: fixed;
      min-width: 150px;
      padding: 4px;
      background: #242424;
      border: 1px solid rgba(255,255,255,0.12);
      border-radius: 7px;
      box-shadow: 0 8px 24px rgba(0,0,0,0.45);
      z-index: 2147483100;
      display: none;
      font-size: 12px;
    }
    .ctxmenu[data-open] { display: block; }
    .ctxmenu button {
      display: block;
      width: 100%;
      appearance: none;
      border: 0;
      background: transparent;
      color: #e8e8e8;
      font: inherit;
      text-align: left;
      padding: 6px 10px;
      border-radius: 4px;
      cursor: pointer;
    }
    .ctxmenu button:hover:not(:disabled) { background: rgba(255,255,255,0.08); }
    .ctxmenu button:disabled { opacity: 0.35; cursor: default; }
    .ctxmenu hr {
      border: 0;
      border-top: 1px solid rgba(255,255,255,0.1);
      margin: 4px 2px;
    }

    .rail-resize {
      position: fixed;
      left: calc(var(--deck-rail-w, 188px) - 3px);
      top: 0;
      bottom: 0;
      width: 6px;
      cursor: col-resize;
      z-index: 2147482600;
      touch-action: none;
    }
    .rail-resize:hover,
    .rail-resize[data-dragging] { background: rgba(255,255,255,0.12); }
    :host([no-rail]) .rail-resize,
    :host([noscale]) .rail-resize,
    .rail[data-presenting] + .rail-resize,
    .rail[data-user-hidden] + .rail-resize { display: none; }

    /* Delete-confirm popup — matches the SPA's ConfirmDialog layout
       (title + message body, depressed footer with Cancel / Delete). */
    .confirm-backdrop {
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0.45);
      z-index: 2147483200;
      display: none;
      align-items: center;
      justify-content: center;
    }
    .confirm-backdrop[data-open] { display: flex; }
    .confirm {
      width: 320px;
      max-width: calc(100vw - 32px);
      background: #2a2a2a;
      color: #e8e8e8;
      border: 1px solid rgba(255,255,255,0.12);
      border-radius: 12px;
      box-shadow: 0 12px 32px rgba(0,0,0,0.5);
      overflow: hidden;
      font-family: inherit;
      animation: deck-confirm-in 0.18s ease;
    }
    @keyframes deck-confirm-in {
      from { opacity: 0; transform: scale(0.96); }
      to { opacity: 1; transform: scale(1); }
    }
    .confirm .body { padding: 20px 20px 16px; }
    .confirm .title { font-size: 14px; font-weight: 600; margin-bottom: 4px; }
    .confirm .msg { font-size: 13px; line-height: 1.5; color: rgba(255,255,255,0.65); }
    .confirm .footer {
      padding: 14px 20px;
      background: #1f1f1f;
      border-top: 1px solid rgba(255,255,255,0.08);
      display: flex;
      justify-content: flex-end;
      gap: 8px;
    }
    .confirm button {
      appearance: none;
      font: inherit;
      font-size: 13px;
      font-weight: 500;
      padding: 8px 16px;
      border-radius: 8px;
      cursor: pointer;
    }
    .confirm .cancel {
      background: transparent;
      border: 0;
      color: rgba(255,255,255,0.8);
    }
    .confirm .cancel:hover { background: rgba(255,255,255,0.08); }
    .confirm .danger {
      background: #c96442;
      border: 1px solid rgba(0,0,0,0.15);
      color: #fff;
      box-shadow: 0 1px 3px rgba(166,50,68,0.3), 0 2px 6px rgba(166,50,68,0.18);
    }
    .confirm .danger:hover { background: #b5563a; }

    /* ── Print: one page per slide, no chrome ────────────────────────────
       The screen layout stacks every slide at inset:0 inside a scaled
       canvas; for print we want them in document flow at the authored
       design size so the browser paginates one slide per sheet. The
       @page size is set from the width/height attributes via the inline
       <style id="deck-stage-print-page"> that connectedCallback injects
       into <head> (the @page at-rule has no effect inside shadow DOM). */
    @media print {
      :host {
        position: static;
        inset: auto;
        background: none;
        overflow: visible;
        color: inherit;
      }
      .stage { position: static; display: block; }
      .canvas {
        transform: none !important;
        width: auto !important;
        height: auto !important;
        background: none;
        will-change: auto;
      }
      ::slotted(*) {
        position: relative !important;
        inset: auto !important;
        width: var(--deck-design-w) !important;
        height: var(--deck-design-h) !important;
        box-sizing: border-box !important;
        opacity: 1 !important;
        visibility: visible !important;
        pointer-events: auto;
        break-after: page;
        page-break-after: always;
        break-inside: avoid;
        overflow: hidden;
      }
      /* :last-child alone isn't enough once data-deck-skip hides the
         trailing slide(s) — the last *visible* slide still carries
         break-after:page and prints a blank sheet. _markLastVisible()
         maintains data-deck-last-visible on the last non-skipped slide. */
      ::slotted(*:last-child),
      ::slotted([data-deck-last-visible]) {
        break-after: auto;
        page-break-after: auto;
      }
      ::slotted([data-deck-skip]) { display: none !important; }
      .overlay, .rail, .rail-resize, .ctxmenu, .confirm-backdrop { display: none !important; }
    }
  `;
  class DeckStage extends HTMLElement {
    static get observedAttributes() {
      return ['width', 'height', 'noscale', 'no-rail'];
    }
    constructor() {
      super();
      this._root = this.attachShadow({
        mode: 'open'
      });
      this._index = 0;
      this._slides = [];
      this._notes = [];
      this._hideTimer = null;
      this._mouseIdleTimer = null;
      this._menuIndex = -1;
      this._onKey = this._onKey.bind(this);
      this._onResize = this._onResize.bind(this);
      this._onSlotChange = this._onSlotChange.bind(this);
      this._onMouseMove = this._onMouseMove.bind(this);
      this._onTap = this._onTap.bind(this);
      this._onMessage = this._onMessage.bind(this);
      // Capture-phase close so a click anywhere dismisses the menu, but
      // ignore clicks that land inside the menu itself — otherwise the
      // capture handler runs before the menu's own (bubble) handler and
      // clears _menuIndex out from under it.
      this._onDocClick = e => {
        if (this._menu && e.composedPath && e.composedPath().includes(this._menu)) return;
        this._closeMenu();
      };
    }
    get designWidth() {
      return parseInt(this.getAttribute('width'), 10) || DESIGN_W_DEFAULT;
    }
    get designHeight() {
      return parseInt(this.getAttribute('height'), 10) || DESIGN_H_DEFAULT;
    }
    connectedCallback() {
      // Presenter-view popup loads deckUrl?_snthumb=...#N for its prev/cur/
      // next thumbnails — the rail has no business rendering inside those
      // (wrong scale, and it offsets the stage so the thumb shows a gutter).
      if (/[?&]_snthumb=/.test(location.search)) this.setAttribute('no-rail', '');
      this._render();
      this._loadNotes();
      this._syncPrintPageRule();
      window.addEventListener('keydown', this._onKey);
      window.addEventListener('resize', this._onResize);
      window.addEventListener('mousemove', this._onMouseMove, {
        passive: true
      });
      window.addEventListener('message', this._onMessage);
      window.addEventListener('click', this._onDocClick, true);
      this.addEventListener('click', this._onTap);
      // Print lays every slide out as its own page, so [data-deck-active]-
      // gated entrance styles need the attribute on every slide (not just
      // the current one) or their content prints at the hidden base style.
      // The transient freeze style lands BEFORE the attributes so any
      // attribute-keyed transition fires at 0s (changing transition-
      // duration after a transition has started doesn't affect it).
      this._onBeforePrint = () => {
        if (this._freezeStyle) this._freezeStyle.remove();
        this._freezeStyle = document.createElement('style');
        this._freezeStyle.textContent = '*,*::before,*::after{transition-duration:0s !important}';
        document.head.appendChild(this._freezeStyle);
        this._slides.forEach(s => s.setAttribute('data-deck-active', ''));
      };
      this._onAfterPrint = () => {
        this._applyIndex({
          showOverlay: false,
          broadcast: false
        });
        if (this._freezeStyle) {
          this._freezeStyle.remove();
          this._freezeStyle = null;
        }
      };
      window.addEventListener('beforeprint', this._onBeforePrint);
      window.addEventListener('afterprint', this._onAfterPrint);
      // Initial collection + layout happens via slotchange, which fires on mount.
      this._enableRail();
      // Hold the stage hidden until webfonts are ready so the first visible
      // paint has the deck's real typography — the :not(:defined) guard in
      // the page HTML only covers custom-element upgrade, not font load.
      // Capped so a 404'd font URL can't blank the deck indefinitely.
      this.setAttribute('data-fonts-pending', '');
      const reveal = () => this.removeAttribute('data-fonts-pending');
      // rAF first: fonts.ready is a pre-resolved promise until layout has
      // resolved the slotted text's font-family and pushed a FontFace into
      // 'loading'. Reading it here in connectedCallback (parse-time) would
      // settle the race in a microtask before any font fetch starts.
      requestAnimationFrame(() => {
        Promise.race([document.fonts ? document.fonts.ready : Promise.resolve(), new Promise(r => setTimeout(r, 2000))]).then(reveal, reveal);
      });
    }
    _enableRail() {
      // Idempotent — older host builds still post __omelette_rail_enabled.
      // no-rail guard keeps the observers/stylesheet walk off the cheap path
      // for presenter-popup thumbnail iframes (up to 9 per view).
      if (this._railEnabled || this.hasAttribute('no-rail')) return;
      this._railEnabled = true;
      // Per-viewer preference — restored alongside rail width. Default on;
      // only a stored '0' (from the TweaksPanel toggle) hides it.
      this._railVisible = true;
      try {
        if (localStorage.getItem('deck-stage.railVisible') === '0') this._railVisible = false;
      } catch (e) {}
      // Live thumbnail updates: watch the light-DOM slides for content
      // edits and re-clone just the affected thumb(s), debounced. Ignore
      // the data-deck-* / data-screen-label / data-om-validate attributes
      // this component itself writes so nav and skip don't trigger
      // spurious refreshes.
      const OWN_ATTRS = /^data-(deck-|screen-label$|om-validate$)/;
      this._liveDirty = new Set();
      this._liveObserver = new MutationObserver(records => {
        for (const r of records) {
          if (r.type === 'attributes' && OWN_ATTRS.test(r.attributeName || '')) continue;
          let n = r.target;
          while (n && n.parentElement !== this) n = n.parentElement;
          if (n && this._slideSet && this._slideSet.has(n)) this._liveDirty.add(n);
        }
        if (this._liveDirty.size && !this._liveTimer) {
          this._liveTimer = setTimeout(() => {
            this._liveTimer = null;
            this._liveDirty.forEach(s => this._refreshThumb(s));
            this._liveDirty.clear();
          }, 200);
        }
      });
      this._liveObserver.observe(this, {
        subtree: true,
        childList: true,
        characterData: true,
        attributes: true
      });
      // Lazy thumbnail materialization — clone the slide only when its
      // frame scrolls into (or near) the rail viewport. rootMargin gives
      // ~4 thumbs of pre-load so fast scrolling doesn't flash blanks.
      this._railObserver = new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (e.isIntersecting && e.target.__deckThumb) {
            this._materialize(e.target.__deckThumb);
          }
        });
      }, {
        root: this._rail,
        rootMargin: '400px 0px'
      });
      // Tweaks typically change CSS vars / attrs OUTSIDE <deck-stage>
      // (on <html>, <body>, a wrapper div, or a <style> tag), which
      // _liveObserver can't see. Re-snapshot author CSS (constructable
      // sheet is shared by reference, so one replaceSync updates every
      // thumb shadow root) and re-sync each thumb host's attrs + custom
      // properties. In-slide DOM mutations are _liveObserver's job.
      // Debounced so slider drags don't thrash.
      this._onTweakChange = () => {
        clearTimeout(this._tweakTimer);
        this._tweakTimer = setTimeout(() => {
          this._snapshotAuthorCss();
          // One getComputedStyle for the whole batch — each
          // getPropertyValue read below reuses the same computed style
          // as long as nothing invalidates layout between thumbs.
          const cs = getComputedStyle(this);
          (this._thumbs || []).forEach(t => {
            if (t.host) this._syncThumbHostAttrs(t.host, cs);
          });
        }, 120);
      };
      window.addEventListener('tweakchange', this._onTweakChange);
      this._snapshotAuthorCss();
      // Build the rail now that it's enabled — slotchange already fired,
      // so _renderRail's early-return skipped the initial build.
      this._syncRailHidden();
      this._renderRail();
      this._fit();
    }

    /** Snapshot document stylesheets into a constructable sheet that each
     *  thumbnail's nested shadow root adopts — so author CSS styles the
     *  cloned slide content without touching this component's chrome.
     *  Cross-origin sheets throw on .cssRules — skip them. Re-callable:
     *  the existing constructable sheet is reused via replaceSync so every
     *  already-adopted shadow root picks up the fresh CSS without re-adopt. */
    _snapshotAuthorCss() {
      // :root in an adopted sheet inside a shadow root matches nothing
      // (only the document root qualifies), so author rules like
      // `:root[data-voice="modern"] .serif` never reach the clones.
      // Rewrite :root → :host and mirror <html>'s data-*/class/lang onto
      // each thumb host (see _syncThumbHostAttrs) so the same selectors
      // match inside the thumbnail's shadow tree.
      const authorCss = Array.from(document.styleSheets).map(sh => {
        try {
          return Array.from(sh.cssRules).map(r => r.cssText).join('\n');
        } catch (e) {
          return '';
        }
      }).join('\n')
      // The shadow host is featureless outside the functional :host(...)
      // form, so any compound on :root — [attr], .class, #id, :pseudo —
      // must become :host(<compound>) not :host<compound>. Same for the
      // html type selector (Tailwind class-strategy dark mode emits
      // html.dark; Pico uses html[data-theme]), which has nothing to
      // match inside the thumb's shadow tree.
      .replace(/:root((?:\[[^\]]*\]|[.#][-\w]+|:[-\w]+(?:\([^)]*\))?)+)/g, ':host($1)').replace(/:root\b/g, ':host').replace(/(^|[\s,>~+(}])html((?:\[[^\]]*\]|[.#][-\w]+|:[-\w]+(?:\([^)]*\))?)+)(?![-\w])/g, '$1:host($2)').replace(/(^|[\s,>~+(}])html(?![-\w])/g, '$1:host');
      // Every custom property the author references. _syncThumbHostAttrs
      // mirrors each one's *computed* value at <deck-stage> onto the
      // thumb host so the live value wins over the :host default above
      // regardless of which ancestor the tweak wrote to (<html>, <body>,
      // a wrapper div, or the deck-stage element itself all inherit
      // down to getComputedStyle(this)).
      this._authorVars = new Set(authorCss.match(/--[\w-]+/g) || []);
      try {
        if (!this._adoptedSheet) this._adoptedSheet = new CSSStyleSheet();
        this._adoptedSheet.replaceSync(authorCss);
      } catch (e) {
        this._adoptedSheet = null;
        this._authorCss = authorCss;
      }
    }
    _syncThumbHostAttrs(host, cs) {
      const de = document.documentElement;
      // setAttribute overwrites but can't delete — an attr removed from
      // <html> (toggleAttribute off, classList emptied) would linger on
      // the host and :host([data-*]) / :host(.foo) rules would keep
      // matching. Remove stale mirrored attrs first; iterate backward
      // because removeAttribute mutates the live NamedNodeMap.
      for (let i = host.attributes.length - 1; i >= 0; i--) {
        const n = host.attributes[i].name;
        if ((n.startsWith('data-') || n === 'class' || n === 'lang') && !de.hasAttribute(n)) {
          host.removeAttribute(n);
        }
      }
      for (const a of de.attributes) {
        if (a.name.startsWith('data-') || a.name === 'class' || a.name === 'lang') {
          host.setAttribute(a.name, a.value);
        }
      }
      // The :root→:host rewrite in _snapshotAuthorCss pins each custom
      // property to its stylesheet default on the thumb host, shadowing
      // the live value that would otherwise inherit. Tweaks can write the
      // live value on any ancestor — <html>, <body>, a wrapper div, the
      // deck-stage element — so read it as the *computed* value at
      // <deck-stage> (which sees the whole inheritance chain) rather than
      // trying to guess which element the author wrote to. Inline on the
      // host beats the :host{} rule. remove-stale covers vars dropped
      // from the stylesheet between snapshots.
      const vars = this._authorVars || new Set();
      for (let i = host.style.length - 1; i >= 0; i--) {
        const p = host.style[i];
        if (p.startsWith('--') && !vars.has(p)) host.style.removeProperty(p);
      }
      const live = cs || getComputedStyle(this);
      vars.forEach(p => {
        const v = live.getPropertyValue(p);
        if (v) host.style.setProperty(p, v.trim());else host.style.removeProperty(p);
      });
    }
    disconnectedCallback() {
      window.removeEventListener('keydown', this._onKey);
      window.removeEventListener('resize', this._onResize);
      window.removeEventListener('mousemove', this._onMouseMove);
      window.removeEventListener('message', this._onMessage);
      window.removeEventListener('click', this._onDocClick, true);
      window.removeEventListener('beforeprint', this._onBeforePrint);
      window.removeEventListener('afterprint', this._onAfterPrint);
      if (this._freezeStyle) {
        this._freezeStyle.remove();
        this._freezeStyle = null;
      }
      this.removeEventListener('click', this._onTap);
      if (this._hideTimer) clearTimeout(this._hideTimer);
      if (this._mouseIdleTimer) clearTimeout(this._mouseIdleTimer);
      if (this._liveTimer) clearTimeout(this._liveTimer);
      if (this._tweakTimer) clearTimeout(this._tweakTimer);
      if (this._railAnimTimer) clearTimeout(this._railAnimTimer);
      if (this._scaleRaf) cancelAnimationFrame(this._scaleRaf);
      if (this._liveObserver) this._liveObserver.disconnect();
      if (this._railObserver) this._railObserver.disconnect();
      if (this._onTweakChange) window.removeEventListener('tweakchange', this._onTweakChange);
    }
    attributeChangedCallback() {
      if (this._canvas) {
        this._canvas.style.width = this.designWidth + 'px';
        this._canvas.style.height = this.designHeight + 'px';
        this._canvas.style.setProperty('--deck-design-w', this.designWidth + 'px');
        this._canvas.style.setProperty('--deck-design-h', this.designHeight + 'px');
        if (this._rail) {
          this._rail.style.setProperty('--deck-aspect', this.designWidth + '/' + this.designHeight);
        }
        this._fit();
        this._scaleThumbs();
        this._syncPrintPageRule();
      }
    }
    _render() {
      const style = document.createElement('style');
      style.textContent = stylesheet;
      const stage = document.createElement('div');
      stage.className = 'stage';
      const canvas = document.createElement('div');
      canvas.className = 'canvas';
      canvas.style.width = this.designWidth + 'px';
      canvas.style.height = this.designHeight + 'px';
      canvas.style.setProperty('--deck-design-w', this.designWidth + 'px');
      canvas.style.setProperty('--deck-design-h', this.designHeight + 'px');
      const slot = document.createElement('slot');
      slot.addEventListener('slotchange', this._onSlotChange);
      canvas.appendChild(slot);
      stage.appendChild(canvas);

      // Overlay: compact, solid black, with clickable controls.
      const overlay = document.createElement('div');
      overlay.className = 'overlay export-hidden';
      overlay.setAttribute('role', 'toolbar');
      overlay.setAttribute('aria-label', 'Deck controls');
      overlay.setAttribute('data-omelette-chrome', '');
      overlay.innerHTML = `
        <button class="btn prev" type="button" aria-label="Previous slide" title="Previous (←)">
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 3L5 8l5 5"/></svg>
        </button>
        <span class="count" aria-live="polite"><span class="current">1</span><span class="sep">/</span><span class="total">1</span></span>
        <button class="btn next" type="button" aria-label="Next slide" title="Next (→)">
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 3l5 5-5 5"/></svg>
        </button>
        <span class="divider"></span>
        <button class="btn reset" type="button" aria-label="Reset to first slide" title="Reset (R)">Reset<span class="kbd">R</span></button>
      `;
      overlay.querySelector('.prev').addEventListener('click', () => this._advance(-1, 'click'));
      overlay.querySelector('.next').addEventListener('click', () => this._advance(1, 'click'));
      overlay.querySelector('.reset').addEventListener('click', () => this._go(0, 'click'));

      // Thumbnail rail + context menu. Thumbnails are populated in
      // _renderRail() after _collectSlides().
      const rail = document.createElement('div');
      rail.className = 'rail export-hidden';
      rail.setAttribute('data-omelette-chrome', '');
      rail.style.setProperty('--deck-aspect', this.designWidth + '/' + this.designHeight);
      // Edge auto-scroll while dragging a thumb near the rail's top/bottom
      // so off-screen drop targets are reachable. Native dragover fires
      // continuously while the pointer is stationary, so a per-event nudge
      // (ramped by edge proximity) is enough — no rAF loop needed.
      rail.addEventListener('dragover', e => {
        if (this._dragFrom == null) return;
        const r = rail.getBoundingClientRect();
        const EDGE = 40;
        const dt = e.clientY - r.top;
        const db = r.bottom - e.clientY;
        if (dt < EDGE) rail.scrollTop -= Math.ceil((EDGE - dt) / 3);else if (db < EDGE) rail.scrollTop += Math.ceil((EDGE - db) / 3);
      });
      const menu = document.createElement('div');
      menu.className = 'ctxmenu export-hidden';
      menu.setAttribute('data-omelette-chrome', '');
      menu.innerHTML = `
        <button type="button" data-act="skip">Skip slide</button>
        <button type="button" data-act="up">Move up</button>
        <button type="button" data-act="down">Move down</button>
        <hr>
        <button type="button" data-act="delete">Delete slide</button>
      `;
      menu.addEventListener('click', e => {
        const act = e.target && e.target.getAttribute && e.target.getAttribute('data-act');
        if (!act) return;
        const i = this._menuIndex;
        this._closeMenu();
        if (act === 'skip') this._toggleSkip(i);else if (act === 'up') this._moveSlide(i, i - 1);else if (act === 'down') this._moveSlide(i, i + 1);else if (act === 'delete') this._openConfirm(i);
      });
      menu.addEventListener('contextmenu', e => e.preventDefault());

      // Rail resize handle — drag to set --deck-rail-w, persisted to
      // localStorage so the width survives reloads.
      const resize = document.createElement('div');
      resize.className = 'rail-resize export-hidden';
      resize.setAttribute('data-omelette-chrome', '');
      resize.addEventListener('pointerdown', e => {
        e.preventDefault();
        resize.setPointerCapture(e.pointerId);
        resize.setAttribute('data-dragging', '');
        const move = ev => this._setRailWidth(ev.clientX);
        const up = () => {
          resize.removeEventListener('pointermove', move);
          resize.removeEventListener('pointerup', up);
          resize.removeEventListener('pointercancel', up);
          resize.removeAttribute('data-dragging');
          try {
            localStorage.setItem('deck-stage.railWidth', String(this._railPx));
          } catch (err) {}
        };
        resize.addEventListener('pointermove', move);
        resize.addEventListener('pointerup', up);
        resize.addEventListener('pointercancel', up);
      });

      // Delete-confirm dialog — mirrors the SPA's ConfirmDialog layout.
      const confirm = document.createElement('div');
      confirm.className = 'confirm-backdrop export-hidden';
      confirm.setAttribute('data-omelette-chrome', '');
      confirm.innerHTML = `
        <div class="confirm" role="dialog" aria-modal="true">
          <div class="body">
            <div class="title">Delete slide?</div>
            <div class="msg">This slide will be removed from the deck.</div>
          </div>
          <div class="footer">
            <button type="button" class="cancel">Cancel</button>
            <button type="button" class="danger">Delete</button>
          </div>
        </div>
      `;
      confirm.addEventListener('click', e => {
        if (e.target === confirm) this._closeConfirm();
      });
      confirm.querySelector('.cancel').addEventListener('click', () => this._closeConfirm());
      confirm.querySelector('.danger').addEventListener('click', () => {
        const i = this._confirmIndex;
        this._closeConfirm();
        this._deleteSlide(i);
      });
      this._root.append(style, rail, resize, stage, overlay, menu, confirm);
      this._canvas = canvas;
      this._stage = stage;
      this._slot = slot;
      this._overlay = overlay;
      this._rail = rail;
      this._resize = resize;
      this._menu = menu;
      this._confirm = confirm;
      this._countEl = overlay.querySelector('.current');
      this._totalEl = overlay.querySelector('.total');

      // Restore persisted rail width.
      let rw = 188;
      try {
        const s = localStorage.getItem('deck-stage.railWidth');
        if (s) rw = parseInt(s, 10) || rw;
      } catch (err) {}
      this._setRailWidth(rw);
      this._syncRailHidden();
    }
    _setRailWidth(px) {
      const w = Math.max(120, Math.min(360, Math.round(px)));
      this._railPx = w;
      this.style.setProperty('--deck-rail-w', w + 'px');
      this._fit();
      // _scaleThumbs forces a sync layout (frame.offsetWidth) then writes
      // N transforms. During a resize drag this runs per-pointermove;
      // coalesce to one per frame.
      if (!this._scaleRaf) {
        this._scaleRaf = requestAnimationFrame(() => {
          this._scaleRaf = null;
          this._scaleThumbs();
        });
      }
    }

    /** @page must live in the document stylesheet — it's a no-op inside
     *  shadow DOM. Inject/update a single <head> style tag so the print
     *  sheet matches the design size and Save-as-PDF yields one slide per
     *  page with no margins. */
    _syncPrintPageRule() {
      const id = 'deck-stage-print-page';
      let tag = document.getElementById(id);
      if (!tag) {
        tag = document.createElement('style');
        tag.id = id;
        document.head.appendChild(tag);
      }
      tag.textContent = '@page { size: ' + this.designWidth + 'px ' + this.designHeight + 'px; margin: 0; } ' + '@media print { html, body { margin: 0 !important; padding: 0 !important; background: none !important; overflow: visible !important; height: auto !important; } ' + '* { -webkit-print-color-adjust: exact; print-color-adjust: exact; } ' +
      // Jump authored animations/transitions to their end state so print
      // never captures mid-entrance — pairs with the beforeprint handler
      // in connectedCallback that sets data-deck-active on every slide.
      '*, *::before, *::after { animation-delay: -99s !important; animation-duration: .001s !important; ' + 'animation-iteration-count: 1 !important; animation-fill-mode: both !important; ' + 'animation-play-state: running !important; transition-duration: 0s !important; } }';
    }
    _onSlotChange() {
      // Rail mutations (delete/move) already reconcile synchronously and
      // emit slidechange with reason 'api'; skip the async slotchange that
      // would otherwise re-broadcast with reason 'init'.
      if (this._squelchSlotChange) {
        this._squelchSlotChange = false;
        return;
      }
      this._collectSlides();
      this._restoreIndex();
      this._applyIndex({
        showOverlay: false,
        broadcast: true,
        reason: 'init'
      });
      this._fit();
    }
    _collectSlides() {
      const assigned = this._slot.assignedElements({
        flatten: true
      });
      this._slides = assigned.filter(el => {
        // Skip template/style/script nodes even if someone slots them.
        const tag = el.tagName;
        return tag !== 'TEMPLATE' && tag !== 'SCRIPT' && tag !== 'STYLE';
      });
      this._slideSet = new Set(this._slides);
      this._slides.forEach((slide, i) => {
        const n = i + 1;
        slide.setAttribute('data-screen-label', `${pad2(n)} ${getSlideLabel(slide)}`);

        // Validation attribute for comment flow / auto-checks.
        if (!slide.hasAttribute('data-om-validate')) {
          slide.setAttribute('data-om-validate', VALIDATE_ATTR);
        }
        slide.setAttribute('data-deck-slide', String(i));
      });
      if (this._totalEl) this._totalEl.textContent = String(this._slides.length || 1);
      if (this._index >= this._slides.length) this._index = Math.max(0, this._slides.length - 1);
      this._markLastVisible();
      this._renderRail();
    }

    /** Tag the last non-skipped slide so print CSS can drop its
     *  break-after (see the @media print comment above — :last-child
     *  alone matches a hidden skipped slide). */
    _markLastVisible() {
      let last = null;
      this._slides.forEach(s => {
        s.removeAttribute('data-deck-last-visible');
        if (!s.hasAttribute('data-deck-skip')) last = s;
      });
      if (last) last.setAttribute('data-deck-last-visible', '');
    }
    _loadNotes() {
      const tag = document.getElementById('speaker-notes');
      if (!tag) {
        this._notes = [];
        return;
      }
      try {
        const parsed = JSON.parse(tag.textContent || '[]');
        if (Array.isArray(parsed)) this._notes = parsed;
      } catch (e) {
        console.warn('[deck-stage] Failed to parse #speaker-notes JSON:', e);
        this._notes = [];
      }
    }
    _restoreIndex() {
      // The host's ?slide= param is delivered as a #<int> hash (1-indexed) on
      // the iframe src. No hash → slide 1; the deck itself keeps no position
      // state across loads.
      const h = (location.hash || '').match(/^#(\d+)$/);
      if (h) {
        const n = parseInt(h[1], 10) - 1;
        if (n >= 0 && n < this._slides.length) this._index = n;
      }
    }
    _applyIndex({
      showOverlay = true,
      broadcast = true,
      reason = 'init'
    } = {}) {
      if (!this._slides.length) return;
      const prev = this._prevIndex == null ? -1 : this._prevIndex;
      const curr = this._index;
      // Keep the iframe's own hash in sync so an in-iframe location.reload()
      // (reload banner path in viewer-handle.ts) lands on the current slide,
      // not the stale deep-link hash from initial load.
      try {
        history.replaceState(null, '', '#' + (curr + 1));
      } catch (e) {}
      this._slides.forEach((s, i) => {
        if (i === curr) s.setAttribute('data-deck-active', '');else s.removeAttribute('data-deck-active');
      });
      if (this._countEl) this._countEl.textContent = String(curr + 1);
      // Follow-scroll on every navigation (init deep-link, keyboard, click,
      // tap, external goTo) — the only time we *don't* want the rail to
      // track current is after a rail-internal mutation, where _renderRail
      // has already restored the user's scroll position and yanking back to
      // current would undo it.
      this._syncRail(reason !== 'mutation');
      if (broadcast) {
        // (1) Legacy: host-window postMessage for speaker-notes renderers.
        try {
          window.postMessage({
            slideIndexChanged: curr,
            deckTotal: this._slides.length,
            deckSkipped: this._skippedIndices()
          }, '*');
        } catch (e) {}

        // (2) In-page CustomEvent on the <deck-stage> element itself.
        //     Bubbles and composes out of shadow DOM so slide code can listen:
        //       document.querySelector('deck-stage').addEventListener('slidechange', e => {
        //         e.detail.index, e.detail.previousIndex, e.detail.total, e.detail.slide, e.detail.reason
        //       });
        const detail = {
          index: curr,
          previousIndex: prev,
          total: this._slides.length,
          slide: this._slides[curr] || null,
          previousSlide: prev >= 0 ? this._slides[prev] || null : null,
          reason: reason // 'init' | 'keyboard' | 'click' | 'tap' | 'api'
        };
        this.dispatchEvent(new CustomEvent('slidechange', {
          detail,
          bubbles: true,
          composed: true
        }));
      }
      this._prevIndex = curr;
      if (showOverlay) this._flashOverlay();
    }
    _flashOverlay() {
      // Host posts __omelette_presenting while in fullscreen/tab presentation
      // mode — suppress the nav footer entirely (both hover and slide-change
      // flash) so the audience sees clean slides.
      if (!this._overlay || this._presenting) return;
      this._overlay.setAttribute('data-visible', '');
      if (this._hideTimer) clearTimeout(this._hideTimer);
      this._hideTimer = setTimeout(() => {
        this._overlay.removeAttribute('data-visible');
      }, OVERLAY_HIDE_MS);
    }
    _railWidth() {
      // State-based, no offsetWidth: the first _fit() can run before the
      // rail has had layout on some load paths, and a 0 there paints the
      // slide full-width for one frame before the post-slotchange _fit()
      // corrects it.
      if (!this._railEnabled || !this._railVisible || this.hasAttribute('no-rail') || this.hasAttribute('noscale') || this._presenting || this._previewMode || NARROW_MQ.matches) return 0;
      return this._railPx || 0;
    }
    _fit() {
      if (!this._canvas) return;
      const stage = this._canvas.parentElement;
      // PPTX export sets noscale so the DOM capture sees authored-size
      // geometry — the scaled canvas is in shadow DOM, so the exporter's
      // resetTransformSelector can't reach .canvas.style.transform directly.
      if (this.hasAttribute('noscale')) {
        this._canvas.style.transform = 'none';
        if (stage) stage.style.left = '0';
        if (this._overlay) this._overlay.style.marginLeft = '0';
        return;
      }
      const rw = this._railWidth();
      if (stage) stage.style.left = rw + 'px';
      // Overlay is centred on the viewport via left:50% + translate(-50%);
      // marginLeft shifts the centre by rw/2 so it lands in the middle of
      // the [rw, innerWidth] stage region.
      if (this._overlay) this._overlay.style.marginLeft = rw / 2 + 'px';
      const vw = window.innerWidth - rw;
      const vh = window.innerHeight;
      const s = Math.min(vw / this.designWidth, vh / this.designHeight);
      this._canvas.style.transform = `scale(${s})`;
    }
    _onResize() {
      this._fit();
      // Crossing the narrow-viewport breakpoint reveals the rail — rerun the
      // thumbnail scale the same way _setRailWidth does.
      if (!this._scaleRaf) {
        this._scaleRaf = requestAnimationFrame(() => {
          this._scaleRaf = null;
          this._scaleThumbs();
        });
      }
    }
    _onMouseMove() {
      // Keep overlay visible while mouse moves; hide after idle.
      this._flashOverlay();
    }
    _onMessage(e) {
      const d = e.data;
      if (d && typeof d.__omelette_presenting === 'boolean') {
        this._presenting = d.__omelette_presenting;
        if (this._presenting && this._overlay) {
          this._overlay.removeAttribute('data-visible');
          if (this._hideTimer) clearTimeout(this._hideTimer);
        }
        this._syncRailHidden();
        this._closeMenu();
        this._closeConfirm();
        this._fit();
        this._scaleThumbs();
      }
      // Host's Preview segment (ViewerMode='none'): the rail's drag-reorder /
      // right-click skip-delete affordances are editing chrome, so hide it
      // while the user is just looking at the deck. Same hard-hide path as
      // presenting; independent of the user's _railVisible preference so
      // returning to Edit restores whatever they had.
      if (d && typeof d.__omelette_preview_mode === 'boolean') {
        if (d.__omelette_preview_mode === this._previewMode) return;
        this._previewMode = d.__omelette_preview_mode;
        this._syncRailHidden();
        this._closeMenu();
        this._closeConfirm();
        this._fit();
        this._scaleThumbs();
      }
      // Per-viewer show/hide, driven by the TweaksPanel's auto-injected
      // "Thumbnail rail" toggle (or any author script). Independent of
      // whether the Tweaks panel itself is open — closing the panel
      // doesn't change rail visibility. Persists alongside rail width.
      if (d && d.type === '__deck_rail_visible' && typeof d.on === 'boolean') {
        if (d.on === this._railVisible) return;
        this._railVisible = d.on;
        try {
          localStorage.setItem('deck-stage.railVisible', d.on ? '1' : '0');
        } catch (e) {}
        // Arm the transition, commit it, then flip state — otherwise the
        // browser coalesces both writes and nothing animates on show.
        this.setAttribute('data-rail-anim', '');
        void (this._rail && this._rail.offsetHeight);
        this._syncRailHidden();
        this._fit();
        this._scaleThumbs();
        clearTimeout(this._railAnimTimer);
        this._railAnimTimer = setTimeout(() => this.removeAttribute('data-rail-anim'), 220);
      }
      if (d && d.type === '__omelette_rail_enabled') this._enableRail();
    }
    _syncRailHidden() {
      if (!this._rail) return;
      // data-presenting is the hard hide (display:none) for flag-off,
      // presentation mode, and the host's Preview segment — instant, no
      // transition. data-user-hidden is the soft hide (translateX(-100%))
      // for the viewer's rail toggle, so show/hide slides under
      // :host([data-rail-anim]).
      const hard = !this._railEnabled || this._presenting || this._previewMode;
      if (hard) this._rail.setAttribute('data-presenting', '');else this._rail.removeAttribute('data-presenting');
      if (!this._railVisible) this._rail.setAttribute('data-user-hidden', '');else this._rail.removeAttribute('data-user-hidden');
      // translateX hide leaves thumbs (tabIndex=0) in the tab order —
      // inert keeps them unfocusable while the rail is off-screen.
      this._rail.inert = hard || !this._railVisible;
    }
    _onTap(e) {
      // Touch-only — keyboard + the overlay toolbar cover nav on desktop.
      if (FINE_POINTER_MQ.matches) return;
      // Only taps that land on the stage (slide content or letterbox); the
      // overlay / rail / menus are siblings with their own click handlers.
      const path = e.composedPath();
      if (!this._stage || !path.includes(this._stage)) return;
      // Let interactive slide content keep the tap. composedPath (not
      // e.target.closest) so we see through open shadow roots — a <button>
      // inside a slide-authored custom element retargets e.target to the
      // host but still appears in the composed path.
      if (e.defaultPrevented) return;
      for (const n of path) {
        if (n === this._stage) break;
        if (n.matches && n.matches(INTERACTIVE_SEL)) return;
      }
      e.preventDefault();
      const rw = this._railWidth();
      const mid = rw + (window.innerWidth - rw) / 2;
      this._advance(e.clientX < mid ? -1 : 1, 'tap');
    }
    _onKey(e) {
      // Ignore when the user is typing.
      const t = e.target;
      if (t && (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName))) return;
      // Confirm dialog swallows nav keys while open; Escape cancels. Enter
      // is left to the focused button's native activation so Tab→Cancel
      // →Enter activates Cancel, not the window-level confirm path.
      if (this._confirm && this._confirm.hasAttribute('data-open')) {
        if (e.key === 'Escape') {
          this._closeConfirm();
          e.preventDefault();
        }
        return;
      }
      if (e.key === 'Escape' && this._menu && this._menu.hasAttribute('data-open')) {
        this._closeMenu();
        e.preventDefault();
        return;
      }
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const key = e.key;
      let handled = true;
      if (key === 'ArrowRight' || key === 'PageDown' || key === ' ' || key === 'Spacebar') {
        this._advance(1, 'keyboard');
      } else if (key === 'ArrowLeft' || key === 'PageUp') {
        this._advance(-1, 'keyboard');
      } else if (key === 'Home') {
        this._go(0, 'keyboard');
      } else if (key === 'End') {
        this._go(this._slides.length - 1, 'keyboard');
      } else if (key === 'r' || key === 'R') {
        this._go(0, 'keyboard');
      } else if (/^[0-9]$/.test(key)) {
        // 1..9 jump to that slide; 0 jumps to 10.
        const n = key === '0' ? 9 : parseInt(key, 10) - 1;
        if (n < this._slides.length) this._go(n, 'keyboard');
      } else {
        handled = false;
      }
      if (handled) {
        e.preventDefault();
        this._flashOverlay();
      }
    }
    _go(i, reason = 'api') {
      if (!this._slides.length) return;
      const clamped = Math.max(0, Math.min(this._slides.length - 1, i));
      if (clamped === this._index) {
        this._flashOverlay();
        return;
      }
      this._index = clamped;
      this._applyIndex({
        showOverlay: true,
        broadcast: true,
        reason
      });
    }

    /** Step forward/back skipping any slide marked data-deck-skip. Falls
     *  back to _go's clamp-at-ends behaviour (flash overlay) when there's
     *  nothing further in that direction. */
    _advance(dir, reason) {
      if (!this._slides.length) return;
      let i = this._index + dir;
      while (i >= 0 && i < this._slides.length && this._slides[i].hasAttribute('data-deck-skip')) {
        i += dir;
      }
      if (i < 0 || i >= this._slides.length) {
        this._flashOverlay();
        return;
      }
      this._go(i, reason);
    }

    // ── Thumbnail rail ────────────────────────────────────────────────────
    //
    // Thumbs are keyed by slide element and reused across _renderRail()
    // calls, so a reorder/delete is an O(changed) DOM shuffle instead of an
    // O(N) teardown-and-re-clone. Each thumb starts as a lightweight shell
    // (num + empty frame); the clone is materialized lazily by an
    // IntersectionObserver when the frame scrolls into (or near) view, so
    // only visible-ish slides pay the clone + image-decode cost.

    _renderRail() {
      if (!this._rail || !this._railEnabled) {
        this._thumbs = [];
        return;
      }
      // FLIP: record each *materialized* thumb's top before the reconcile.
      // Off-screen (non-materialized) thumbs don't need the animation and
      // skipping their getBoundingClientRect saves a forced layout per
      // off-screen thumb on large decks.
      const prevTops = new Map();
      (this._thumbs || []).forEach(({
        thumb,
        slide,
        host
      }) => {
        if (host) prevTops.set(slide, thumb.getBoundingClientRect().top);
      });
      const st = this._rail.scrollTop;

      // Reconcile: reuse thumbs that already exist for a slide, create
      // shells for new slides, drop thumbs for removed slides.
      const bySlide = new Map();
      (this._thumbs || []).forEach(t => bySlide.set(t.slide, t));
      const next = [];
      this._slides.forEach(slide => {
        let t = bySlide.get(slide);
        if (t) bySlide.delete(slide);else t = this._makeThumb(slide);
        next.push(t);
      });
      // Orphans — slides removed since last render.
      bySlide.forEach(t => {
        if (this._railObserver) this._railObserver.unobserve(t.frame);
        t.thumb.remove();
      });
      // Put thumbs into document order to match _slides. insertBefore on
      // an already-correctly-placed node is a no-op, so this is cheap
      // when nothing moved.
      next.forEach((t, i) => {
        const want = t.thumb;
        const at = this._rail.children[i];
        if (at !== want) this._rail.insertBefore(want, at || null);
        t.i = i;
        t.num.textContent = String(i + 1);
        if (t.slide.hasAttribute('data-deck-skip')) t.thumb.setAttribute('data-skip', '');else t.thumb.removeAttribute('data-skip');
      });
      this._thumbs = next;
      this._rail.scrollTop = st;
      if (prevTops.size) {
        const moved = [];
        this._thumbs.forEach(({
          thumb,
          slide
        }) => {
          const old = prevTops.get(slide);
          if (old == null) return;
          const dy = old - thumb.getBoundingClientRect().top;
          if (Math.abs(dy) < 1) return;
          thumb.style.transition = 'none';
          thumb.style.transform = `translateY(${dy}px)`;
          moved.push(thumb);
        });
        if (moved.length) {
          // Commit the inverted positions before flipping the transition
          // on — otherwise the browser coalesces both style writes and
          // nothing animates.
          void this._rail.offsetHeight;
          moved.forEach(t => {
            t.style.transition = 'transform 180ms cubic-bezier(.2,.7,.3,1)';
            t.style.transform = '';
          });
          setTimeout(() => moved.forEach(t => {
            t.style.transition = '';
          }), 220);
        }
      }
      requestAnimationFrame(() => this._scaleThumbs());
      this._syncRail(false);
    }

    /** Create a lightweight thumb shell for one slide. The clone is
     *  materialized later by the IntersectionObserver. Event handlers
     *  look up the thumb's *current* index (via _thumbs.indexOf) so the
     *  same element can be reused across reorders. */
    _makeThumb(slide) {
      const thumb = document.createElement('div');
      thumb.className = 'thumb';
      thumb.tabIndex = 0;
      const num = document.createElement('div');
      num.className = 'num';
      const frame = document.createElement('div');
      frame.className = 'frame';
      thumb.append(num, frame);
      const entry = {
        thumb,
        num,
        frame,
        slide,
        clone: null,
        host: null,
        i: -1
      };
      // entry.i is refreshed on every _renderRail reconcile pass, so
      // handlers read the thumb's current position without an O(N) scan.
      const idx = () => entry.i;
      thumb.addEventListener('click', () => this._go(idx(), 'click'));
      // ↑/↓ step through the rail when a thumb has focus. _go clamps at the
      // ends and _applyIndex→_syncRail scrolls the new current thumb into
      // view; we move focus to it (preventScroll — _syncRail already
      // scrolled) so a held key walks the whole list. stopPropagation keeps
      // this out of the window-level _onKey nav handler.
      thumb.addEventListener('keydown', e => {
        if (e.key !== 'ArrowUp' && e.key !== 'ArrowDown') return;
        if (e.metaKey || e.ctrlKey || e.altKey) return;
        e.preventDefault();
        e.stopPropagation();
        this._go(idx() + (e.key === 'ArrowDown' ? 1 : -1), 'keyboard');
        const cur = this._thumbs && this._thumbs[this._index];
        if (cur) cur.thumb.focus({
          preventScroll: true
        });
      });
      thumb.addEventListener('contextmenu', e => {
        e.preventDefault();
        this._openMenu(idx(), e.clientX, e.clientY);
      });
      thumb.draggable = true;
      thumb.addEventListener('dragstart', e => {
        this._dragFrom = idx();
        thumb.setAttribute('data-dragging', '');
        e.dataTransfer.effectAllowed = 'move';
        try {
          e.dataTransfer.setData('text/plain', String(this._dragFrom));
        } catch (err) {}
      });
      thumb.addEventListener('dragend', () => {
        thumb.removeAttribute('data-dragging');
        this._clearDrop();
        this._dragFrom = null;
      });
      thumb.addEventListener('dragover', e => {
        if (this._dragFrom == null) return;
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
        const r = thumb.getBoundingClientRect();
        this._setDrop(idx(), e.clientY < r.top + r.height / 2 ? 'before' : 'after');
      });
      thumb.addEventListener('drop', e => {
        if (this._dragFrom == null) return;
        e.preventDefault();
        const i = idx();
        const r = thumb.getBoundingClientRect();
        let to = e.clientY >= r.top + r.height / 2 ? i + 1 : i;
        if (this._dragFrom < to) to--;
        const from = this._dragFrom;
        this._clearDrop();
        this._dragFrom = null;
        if (to !== from) this._moveSlide(from, to);
      });
      if (this._railObserver) this._railObserver.observe(frame);
      frame.__deckThumb = entry;
      return entry;
    }

    /** Lazily build the clone for a thumb that has scrolled into view. */
    _materialize(entry) {
      if (entry.host) return;
      const dw = this.designWidth,
        dh = this.designHeight;
      let clone = entry.slide.cloneNode(true);
      clone.removeAttribute('id');
      clone.removeAttribute('data-deck-active');
      clone.querySelectorAll('[id]').forEach(el => el.removeAttribute('id'));
      // Neuter heavy media; replace <video> with its poster so the box
      // keeps a visual. <iframe>/<audio> become empty placeholders.
      clone.querySelectorAll('iframe, audio, object, embed').forEach(el => {
        el.removeAttribute('src');
        el.removeAttribute('srcdoc');
        el.removeAttribute('data');
        el.innerHTML = '';
      });
      clone.querySelectorAll('video').forEach(el => {
        if (!el.poster) {
          el.removeAttribute('src');
          el.innerHTML = '';
          return;
        }
        const img = document.createElement('img');
        img.src = el.poster;
        img.alt = '';
        img.style.cssText = el.style.cssText + ';object-fit:cover;width:100%;height:100%;';
        img.className = el.className;
        el.replaceWith(img);
      });
      // Images: defer decode and let the browser pick the smallest
      // srcset candidate for the ~140px thumb. Same-URL clones reuse the
      // slide's decoded bitmap (URL-keyed cache), so the remaining cost
      // is paint/composite — lazy+async keeps that off the main thread.
      clone.querySelectorAll('img').forEach(el => {
        el.loading = 'lazy';
        el.decoding = 'async';
        if (el.srcset) el.sizes = (this._railPx || 188) + 'px';
      });
      // Custom elements inside the slide would have their
      // connectedCallback fire when the clone is appended. Replace them
      // with inert boxes so a component-heavy deck doesn't run N copies
      // of each component's mount logic in the rail. Children are
      // preserved so layout-wrapper elements (<my-column><h2>…</h2>)
      // still show their authored content; the querySelectorAll NodeList
      // is static, so nested custom elements in the moved subtree are
      // still visited on later iterations.
      const neuter = el => {
        const box = document.createElement('div');
        box.style.cssText = (el.getAttribute('style') || '') + ';background:rgba(0,0,0,0.06);border:1px dashed rgba(0,0,0,0.15);';
        box.className = el.className;
        // Preserve theming/i18n hooks so [data-*] / :lang() / [dir]
        // descendant selectors still match the neutered root.
        for (const a of el.attributes) {
          const n = a.name;
          if (n.startsWith('data-') || n.startsWith('aria-') || n === 'lang' || n === 'dir' || n === 'role' || n === 'title') {
            box.setAttribute(n, a.value);
          }
        }
        while (el.firstChild) box.appendChild(el.firstChild);
        return box;
      };
      // querySelectorAll('*') returns descendants only — a custom-element
      // slide root (<my-slide>…</my-slide>) would slip through and upgrade
      // on append. Swap the root first.
      if (clone.tagName.includes('-')) clone = neuter(clone);
      clone.querySelectorAll('*').forEach(el => {
        if (el.tagName.includes('-')) el.replaceWith(neuter(el));
      });
      clone.style.cssText += ';position:absolute;top:0;left:0;transform-origin:0 0;' + 'pointer-events:none;width:' + dw + 'px;height:' + dh + 'px;' + 'box-sizing:border-box;overflow:hidden;visibility:visible;opacity:1;';
      const host = document.createElement('div');
      host.style.cssText = 'position:absolute;inset:0;';
      this._syncThumbHostAttrs(host);
      const sr = host.attachShadow({
        mode: 'open'
      });
      if (this._adoptedSheet) sr.adoptedStyleSheets = [this._adoptedSheet];else {
        const st = document.createElement('style');
        st.textContent = this._authorCss || '';
        sr.appendChild(st);
      }
      sr.appendChild(clone);
      entry.frame.appendChild(host);
      entry.host = host;
      entry.clone = clone;
      if (this._thumbScale) clone.style.transform = 'scale(' + this._thumbScale + ')';
      // Once materialized the IO callback is a no-op early-return —
      // unobserve so scroll doesn't keep firing it.
      if (this._railObserver) this._railObserver.unobserve(entry.frame);
    }

    /** Re-clone a single thumb (live-update path). No-op if the thumb
     *  hasn't been materialized yet — it'll pick up current content when
     *  it scrolls into view. */
    _refreshThumb(slide) {
      const entry = (this._thumbs || []).find(t => t.slide === slide);
      if (!entry || !entry.host) return;
      entry.host.remove();
      entry.host = entry.clone = null;
      this._materialize(entry);
    }
    _scaleThumbs() {
      if (!this._thumbs || !this._thumbs.length) return;
      // Every frame is the same width; if it reads 0 the rail is
      // display:none (noscale / no-rail / presenting / print) — leave the
      // clones as-is and re-run when the rail is revealed.
      const fw = this._thumbs[0].frame.offsetWidth;
      if (!fw) return;
      this._thumbScale = fw / this.designWidth;
      this._thumbs.forEach(({
        clone
      }) => {
        if (clone) clone.style.transform = 'scale(' + this._thumbScale + ')';
      });
    }
    _setDrop(i, where) {
      // dragover fires at pointer-event rate; touch only the previous
      // and new target rather than sweeping all N thumbs.
      const t = this._thumbs && this._thumbs[i];
      if (this._dropOn && this._dropOn !== t) {
        this._dropOn.thumb.removeAttribute('data-drop');
      }
      if (t) t.thumb.setAttribute('data-drop', where);
      this._dropOn = t || null;
    }
    _clearDrop() {
      if (this._dropOn) this._dropOn.thumb.removeAttribute('data-drop');
      this._dropOn = null;
    }
    _syncRail(follow) {
      if (!this._thumbs) return;
      this._thumbs.forEach(({
        thumb
      }, i) => {
        if (i === this._index) {
          thumb.setAttribute('data-current', '');
          if (follow && typeof thumb.scrollIntoView === 'function') {
            thumb.scrollIntoView({
              block: 'nearest'
            });
          }
        } else {
          thumb.removeAttribute('data-current');
        }
      });
    }
    _openMenu(i, x, y) {
      if (!this._menu) return;
      this._menuIndex = i;
      const slide = this._slides[i];
      const skip = slide && slide.hasAttribute('data-deck-skip');
      this._menu.querySelector('[data-act="skip"]').textContent = skip ? 'Unskip slide' : 'Skip slide';
      this._menu.querySelector('[data-act="up"]').disabled = i <= 0;
      this._menu.querySelector('[data-act="down"]').disabled = i >= this._slides.length - 1;
      this._menu.querySelector('[data-act="delete"]').disabled = this._slides.length <= 1;
      // Place, then clamp to viewport after it's measurable.
      this._menu.style.left = x + 'px';
      this._menu.style.top = y + 'px';
      this._menu.setAttribute('data-open', '');
      const r = this._menu.getBoundingClientRect();
      const nx = Math.min(x, window.innerWidth - r.width - 4);
      const ny = Math.min(y, window.innerHeight - r.height - 4);
      this._menu.style.left = Math.max(4, nx) + 'px';
      this._menu.style.top = Math.max(4, ny) + 'px';
    }
    _closeMenu() {
      if (this._menu) this._menu.removeAttribute('data-open');
      this._menuIndex = -1;
    }
    _openConfirm(i) {
      if (!this._confirm) return;
      this._confirmIndex = i;
      this._confirm.querySelector('.title').textContent = 'Delete slide ' + (i + 1) + '?';
      this._confirm.setAttribute('data-open', '');
      const btn = this._confirm.querySelector('.danger');
      if (btn && btn.focus) btn.focus();
    }
    _closeConfirm() {
      if (this._confirm) this._confirm.removeAttribute('data-open');
      this._confirmIndex = -1;
    }
    _emitDeckChange(detail) {
      this.dispatchEvent(new CustomEvent('deckchange', {
        detail,
        bubbles: true,
        composed: true
      }));
    }
    _deleteSlide(i) {
      const slide = this._slides[i];
      if (!slide || this._slides.length <= 1) return;
      const wasCurrent = i === this._index;
      if (i < this._index || wasCurrent && i === this._slides.length - 1) this._index--;
      this._squelchSlotChange = true;
      slide.remove();
      this._emitDeckChange({
        action: 'delete',
        from: i,
        slide
      });
      this._collectSlides();
      this._applyIndex({
        showOverlay: true,
        broadcast: true,
        reason: 'mutation'
      });
    }
    _toggleSkip(i) {
      const slide = this._slides[i];
      if (!slide) return;
      const on = !slide.hasAttribute('data-deck-skip');
      if (on) slide.setAttribute('data-deck-skip', '');else slide.removeAttribute('data-deck-skip');
      if (this._thumbs && this._thumbs[i]) {
        if (on) this._thumbs[i].thumb.setAttribute('data-skip', '');else this._thumbs[i].thumb.removeAttribute('data-skip');
      }
      this._markLastVisible();
      this._emitDeckChange({
        action: on ? 'skip' : 'unskip',
        from: i,
        slide
      });
      // Re-broadcast so the presenter popup's prev/next thumbnails re-pick
      // the nearest non-skipped slide without waiting for a nav event.
      try {
        window.postMessage({
          slideIndexChanged: this._index,
          deckTotal: this._slides.length,
          deckSkipped: this._skippedIndices()
        }, '*');
      } catch (e) {}
    }
    _skippedIndices() {
      const out = [];
      for (let i = 0; i < this._slides.length; i++) {
        if (this._slides[i].hasAttribute('data-deck-skip')) out.push(i);
      }
      return out;
    }
    _moveSlide(i, j) {
      if (j < 0 || j >= this._slides.length || j === i) return;
      const slide = this._slides[i];
      const ref = j < i ? this._slides[j] : this._slides[j].nextSibling;
      // Track the active slide across the reorder so the same content
      // stays on screen.
      const cur = this._index;
      if (cur === i) this._index = j;else if (i < cur && j >= cur) this._index = cur - 1;else if (i > cur && j <= cur) this._index = cur + 1;
      this._squelchSlotChange = true;
      this.insertBefore(slide, ref);
      this._emitDeckChange({
        action: 'move',
        from: i,
        to: j,
        slide
      });
      this._collectSlides();
      this._applyIndex({
        showOverlay: false,
        broadcast: true,
        reason: 'mutation'
      });
    }

    // Public API ------------------------------------------------------------

    /** Current slide index (0-based). */
    get index() {
      return this._index;
    }
    /** Total slide count. */
    get length() {
      return this._slides.length;
    }
    /** Programmatically navigate. */
    goTo(i) {
      this._go(i, 'api');
    }
    next() {
      this._advance(1, 'api');
    }
    prev() {
      this._advance(-1, 'api');
    }
    reset() {
      this._go(0, 'api');
    }
  }
  if (!customElements.get('deck-stage')) {
    customElements.define('deck-stage', DeckStage);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "slides/deck-stage.js", error: String((e && e.message) || e) }); }

// ui_kits/chicago-global/app.jsx
try { (() => {
/* Chicago Global — corporate site UI kit (light, institutional). Self-contained. */
const {
  useState: useStateCG
} = React;
function CGIcon({
  name,
  size = 20,
  color = "currentColor",
  stroke = 1.75,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: stroke,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      flex: "none",
      display: "inline-block",
      verticalAlign: "middle",
      ...style
    },
    dangerouslySetInnerHTML: {
      __html: window.PXICONS && window.PXICONS[name] || ""
    }
  });
}
function Wordmark({
  color = "var(--navy)",
  size = 17
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-head)",
      fontWeight: 700,
      letterSpacing: ".22em",
      textTransform: "uppercase",
      color,
      fontSize: size
    }
  }, "Chicago\xA0Global");
}
function CGNav() {
  const links = ["Investment Strategy", "Research", "Careers"];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 10,
      background: "rgba(255,255,255,.9)",
      backdropFilter: "blur(8px)",
      borderBottom: "1px solid #e7eaef"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1100,
      margin: "0 auto",
      height: 66,
      display: "flex",
      alignItems: "center",
      padding: "0 28px",
      gap: 28
    }
  }, /*#__PURE__*/React.createElement(Wordmark, null), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: 24,
      marginLeft: "auto"
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 14.5,
      color: "#1F2937",
      textDecoration: "none"
    }
  }, l))), /*#__PURE__*/React.createElement("button", {
    className: "btn-secondary",
    style: {
      padding: "9px 16px",
      fontSize: 14
    }
  }, "Get In Touch")));
}
function CGHero() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      background: "radial-gradient(120% 90% at 70% -10%, #1c4a7e 0%, #0C2746 45%, #081d35 100%)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      opacity: .5,
      background: "conic-gradient(from 210deg at 78% 0%, rgba(146,166,193,.0), rgba(146,166,193,.28), rgba(146,166,193,0) 35%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: 1100,
      margin: "0 auto",
      padding: "120px 28px 130px"
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    color: "#fff",
    size: 22
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      color: "#fff",
      fontSize: 46,
      marginTop: 26,
      maxWidth: 720,
      lineHeight: 1.08
    }
  }, "A next-generation investment management firm"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "#cdd9e8",
      fontSize: 19,
      marginTop: 20,
      maxWidth: 600
    }
  }, "Chicago Global runs timeless investment strategies powered by advanced technology. We engineer portfolios that learn and adapt faster than humans."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 30,
      display: "flex",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn-cta"
  }, "Get In Touch"), /*#__PURE__*/React.createElement("a", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      color: "#92A6C1",
      fontFamily: "var(--font-body)",
      fontWeight: 600,
      fontSize: 15,
      textDecoration: "none",
      padding: "11px 6px"
    }
  }, "Try Parallax ", /*#__PURE__*/React.createElement(CGIcon, {
    name: "arrow-right",
    size: 16,
    color: "#92A6C1"
  })))));
}
const CG_TIMELINE = [["2015", "Team comes together at University of Chicago. Company subsequently incorporated in Singapore."], ["2019", "Global Equity Fund launch. Initial release of Parallax 1.0."], ["2022", "AI-powered risk analytics. Parallax 2.0 with enhanced reasoning and context processing."], ["2024", "Launch of Investment Solutions for Family Offices. Parallax 3.0, in training."], ["2026", "Parallax launch. Try the technology."]];
function CGTimeline() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1100,
      margin: "0 auto",
      padding: "84px 28px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "cg-eyebrow"
  }, "History"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 12,
      fontSize: 32,
      color: "var(--navy)"
    }
  }, "A decade of compounding research"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40,
      display: "flex",
      flexDirection: "column"
    }
  }, CG_TIMELINE.map(([yr, txt], i) => /*#__PURE__*/React.createElement("div", {
    key: yr,
    style: {
      display: "grid",
      gridTemplateColumns: "120px 1fr",
      gap: 28,
      padding: "22px 0",
      borderTop: "1px solid #e7eaef"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-num)",
      fontWeight: 700,
      fontSize: 26,
      color: "#ED7D31"
    }
  }, yr), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 17,
      color: "#1F2937",
      maxWidth: 620
    }
  }, txt)))));
}
function CGQuote() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "#F5F2EB"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 880,
      margin: "0 auto",
      padding: "84px 28px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontFamily: "var(--font-head)",
      fontWeight: 400,
      fontSize: 28,
      lineHeight: 1.4,
      color: "var(--navy)"
    }
  }, "\u201CFifty years of research and development were needed to lay the groundwork for Chicago Global. Today, we deliver unrivaled investment technology in an ultra efficient format.\u201D"), /*#__PURE__*/React.createElement("div", {
    className: "cg-eyebrow",
    style: {
      marginTop: 26,
      color: "#547498"
    }
  }, "Ivan Chelebiev \xB7 Co-Founder")));
}
function CGTeam() {
  const team = [["Ivan Chelebiev", "Co-Founder"], ["Ben —", "Co-Founder"], ["Research", "Quantitative team"]];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1100,
      margin: "0 auto",
      padding: "84px 28px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "cg-eyebrow"
  }, "Team"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 12,
      fontSize: 32,
      color: "var(--navy)"
    }
  }, "Alumni and faculty of UChicago Booth"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 22,
      marginTop: 36
    }
  }, team.map(([n, r]) => /*#__PURE__*/React.createElement("div", {
    key: n
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: "4/5",
      borderRadius: 8,
      background: "#0C2746",
      display: "flex",
      alignItems: "flex-end",
      padding: 16,
      color: "#3b5e85",
      fontSize: 12,
      fontFamily: "var(--font-body)",
      border: "1px solid #e7eaef"
    }
  }, "AI portrait \xB7 black bg"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      fontFamily: "var(--font-head)",
      fontWeight: 700,
      color: "var(--navy)",
      fontSize: 17
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#547498",
      fontSize: 14,
      fontFamily: "var(--font-body)"
    }
  }, r)))));
}
function CGFooter() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--navy)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1100,
      margin: "0 auto",
      padding: "56px 28px 36px",
      display: "grid",
      gridTemplateColumns: "1.4fr 1fr 1fr",
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Wordmark, {
    color: "#fff",
    size: 18
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "#92A6C1",
      fontSize: 14,
      marginTop: 16,
      maxWidth: 320
    }
  }, "Powered by Parallax. For accredited and institutional investors.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "cg-eyebrow",
    style: {
      color: "#92A6C1"
    }
  }, "Contact"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "#cdd9e8",
      fontSize: 14,
      marginTop: 14,
      lineHeight: 1.6
    }
  }, "info@chicago.global", /*#__PURE__*/React.createElement("br", null), "30 Cecil Street #16-08", /*#__PURE__*/React.createElement("br", null), "Prudential Tower, Singapore 049712")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "cg-eyebrow",
    style: {
      color: "#92A6C1"
    }
  }, "Legal"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 9,
      marginTop: 14
    }
  }, ["Privacy Policy", "Disclaimer"].map(x => /*#__PURE__*/React.createElement("a", {
    key: x,
    style: {
      color: "#cdd9e8",
      fontSize: 14,
      textDecoration: "none",
      fontFamily: "var(--font-body)"
    }
  }, x))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1100,
      margin: "0 auto",
      padding: "16px 28px 30px",
      borderTop: "1px solid rgba(146,166,193,.16)",
      color: "#6e87a3",
      fontSize: 12.5,
      fontFamily: "var(--font-body)"
    }
  }, "\xA9 2026 Chicago Global Capital Pte Ltd. All Rights Reserved."));
}
Object.assign(window, {
  CGNav,
  CGHero,
  CGTimeline,
  CGQuote,
  CGTeam,
  CGFooter
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/chicago-global/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/console/app.jsx
try { (() => {
/* Parallax Console — dark dashboard UI kit.
   IMPORTANT: reconstructed from brand-guidelines.md dark-mode component specs +
   product description. The real Console is login-gated; this is NOT a copy of it.
   Swap for a screenshot-accurate build when the user supplies Console captures. */
const {
  useState: useStateC
} = React;
function CIcon({
  name,
  size = 18,
  color = "currentColor",
  stroke = 1.75,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: stroke,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      flex: "none",
      display: "inline-block",
      verticalAlign: "middle",
      ...style
    },
    dangerouslySetInnerHTML: {
      __html: window.PXICONS && window.PXICONS[name] || ""
    }
  });
}
const NAV = [["layout-dashboard", "Overview"], ["chart-pie", "Portfolio"], ["search", "Analyzer"], ["filter", "Screener"], ["file-text", "Research"], ["bell", "Alerts"]];
function Sidebar({
  active,
  setActive
}) {
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 240,
      flex: "none",
      background: "#0a2039",
      borderRight: "1px solid #285FA0",
      display: "flex",
      flexDirection: "column",
      padding: "18px 14px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 9,
      padding: "4px 8px 18px"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/parallax-mark-white.svg",
    alt: "",
    style: {
      width: 20,
      height: 22
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-head)",
      fontWeight: 700,
      color: "#fff",
      fontSize: 18
    }
  }, "Parallax")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 3
    }
  }, NAV.map(([ic, label]) => {
    const on = active === label;
    return /*#__PURE__*/React.createElement("button", {
      key: label,
      onClick: () => setActive(label),
      style: {
        display: "flex",
        alignItems: "center",
        gap: 11,
        padding: "10px 12px",
        borderRadius: 8,
        border: 0,
        cursor: "pointer",
        textAlign: "left",
        fontFamily: "var(--font-body)",
        fontSize: 14.5,
        fontWeight: on ? 600 : 400,
        background: on ? "#154175" : "transparent",
        color: on ? "#fff" : "#92A6C1"
      }
    }, /*#__PURE__*/React.createElement(CIcon, {
      name: ic,
      size: 18,
      color: on ? "#ED7D31" : "#92A6C1"
    }), label);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto",
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "12px 10px",
      borderTop: "1px solid #285FA0"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 30,
      height: 30,
      borderRadius: 99,
      background: "#547498",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#fff",
      fontSize: 12,
      fontWeight: 700
    }
  }, "IC"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      lineHeight: 1.2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#fff",
      fontSize: 13
    }
  }, "I. Chelebiev"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#6e87a3",
      fontSize: 11.5
    }
  }, "Family Office"))));
}
function TopBar({
  active
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 60,
      flex: "none",
      borderBottom: "1px solid #285FA0",
      display: "flex",
      alignItems: "center",
      gap: 16,
      padding: "0 24px"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 20,
      color: "#fff",
      margin: 0
    }
  }, active), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 12.5,
      color: "#92A6C1",
      padding: "4px 10px",
      borderRadius: 99,
      border: "1px solid #285FA0"
    }
  }, "Polaris \xB7 USD"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "auto",
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      background: "#0a2039",
      border: "1px solid #285FA0",
      borderRadius: 6,
      padding: "8px 12px",
      width: 220
    }
  }, /*#__PURE__*/React.createElement(CIcon, {
    name: "search",
    size: 15,
    color: "#6e87a3"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#6e87a3",
      fontSize: 13,
      fontFamily: "var(--font-body)"
    }
  }, "Search securities\u2026")), /*#__PURE__*/React.createElement("button", {
    className: "btn-cta",
    style: {
      padding: "9px 15px",
      fontSize: 13.5
    }
  }, "+ New analysis")));
}
function Card({
  children,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#154175",
      border: "1px solid #285FA0",
      borderRadius: 12,
      padding: 20,
      ...style
    }
  }, children);
}
function StatCards() {
  const stats = [["Portfolio value", "$24.82M", "+1.8%", true], ["Day P&L", "+$184.2K", "+0.74%", true], ["Sharpe (1Y)", "1.62", "+0.08", true], ["Max drawdown", "−8.4%", "−1.1%", false]];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: 16
    }
  }, stats.map(([label, val, delta, pos]) => /*#__PURE__*/React.createElement(Card, {
    key: label
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#92A6C1",
      fontSize: 13,
      fontFamily: "var(--font-body)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-num)",
      fontVariantNumeric: "tabular-nums",
      color: "#fff",
      fontSize: 26,
      fontWeight: 700,
      marginTop: 8
    }
  }, val), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-num)",
      fontSize: 13,
      marginTop: 4,
      color: pos ? "#5fdd9a" : "#f0a3a3"
    }
  }, pos ? "↑" : "↓", " ", delta))));
}
const FACTORS = [["Quality", 82], ["Defensive", 64], ["Momentum", 91], ["Value", 47], ["Size", 38], ["Tactical", 73]];
function FactorPanel() {
  return /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      color: "#fff",
      fontSize: 17,
      margin: 0
    }
  }, "Factor decomposition"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#6e87a3",
      fontSize: 12,
      fontFamily: "var(--font-body)"
    }
  }, "vs. benchmark")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18,
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, FACTORS.map(([name, v]) => /*#__PURE__*/React.createElement("div", {
    key: name,
    style: {
      display: "grid",
      gridTemplateColumns: "92px 1fr 38px",
      gap: 12,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#cdd9e8",
      fontSize: 13.5,
      fontFamily: "var(--font-body)"
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    style: {
      height: 8,
      borderRadius: 99,
      background: "#0a2039",
      overflow: "hidden",
      display: "block"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      height: "100%",
      width: v + "%",
      background: v >= 70 ? "#5fdd9a" : v >= 50 ? "#92A6C1" : "#ED7D31"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-num)",
      fontVariantNumeric: "tabular-nums",
      color: "#fff",
      fontSize: 13,
      textAlign: "right"
    }
  }, v)))));
}
function Holdings() {
  const rows = [["NVDA", "NVIDIA", "9.4", "↑ +2.2%", "BUY", "buy"], ["AAPL", "Apple Inc.", "8.6", "↑ +1.4%", "BUY", "buy"], ["MSFT", "Microsoft", "9.1", "↑ +0.8%", "HOLD", "hold"], ["TSLA", "Tesla", "5.2", "↓ −3.1%", "SELL", "sell"], ["JPM", "JPMorgan", "7.3", "↑ +0.5%", "HOLD", "hold"]];
  const tone = {
    buy: ["#0f3d24", "#5fdd9a"],
    sell: ["#3d1414", "#f0a3a3"],
    hold: ["#3d2a10", "#f0c48a"]
  };
  return /*#__PURE__*/React.createElement(Card, {
    style: {
      padding: 0,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px 20px",
      borderBottom: "1px solid #285FA0"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      color: "#fff",
      fontSize: 17,
      margin: 0
    }
  }, "Holdings")), /*#__PURE__*/React.createElement("table", {
    style: {
      width: "100%",
      borderCollapse: "collapse",
      fontSize: 13.5
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      background: "#0C2746"
    }
  }, ["Ticker", "Name", "Factor", "Day", "Rating"].map((h, i) => /*#__PURE__*/React.createElement("th", {
    key: h,
    style: {
      textAlign: i >= 2 ? "right" : "left",
      color: "#cdd9e8",
      fontWeight: 600,
      fontFamily: "var(--font-body)",
      padding: "10px 20px",
      fontSize: 12.5
    }
  }, h)))), /*#__PURE__*/React.createElement("tbody", null, rows.map((r, idx) => /*#__PURE__*/React.createElement("tr", {
    key: r[0],
    style: {
      background: idx % 2 ? "rgba(146,166,193,.05)" : "transparent"
    }
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "11px 20px",
      fontFamily: "var(--font-num)",
      fontWeight: 700,
      color: "#fff"
    }
  }, r[0]), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "11px 20px",
      color: "#92A6C1",
      fontFamily: "var(--font-body)"
    }
  }, r[1]), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "11px 20px",
      textAlign: "right",
      fontFamily: "var(--font-num)",
      color: "#cdd9e8"
    }
  }, r[2]), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "11px 20px",
      textAlign: "right",
      fontFamily: "var(--font-num)",
      fontWeight: 600,
      color: r[3].includes("−") ? "#f0a3a3" : "#5fdd9a"
    }
  }, r[3]), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "11px 20px",
      textAlign: "right"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 600,
      fontSize: 12,
      padding: "3px 9px",
      borderRadius: 4,
      background: tone[r[5]][0],
      color: tone[r[5]][1]
    }
  }, r[4])))))));
}
function ConsoleApp() {
  const [active, setActive] = useStateC("Overview");
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      height: "100vh",
      background: "#0C2746",
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement(Sidebar, {
    active: active,
    setActive: setActive
  }), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement(TopBar, {
    active: active
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: "auto",
      padding: 24,
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(StatCards, null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.5fr 1fr",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Holdings, null), /*#__PURE__*/React.createElement(FactorPanel, null)))));
}
Object.assign(window, {
  ConsoleApp
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/console/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/docs/app.jsx
try { (() => {
/* Parallax Docs — Mintlify-style documentation UI kit (light). Self-contained. */
const {
  useState: useStateD
} = React;
function DIcon({
  name,
  size = 18,
  color = "currentColor",
  stroke = 1.75,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: stroke,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      flex: "none",
      display: "inline-block",
      verticalAlign: "middle",
      ...style
    },
    dangerouslySetInnerHTML: {
      __html: window.PXICONS && window.PXICONS[name] || ""
    }
  });
}
function DocsTop() {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      height: 60,
      borderBottom: "1px solid #e7eaef",
      display: "flex",
      alignItems: "center",
      gap: 18,
      padding: "0 24px",
      position: "sticky",
      top: 0,
      background: "#fff",
      zIndex: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 9
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/parallax-mark-navy.svg",
    alt: "",
    style: {
      width: 19,
      height: 21
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-head)",
      fontWeight: 700,
      color: "var(--navy)",
      fontSize: 18
    }
  }, "Parallax"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#92A6C1",
      fontSize: 13,
      fontFamily: "var(--font-body)",
      marginLeft: 2
    }
  }, "docs")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 18,
      display: "flex",
      alignItems: "center",
      gap: 8,
      background: "#F5F6F8",
      border: "1px solid #e7eaef",
      borderRadius: 8,
      padding: "8px 12px",
      width: 280
    }
  }, /*#__PURE__*/React.createElement(DIcon, {
    name: "search",
    size: 15,
    color: "#92A6C1"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#92A6C1",
      fontSize: 13.5,
      fontFamily: "var(--font-body)"
    }
  }, "Search or ask\u2026"), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: "auto",
      color: "#aab4c2",
      fontSize: 12,
      fontFamily: "var(--font-num)"
    }
  }, "\u2318K")), /*#__PURE__*/React.createElement("nav", {
    style: {
      marginLeft: "auto",
      display: "flex",
      gap: 20
    }
  }, ["Documentation", "API Reference", "Console"].map((l, i) => /*#__PURE__*/React.createElement("a", {
    key: l,
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 14,
      textDecoration: "none",
      color: i === 0 ? "var(--navy)" : "#547498",
      fontWeight: i === 0 ? 600 : 400
    }
  }, l))));
}
const TREE = [["Get Started", [["Introduction", true], ["Quickstart", false]]], ["Console", [["Overview", false], ["Portfolio Analysis", false], ["Screener", false]]], ["Methodology", [["Overview", false], ["Six Factors", false], ["Three Layers", false]]], ["API Reference", [["Introduction", false], ["Authentication", false]]]];
function DocsSidebar() {
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 250,
      flex: "none",
      borderRight: "1px solid #e7eaef",
      padding: "26px 18px",
      height: "calc(100vh - 60px)",
      position: "sticky",
      top: 60,
      overflow: "auto"
    }
  }, TREE.map(([group, items]) => /*#__PURE__*/React.createElement("div", {
    key: group,
    style: {
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "cg-eyebrow",
    style: {
      color: "#0C2746",
      fontSize: 11.5,
      marginBottom: 10
    }
  }, group), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 2
    }
  }, items.map(([label, active]) => /*#__PURE__*/React.createElement("a", {
    key: label,
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 14,
      textDecoration: "none",
      padding: "6px 10px",
      borderRadius: 6,
      cursor: "pointer",
      color: active ? "#fff" : "#475569",
      background: active ? "#0C2746" : "transparent",
      fontWeight: active ? 600 : 400
    }
  }, label))))));
}
function Card({
  icon,
  title,
  children,
  big
}) {
  const [h, setH] = useStateD(false);
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      border: "1px solid " + (h ? "#547498" : "#e7eaef"),
      borderRadius: 10,
      padding: 18,
      background: "#fff",
      transition: "border-color .15s, box-shadow .15s",
      boxShadow: h ? "var(--shadow-2)" : "none",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement(DIcon, {
    name: icon,
    size: 22,
    color: "#ED7D31",
    stroke: 1.8
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 16,
      color: "var(--navy)",
      margin: "12px 0 6px"
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14,
      color: "#475569",
      lineHeight: 1.5,
      fontFamily: "var(--font-body)"
    }
  }, children));
}
const FACTORS = [["gem", "Quality", "Strong fundamentals and competitive advantages"], ["shield-half", "Defensive", "Prioritize risk-adjusted returns"], ["trending-up", "Momentum", "Capture securities with positive price trends"], ["scale", "Value", "Buy quality assets below intrinsic value"], ["search", "Size", "Exploit attention gaps in smaller companies"], ["crosshair", "Tactical", "Capture short-term liquidity dislocations"]];
function DocsContent() {
  return /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      minWidth: 0,
      padding: "36px 48px",
      maxWidth: 820
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 13,
      color: "#92A6C1",
      marginBottom: 10
    }
  }, "Get Started ", /*#__PURE__*/React.createElement("span", {
    style: {
      margin: "0 6px"
    }
  }, "/"), " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#547498"
    }
  }, "Introduction")), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 36,
      color: "var(--navy)"
    }
  }, "Introduction"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      color: "#475569",
      marginTop: 14
    }
  }, "AI-powered quantitative investment analytics built on University of Chicago finance research.", /*#__PURE__*/React.createElement("strong", null, " Parallax starts with what you already own"), ", then shows you how to optimize it using the same quantitative methods that power billion-dollar endowments and hedge funds."), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 24,
      color: "var(--navy)",
      marginTop: 38
    }
  }, "Explore the platform"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 14,
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement(Card, {
    icon: "layout-dashboard",
    title: "Console"
  }, "Analyze portfolios, build strategies, screen opportunities, and monitor investments."), /*#__PURE__*/React.createElement(Card, {
    icon: "code",
    title: "API Reference"
  }, "Integrate Parallax analytics into your applications with our REST API."), /*#__PURE__*/React.createElement(Card, {
    icon: "telescope",
    title: "Methodology"
  }, "Understand our multi-factor approach built on Nobel Prize-winning research."), /*#__PURE__*/React.createElement(Card, {
    icon: "book-open",
    title: "Glossary"
  }, "Investment terms and concepts explained for beginners and experts.")), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 24,
      color: "var(--navy)",
      marginTop: 40
    }
  }, "The Parallax approach"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15.5,
      color: "#475569",
      marginTop: 8
    }
  }, "Our Six-Factor Framework systematically evaluates every security."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 12,
      marginTop: 16
    }
  }, FACTORS.map(([ic, t, d]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      border: "1px solid #e7eaef",
      borderRadius: 10,
      padding: 16
    }
  }, /*#__PURE__*/React.createElement(DIcon, {
    name: ic,
    size: 20,
    color: "#547498"
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 15,
      color: "var(--navy)",
      margin: "10px 0 5px"
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 13,
      color: "#64748b",
      lineHeight: 1.45,
      fontFamily: "var(--font-body)"
    }
  }, d)))), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 24,
      color: "var(--navy)",
      marginTop: 40
    }
  }, "Who uses Parallax"), /*#__PURE__*/React.createElement("table", {
    style: {
      width: "100%",
      borderCollapse: "collapse",
      marginTop: 16,
      fontSize: 14,
      border: "1px solid #CCCDCF",
      borderRadius: 8,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      background: "#0C2746"
    }
  }, /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "left",
      color: "#fff",
      fontWeight: 600,
      padding: "10px 14px",
      fontFamily: "var(--font-body)"
    }
  }, "User type"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "left",
      color: "#fff",
      fontWeight: 600,
      padding: "10px 14px",
      fontFamily: "var(--font-body)"
    }
  }, "How they use Parallax"))), /*#__PURE__*/React.createElement("tbody", null, [["Individual Investors", "Institutional-grade portfolio analysis instantly"], ["Financial Advisors", "Sophisticated AI-powered insights for clients"], ["Institutional Investors", "Enterprise analytics with compliance features"]].map((r, i) => /*#__PURE__*/React.createElement("tr", {
    key: r[0],
    style: {
      background: i % 2 ? "#EAEDF3" : "#fff"
    }
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "10px 14px",
      color: "var(--navy)",
      fontWeight: 600,
      fontFamily: "var(--font-body)"
    }
  }, r[0]), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "10px 14px",
      color: "#1F2937",
      fontFamily: "var(--font-body)"
    }
  }, r[1]))))));
}
function DocsTOC() {
  const items = ["Explore the platform", "The Parallax approach", "Who uses Parallax"];
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 220,
      flex: "none",
      padding: "40px 24px",
      height: "calc(100vh - 60px)",
      position: "sticky",
      top: 60
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "cg-eyebrow",
    style: {
      color: "#92A6C1",
      fontSize: 11,
      marginBottom: 14
    }
  }, "On this page"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 9
    }
  }, items.map((t, i) => /*#__PURE__*/React.createElement("a", {
    key: t,
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 13.5,
      textDecoration: "none",
      color: i === 0 ? "#0C2746" : "#64748b",
      borderLeft: "2px solid " + (i === 0 ? "#ED7D31" : "transparent"),
      paddingLeft: 12,
      fontWeight: i === 0 ? 600 : 400
    }
  }, t))));
}
function DocsApp() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(DocsTop, null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      maxWidth: 1400,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement(DocsSidebar, null), /*#__PURE__*/React.createElement(DocsContent, null), /*#__PURE__*/React.createElement(DocsTOC, null)));
}
Object.assign(window, {
  DocsApp
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/docs/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/parallax-site/primitives.jsx
try { (() => {
/* Parallax UI kit — primitives. Exports to window for sibling Babel scripts. */
const {
  useState
} = React;

// Inline Lucide icon (real <svg>, recolorable via stroke). Needs window.PXICONS (icons-data.js).
function Icon({
  name,
  size = 22,
  color = "currentColor",
  stroke = 1.75,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: stroke,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      flex: "none",
      display: "inline-block",
      verticalAlign: "middle",
      ...style
    },
    dangerouslySetInnerHTML: {
      __html: window.PXICONS && window.PXICONS[name] || ""
    }
  });
}

// Parallax logo lockup: three-bar mark + wordmark.
function Logo({
  dark = true,
  size = 26
}) {
  const src = dark ? "../../assets/parallax-mark-white.svg" : "../../assets/parallax-mark-navy.svg";
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 9
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "Parallax",
    style: {
      width: size * 0.84,
      height: size
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "wordmark",
    style: {
      fontFamily: "var(--font-head)",
      fontWeight: 700,
      fontSize: size * 0.72,
      color: dark ? "#fff" : "var(--navy)",
      letterSpacing: ".01em"
    }
  }, "Parallax"));
}
function Eyebrow({
  children,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "cg-eyebrow",
    style: {
      color: "var(--blue-light)",
      ...style
    }
  }, children);
}
function Button({
  children,
  variant = "cta",
  iconRight,
  onClick,
  style = {}
}) {
  const base = {
    fontFamily: "var(--font-body)",
    fontWeight: 600,
    fontSize: 15,
    cursor: "pointer",
    borderRadius: "var(--r-comfy)",
    padding: "11px 20px",
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    border: "1px solid transparent",
    transition: "filter .15s, background .15s"
  };
  const variants = {
    cta: {
      background: "var(--orange)",
      color: "#fff"
    },
    secondary: {
      background: "transparent",
      color: "#fff",
      borderColor: "var(--navy-600)"
    },
    ghost: {
      background: "transparent",
      color: "var(--blue-light)",
      padding: "11px 6px"
    }
  };
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    onMouseEnter: e => e.currentTarget.style.filter = "brightness(.93)",
    onMouseLeave: e => e.currentTarget.style.filter = "none",
    style: {
      ...base,
      ...variants[variant],
      ...style
    }
  }, children, iconRight && /*#__PURE__*/React.createElement(Icon, {
    name: iconRight,
    size: 17
  }));
}
function Badge({
  children,
  tone = "neutral"
}) {
  const tones = {
    success: ["#0f3d24", "#5fdd9a"],
    error: ["#3d1414", "#f0a3a3"],
    warning: ["#3d2a10", "#f0c48a"],
    neutral: ["rgba(146,166,193,.14)", "#92A6C1"],
    brand: ["rgba(146,166,193,.16)", "#cdd9e8"]
  };
  const [bg, fg] = tones[tone] || tones.neutral;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 600,
      fontSize: 12.5,
      padding: "4px 10px",
      borderRadius: "var(--r-std)",
      background: bg,
      color: fg,
      display: "inline-flex",
      alignItems: "center",
      gap: 5
    }
  }, children);
}
function StatChip({
  icon,
  children
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 9,
      padding: "9px 15px",
      borderRadius: "var(--r-full)",
      border: "1px solid rgba(146,166,193,.22)",
      background: "rgba(255,255,255,.03)",
      color: "#cdd9e8",
      fontFamily: "var(--font-body)",
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 16,
    color: "var(--blue-light)"
  }), children);
}
Object.assign(window, {
  Icon,
  Logo,
  Eyebrow,
  Button,
  Badge,
  StatChip
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/parallax-site/primitives.jsx", error: String((e && e.message) || e) }); }

// ui_kits/parallax-site/sections.jsx
try { (() => {
/* Parallax UI kit — page sections. Depends on primitives.jsx (window globals). */
const {
  useState: useStateS
} = React;
function Nav() {
  const links = ["Features", "Insights", "Technology", "Comparison", "Docs"];
  const [active, setActive] = useStateS("Features");
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 20,
      backdropFilter: "blur(10px)",
      background: "rgba(12,39,70,.72)",
      borderBottom: "1px solid rgba(146,166,193,.14)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: "0 auto",
      height: 64,
      display: "flex",
      alignItems: "center",
      gap: 28,
      padding: "0 28px"
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    dark: true,
    size: 24
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: 22,
      marginLeft: 10
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    onClick: () => setActive(l),
    style: {
      cursor: "pointer",
      fontFamily: "var(--font-body)",
      fontSize: 14.5,
      color: active === l ? "#fff" : "#92A6C1",
      textDecoration: "none",
      fontWeight: active === l ? 600 : 400
    }
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "auto",
      display: "flex",
      alignItems: "center",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("a", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 14.5,
      color: "#cdd9e8",
      textDecoration: "none"
    }
  }, "Login"), /*#__PURE__*/React.createElement(Button, {
    variant: "cta",
    style: {
      padding: "9px 16px",
      fontSize: 14
    }
  }, "Schedule a Demo"))));
}
function AnalyzerFrame() {
  const [tab, setTab] = useStateS("Portfolio Analytics");
  const rows = [["AAPL", "Apple Inc.", "228.52", "+1.4", "8.6"], ["MSFT", "Microsoft", "441.30", "+0.8", "9.1"], ["NVDA", "NVIDIA", "121.44", "+2.2", "9.4"], ["TSLA", "Tesla", "242.10", "-3.1", "5.2"]];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 14,
      overflow: "hidden",
      border: "1px solid rgba(146,166,193,.2)",
      background: "#0a2039",
      boxShadow: "0 30px 80px rgba(0,0,0,.5)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      padding: "11px 14px",
      background: "#0e2a4a",
      borderBottom: "1px solid rgba(146,166,193,.16)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 11,
      height: 11,
      borderRadius: 99,
      background: "#ED7D31"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 11,
      height: 11,
      borderRadius: 99,
      background: "#547498"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 11,
      height: 11,
      borderRadius: 99,
      background: "#284b73"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 12,
      fontFamily: "var(--font-num)",
      fontSize: 12.5,
      color: "#92A6C1"
    }
  }, "parallax.chicago.global/analyzer")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 4,
      padding: "12px 16px 0"
    }
  }, ["Portfolio Analytics", "Stock Research"].map(t => /*#__PURE__*/React.createElement("button", {
    key: t,
    onClick: () => setTab(t),
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 13,
      fontWeight: 600,
      cursor: "pointer",
      padding: "8px 14px",
      border: 0,
      borderRadius: "6px 6px 0 0",
      background: tab === t ? "#11335a" : "transparent",
      color: tab === t ? "#fff" : "#92A6C1"
    }
  }, t))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: "100%",
      borderCollapse: "collapse",
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      background: "#11335a"
    }
  }, ["Ticker", "Name", "Price", "Day", "Factor"].map((h, i) => /*#__PURE__*/React.createElement("th", {
    key: h,
    style: {
      textAlign: i > 1 ? "right" : "left",
      color: "#cdd9e8",
      fontFamily: "var(--font-body)",
      fontWeight: 600,
      padding: "9px 12px",
      fontSize: 12
    }
  }, h)))), /*#__PURE__*/React.createElement("tbody", null, rows.map((r, idx) => /*#__PURE__*/React.createElement("tr", {
    key: r[0],
    style: {
      background: idx % 2 ? "rgba(146,166,193,.05)" : "transparent"
    }
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "9px 12px",
      fontWeight: 700,
      color: "#fff",
      fontFamily: "var(--font-num)"
    }
  }, r[0]), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "9px 12px",
      color: "#92A6C1"
    }
  }, r[1]), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "9px 12px",
      textAlign: "right",
      fontFamily: "var(--font-num)",
      color: "#cdd9e8"
    }
  }, r[2]), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "9px 12px",
      textAlign: "right",
      fontFamily: "var(--font-num)",
      fontWeight: 600,
      color: r[3].startsWith("-") ? "#f0a3a3" : "#5fdd9a"
    }
  }, r[3].startsWith("-") ? "↓" : "↑", " ", r[3], "%"), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "9px 12px",
      textAlign: "right",
      fontFamily: "var(--font-num)",
      color: "#cdd9e8"
    }
  }, r[4])))))));
}
function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1200,
      margin: "0 auto",
      padding: "72px 28px 40px",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 56,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "AI-Native Workspace for Finance"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 52,
      marginTop: 16,
      color: "#fff",
      lineHeight: 1.05
    }
  }, "Investment Intelligence ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#92A6C1"
    }
  }, "for better decisions")), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 20,
      fontSize: 18,
      color: "#a9bace",
      maxWidth: 460
    }
  }, "Analyze 62,000+ securities with AI-powered quantitative models. Accelerate research, automate workflows, and enhance returns."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      flexWrap: "wrap",
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(StatChip, {
    icon: "layers"
  }, "15+ quantitative factors"), /*#__PURE__*/React.createElement(StatChip, {
    icon: "cpu"
  }, "Multi-model AI engine"), /*#__PURE__*/React.createElement(StatChip, {
    icon: "globe"
  }, "48 global markets")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 30,
      display: "flex",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "cta",
    iconRight: "arrow-right"
  }, "Schedule a Demo"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary"
  }, "Read the docs"))), /*#__PURE__*/React.createElement(AnalyzerFrame, null));
}
function FeatureBento() {
  const feats = [["file-text", "Automated Reports", "AI-generated research reports for every security and portfolio."], ["bell", "Real-Time Insights", "Get notified on earnings, risk alerts, and opportunities."], ["cpu", "Multi-Model AI", "Parallax orchestrates OpenAI, Anthropic, Gemini, and Perplexity as peer models."], ["calendar-range", "30+ Years of Data", "Backtest strategies against three decades of market history."]];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1200,
      margin: "0 auto",
      padding: "60px 28px"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "The platform"), /*#__PURE__*/React.createElement("h2", {
    style: {
      color: "#fff",
      marginTop: 12,
      fontSize: 34
    }
  }, "See our platform in action"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "#92A6C1",
      marginTop: 10,
      fontSize: 17
    }
  }, "Explore the tools that power smarter investment decisions."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: 16,
      marginTop: 32
    }
  }, feats.map(([ic, t, d]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      background: "#11335a",
      border: "1px solid var(--navy-600)",
      borderRadius: 12,
      padding: 22,
      display: "flex",
      flexDirection: "column",
      gap: 12,
      minHeight: 168
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 9,
      background: "rgba(237,125,49,.14)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 20,
    color: "#ED7D31"
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      color: "#fff",
      fontSize: 18,
      marginTop: 4
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "#a9bace",
      fontSize: 14,
      lineHeight: 1.5,
      margin: 0
    }
  }, d), /*#__PURE__*/React.createElement("a", {
    style: {
      marginTop: "auto",
      color: "#92A6C1",
      fontSize: 13.5,
      textDecoration: "underline",
      fontFamily: "var(--font-body)"
    }
  }, "Learn more")))));
}
function FAQ() {
  const qs = [["What is Parallax and how does it work?", "Parallax is a Large Investment Model that discovers, scores, constructs, and explains investment decisions across 62,000+ securities and 48 markets."], ["How many markets and securities does Parallax cover?", "48 markets and 62,000+ securities, scored across 15+ factors and 30+ alpha signals."], ["What kind of reports does Parallax generate?", "AI-generated research reports for every security and portfolio — factor breakdowns, risk decomposition, and macro context."], ["Which AI models does Parallax integrate with?", "OpenAI, Anthropic, Gemini, and Perplexity, orchestrated as peer models."], ["Is my portfolio data secure?", "Yes. Same input produces same output — defensible to MAS, FCA, SFC, and SEC."]];
  const [open, setOpen] = useStateS(0);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 800,
      margin: "0 auto",
      padding: "60px 28px"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      textAlign: "center"
    }
  }, "FAQs"), /*#__PURE__*/React.createElement("h2", {
    style: {
      color: "#fff",
      textAlign: "center",
      marginTop: 12,
      fontSize: 30
    }
  }, "Your questions answered"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28,
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, qs.map(([q, a], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      border: "1px solid var(--navy-600)",
      borderRadius: 10,
      background: "#0e2a4a",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(open === i ? -1 : i),
    style: {
      width: "100%",
      textAlign: "left",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 12,
      cursor: "pointer",
      border: 0,
      background: "transparent",
      padding: "16px 18px",
      fontFamily: "var(--font-head)",
      fontWeight: 700,
      color: "#fff",
      fontSize: 16
    }
  }, q, /*#__PURE__*/React.createElement(Icon, {
    name: open === i ? "minus" : "plus",
    size: 18,
    color: "#92A6C1"
  })), open === i && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      padding: "0 18px 18px",
      color: "#a9bace",
      fontSize: 15,
      lineHeight: 1.55
    }
  }, a)))));
}
function CTA() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1200,
      margin: "0 auto",
      padding: "20px 28px 70px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 16,
      padding: "56px 40px",
      textAlign: "center",
      background: "linear-gradient(180deg,#11335a,#0a2039)",
      border: "1px solid var(--navy-600)"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      color: "#fff",
      fontSize: 34,
      maxWidth: 640,
      margin: "0 auto"
    }
  }, "Start making smarter investment decisions"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "#a9bace",
      fontSize: 17,
      maxWidth: 560,
      margin: "16px auto 0"
    }
  }, "The AI workspace that helps investment teams analyze faster, research deeper, and decide with confidence."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 26,
      display: "flex",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "cta",
    iconRight: "arrow-right"
  }, "Schedule a Demo")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      color: "#6e87a3",
      fontSize: 13.5,
      fontFamily: "var(--font-body)"
    }
  }, "Talk to us for early access")));
}
function Footer() {
  const cols = [["Platform", ["Features", "Insights", "Technology", "Comparison"]], ["Company", ["About Us", "Contact", "Login"]], ["Legal", ["Terms", "Privacy", "Disclaimers"]]];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      borderTop: "1px solid rgba(146,166,193,.14)",
      background: "#0a2039"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: "0 auto",
      padding: "48px 28px 28px",
      display: "grid",
      gridTemplateColumns: "1.6fr 1fr 1fr 1fr",
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Logo, {
    dark: true,
    size: 24
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "#6e87a3",
      fontSize: 13.5,
      marginTop: 14,
      maxWidth: 280
    }
  }, "By Chicago Global Capital. Quantitative investment analytics for institutional and accredited investors."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      color: "#92A6C1",
      fontSize: 13,
      fontFamily: "var(--font-body)"
    }
  }, "A Chicago Global product \u2192")), cols.map(([h, items]) => /*#__PURE__*/React.createElement("div", {
    key: h
  }, /*#__PURE__*/React.createElement("div", {
    className: "cg-eyebrow",
    style: {
      color: "#92A6C1"
    }
  }, h), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 9,
      marginTop: 14
    }
  }, items.map(it => /*#__PURE__*/React.createElement("a", {
    key: it,
    style: {
      color: "#a9bace",
      fontSize: 14,
      textDecoration: "none",
      fontFamily: "var(--font-body)"
    }
  }, it)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: "0 auto",
      padding: "18px 28px 36px",
      borderTop: "1px solid rgba(146,166,193,.1)",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#6e87a3",
      fontSize: 12.5,
      fontFamily: "var(--font-body)"
    }
  }, "\xA9 2026 Chicago Global Capital Pte. Ltd. \xB7 UEN 201734851Z \xB7 30 Cecil Street #16-08, Singapore 049712"), /*#__PURE__*/React.createElement("span", {
    className: "editorial",
    style: {
      fontStyle: "italic",
      color: "#ED7D31",
      fontSize: 19
    }
  }, "Solve the market.")));
}
Object.assign(window, {
  Nav,
  Hero,
  FeatureBento,
  FAQ,
  CTA,
  Footer,
  AnalyzerFrame
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/parallax-site/sections.jsx", error: String((e && e.message) || e) }); }

})();
