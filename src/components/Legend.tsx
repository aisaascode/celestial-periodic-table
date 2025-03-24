
import React from "react";
import { X } from "lucide-react";

type CategoryInfo = {
  name: string;
  color: string;
  description: string;
};

const categories: CategoryInfo[] = [
  {
    name: "Alkali Metals",
    color: "bg-alkali",
    description: "Highly reactive metals that form strong bases when combined with water."
  },
  {
    name: "Alkaline Earth Metals",
    color: "bg-alkaline",
    description: "Reactive metals with lower reactivity than alkali metals."
  },
  {
    name: "Transition Metals",
    color: "bg-transition",
    description: "Metals that form colored compounds and act as catalysts."
  },
  {
    name: "Post-Transition Metals",
    color: "bg-post-transition",
    description: "Metals with poor mechanical properties and lower melting points."
  },
  {
    name: "Metalloids",
    color: "bg-metalloid",
    description: "Elements with properties of both metals and non-metals."
  },
  {
    name: "Nonmetals",
    color: "bg-nonmetal",
    description: "Poor conductors of heat and electricity with varied properties."
  },
  {
    name: "Halogens",
    color: "bg-halogen",
    description: "Highly reactive nonmetals that form salts when reacting with metals."
  },
  {
    name: "Noble Gases",
    color: "bg-noble-gas",
    description: "Extremely stable elements with low reactivity due to their filled valence shells."
  },
  {
    name: "Lanthanides",
    color: "bg-lanthanide",
    description: "Rare earth elements with similar chemical properties."
  },
  {
    name: "Actinides",
    color: "bg-actinide",
    description: "Radioactive elements, many of which are synthetic."
  },
  {
    name: "Unknown Properties",
    color: "bg-unknown",
    description: "Recently discovered elements with properties not fully understood."
  }
];

interface LegendProps {
  onClose: () => void;
}

const Legend: React.FC<LegendProps> = ({ onClose }) => {
  return (
    <>
      <div className="modal-overlay" onClick={onClose}></div>
      <div className="modal-content">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Periodic Table Legend</h2>
          <button onClick={onClose} className="p-1 rounded-full hover:bg-muted">
            <X size={20} />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {categories.map((category) => (
            <div key={category.name} className="border rounded-lg p-3 backdrop-blur-sm bg-background/30">
              <div className="flex items-center gap-2 mb-1">
                <div className={`w-6 h-6 rounded-md ${category.color} border`}></div>
                <h3 className="font-medium">{category.name}</h3>
              </div>
              <p className="text-sm text-muted-foreground">{category.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Legend;
