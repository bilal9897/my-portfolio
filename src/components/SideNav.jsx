import React from 'react';

export default function SideNav() {
  return (
    <aside className="side-nav" aria-label="Primary navigation">
      <div className="side-nav__brand">B.</div>
      <div className="side-nav__brand-mark">2026</div>

      <ul className="side-nav__list">
        <li>
          <a href="#hero" className="side-nav__link nav-link" data-target="#hero" aria-label="Home">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12l9-9 9 9M5 10v10h14V10"/></svg>
            <span className="side-nav__tooltip">Home</span>
          </a>
        </li>
        <li>
          <a href="#about" className="side-nav__link nav-link" data-target="#about" aria-label="About">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21v-1a8 8 0 0116 0v1"/></svg>
            <span className="side-nav__tooltip">About</span>
          </a>
        </li>
        <li>
          <a href="#experience" className="side-nav__link nav-link" data-target="#experience" aria-label="Experience">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="M3 17l6-6 4 4 8-8"/><path d="M14 7h7v7"/></svg>
            <span className="side-nav__tooltip">Experience</span>
          </a>
        </li>
        <li>
          <a href="#projects" className="side-nav__link nav-link" data-target="#projects" aria-label="Selected Work">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>
            <span className="side-nav__tooltip">Selected Work</span>
          </a>
        </li>
        <li>
          <a href="#skills" className="side-nav__link nav-link" data-target="#skills" aria-label="Toolkit">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>
            <span className="side-nav__tooltip">Toolkit</span>
          </a>
        </li>

        <li>
          <a href="#education" className="side-nav__link nav-link" data-target="#education" aria-label="Education">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10L12 4 2 10l10 6 10-6z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
            <span className="side-nav__tooltip">Education</span>
          </a>
        </li>
        <li>
          <a href="#contact" className="side-nav__link nav-link" data-target="#contact" aria-label="Contact">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16v16H4z"/><path d="M4 4l8 8 8-8"/></svg>
            <span className="side-nav__tooltip">Contact</span>
          </a>
        </li>
        <li>
          <a href="/Resume.html" target="_blank" rel="noopener noreferrer" className="side-nav__link" aria-label="Resume">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6M9 13h6M9 17h6"/></svg>
            <span className="side-nav__tooltip">Résumé</span>
          </a>
        </li>
      </ul>
      <div className="side-nav__footer">EST · MMXXVI</div>
    </aside>
  );
}
