import React, { useState } from 'react';

const contactItems = [
  {
    label: 'Email',
    value: 'bilalsalmani9897@gmail.com',
    href: 'mailto:bilalsalmani9897@gmail.com',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
        <polyline points="22,6 12,13 2,6"></polyline>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    value: '/in/bilal-6190ab292',
    href: 'https://linkedin.com/in/bilal-6190ab292',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect x="2" y="9" width="4" height="12"></rect>
        <circle cx="4" cy="4" r="2"></circle>
      </svg>
    ),
  },
  {
    label: 'GitHub',
    value: 'github.com/bilal9897',
    href: 'https://github.com/bilal9897',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
      </svg>
    ),
  },
  {
    label: 'Phone',
    value: '+91 9627897600',
    href: 'tel:+919627897600',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.63 3.36 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.65a16 16 0 0 0 6 6l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"></path>
      </svg>
    ),
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Hello Bilal! 👋\n\nName: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="contact" className="section-track" style={{ display: 'flex', flexWrap: 'wrap', gap: '60px', alignItems: 'flex-start', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '40px' }}>

      {/* Left: Info */}
      <div className="contact-left reveal" style={{ flex: '1 1 380px', maxWidth: '560px' }}>
        <div className="eyebrow" style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '14px', fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--c-gold)' }}>
          <span style={{ width: '28px', height: '1px', background: 'var(--c-gold)' }}></span>
          06 · GET IN TOUCH
        </div>
        <h2 className="section-title" style={{ fontSize: 'clamp(36px, 4vw, 52px)', marginBottom: '20px', lineHeight: '1.1' }}>
          Have an idea? <i style={{ color: 'var(--c-gold)' }}>Let's build it.</i>
        </h2>
        <p style={{ fontSize: '16px', lineHeight: '1.65', color: 'var(--c-warm)', marginBottom: '40px', opacity: '0.8' }}>
          I am always open to freelance opportunities, collaborations, and interesting projects. Whether you need a website, business software, or an AI-powered solution, I'd be happy to help.
        </p>

        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0' }}>
          {contactItems.map((item, i) => (
            <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '18px', padding: '16px 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '50%', border: '1px solid rgba(212,165,116,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--c-gold)', flexShrink: 0 }}>
                {item.icon}
              </div>
              <div>
                <div style={{ fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(232,238,247,0.45)', marginBottom: '3px' }}>{item.label}</div>
                <a href={item.href} target="_blank" rel="noopener noreferrer" style={{ color: '#fff', textDecoration: 'none', fontSize: '14px', transition: 'color 0.2s' }}
                   onMouseEnter={e => e.currentTarget.style.color = 'var(--c-gold)'}
                   onMouseLeave={e => e.currentTarget.style.color = '#fff'}>
                  {item.value}
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Right: Form */}
      <div className="contact-right reveal" style={{ flex: '1 1 380px', background: 'rgba(10,14,24,0.4)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '20px', padding: '32px' }}>
        <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }} onSubmit={handleSubmit}>
          <div>
            <label style={{ display: 'block', fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--c-gold)', marginBottom: '10px' }}>Your Name</label>
            <input required type="text" name="name" value={form.name} onChange={handleChange} placeholder="Jane Doe" style={{ width: '100%', padding: '13px 16px', background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '10px', color: '#fff', fontSize: '14px', outline: 'none', boxSizing: 'border-box' }} />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--c-gold)', marginBottom: '10px' }}>Email</label>
            <input required type="email" name="email" value={form.email} onChange={handleChange} placeholder="jane@example.com" style={{ width: '100%', padding: '13px 16px', background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '10px', color: '#fff', fontSize: '14px', outline: 'none', boxSizing: 'border-box' }} />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--c-gold)', marginBottom: '10px' }}>Message</label>
            <textarea required name="message" value={form.message} onChange={handleChange} placeholder="Tell me about your project, role, or idea..." rows="5" style={{ width: '100%', padding: '13px 16px', background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '10px', color: '#fff', fontSize: '14px', outline: 'none', resize: 'vertical', boxSizing: 'border-box' }}></textarea>
          </div>
          <button type="submit" style={{ width: '100%', padding: '14px', borderRadius: '10px', border: 'none', background: 'var(--c-gold)', color: '#0E0C0A', fontSize: '14px', fontWeight: '700', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Send via WhatsApp
          </button>
        </form>
      </div>

    </section>
  );
}
