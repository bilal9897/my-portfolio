import React from 'react';

export default function About() {
  return (
    <section id="about" className="section-track">
      <div className="eyebrow reveal">01 · The story so far</div>
      <h2 className="section-title reveal">A curious mind, <em>always building.</em></h2>

      <div className="about-grid">
        <div className="about-body reveal">
          <p className="about-lede">
            I am Bilal Salmani, a <strong>Full Stack Developer</strong> and <strong>React Developer</strong> with a passion for creating high-performing, elegant digital products. I specialize in designing <strong>Luxury Websites</strong> with modern UI/UX and smooth <strong>GSAP Animations</strong>.
          </p>
          <p>
            Beyond traditional web development, I integrate <strong>AI Automation</strong> and cutting-edge technologies to build smart, scalable solutions. Whether developing complex AI-powered business tools or crafting immersive web experiences, I prioritize <strong>Performance Optimization</strong> to ensure every application is lightning fast and accessible.
          </p>
          <p>
            I completed my internship at Innovation Hub, Pilikula Science Centre, where I worked on a government-supported project called the Biodiversity Explorer System. I have also built websites for international clients, including a UAE-based company, and developed business software for local businesses.
          </p>
          <p>
            I believe good software should not only look stunning but should also provide a seamless, optimized, and intuitive experience for users.
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
