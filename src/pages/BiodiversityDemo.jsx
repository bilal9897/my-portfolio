import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function BiodiversityDemo() {
  // Scroll to top when mounted
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const images = [
    '/Assets/img/projects/biodiversity/p1.webp',
    '/Assets/img/projects/biodiversity/p2.webp',
    '/Assets/img/projects/biodiversity/p3.webp',
    '/Assets/img/projects/biodiversity/p4.webp',
    '/Assets/img/projects/biodiversity/p5.webp',
  ];

  return (
    <div className="demo-page" style={{ 
      minHeight: '100vh', 
      backgroundColor: 'var(--c-bg)', 
      color: 'var(--c-text)', 
      padding: '40px 20px',
      fontFamily: 'var(--font-sans)'
    }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Header */}
        <header style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          marginBottom: '40px',
          borderBottom: '1px solid rgba(255,255,255,0.1)',
          paddingBottom: '20px'
        }}>
          <h1 style={{ 
            fontSize: 'clamp(24px, 4vw, 36px)', 
            fontFamily: 'var(--font-serif)',
            margin: 0
          }}>
            Biodiversity <i style={{ color: 'var(--c-gold)' }}>Live Demo</i>
          </h1>
          
          <Link to="/" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '10px 20px',
            backgroundColor: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '30px',
            color: 'var(--c-text)',
            textDecoration: 'none',
            fontSize: '14px',
            transition: 'all 0.3s ease'
          }}
          onMouseOver={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.borderColor = 'var(--c-gold)'; }}
          onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
            Back to Portfolio
          </Link>
        </header>

        {/* Gallery */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '40px'
        }}>
          {images.map((src, index) => (
            <div key={index} style={{
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
              border: '1px solid rgba(255,255,255,0.05)'
            }}>
              <img 
                src={src} 
                alt={`Biodiversity screenshot ${index + 1}`} 
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block'
                }} 
              />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
