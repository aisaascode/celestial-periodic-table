
import React from "react";
import { Element, getCategoryColor } from "../data/elements";

interface ElementCardProps {
  element: Element;
  onClick: () => void;
}

const ElementCard: React.FC<ElementCardProps> = ({ element, onClick }) => {
  const categoryColor = getCategoryColor(element.category);

  return (
    <div
      className={`element-card ${categoryColor} bg-opacity-30 hover:bg-opacity-50`}
      onClick={onClick}
    >
      <span className="element-number">{element.atomicNumber}</span>
      <span className="element-symbol">{element.symbol}</span>
      <span className="element-name">{element.name}</span>
      <span className="element-weight">{element.atomicMass}</span>
    </div>
  );
};

export default ElementCard;
