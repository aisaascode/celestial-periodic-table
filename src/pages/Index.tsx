
import React from "react";
import Navbar from "../components/Navbar";
import PeriodicTable from "../components/PeriodicTable";
import Stars from "../components/Stars";
import { Button } from "../components/ui/button";
import { cn } from "../lib/utils";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Stars />
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="text-center mb-8 space-y-4 animate-fade-in">
          <h1 className={cn(
            "text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight",
            "bg-gradient-to-r from-white via-purple-100 to-blue-100 bg-clip-text text-transparent"
          )}>
            Celestial Periodic Table
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore the elements of our universe through this interactive periodic table.
            Click on any element to discover its properties and learn more about its role in the cosmos.
          </p>
        </div>
        
        <div className="flex justify-center mb-8 gap-4">
          <Button 
            variant="secondary"
            className="bg-secondary/40 backdrop-blur-sm border border-white/5 hover:bg-secondary/60"
          >
            Filter Elements
          </Button>
          <Button 
            variant="secondary"
            className="bg-secondary/40 backdrop-blur-sm border border-white/5 hover:bg-secondary/60"
          >
            View Legend
          </Button>
        </div>
        
        <PeriodicTable />
      </main>
      
      <footer className="py-6 border-t border-border/40 backdrop-blur-sm">
        <div className="container text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Celestial Periodic Table. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
