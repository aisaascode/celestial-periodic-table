
import React, { useEffect, useRef } from "react";

const Stars: React.FC = () => {
  const starsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!starsContainerRef.current) return;
    
    const container = starsContainerRef.current;
    const containerRect = container.getBoundingClientRect();
    
    // Clear any existing stars
    container.innerHTML = '';
    
    // Create stars with varying depths
    const starCount = 200; // Increased star count
    
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      
      // Random size between 1px and 4px
      const size = Math.random() * 3 + 1;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      
      // Random position
      const left = Math.random() * containerRect.width;
      const top = Math.random() * containerRect.height;
      star.style.left = `${left}px`;
      star.style.top = `${top}px`;
      
      // Add 3D depth effect with z-index and opacity
      const depth = Math.random();
      star.style.opacity = (0.2 + depth * 0.8).toString();
      star.style.zIndex = Math.floor(depth * 10).toString();
      
      // Different animation speeds based on depth
      const animationDuration = 2 + (1 - depth) * 5;
      star.style.setProperty('--twinkle-duration', `${animationDuration}s`);
      star.style.setProperty('--twinkle-delay', `${Math.random() * 5}s`);
      
      // Add parallax effect on mouse move
      star.dataset.depth = depth.toString();
      
      // Add to container
      container.appendChild(star);
    }
    
    // Add parallax movement on mouse move
    const handleMouseMove = (e: MouseEvent) => {
      const stars = container.querySelectorAll('.star');
      const mouseX = e.clientX / window.innerWidth - 0.5;
      const mouseY = e.clientY / window.innerHeight - 0.5;
      
      stars.forEach((star) => {
        const depth = parseFloat(star.getAttribute('data-depth') || "0");
        const moveX = mouseX * depth * 30;
        const moveY = mouseY * depth * 30;
        
        // Fix: Cast the Element to HTMLElement to access style property
        (star as HTMLElement).style.transform = `translate(${moveX}px, ${moveY}px)`;
      });
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return <div ref={starsContainerRef} className="stars-container"></div>;
};

export default Stars;
