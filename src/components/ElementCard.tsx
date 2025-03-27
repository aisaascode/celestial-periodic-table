
import React from "react";
import { Element, getCategoryColor } from "../data/elements";
import { cn } from "../lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ElementCardProps {
  element: Element;
  onClick: () => void;
}

const ElementCard: React.FC<ElementCardProps> = ({ element, onClick }) => {
  const categoryColor = getCategoryColor(element.category);

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div
            className={cn(
              "element-card flex flex-col items-center justify-center p-1 rounded-md transition-all duration-300 backdrop-blur-sm cursor-pointer overflow-hidden border transform perspective-500",
              categoryColor,
              "hover:shadow-[0_0_15px_var(--element-glow)] hover:scale-110 hover:z-10 hover:rotate-y-5 hover:translate-z-10"
            )}
            onClick={onClick}
          >
            <span className="element-number absolute top-1 left-1 text-xs opacity-80">{element.atomicNumber}</span>
            <span className="element-symbol text-2xl font-bold tracking-tight">{element.symbol}</span>
            <span className="element-name text-xs font-medium mt-1 text-center truncate w-full">{element.name}</span>
            <span className="element-weight text-xs opacity-70 tracking-tight">{element.atomicMass}</span>
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p>{element.name} ({element.symbol})</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default ElementCard;
