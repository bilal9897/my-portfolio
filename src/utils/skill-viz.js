/**
 * Skills Visualization Module - vanilla JS, no libs.
 * Usage:
 *   <div class="skill-orb" data-skill-name="Python" data-skill-level="90"
 *        data-skill-icon="/assets/Icons/python.svg" data-skill-color="#00D9FF"></div>
 *   <script src="/assets/js/skills-viz.js"></script>
 *
 * Required HTML classes/selectors (root authored, rest injected):
 *   .skill-orb           root (data-skill-name, data-skill-level, data-skill-icon,
 *                        optional data-skill-color)
 *   .skill-orb__ringwrap ring container (injected)
 *   .skill-orb__ring     SVG progress ring (injected)
 *   .skill-orb__icon     centered icon (injected)
 *   .skill-orb__name     name label (injected)
 *   .skill-orb__pct      percent counter (injected)
 *   .skill-orb--in-view  added when scrolled into view
 *   .skill-orb--hover    added while hovered (desktop only)
 *
 * Public API: window.SkillsVisualizer.replay() / .destroy()
 */
export default function initSkillViz() {

  var CYAN = '#D4A574';
  var MAGENTA = '#E8B988';
  var STAGGER_MS = 50;
  var FILL_DURATION_MS = 1400;
  var MAX_TILT_DEG = 8;
  var IS_TOUCH = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);

  // ---------- CSS injection ----------
  function injectStyles() {
    if (document.getElementById('skills-viz-styles')) return;
    var css = [
      '.skill-orb{position:relative;display:inline-flex;flex-direction:column;align-items:center;width:160px;min-height:200px;margin:12px;padding:14px;border-radius:18px;cursor:default;background:rgba(10,14,24,.55);backdrop-filter:blur(6px);border:1px solid rgba(255,255,255,.06);transform-style:preserve-3d;transform:perspective(700px) rotateX(0) rotateY(0) translateZ(0);transition:transform .25s ease,box-shadow .3s ease,border-color .3s ease;opacity:0;will-change:transform,opacity;box-sizing:border-box}',
      '.skills-grid{display:flex;flex-wrap:wrap;justify-content:center;gap:8px}',
      '.skill-orb.skill-orb--in-view{opacity:1;animation:skillOrbRise .65s cubic-bezier(.2,.8,.2,1) both}',
      '@keyframes skillOrbRise{from{opacity:0;transform:perspective(700px) translateY(24px)}to{opacity:1;transform:perspective(700px) translateY(0)}}',
      '.skill-orb__ringwrap{position:relative;width:120px;height:120px;display:flex;align-items:center;justify-content:center}',
      '.skill-orb__ring{position:absolute;inset:0;width:100%;height:100%;transform:rotate(-90deg);overflow:visible}',
      '.skill-orb__ring .track{stroke:rgba(255,255,255,.08)}',
      '.skill-orb__ring .fill{stroke-linecap:round;filter:drop-shadow(0 0 6px currentColor);transition:stroke-dashoffset 0s linear}',
      '.skill-orb__icon{width:54px;height:54px;object-fit:contain;pointer-events:none;filter:drop-shadow(0 0 0 transparent);transition:filter .35s ease,transform .35s ease}',
      '.skill-orb:hover .skill-orb__icon,.skill-orb.skill-orb--hover .skill-orb__icon{transform:scale(1.08);filter:drop-shadow(0 0 12px var(--orb-color,' + CYAN + ')) drop-shadow(0 0 22px var(--orb-color2,' + MAGENTA + '))}',
      '.skill-orb__name{margin-top:10px;font-size:13px;font-weight:600;letter-spacing:.04em;color:#e8eef7;text-transform:uppercase;text-align:center}',
      '.skill-orb__pct{margin-top:2px;font-size:12px;font-weight:500;color:rgba(232,238,247,.7);font-variant-numeric:tabular-nums;letter-spacing:.05em}',
      '.skill-orb:hover,.skill-orb.skill-orb--hover{border-color:rgba(212,165,116,.4);box-shadow:0 8px 30px rgba(212,165,116,.18),0 0 0 1px rgba(232,185,136,.12) inset}',
      '@media(max-width:600px){.skills-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}.skill-orb{width:100%;min-height:170px;margin:0;padding:10px}.skill-orb__ringwrap{width:90px;height:90px}.skill-orb__icon{width:40px;height:40px}.skill-orb__name{font-size:11px}.skill-orb__pct{font-size:11px}}',
      '@media (prefers-reduced-motion: reduce){.skill-orb,.skill-orb.skill-orb--in-view{animation:none;opacity:1}.skill-orb__icon{transition:none}}'
    ].join('');
    var style = document.createElement('style');
    style.id = 'skills-viz-styles';
    style.appendChild(document.createTextNode(css));
    document.head.appendChild(style);
  }

  // ---------- helpers ----------
  function easeOutCubic(t) { return 1 - Math.pow(1 - t, 3); }
  function clamp(n, lo, hi) { return Math.max(lo, Math.min(hi, n)); }
  function debounce(fn, wait) {
    var t;
    return function () {
      var ctx = this, args = arguments;
      clearTimeout(t);
      t = setTimeout(function () { fn.apply(ctx, args); }, wait);
    };
  }

  // ---------- SkillOrb ----------
  function SkillOrb(el, index) {
    this.el = el;
    this.index = index;
    this.name = el.getAttribute('data-skill-name') || '';
    this.level = clamp(parseFloat(el.getAttribute('data-skill-level')) || 0, 0, 100);
    this.iconUrl = el.getAttribute('data-skill-icon') || '';
    var customColor = el.getAttribute('data-skill-color');
    this.color = customColor || (index % 2 === 0 ? CYAN : MAGENTA);
    this.color2 = (this.color.toLowerCase() === CYAN.toLowerCase()) ? MAGENTA : CYAN;
    this.played = false;
    this.rafId = null;
    this.build();
    this.bindHover();
  }

  SkillOrb.prototype.build = function () {
    if (this.el.__orbBuilt) {
      this.fillEl = this.el.querySelector('.fill');
      this.pctEl = this.el.querySelector('.skill-orb__pct');
      return;
    }
    this.el.__orbBuilt = true;
    this.el.style.setProperty('--orb-color', this.color);
    this.el.style.setProperty('--orb-color2', this.color2);

    var wrap = document.createElement('div');
    wrap.className = 'skill-orb__ringwrap';

    // SVG ring
    var size = 120, stroke = 8, r = (size - stroke) / 2;
    var c = 2 * Math.PI * r;
    this.circumference = c;

    var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('class', 'skill-orb__ring');
    svg.setAttribute('viewBox', '0 0 ' + size + ' ' + size);

    var track = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    track.setAttribute('class', 'track');
    track.setAttribute('cx', size / 2);
    track.setAttribute('cy', size / 2);
    track.setAttribute('r', r);
    track.setAttribute('fill', 'none');
    track.setAttribute('stroke-width', stroke);

    var fill = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    fill.setAttribute('class', 'fill');
    fill.setAttribute('cx', size / 2);
    fill.setAttribute('cy', size / 2);
    fill.setAttribute('r', r);
    fill.setAttribute('fill', 'none');
    fill.setAttribute('stroke', this.color);
    fill.setAttribute('stroke-width', stroke);
    fill.setAttribute('stroke-dasharray', c);
    fill.setAttribute('stroke-dashoffset', c);
    fill.style.color = this.color; // for currentColor drop-shadow

    svg.appendChild(track);
    svg.appendChild(fill);
    this.fillEl = fill;

    // icon
    if (this.iconUrl) {
      var img = document.createElement('img');
      img.className = 'skill-orb__icon';
      img.alt = this.name;
      img.loading = 'lazy';
      img.src = this.iconUrl;
      this.iconEl = img;
      wrap.appendChild(img);
    }
    wrap.appendChild(svg);

    var nameEl = document.createElement('div');
    nameEl.className = 'skill-orb__name';
    nameEl.textContent = this.name;

    var pctEl = document.createElement('div');
    pctEl.className = 'skill-orb__pct';
    pctEl.textContent = '0%';
    this.pctEl = pctEl;

    this.el.appendChild(wrap);
    this.el.appendChild(nameEl);
    this.el.appendChild(pctEl);
  };

  SkillOrb.prototype.bindHover = function () {
    var self = this;
    this._cachedRect = null;
    this.el.addEventListener('mouseenter', function () {
      self.el.classList.add('skill-orb--hover');
      self._cachedRect = self.el.getBoundingClientRect();
    });
    this.el.addEventListener('mouseleave', function () {
      self.el.classList.remove('skill-orb--hover');
      self.el.style.transform = 'perspective(700px) rotateX(0) rotateY(0) translateZ(0)';
      self._cachedRect = null;
    });
    if (!IS_TOUCH) {
      this.el.addEventListener('mousemove', function (e) {
        var rect = self._cachedRect || self.el.getBoundingClientRect();
        var px = (e.clientX - rect.left) / rect.width;
        var py = (e.clientY - rect.top) / rect.height;
        var ry = (px - 0.5) * 2 * MAX_TILT_DEG;
        var rx = -(py - 0.5) * 2 * MAX_TILT_DEG;
        self.el.style.transform = 'perspective(700px) rotateX(' + rx.toFixed(2) + 'deg) rotateY(' + ry.toFixed(2) + 'deg) translateZ(6px)';
      });
    }
  };

  SkillOrb.prototype.invalidateRect = function () { this._cachedRect = null; };

  SkillOrb.prototype.play = function () {
    if (this.played) return;
    this.played = true;
    var self = this;
    var start = null;
    var target = self.level;
    var c = self.circumference;

    if (this.rafId) cancelAnimationFrame(this.rafId);

    function step(ts) {
      if (start === null) start = ts;
      var elapsed = ts - start;
      var t = clamp(elapsed / FILL_DURATION_MS, 0, 1);
      var eased = easeOutCubic(t);
      var current = target * eased;
      self.fillEl.setAttribute('stroke-dashoffset', String(c * (1 - current / 100)));
      self.pctEl.textContent = Math.round(current) + '%';
      if (t < 1) {
        self.rafId = requestAnimationFrame(step);
      } else {
        self.fillEl.setAttribute('stroke-dashoffset', String(c * (1 - target / 100)));
        self.pctEl.textContent = Math.round(target) + '%';
        self.rafId = null;
      }
    }
    this.rafId = requestAnimationFrame(step);
  };

  SkillOrb.prototype.reset = function () {
    if (this.rafId) cancelAnimationFrame(this.rafId);
    this.played = false;
    this.fillEl.setAttribute('stroke-dashoffset', String(this.circumference));
    this.pctEl.textContent = '0%';
    this.el.classList.remove('skill-orb--in-view');
  };

  // ---------- SkillsVisualizer ----------
  function SkillsVisualizer(opts) {
    opts = opts || {};
    this.selector = opts.selector || '.skill-orb';
    this.orbs = [];
    this.observer = null;
    this.init();
  }

  SkillsVisualizer.prototype.init = function () {
    injectStyles();
    var nodes = document.querySelectorAll(this.selector);
    this.orbs = [];
    for (var i = 0; i < nodes.length; i++) this.orbs.push(new SkillOrb(nodes[i], i));
    this.setupObserver();
    var self = this;
    this._onResize = debounce(function () {
      for (var k = 0; k < self.orbs.length; k++) self.orbs[k].invalidateRect();
    }, 150);
    window.addEventListener('resize', this._onResize, { passive: true });
  };

  SkillsVisualizer.prototype.setupObserver = function () {
    var self = this;
    if (!('IntersectionObserver' in window)) {
      // fallback: play all immediately
      for (var i = 0; i < this.orbs.length; i++) this.scheduleOrb(this.orbs[i], i);
      return;
    }
    this.observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var orb = self.findOrb(entry.target);
        if (!orb || orb.played) return;
        orb.el.classList.add('skill-orb--in-view');
        self.scheduleOrb(orb, orb.index);
        self.observer.unobserve(entry.target);
      });
    }, { threshold: 0.25, rootMargin: '0px 0px -10% 0px' });
    for (var i = 0; i < this.orbs.length; i++) this.observer.observe(this.orbs[i].el);
  };

  SkillsVisualizer.prototype.findOrb = function (el) {
    for (var i = 0; i < this.orbs.length; i++) if (this.orbs[i].el === el) return this.orbs[i];
    return null;
  };

  SkillsVisualizer.prototype.scheduleOrb = function (orb, idx) {
    setTimeout(function () { orb.play(); }, idx * STAGGER_MS);
  };

  SkillsVisualizer.prototype.replay = function () {
    if (this.observer) this.observer.disconnect();
    for (var i = 0; i < this.orbs.length; i++) this.orbs[i].reset();
    this.setupObserver();
    // immediately re-trigger any already in viewport
    for (var j = 0; j < this.orbs.length; j++) {
      var rect = this.orbs[j].el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        this.orbs[j].el.classList.add('skill-orb--in-view');
        this.scheduleOrb(this.orbs[j], j);
        if (this.observer) this.observer.unobserve(this.orbs[j].el);
      }
    }
  };

  SkillsVisualizer.prototype.destroy = function () {
    if (this.observer) this.observer.disconnect();
    window.removeEventListener('resize', this._onResize);
  };

  // ---------- bootstrap ----------
  window.skillsViz = new SkillsVisualizer();
  return window.skillsViz;
}
