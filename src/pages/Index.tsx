
import React from "react";
import Navbar from "../components/Navbar";
import PeriodicTable from "../components/PeriodicTable";
import Stars from "../components/Stars";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Stars />
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="text-center mb-8 space-y-4 animate-fade-in">
          <h1 className="text-4xl font-bold tracking-tight">Celestial Periodic Table</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore the elements of our universe through this interactive periodic table.
            Click on any element to discover its properties and learn more about its role in the cosmos.
          </p>
        </div>
        
        <PeriodicTable />
      </main>
      
      <footer className="py-6 border-t border-border">
        <div className="container text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Celestial Periodic Table. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
