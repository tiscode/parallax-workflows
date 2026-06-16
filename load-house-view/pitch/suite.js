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
    var inner = (window.PXICONS && window.PXICONS[el.getAttribute('data-ic')]) || '';
    var sz = el.getAttribute('data-sz') || 24;
    el.innerHTML = '<svg width="' + sz + '" height="' + sz + '" viewBox="0 0 24 24" fill="none" ' +
      'stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + inner + '</svg>';
  });

  // ---- build tabs + grid cards ----------------------------------------------
  EX.forEach(function (ex, i) {
    var label = ex.getAttribute('data-tab') || ('Exhibit ' + (i + 1));
    var desc = ex.getAttribute('data-desc') || '';
    var n = ('0' + (i + 1)).slice(-2);

    var tab = document.createElement('button');
    tab.className = 'tab';
    tab.innerHTML = '<span class="tnum">' + n + '</span><span class="tlab">' + label + '</span>';
    tab.addEventListener('click', function () { go(i); });
    tabsEl.appendChild(tab);

    var card = document.createElement('button');
    card.className = 'mcard';
    card.innerHTML = '<span class="mnum">' + n + '</span><span><span class="mtitle">' + label +
      '</span><span class="msub">' + desc + '</span></span>';
    card.addEventListener('click', function () { closeGrid(); go(i); });
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
      var dur = 1100, t0 = null;
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
  function fmt(n) { return n.toLocaleString('en-US'); }

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
    tabEls.forEach(function (t, k) { t.classList.toggle('active', k === i); });
    // keep active tab in view
    if (tabEls[i]) tabEls[i].scrollIntoView ? scrollTabIntoView(i) : null;
    subdesc.innerHTML = '<b>' + ('0' + (i + 1)).slice(-2) + ' / ' + ('0' + EX.length).slice(-2) +
      '</b> &nbsp; ' + (EX[i].getAttribute('data-desc') || '');
    progress.style.width = ((i + 1) / EX.length * 100) + '%';
    if (location.hash !== '#' + (i + 1)) history.replaceState(null, '', '#' + (i + 1));
  }

  function scrollTabIntoView(i) {
    var t = tabEls[i];
    var left = t.offsetLeft - tabsEl.offsetWidth / 2 + t.offsetWidth / 2;
    tabsEl.scrollTo({ left: Math.max(0, left), behavior: 'smooth' });
  }

  // expose nav for PPTX/export capture
  window.__go = go;

  // ---- grid overview ---------------------------------------------------------
  function openGrid() { menu.classList.add('open'); }
  function closeGrid() { menu.classList.remove('open'); }
  function toggleGrid() { menu.classList.toggle('open'); }

  document.querySelectorAll('[data-act]').forEach(function (b) {
    b.addEventListener('click', function () {
      var a = b.getAttribute('data-act');
      if (a === 'prev') go(cur - 1);
      else if (a === 'next') go(cur + 1);
      else if (a === 'grid') toggleGrid();
      else if (a === 'closegrid') closeGrid();
    });
  });

  // ---- keyboard --------------------------------------------------------------
  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight' || e.key === 'PageDown') { go(cur + 1); }
    else if (e.key === 'ArrowLeft' || e.key === 'PageUp') { go(cur - 1); }
    else if (e.key === 'm' || e.key === 'M') { toggleGrid(); }
    else if (e.key === 'Escape') { closeGrid(); }
    else if (e.key >= '1' && e.key <= '9') { go(+e.key - 1); }
    else if (e.key === '0') { go(9); }
  });

  // ---- capture / print finalize: settle every exhibit to its end state ------
  window.__finalizeForCapture = function () {
    EX.forEach(function (ex) {
      ex.classList.add('play');
      ex.querySelectorAll('.anim, .settle-lg').forEach(function (el) {
        el.style.animation = 'none'; el.style.opacity = '1'; el.style.transform = 'none';
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
