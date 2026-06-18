import React, { useEffect } from 'react';
import initSkillViz from '../utils/skill-viz.js';

export default function Skills() {
  useEffect(() => {
    initSkillViz();
  }, []);

  return (
    <section id="skills" className="section-track">
      <div className="eyebrow reveal">04 · Toolkit</div>
      <h2 className="section-title reveal">The tools <em>I trust.</em></h2>
      <p className="section-subtitle reveal">Languages, frameworks and platforms I reach for when building serious work.</p>

      {/* Animated proficiency orbs (rendered by skill-viz.js) */}
      <div className="skills-grid reveal">
        <div className="skill-orb" data-skill-name="JavaScript" data-skill-level="90" data-skill-color="#D4A574" data-skill-icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"></div>
        <div className="skill-orb" data-skill-name="Python" data-skill-level="92" data-skill-color="#E8B988" data-skill-icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"></div>
        <div className="skill-orb" data-skill-name="Java" data-skill-level="80" data-skill-color="#D4A574" data-skill-icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"></div>
        <div className="skill-orb" data-skill-name="React" data-skill-level="88" data-skill-color="#E8B988" data-skill-icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"></div>
        <div className="skill-orb" data-skill-name="Flask" data-skill-level="85" data-skill-color="#D4A574" data-skill-icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg"></div>
        <div className="skill-orb" data-skill-name="FastAPI" data-skill-level="82" data-skill-color="#E8B988" data-skill-icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg"></div>
        <div className="skill-orb" data-skill-name="MySQL" data-skill-level="85" data-skill-color="#D4A574" data-skill-icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"></div>
        <div className="skill-orb" data-skill-name="Machine Learning" data-skill-level="75" data-skill-color="#E8B988" data-skill-icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg"></div>
      </div>

      {/* Categorized */}
      <div className="skill-categories reveal">
        <div className="skill-category">
          <h4>Languages</h4>
          <div className="skill-category-list">
            <span className="skill-tag">JavaScript</span>
            <span className="skill-tag">Python</span>
            <span className="skill-tag">Java</span>
            <span className="skill-tag">HTML / CSS</span>
            <span className="skill-tag">SQL</span>
          </div>
        </div>
        <div className="skill-category">
          <h4>Frameworks</h4>
          <div className="skill-category-list">
            <span className="skill-tag">React</span>
            <span className="skill-tag">Flask</span>
            <span className="skill-tag">FastAPI</span>
            <span className="skill-tag">Tailwind CSS</span>
            <span className="skill-tag">Bootstrap</span>
          </div>
        </div>
        <div className="skill-category">
          <h4>AI &amp; Data</h4>
          <div className="skill-category-list">
            <span className="skill-tag">OCR</span>
            <span className="skill-tag">Machine Learning</span>
            <span className="skill-tag">OpenCV</span>
            <span className="skill-tag">Pandas</span>
          </div>
        </div>
        <div className="skill-category">
          <h4>Databases</h4>
          <div className="skill-category-list">
            <span className="skill-tag">SQLite</span>
            <span className="skill-tag">MySQL</span>
            <span className="skill-tag">Supabase</span>
          </div>
        </div>
        <div className="skill-category">
          <h4>Tools</h4>
          <div className="skill-category-list">
            <span className="skill-tag">Git</span>
            <span className="skill-tag">VS Code</span>
            <span className="skill-tag">Figma</span>
            <span className="skill-tag">Postman</span>
          </div>
        </div>
      </div>
    </section>
  );
}
