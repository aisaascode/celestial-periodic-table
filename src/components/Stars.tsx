
import React, { useEffect, useRef } from "react";

const Stars: React.FC = () => {
  const starsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!starsContainerRef.current) return;
    
    const container = starsContainerRef.current;
    const containerRect = container.getBoundingClientRect();
    
    // Clear any existing stars
    container.innerHTML = '';
    
    // Create stars
    const starCount = 150;
    
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      
      // Random size between 1px and 3px
      const size = Math.random() * 2 + 1;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      
      // Random position
      const left = Math.random() * containerRect.width;
      const top = Math.random() * containerRect.height;
      star.style.left = `${left}px`;
      star.style.top = `${top}px`;
      
      // Random twinkle animation duration and delay
      star.style.setProperty('--twinkle-duration', `${Math.random() * 3 + 2}s`);
      star.style.setProperty('--twinkle-delay', `${Math.random() * 3}s`);
      
      // Add to container
      container.appendChild(star);
    }
  }, []);
  
  return <div ref={starsContainerRef} className="stars-container"></div>;
};

export default Stars;
