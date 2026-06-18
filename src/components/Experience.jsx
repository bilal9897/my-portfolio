import React from 'react';

export default function Experience() {
  return (
    <section id="experience" className="section-track">
      <div className="eyebrow reveal">02 · Experience</div>
      <h2 className="section-title reveal">Where I've worked.</h2>
      
      <div className="timeline">
        <article className="timeline-item reveal">
          <div className="timeline-head">
            <span className="timeline-period">2025 — Present</span>
          </div>
          <h3 className="timeline-org">Freelance Software Developer</h3>
          <div className="timeline-role">Freelancer</div>
          <ul className="timeline-list">
            <li>Develop custom web applications and business software for clients.</li>
            <li>Build AI-powered tools and automation solutions.</li>
            <li>Create responsive and user-friendly interfaces.</li>
            <li>Transform client ideas into real products.</li>
          </ul>
        </article>

        <article className="timeline-item reveal">
          <div className="timeline-head">
            <span className="timeline-period">Internship</span>
          </div>
          <h3 className="timeline-org">Innovation Hub, Pilikula Science Centre</h3>
          <div className="timeline-role">Software Development Intern</div>
          <ul className="timeline-list">
            <li>Worked on the Biodiversity Explorer System, a government-supported project.</li>
            <li>Contributed to the development and deployment of the system.</li>
            <li>The application was successfully deployed and is being used at Pilikula Science Centre.</li>
            <li>Collaborated with the team to improve functionality and user experience.</li>
          </ul>
        </article>

        <article className="timeline-item reveal">
          <div className="timeline-head">
            <span className="timeline-period">Freelance</span>
          </div>
          <h3 className="timeline-org">International Client Projects</h3>
          <div className="timeline-role">Web Developer</div>
          <ul className="timeline-list">
            <li>Designed and developed a website for a UAE-based company.</li>
            <li>Delivered modern and responsive solutions based on client requirements.</li>
            <li>Maintained professional communication and project delivery standards.</li>
          </ul>
        </article>
      </div>
    </section>
  );
}
