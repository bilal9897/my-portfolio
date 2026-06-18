import React from 'react';

export default function Footer() {
  const year = new Date().getFullYear();

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    {
      label: 'GitHub',
      href: 'https://github.com/bilal9897',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
        </svg>
      ),
    },
    {
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/bilal-6190ab292',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
    },
    {
      label: 'Instagram',
      href: '#',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      ),
    },
    {
      label: 'Email',
      href: 'mailto:bilalsalmani9897@gmail.com',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      ),
    },
  ];

  return (
    <footer style={{
      background: 'var(--c-bg)',
      borderTop: '1px solid rgba(212, 165, 116, 0.12)',
      padding: '64px 8% 32px',
    }}>

      {/* Top Row */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        gap: '48px',
        marginBottom: '48px',
      }}>

        {/* Brand Block */}
        <div style={{ maxWidth: '360px' }}>
          <div style={{
            fontFamily: 'var(--font-serif)',
            fontStyle: 'italic',
            fontSize: '36px',
            color: 'var(--c-gold)',
            marginBottom: '16px',
            lineHeight: 1,
          }}>
            Bilal.
          </div>
          <p style={{
            color: 'var(--c-warm)',
            fontSize: '14px',
            lineHeight: '1.75',
            opacity: 0.75,
            marginBottom: '28px',
          }}>
            Building practical software and AI-powered solutions for real business.
            Open for freelance, collaboration, and exciting opportunities.
          </p>
          {/* Social Icons */}
          <div style={{ display: 'flex', gap: '12px' }}>
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                title={s.label}
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  border: '1px solid rgba(212, 165, 116, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--c-mute)',
                  transition: 'all 0.25s',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--c-gold)'; e.currentTarget.style.color = 'var(--c-gold)'; e.currentTarget.style.background = 'rgba(212,165,116,0.08)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(212,165,116,0.2)'; e.currentTarget.style.color = 'var(--c-mute)'; e.currentTarget.style.background = 'transparent'; }}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Nav Links */}
        <div>
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '10px',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--c-gold)',
            marginBottom: '20px',
          }}>
            Navigation
          </div>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  style={{
                    color: 'var(--c-warm)',
                    fontSize: '14px',
                    opacity: 0.75,
                    textDecoration: 'none',
                    transition: 'all 0.2s',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.color = 'var(--c-gold)'; e.currentTarget.style.opacity = 1; }}
                  onMouseLeave={e => { e.currentTarget.style.color = 'var(--c-warm)'; e.currentTarget.style.opacity = 0.75; }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact CTA */}
        <div style={{ maxWidth: '280px' }}>
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '10px',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--c-gold)',
            marginBottom: '20px',
          }}>
            Let's Talk
          </div>
          <p style={{ color: 'var(--c-warm)', fontSize: '14px', lineHeight: '1.7', opacity: 0.75, marginBottom: '20px' }}>
            Have a project in mind? I'd love to hear about it.
          </p>
          <a
            href="mailto:info@bilal.com"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '12px 24px',
              borderRadius: '999px',
              background: 'var(--c-gold)',
              color: '#0E0C0A',
              fontWeight: 600,
              fontSize: '13px',
              letterSpacing: '0.04em',
              textDecoration: 'none',
              transition: 'all 0.25s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--c-gold-2)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--c-gold)'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            Say Hello
          </a>
        </div>

      </div>

      {/* Divider */}
      <div style={{ height: '1px', background: 'rgba(255,255,255,0.05)', marginBottom: '28px' }} />

      {/* Bottom Bar */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '12px',
        fontSize: '11px',
        fontFamily: 'var(--font-mono)',
        letterSpacing: '0.1em',
        color: 'var(--c-faint)',
        textTransform: 'uppercase',
      }}>
        <span>© {year} · Bilal · All rights reserved</span>
        <span>Designed &amp; built with care</span>
      </div>

    </footer>
  );
}
