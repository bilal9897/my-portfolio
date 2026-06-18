import React from 'react';

export default function Certifications() {
  return (
    <section id="certifications" className="section-track">
      <div className="eyebrow reveal">05 · Credentials</div>
      <h2 className="section-title reveal">Always <em>learning.</em></h2>
      <p className="section-subtitle reveal">Continuing education and the skills I've validated along the way.</p>

      <div className="cert-grid">
        <article className="cert-card reveal magnetic">
          <div className="cert-card__img">
            <img src="/Assets/img/Certification/Data Science with Python.png" alt="Data Science with Python certificate" loading="lazy" />
          </div>
          <div className="cert-card__body">
            <h4>Data Science with Python</h4>
            <div className="cert-card__meta">SkillUp · ID 3793907</div>
            <a className="cert-card__verify" href="https://simpli-web.app.link/e/YT2D0RfKGtb" target="_blank" rel="noopener noreferrer">
              Verify credential
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M9 7h8v8"/></svg>
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}
