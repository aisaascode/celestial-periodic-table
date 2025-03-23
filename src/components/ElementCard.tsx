
import React from "react";
import { Element, getCategoryColor } from "../data/elements";
import { cn } from "../lib/utils";

interface ElementCardProps {
  element: Element;
  onClick: () => void;
}

const ElementCard: React.FC<ElementCardProps> = ({ element, onClick }) => {
  const categoryColor = getCategoryColor(element.category);

  return (
    <div
      className={cn(
        "element-card flex flex-col items-center justify-center p-1 rounded-md transition-all duration-300 backdrop-blur-sm cursor-pointer overflow-hidden border",
        categoryColor,
        "hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:scale-110 hover:z-10"
      )}
      onClick={onClick}
    >
      <span className="element-number absolute top-1 left-1 text-xs opacity-80">{element.atomicNumber}</span>
      <span className="element-symbol text-2xl font-bold tracking-tight">{element.symbol}</span>
      <span className="element-name text-xs font-medium mt-1 text-center truncate w-full">{element.name}</span>
      <span className="element-weight text-xs opacity-70 tracking-tight">{element.atomicMass}</span>
    </div>
  );
};

export default ElementCard;
