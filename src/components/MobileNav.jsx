import React, { useState, useEffect } from 'react';

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const onScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 30);
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY = currentScrollY;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setIsOpen(false);

  return (
    <>
      {/* Floating Pill Header — mobile only */}
      <header className="mobile-nav" style={{
        position: 'fixed',
        top: '14px',
        left: '50%',
        transform: isVisible ? 'translate(-50%, 0)' : 'translate(-50%, -150px)',
        zIndex: 1000,
        width: 'calc(100% - 32px)',
        maxWidth: '420px',
        display: 'none', /* shown via CSS .mobile-nav { display: flex } */
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px 16px',
        background: scrolled
          ? 'rgba(22, 18, 14, 0.92)'
          : 'rgba(22, 18, 14, 0.75)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderRadius: '999px',
        border: '1px solid rgba(212, 165, 116, 0.15)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
        transition: 'background 0.35s ease, box-shadow 0.35s ease, transform 0.4s ease',
      }}>

        {/* Brand */}
        <a href="#hero" onClick={close} style={{
          textDecoration: 'none',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          flexShrink: 0,
        }}>
          <span style={{
            fontFamily: 'var(--font-serif)',
            fontStyle: 'italic',
            fontSize: '22px',
            color: 'var(--c-gold)',
            lineHeight: 1,
          }}>B.</span>
          <span style={{
            fontSize: '12px',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'rgba(232,238,247,0.65)',
            fontWeight: 500,
          }}>Bilal.</span>
        </a>

        {/* Right: social dots + hamburger */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {/* Small social icon circles */}
          <a href="https://github.com/bilal9897" target="_blank" rel="noopener noreferrer"
            style={{ width: '30px', height: '30px', borderRadius: '50%', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(212,165,116,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(232,238,247,0.6)', textDecoration: 'none' }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
            </svg>
          </a>
          <a href="https://linkedin.com/in/bilal-6190ab292" target="_blank" rel="noopener noreferrer"
            style={{ width: '30px', height: '30px', borderRadius: '50%', background: 'rgba(212,165,116,0.18)', border: '1px solid rgba(212,165,116,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--c-gold)', textDecoration: 'none' }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
            </svg>
          </a>

          {/* Hamburger */}
          <button
            onClick={() => setIsOpen(o => !o)}
            aria-label="Menu"
            style={{
              background: isOpen ? 'var(--c-gold)' : 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(212,165,116,0.2)',
              borderRadius: '50%',
              width: '34px',
              height: '34px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: isOpen ? '#0E0C0A' : 'rgba(232,238,247,0.8)',
              transition: 'all 0.25s',
              flexShrink: 0,
            }}
          >
            {isOpen ? (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M18 6L6 18M6 6l12 12"/>
              </svg>
            ) : (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M3 7h18M3 12h12M3 17h8"/>
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* Slide-down Menu */}
      <div style={{
        position: 'fixed',
        top: isOpen ? '72px' : '14px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 998,
        width: 'calc(100% - 32px)',
        maxWidth: '420px',
        background: 'rgba(18, 14, 11, 0.97)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        borderRadius: '24px',
        border: '1px solid rgba(212,165,116,0.12)',
        boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
        padding: isOpen ? '20px 0 24px' : '0',
        maxHeight: isOpen ? '420px' : '0px',
        overflow: 'hidden',
        opacity: isOpen ? 1 : 0,
        transition: 'all 0.45s cubic-bezier(0.76, 0, 0.24, 1)',
        pointerEvents: isOpen ? 'all' : 'none',
        display: 'none', /* shown via .mobile-nav CSS */
      }} className="mobile-drawer">

        {navLinks.map((link, i) => (
          <a
            key={link.href}
            href={link.href}
            onClick={close}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '13px 24px',
              color: 'rgba(232,238,247,0.85)',
              textDecoration: 'none',
              fontSize: '15px',
              fontWeight: 500,
              letterSpacing: '0.02em',
              borderBottom: i < navLinks.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none',
              transition: 'color 0.2s, background 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.color = 'var(--c-gold)'; e.currentTarget.style.background = 'rgba(212,165,116,0.05)'; }}
            onMouseLeave={e => { e.currentTarget.style.color = 'rgba(232,238,247,0.85)'; e.currentTarget.style.background = 'transparent'; }}
          >
            <span>{link.label}</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.4">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        ))}

        <div style={{ margin: '16px 24px 0', padding: '16px 0 0', borderTop: '1px solid rgba(255,255,255,0.05)', display: 'flex', gap: '12px', alignItems: 'center' }}>
          <span style={{ fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(232,238,247,0.3)' }}>Connect</span>
          <a href="mailto:bilalsalmani9897@gmail.com" style={{ fontSize: '11px', color: 'rgba(232,238,247,0.5)', textDecoration: 'none' }}>bilalsalmani9897@gmail.com</a>
        </div>
      </div>

      {/* Backdrop tap to close */}
      {isOpen && (
        <div onClick={close} style={{ position: 'fixed', inset: 0, zIndex: 997 }} />
      )}
    </>
  );
}
