
import React, { useState } from "react";
import { elements, getGridPosition } from "../data/elements";
import ElementCard from "./ElementCard";
import ElementModal from "./ElementModal";
import { cn } from "../lib/utils";
import { FilterOptions } from "./ElementFilter";

interface PeriodicTableProps {
  filters: FilterOptions;
}

const PeriodicTable: React.FC<PeriodicTableProps> = ({ filters }) => {
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

  // Filter elements based on the current filters
  const filteredElements = elements.filter(element => {
    // Filter by category
    let categoryMatch = false;
    if (element.category === "alkali-metal" && filters.categories.alkali) categoryMatch = true;
    else if (element.category === "alkaline-earth-metal" && filters.categories.alkaline) categoryMatch = true;
    else if (element.category === "transition-metal" && filters.categories.transition) categoryMatch = true;
    else if (element.category === "post-transition-metal" && filters.categories.postTransition) categoryMatch = true;
    else if (element.category === "metalloid" && filters.categories.metalloid) categoryMatch = true;
    else if (element.category === "nonmetal" && filters.categories.nonmetal) categoryMatch = true;
    else if (element.category === "halogen" && filters.categories.halogen) categoryMatch = true;
    else if (element.category === "noble-gas" && filters.categories.nobleGas) categoryMatch = true;
    else if (element.category === "lanthanide" && filters.categories.lanthanide) categoryMatch = true;
    else if (element.category === "actinide" && filters.categories.actinide) categoryMatch = true;
    else if (element.category === "unknown" && filters.categories.unknown) categoryMatch = true;

    // Filter by state (using state property instead of phase)
    let stateMatch = false;
    if (element.state === "solid" && filters.state.solid) stateMatch = true;
    else if (element.state === "liquid" && filters.state.liquid) stateMatch = true;
    else if (element.state === "gas" && filters.state.gas) stateMatch = true;

    return categoryMatch && stateMatch;
  });

  // Place filtered elements in the grid
  filteredElements.forEach(element => {
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
