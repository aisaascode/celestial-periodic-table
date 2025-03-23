
import React, { useState } from "react";
import { elements, getGridPosition } from "../data/elements";
import ElementCard from "./ElementCard";
import ElementModal from "./ElementModal";
import { cn } from "../lib/utils";

const PeriodicTable: React.FC = () => {
  const [selectedElement, setSelectedElement] = useState<number | null>(null);

  // Find the maximum rows and columns for our grid
  const maxRow = Math.max(...elements.map(el => {
    const { row } = getGridPosition(el);
    return row;
  }));

  const maxCol = Math.max(...elements.map(el => {
    const { col } = getGridPosition(el);
    return col;
  }));

  // Create a grid with all positions
  const grid = Array.from({ length: maxRow }).map(() => 
    Array.from({ length: maxCol }).map(() => null)
  );

  // Place elements in the grid
  elements.forEach(element => {
    const { row, col } = getGridPosition(element);
    if (row > 0 && col > 0 && row <= maxRow && col <= maxCol) {
      grid[row - 1][col - 1] = element;
    }
  });

  // Handle opening the modal
  const handleElementClick = (atomicNumber: number) => {
    setSelectedElement(atomicNumber);
  };

  // Handle closing the modal
  const handleCloseModal = () => {
    setSelectedElement(null);
  };

  // Find the selected element
  const elementDetails = selectedElement
    ? elements.find(el => el.atomicNumber === selectedElement)
    : null;

  return (
    <div className="w-full overflow-x-auto pb-8 animate-fade-in">
      <div className="min-w-[1100px] p-4">
        <div className="grid grid-cols-18 gap-1" style={{ gridTemplateColumns: `repeat(${maxCol}, minmax(0, 1fr))` }}>
          {grid.map((row, rowIndex) => (
            <React.Fragment key={`row-${rowIndex}`}>
              {row.map((element, colIndex) => (
                <div 
                  key={`cell-${rowIndex}-${colIndex}`} 
                  className={cn(
                    "grid-cell",
                    // Add special styling for the gap rows (lanthanides/actinides)
                    ((rowIndex === 5 || rowIndex === 6) && colIndex >= 2 && colIndex <= 15) ?
                      "opacity-0" : ""
                  )}
                >
                  {element && (
                    <ElementCard 
                      element={element} 
                      onClick={() => handleElementClick(element.atomicNumber)} 
                    />
                  )}
                </div>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Element details modal */}
      {elementDetails && (
        <ElementModal element={elementDetails} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default PeriodicTable;
