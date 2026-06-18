/*!
 * hero-canvas.js — Interactive particle constellation background
 * Vanilla Canvas 2D, zero deps. Auto-inits on canvas#hero-canvas.
 */
export default function initHeroCanvas() {

  var CYAN = '#D4A574', MAGENTA = '#B85A2E';
  var FRAME_MIN_MS = 1000 / 60;

  function isMobile() { return window.innerWidth < 768; }

  function getConfig() {
    var m = isMobile();
    return {
      count: m ? 30 : 80,
      linkDist: m ? 100 : 150,
      mouseRepel: 120,
      mouseLink: m ? 120 : 160,
      maxSpeed: 0.4,
      minSize: 1,
      maxSize: 2.5
    };
  }

  // Particle factory: random color, depth layer, drift velocity, pulse phase
  function makeParticle(w, h, cfg) {
    var layer = Math.random();
    var size = cfg.minSize + Math.random() * (cfg.maxSize - cfg.minSize);
    var speedScale = 0.4 + layer * 0.6;
    return {
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * cfg.maxSpeed * speedScale,
      vy: (Math.random() - 0.5) * cfg.maxSpeed * speedScale,
      r: size, rBase: size,
      pulsePhase: Math.random() * Math.PI * 2,
      pulseSpeed: 0.01 + Math.random() * 0.02,
      color: Math.random() < 0.5 ? CYAN : MAGENTA,
      layer: layer
    };
  }

  // Convert #RRGGBB hex to rgba() string with alpha
  function hexToRgba(hex, a) {
    var h = hex.charAt(0) === '#' ? hex.slice(1) : hex;
    var r = parseInt(h.substring(0, 2), 16);
    var g = parseInt(h.substring(2, 4), 16);
    var b = parseInt(h.substring(4, 6), 16);
    return 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
  }

  function HeroCanvas(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.cfg = getConfig();
    this.particles = [];
    this.mouse = { x: -9999, y: -9999, active: false };
    this.lastTime = 0;
    this.running = false;
    this.rafId = 0;

    this._loop = this.loop.bind(this);
    var self = this;
    this._onResize = function () { self.resize(); };
    this._onMove = function (e) {
      var r = self.canvas.getBoundingClientRect();
      self.mouse.x = e.clientX - r.left;
      self.mouse.y = e.clientY - r.top;
      self.mouse.active = true;
    };
    this._onLeave = function () { self.mouse.x = self.mouse.y = -9999; self.mouse.active = false; };
    this._onVis = function () {
      if (document.hidden) self.stop();
      else if (!self.canvas.hasAttribute('data-paused')) self.start();
    };

    this.resize();
    this.spawn();
    this.bind();
    this.start();
  }

  HeroCanvas.prototype.bind = function () {
    var self = this;
    window.addEventListener('resize', this._onResize);
    this.canvas.addEventListener('mousemove', this._onMove, { passive: true });
    this.canvas.addEventListener('mouseleave', this._onLeave, { passive: true });
    document.addEventListener('visibilitychange', this._onVis);
    if (typeof MutationObserver !== 'undefined') {
      new MutationObserver(function () {
        if (self.canvas.hasAttribute('data-paused')) self.stop();
        else self.start();
      }).observe(this.canvas, { attributes: true, attributeFilter: ['data-paused'] });
    }
  };

  HeroCanvas.prototype.resize = function () {
    var parent = this.canvas.parentElement || document.body;
    var w = parent.clientWidth || window.innerWidth;
    var h = parent.clientHeight || window.innerHeight;
    this.canvas.width = Math.floor(w * this.dpr);
    this.canvas.height = Math.floor(h * this.dpr);
    this.canvas.style.width = w + 'px';
    this.canvas.style.height = h + 'px';
    this.ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
    this.w = w; this.h = h;
    var nc = getConfig();
    if (nc.count !== this.cfg.count) { this.cfg = nc; this.spawn(); }
    else { this.cfg = nc; }
  };

  HeroCanvas.prototype.spawn = function () {
    this.particles.length = 0;
    for (var i = 0; i < this.cfg.count; i++) {
      this.particles.push(makeParticle(this.w, this.h, this.cfg));
    }
  };

  HeroCanvas.prototype.start = function () {
    if (this.running || this.canvas.hasAttribute('data-paused')) return;
    this.running = true;
    this.lastTime = performance.now();
    this.rafId = requestAnimationFrame(this._loop);
  };

  HeroCanvas.prototype.stop = function () {
    this.running = false;
    if (this.rafId) cancelAnimationFrame(this.rafId);
    this.rafId = 0;
  };

  // FPS-capped frame loop driven by requestAnimationFrame
  HeroCanvas.prototype.loop = function (t) {
    if (!this.running) return;
    var dt = t - this.lastTime;
    if (dt >= FRAME_MIN_MS) {
      this.lastTime = t - (dt % FRAME_MIN_MS);
      this.update();
      this.draw();
    }
    this.rafId = requestAnimationFrame(this._loop);
  };

  // Update positions: parallax drift, pulse, mouse repel, edge wrap
  HeroCanvas.prototype.update = function () {
    var w = this.w, h = this.h, m = this.mouse, repel = this.cfg.mouseRepel, repel2 = repel * repel;
    for (var i = 0; i < this.particles.length; i++) {
      var p = this.particles[i];
      if (m.active) {
        var dx = p.x - m.x, dy = p.y - m.y, d2 = dx * dx + dy * dy;
        if (d2 < repel2 && d2 > 0.01) {
          var d = Math.sqrt(d2);
          var f = (1 - d / repel) * 0.6;
          p.x += (dx / d) * f;
          p.y += (dy / d) * f;
        }
      }
      p.x += p.vx; p.y += p.vy;
      if (p.x < -10) p.x = w + 10; else if (p.x > w + 10) p.x = -10;
      if (p.y < -10) p.y = h + 10; else if (p.y > h + 10) p.y = -10;
      p.pulsePhase += p.pulseSpeed;
      p.r = p.rBase * (0.85 + 0.25 * Math.sin(p.pulsePhase));
    }
  };

  // Render: clear, draw additive-glow connection lines, then particle dots
  HeroCanvas.prototype.draw = function () {
    var ctx = this.ctx, ps = this.particles, n = ps.length;
    var linkDist = this.cfg.linkDist, linkDist2 = linkDist * linkDist;
    var m = this.mouse, mLink = this.cfg.mouseLink, mLink2 = mLink * mLink;

    ctx.clearRect(0, 0, this.w, this.h);
    ctx.globalCompositeOperation = 'lighter';
    ctx.lineWidth = 0.6;

    for (var i = 0; i < n; i++) {
      var a = ps[i];
      for (var j = i + 1; j < n; j++) {
        var b = ps[j];
        var dx = a.x - b.x, dy = a.y - b.y, d2 = dx * dx + dy * dy;
        if (d2 < linkDist2) {
          var alpha = (1 - d2 / linkDist2) * 0.5;
          ctx.strokeStyle = hexToRgba(a.color, alpha);
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
      if (m.active) {
        var mx = a.x - m.x, my = a.y - m.y, md2 = mx * mx + my * my;
        if (md2 < mLink2) {
          ctx.strokeStyle = hexToRgba(a.color, (1 - md2 / mLink2) * 0.7);
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(m.x, m.y);
          ctx.stroke();
        }
      }
    }

    for (var k = 0; k < n; k++) {
      var p = ps[k];
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.shadowBlur = 0;
    ctx.globalCompositeOperation = 'source-over';
  };

  function boot() {
    var canvas = document.getElementById('hero-canvas');
    if (!canvas || canvas.tagName !== 'CANVAS' || canvas.__heroCanvasInit) return;
    canvas.__heroCanvasInit = true;
    new HeroCanvas(canvas);
  }

  boot();
}
