import { useEffect } from 'react';

export default function useInteractions() {
  useEffect(() => {
    let IS_TOUCH = window.matchMedia && window.matchMedia('(hover: none)').matches;
    let PASSIVE = { passive: true };

    function lerp(a, b, t) { return a + (b - a) * t; }
    function clamp(v, min, max) { return v < min ? min : v > max ? max : v; }

    function injectStyles() {
      if (document.getElementById('interactions-style')) return;
      var css = '' +
        '.cursor-dot,.cursor-ring{' +
          'position:fixed;top:0;left:0;pointer-events:none;z-index:99999;' +
          'border-radius:50%;transform:translate3d(-50%,-50%,0);' +
          'will-change:transform,width,height,background-color,border-color;' +
          'mix-blend-mode:normal;' +
        '}' +
        '.cursor-dot{' +
          'width:6px;height:6px;background:#D4A574;' +
          'transition:background-color .2s ease,transform .15s ease;' +
        '}' +
        '.cursor-ring{' +
          'width:34px;height:34px;border:1.5px solid #D4A574;' +
          'transition:width .25s ease,height .25s ease,border-color .25s ease,background-color .25s ease;' +
        '}' +
        '.cursor-ring.is-hover{' +
          'width:60px;height:60px;border-color:#E8B988;background:rgba(212,165,116,.1);' +
        '}' +
        '.cursor-dot.is-hover{background:#E8B988;}' +
        '.cursor-hidden{opacity:0!important;}' +
        'html.has-custom-cursor,html.has-custom-cursor *{cursor:none!important;}' +
        '.reveal{opacity:0;transform:translate3d(0,28px,0);' +
          'transition:opacity .8s cubic-bezier(.22,1,.36,1),transform .8s cubic-bezier(.22,1,.36,1);' +
          'will-change:opacity,transform;}' +
        '.reveal.is-visible{opacity:1;transform:translate3d(0,0,0);}' +
        '@media (hover:none){.cursor-dot,.cursor-ring{display:none!important;}' +
          'html.has-custom-cursor,html.has-custom-cursor *{cursor:auto!important;}}';
      var style = document.createElement('style');
      style.id = 'interactions-style';
      style.appendChild(document.createTextNode(css));
      (document.head || document.documentElement).appendChild(style);
    }

    function CustomCursor() {
      this.dot = null;
      this.ring = null;
      this.targetX = window.innerWidth / 2;
      this.targetY = window.innerHeight / 2;
      this.ringX = this.targetX;
      this.ringY = this.targetY;
      this.dotX = this.targetX;
      this.dotY = this.targetY;
      this.rafId = null;
      this.visible = false;
    }
    CustomCursor.prototype.init = function () {
      if (IS_TOUCH) return;
      this.dot = document.createElement('div');
      this.dot.className = 'cursor-dot cursor-hidden';
      this.ring = document.createElement('div');
      this.ring.className = 'cursor-ring cursor-hidden';
      document.body.appendChild(this.dot);
      document.body.appendChild(this.ring);
      document.documentElement.classList.add('has-custom-cursor');

      var self = this;
      document.addEventListener('mousemove', function (e) {
        self.targetX = e.clientX;
        self.targetY = e.clientY;
        if (!self.visible) {
          self.visible = true;
          self.dot.classList.remove('cursor-hidden');
          self.ring.classList.remove('cursor-hidden');
        }
      }, PASSIVE);

      document.addEventListener('mouseleave', function () {
        self.dot.classList.add('cursor-hidden');
        self.ring.classList.add('cursor-hidden');
        self.visible = false;
      }, PASSIVE);

      document.addEventListener('mouseenter', function () {
        self.dot.classList.remove('cursor-hidden');
        self.ring.classList.remove('cursor-hidden');
        self.visible = true;
      }, PASSIVE);

      var hoverSelector = 'a, button, .magnetic, [role="button"], input[type="submit"]';
      document.addEventListener('mouseover', function (e) {
        if (e.target.closest && e.target.closest(hoverSelector)) {
          self.dot.classList.add('is-hover');
          self.ring.classList.add('is-hover');
        }
      }, PASSIVE);
      document.addEventListener('mouseout', function (e) {
        if (e.target.closest && e.target.closest(hoverSelector)) {
          self.dot.classList.remove('is-hover');
          self.ring.classList.remove('is-hover');
        }
      }, PASSIVE);

      var loop = function () {
        self.dotX = lerp(self.dotX, self.targetX, 0.55);
        self.dotY = lerp(self.dotY, self.targetY, 0.55);
        self.ringX = lerp(self.ringX, self.targetX, 0.18);
        self.ringY = lerp(self.ringY, self.targetY, 0.18);
        self.dot.style.transform = 'translate3d(' + self.dotX + 'px,' + self.dotY + 'px,0) translate(-50%,-50%)';
        self.ring.style.transform = 'translate3d(' + self.ringX + 'px,' + self.ringY + 'px,0) translate(-50%,-50%)';
        self.rafId = requestAnimationFrame(loop);
      };
      this.rafId = requestAnimationFrame(loop);
    };

    function ScrollReveal() { this.observer = null; }
    ScrollReveal.prototype.init = function () {
      if (!('IntersectionObserver' in window)) {
        var all = document.querySelectorAll('.reveal');
        for (var i = 0; i < all.length; i++) all[i].classList.add('is-visible');
        return;
      }
      var self = this;
      this.observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          var el = entry.target;
          var staggerKids = el.querySelectorAll(':scope > .reveal-stagger, .reveal-stagger');
          if (staggerKids.length) {
            for (var i = 0; i < staggerKids.length; i++) {
              (function (kid, idx) {
                setTimeout(function () { kid.classList.add('is-visible'); }, idx * 50);
              })(staggerKids[i], i);
            }
          }
          el.classList.add('is-visible');
          self.observer.unobserve(el);
        });
      }, { threshold: 0.15 });

      var nodes = document.querySelectorAll('.reveal');
      for (var i = 0; i < nodes.length; i++) this.observer.observe(nodes[i]);

      var orphanStagger = document.querySelectorAll('.reveal-stagger:not(.reveal):not(.is-visible)');
      for (var j = 0; j < orphanStagger.length; j++) {
        if (!orphanStagger[j].closest('.reveal')) {
          orphanStagger[j].classList.add('reveal');
          this.observer.observe(orphanStagger[j]);
        }
      }
    };

    function SmoothScroll(headerOffset) {
      this.headerOffset = headerOffset || 80;
      this.duration = 800;
      this.animating = false;
    }
    SmoothScroll.prototype.ease = function (t) { return 1 - Math.pow(1 - t, 4); };
    SmoothScroll.prototype.scrollTo = function (targetY) {
      var self = this;
      var startY = window.pageYOffset;
      var diff = targetY - startY;
      if (Math.abs(diff) < 1) return;
      var startTime = null;
      self.animating = true;
      function step(ts) {
        if (startTime === null) startTime = ts;
        var elapsed = ts - startTime;
        var t = clamp(elapsed / self.duration, 0, 1);
        window.scrollTo(0, startY + diff * self.ease(t));
        if (t < 1) {
          requestAnimationFrame(step);
        } else {
          self.animating = false;
        }
      }
      requestAnimationFrame(step);
    };
    SmoothScroll.prototype.init = function () {
      var self = this;
      document.addEventListener('click', function (e) {
        var link = e.target.closest && e.target.closest('a[href^="#"]');
        if (!link) return;
        var href = link.getAttribute('href');
        if (!href || href === '#' || href.length < 2) return;
        var target;
        try { target = document.querySelector(href); } catch (err) { return; }
        if (!target) return;
        e.preventDefault();
        var rect = target.getBoundingClientRect();
        var targetY = rect.top + window.pageYOffset - self.headerOffset;
        self.scrollTo(Math.max(0, targetY));
        if (history.pushState) history.pushState(null, '', href);
      }, false);
    };

    function ScrollSpy() { this.observer = null; this.links = []; }
    ScrollSpy.prototype.init = function () {
      if (!('IntersectionObserver' in window)) return;
      var sections = document.querySelectorAll('.section-track[id]');
      if (!sections.length) return;
      this.links = document.querySelectorAll('.nav-link[data-target]');
      if (!this.links.length) return;
      var self = this;

      this.observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          var id = '#' + entry.target.id;
          for (var i = 0; i < self.links.length; i++) {
            var link = self.links[i];
            if (link.getAttribute('data-target') === id) {
              link.classList.add('is-active');
            } else {
              link.classList.remove('is-active');
            }
          }
        });
      }, { rootMargin: '-40% 0px -40% 0px', threshold: 0 });

      for (var i = 0; i < sections.length; i++) this.observer.observe(sections[i]);
    };

    function MagneticHover() { this.elements = []; this.maxPull = 12; }
    MagneticHover.prototype.bind = function (el) {
      var state = { x: 0, y: 0, tx: 0, ty: 0, raf: null, active: false };
      var self = this;

      function animate() {
        state.x = lerp(state.x, state.tx, 0.2);
        state.y = lerp(state.y, state.ty, 0.2);
        el.style.transform = 'translate3d(' + state.x.toFixed(2) + 'px,' + state.y.toFixed(2) + 'px,0)';
        if (Math.abs(state.x - state.tx) > 0.05 || Math.abs(state.y - state.ty) > 0.05 || state.active) {
          state.raf = requestAnimationFrame(animate);
        } else {
          state.raf = null;
          el.style.transform = '';
        }
      }

      function onMove(e) {
        var rect = el.getBoundingClientRect();
        var cx = rect.left + rect.width / 2;
        var cy = rect.top + rect.height / 2;
        var dx = e.clientX - cx;
        var dy = e.clientY - cy;
        var radius = Math.max(rect.width, rect.height) / 2;
        var pullX = clamp(dx / radius, -1, 1) * self.maxPull;
        var pullY = clamp(dy / radius, -1, 1) * self.maxPull;
        state.tx = pullX;
        state.ty = pullY;
        if (!state.raf) state.raf = requestAnimationFrame(animate);
      }
      function onEnter() { state.active = true; }
      function onLeave() {
        state.active = false;
        state.tx = 0;
        state.ty = 0;
        if (!state.raf) state.raf = requestAnimationFrame(animate);
      }

      el.addEventListener('mouseenter', onEnter, PASSIVE);
      el.addEventListener('mousemove', onMove, PASSIVE);
      el.addEventListener('mouseleave', onLeave, PASSIVE);
    };
    MagneticHover.prototype.init = function () {
      if (IS_TOUCH) return;
      var nodes = document.querySelectorAll('.magnetic');
      for (var i = 0; i < nodes.length; i++) this.bind(nodes[i]);
    };

    function boot() {
      injectStyles();
      // var cursor = new CustomCursor();
      var reveal = new ScrollReveal();
      var smooth = new SmoothScroll(80);
      var spy = new ScrollSpy();
      var magnetic = new MagneticHover();
      // cursor.init(); // Disabled per user request
      reveal.init();
      smooth.init();
      spy.init();
      magnetic.init();
    }

    boot();

    // Cleanup isn't strictly necessary here since it's an app-level hook
    // but in a strict React mode it might run twice, which is mostly harmless here
    // since the interactions add global events or classes.

  }, []);
}
