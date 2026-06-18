import React from 'react';

export default function About() {
  return (
    <section id="about" className="section-track">
      <div className="eyebrow reveal">01 · The story so far</div>
      <h2 className="section-title reveal">A curious mind, <em>always building.</em></h2>

      <div className="about-grid">
        <div className="about-body reveal">
          <p className="about-lede">
            I am a software developer with a passion for creating useful digital products. After completing my BCA, I started working as a freelance developer and helping businesses turn ideas into real applications.
          </p>
          <p>
            I completed my internship at Innovation Hub, Pilikula Science Centre, where I worked on a government-supported project called the Biodiversity Explorer System. The system was successfully deployed and is being used at the science centre.
          </p>
          <p>
            I have also built websites for international clients, including a UAE-based company, and developed business software for local businesses. I enjoy learning new technologies and finding simple solutions to complex problems.
          </p>
          <p>
            I believe good software should not only work well but should also provide a smooth and enjoyable experience for users.
          </p>
        </div>

        <aside className="about-side reveal">
          <blockquote className="about-pull">
            "Keep learning, keep building, and never stop improving."
            <cite>— Working principle</cite>
          </blockquote>

          <div className="eyebrow" style={{ marginTop: '4px' }}>What I work with</div>
          <div className="about-tags">
            <span className="about-tag"><span className="label">LANG</span>JavaScript</span>
            <span className="about-tag"><span className="label">LANG</span>Python</span>
            <span className="about-tag"><span className="label">LANG</span>Java</span>
            <span className="about-tag"><span className="label">DB</span>SQLite · MySQL · Supabase</span>
            <span className="about-tag"><span className="label">FW</span>React · Flask · FastAPI</span>
            <span className="about-tag"><span className="label">AI</span>OCR · Machine Learning</span>
            <span className="about-tag"><span className="label">TOOLS</span>Git · VS Code · Figma</span>
          </div>
        </aside>
      </div>
    </section>
  );
}
