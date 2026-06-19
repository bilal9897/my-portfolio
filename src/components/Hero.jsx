import React, { useEffect } from 'react';
import initHeroCanvas from '../utils/hero-canvas.js';

export default function Hero() {
  useEffect(() => {
    // Initialize Canvas Background
    initHeroCanvas();

    // Typing effect logic
    const el = document.getElementById('typedText');
    let rafId = null;
    let timeoutId = null;
    let isActive = true;

    if (el) {
      const roles = ['Software Developer', 'Full-Stack Developer', 'Freelancer', 'Problem solver', 'Builder'];
      let roleIdx = 0, charIdx = 0, deleting = false;
      
      function tick() {
        if (!isActive) return;
        const word = roles[roleIdx];
        if (!deleting) {
          el.textContent = word.slice(0, ++charIdx);
          if (charIdx === word.length) { 
            deleting = true; 
            timeoutId = setTimeout(tick, 1800); 
            return; 
          }
        } else {
          el.textContent = word.slice(0, --charIdx);
          if (charIdx === 0) { 
            deleting = false; 
            roleIdx = (roleIdx + 1) % roles.length; 
          }
        }
        timeoutId = setTimeout(tick, deleting ? 35 : 95);
      }
      tick();
    }

    return () => {
      isActive = false;
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      <section id="hero" className="section-track">
        <div className="hero-canvas-wrap" aria-hidden="true">
          <canvas id="hero-canvas"></canvas>
        </div>

        <div className="hero-stamp">
          <div>Portfolio<br/>Vol. <span className="year">VII</span></div>
        </div>

        <div className="hero-content">
          <div className="hero-meta reveal">
            <span className="dot"></span>
            <span>Software Developer</span>
            <span className="sep">·</span>
            <span>Full-Stack Developer</span>
            <span className="sep">·</span>
            <span className="gold">Available for Freelance Work</span>
          </div>

          <h1 className="hero-title reveal">
            <span className="first">Bilal.</span>
          </h1>

          <p className="hero-deck reveal">
            I'm a <span className="typed" id="typedText">Software Developer</span> &mdash;
            building practical software and AI-powered solutions for real businesses.
          </p>

          <p className="hero-description reveal">
            <span className="desktop-text">
              I’m a Software Engineer who enjoys turning ideas into digital products. I build websites, mobile applications, and AI-powered solutions that solve real-world problems, focusing on simplicity, reliability, and great user experiences.
            </span>
            <span className="mobile-text">
              I’m a software developer who enjoys turning ideas into useful products and building solutions that solve real-world problems
            </span>
          </p>

          <div className="hero-cta reveal">
            <a href="#projects" className="btn btn--primary magnetic">
              View My Work
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
            <a href="#contact" className="btn btn--ghost magnetic">Get In Touch</a>
          </div>

          <div className="hero-signature reveal reveal-stagger">
            <div className="hero-sig-item">
              <div className="hero-sig-num">BCA<span className="small"> Graduate</span></div>
              <div className="hero-sig-label">Completed</div>
            </div>
            <div className="hero-sig-item">
              <div className="hero-sig-num">10<span className="small">+</span></div>
              <div className="hero-sig-label">Projects Built</div>
            </div>
            <div className="hero-sig-item">
              <div className="hero-sig-num">Freelance<span className="small"></span></div>
              <div className="hero-sig-label">Developer</div>
            </div>
          </div>
        </div>

        <div className="hero-portrait reveal">
          <div className="hero-portrait__frame">
            <img src="/Assets/img/ProfilePics/bilal-hero.png" alt="Bilal — portrait" />
            <div className="hero-portrait__caption">— Bilal · 2026 —</div>
          </div>
        </div>
      </section>
    </>
  );
}
