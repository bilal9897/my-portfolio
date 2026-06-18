import React from 'react';

export default function Marquee() {
  const items = [
    "Full-Stack Web",
    "Cloud Infrastructure",
    "Backend Engineering",
    "Machine Learning",
    "Computer Vision",
    "AI Integration",
    "Database Management"
  ];

  return (
    <div className="marquee">
      <div className="marquee__track">
        {[...Array(2)].map((_, groupIndex) => (
          <React.Fragment key={groupIndex}>
            {items.map((item, index) => (
              <div className="marquee__item" key={`${groupIndex}-${index}`}>
                {item} <span className="star">✦</span>
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
