import React from 'react';

export default function Education() {
  return (
    <section id="education" className="section-track">
      <div className="eyebrow reveal">05 · Education</div>
      <h2 className="section-title reveal">Where I <em>studied.</em></h2>

      <div className="edu-grid">
        <article className="edu-card reveal magnetic">
          <div className="edu-card__head">
            <span className="edu-card__org">Bachelor of Computer Applications (BCA)</span>
            <span className="edu-card__cgpa">Completed</span>
          </div>
          <div className="edu-card__degree">Degree</div>
          <div className="edu-card__courses">
            <span>Software Development</span><span>Databases</span><span>Programming</span>
            <span>Practical Projects</span>
          </div>
        </article>
      </div>
    </section>
  );
}
