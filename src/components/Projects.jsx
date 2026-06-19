import React, { useState } from 'react';

const projects = [
  {
    id: '01',
    title: 'Biodiversity',
    italicText: 'Explorer System',
    desc: 'A government-supported digital platform developed during my internship at Innovation Hub, Pilikula Science Centre. Deployed and actively used at the science centre.',
    stack: ['React', 'Python', 'Database'],
    live: true,
    visitUrl: '#',
    sourceUrl: 'https://github.com/bilal9897',
    image: '/Assets/img/projects/biodiversity.png'
  },
  {
    id: '02',
    title: 'CueCafe',
    italicText: 'Pro',
    desc: 'Offline Cafe & Pool Hall Management Software with billing, session tracking, reports, customer records, and offline functionality.',
    stack: ['React', 'SQLite', 'Electron', 'PWA'],
    live: true,
    visitUrl: '#',
    sourceUrl: 'https://github.com/bilal9897',
    image: '/Assets/img/projects/cuecafe.png'
  },
  {
    id: '03',
    title: 'UAE Business',
    italicText: 'Website',
    desc: 'A professional website developed for a UAE-based client with a focus on performance, responsiveness, and modern design.',
    stack: ['React', 'JavaScript', 'UI/UX'],
    live: true,
    visitUrl: 'https://analystuae.com/',
    sourceUrl: 'https://github.com/bilal9897',
    image: '/Assets/img/projects/uae.png',
    mobileImage: '/Assets/img/projects/mobile-uae.png'
  },
  {
    id: '04',
    title: 'Salon Hisab',
    italicText: 'Kitab',
    desc: 'A business management system for salons to manage workers, expenses, income, and reports.',
    stack: ['React', 'Flask', 'OCR', 'SQLite'],
    live: true,
    visitUrl: '#',
    sourceUrl: 'https://github.com/bilal9897',
    image: '/Assets/img/projects/salon.png'
  }
];

export default function Projects() {
  const [flippedId, setFlippedId] = useState(null);

  return (
    <section id="projects" className="section-track">
      <div className="eyebrow reveal" style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '12px', fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--c-gold)' }}>
        <span style={{ width: '28px', height: '1px', background: 'var(--c-gold)' }}></span>
        03 · SELECTED WORK
      </div>
      <h2 className="section-title reveal" style={{ fontSize: 'clamp(36px, 4vw, 52px)', marginBottom: '36px', lineHeight: '1.1' }}>
        Things I've <i style={{ color: 'var(--c-gold)' }}>shipped.</i>
      </h2>

      {/* ── Desktop layout ── */}
      <div className="projects-desktop">
        {projects.map((proj, index) => {
          const isEven = index % 2 === 0;
          return (
            <article key={proj.id} className="project reveal" style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '32px',
              alignItems: 'center',
              flexDirection: isEven ? 'row' : 'row-reverse',
              borderBottom: '1px solid rgba(255,255,255,0.04)',
              paddingBottom: '48px',
              marginBottom: '48px',
            }}>
              {/* Text Side */}
              <div style={{ flex: '1 1 340px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                  <span style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--c-gold)', fontWeight: '600' }}>PROJECT · {proj.id}</span>
                  <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.06)' }}></div>
                  {proj.live && <span style={{ padding: '3px 10px', border: '1px solid rgba(212,165,116,0.35)', borderRadius: '20px', fontSize: '9px', letterSpacing: '0.1em', color: 'var(--c-gold)' }}>LIVE</span>}
                </div>
                <h3 style={{ fontSize: 'clamp(22px, 3vw, 32px)', marginBottom: '10px', lineHeight: '1.15', fontFamily: 'var(--font-serif)', fontWeight: 400 }}>
                  {proj.title} <i style={{ color: 'var(--c-gold)' }}>{proj.italicText}</i>
                </h3>
                <p style={{ fontSize: '14px', lineHeight: '1.65', color: 'var(--c-warm)', marginBottom: '18px', opacity: '0.8', maxWidth: '440px' }}>{proj.desc}</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 22px 0', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {proj.stack.map((tech, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'rgba(232,238,247,0.9)' }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--c-gold)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      {tech}
                    </li>
                  ))}
                </ul>
                <div style={{ display: 'flex', gap: '12px' }}>
                  <a href={proj.visitUrl} target="_blank" rel="noopener noreferrer" className="proj-desktop-btn">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                    Visit Project →
                  </a>
                  {proj.sourceUrl !== '#' && <a href={proj.sourceUrl} target="_blank" rel="noopener noreferrer" className="proj-desktop-btn proj-desktop-btn--ghost">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
                    Source →
                  </a>}
                </div>
              </div>
              {/* Image Side */}
              <div className="proj-desktop-img">
                {proj.image && <img src={proj.image} alt={proj.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />}
              </div>
            </article>
          );
        })}
      </div>

      {/* ── Mobile carousel ── */}
      <div className="projects-mobile">
        {projects.map((proj) => (
          <div
            key={proj.id}
            className={`proj-card ${flippedId === proj.id ? 'is-flipped' : ''}`}
            onClick={() => setFlippedId(flippedId === proj.id ? null : proj.id)}
          >
            <div className="proj-card__inner">
              {/* Front */}
              <div className="proj-card__front">
                {(proj.mobileImage || proj.image) && <img src={proj.mobileImage || proj.image} alt={proj.title} className="proj-card__img" />}
                <div className="proj-card__front-overlay">
                  <h3 className="proj-card__front-title">{proj.title} <i>{proj.italicText}</i></h3>
                  <span className="proj-card__front-cta">TAP TO EXPLORE →</span>
                </div>
                {/* Glassy bottom bar with buttons */}
                <div className="proj-card__bottom-bar" onClick={(e) => e.stopPropagation()}>
                  <a href={proj.visitUrl} target="_blank" rel="noopener noreferrer" className="proj-card__bar-btn">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                    Visit
                  </a>
                  <div className="proj-card__bar-divider"></div>
                  <a href={proj.sourceUrl} target="_blank" rel="noopener noreferrer" className="proj-card__bar-btn">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
                    Source
                  </a>
                </div>
              </div>
              {/* Back */}
              <div className="proj-card__back">
                {(proj.mobileImage || proj.image) && <div className="proj-card__back-bg" style={{ backgroundImage: `url(${proj.mobileImage || proj.image})` }}></div>}
                <button className="proj-card__close" onClick={(e) => { e.stopPropagation(); setFlippedId(null); }}>✕</button>
                <div className="proj-card__back-content">
                  <h3 className="proj-card__back-title">{proj.title} <i style={{ color: 'var(--c-gold)' }}>{proj.italicText}</i></h3>
                  <p className="proj-card__back-desc">{proj.desc}</p>
                  <ul className="proj-card__stack">
                    {proj.stack.map((tech, i) => (
                      <li key={i}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--c-gold)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <div className="proj-card__back-links">
                    <a href={proj.visitUrl} target="_blank" rel="noopener noreferrer">Visit Project →</a>
                    {proj.sourceUrl !== '#' && <a href={proj.sourceUrl} target="_blank" rel="noopener noreferrer">Source →</a>}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
