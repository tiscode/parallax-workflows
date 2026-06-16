/* Count-up animation for [data-countup] elements, triggered when a slide
   becomes active. Bars are pure CSS (scaleX) — this only handles numbers. */
(function () {
  function easeOut(t) { return 1 - Math.pow(1 - t, 3); }

  // Preserve each count-up's authored final text before any animation overwrites it.
  function snapshotFinals() {
    document.querySelectorAll("[data-countup]").forEach(function (el) {
      if (!el.dataset.finalText) el.dataset.finalText = (el.textContent || "").trim();
    });
  }

  function runCountUp(el) {
    if (window.__capture) { if (el.dataset.finalText) el.textContent = el.dataset.finalText; return; }
    if (el._cuRunning) cancelAnimationFrame(el._cuRunning);
    var target = parseFloat(el.getAttribute("data-countup"));
    var dec = parseInt(el.getAttribute("data-decimals") || "0", 10);
    var pre = el.getAttribute("data-prefix") || "";
    var suf = el.getAttribute("data-suffix") || "";
    var dur = parseInt(el.getAttribute("data-dur") || "1100", 10);
    var sign = target < 0 ? "-" : (el.getAttribute("data-plus") ? "+" : "");
    var abs = Math.abs(target);
    var start = performance.now();
    function frame(now) {
      var p = Math.min(1, (now - start) / dur);
      var v = abs * easeOut(p);
      var s = dec > 0 ? v.toFixed(dec) : Math.round(v).toLocaleString("en-US");
      el.textContent = pre + sign + s + suf;
      if (p < 1) el._cuRunning = requestAnimationFrame(frame);
    }
    el.textContent = pre + sign + (dec > 0 ? (0).toFixed(dec) : "0") + suf;
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
      setTimeout(function () { animateSlide(e.detail.slide); }, 260);
    });
    // first slide (in case init event fired before listener attached)
    var active = deck.querySelector("[data-deck-active]");
    if (active) setTimeout(function () { animateSlide(active); }, 400);
  }

  // Settle every slide to its final, fully-visible state for static capture
  // (PPTX export / screenshots). Call after navigating to a slide.
  window.__finalizeForCapture = function () {
    window.__capture = true;
    snapshotFinals();
    if (!document.getElementById("cap-final")) {
      var s = document.createElement("style");
      s.id = "cap-final";
      s.textContent = "*{animation:none!important;transition:none!important}" +
        ".anim,.wipe,.pop{opacity:1!important;transform:none!important;clip-path:none!important}" +
        ".bar>i{transform:scaleX(1)!important}";
      document.head.appendChild(s);
    }
    document.querySelectorAll("[data-countup]").forEach(function (el) {
      if (el.dataset.finalText) el.textContent = el.dataset.finalText;
    });
  };

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
