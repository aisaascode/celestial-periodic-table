
import React, { useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import PeriodicTable from "../components/PeriodicTable";
import Stars from "../components/Stars";
import { Button } from "../components/ui/button";
import { cn } from "../lib/utils";
import { TooltipProvider } from "@/components/ui/tooltip";

const Index: React.FC = () => {
  const mainRef = useRef<HTMLDivElement>(null);

  // Add subtle 3D perspective effect on mouse move
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!mainRef.current) return;
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      // Calculate how far the mouse is from the center of the screen
      const moveX = (clientX - innerWidth / 2) / (innerWidth / 2);
      const moveY = (clientY - innerHeight / 2) / (innerHeight / 2);
      
      // Apply a subtle rotation effect based on mouse position
      mainRef.current.style.transform = `perspective(1200px) rotateX(${moveY * 2}deg) rotateY(${-moveX * 2}deg)`;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      <Stars />
      <Navbar />
      
      <main 
        ref={mainRef} 
        className="flex-1 container mx-auto px-4 py-8 transition-transform duration-300 ease-out"
      >
        <div className="text-center mb-8 space-y-4 animate-fade-in">
          <h1 className={cn(
            "text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight",
            "bg-gradient-to-r from-white via-purple-100 to-blue-100 bg-clip-text text-transparent"
          )}>
            Galactic Elements
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore the elements of our universe through this interactive periodic table.
            Click on any element to discover its properties and learn more about its role in the cosmos.
          </p>
        </div>
        
        <div className="flex justify-center mb-8 gap-4">
          <Button 
            variant="secondary"
            className="bg-secondary/40 backdrop-blur-sm border border-white/5 hover:bg-secondary/60 transform hover:scale-105 transition-transform"
          >
            Filter Elements
          </Button>
          <Button 
            variant="secondary"
            className="bg-secondary/40 backdrop-blur-sm border border-white/5 hover:bg-secondary/60 transform hover:scale-105 transition-transform"
          >
            View Legend
          </Button>
        </div>
        
        <TooltipProvider>
          <PeriodicTable />
        </TooltipProvider>
      </main>
      
      <footer className="py-6 border-t border-border/40 backdrop-blur-sm">
        <div className="container text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Galactic Elements. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
