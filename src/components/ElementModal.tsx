
import React, { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { Element, getCategoryDescription } from "../data/elements";

interface ElementModalProps {
  element: Element;
  onClose: () => void;
}

const ElementModal: React.FC<ElementModalProps> = ({ element, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.addEventListener("mousedown", handleClickOutside);

    // Prevent scrolling of the body when modal is open
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "auto";
    };
  }, [onClose]);

  return (
    <>
      <div className="modal-overlay" onClick={onClose} />
      <div className="modal-content" ref={modalRef}>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 transition-colors"
        >
          <X size={24} />
        </button>

        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/3 flex flex-col items-center">
            <div className={`element-card w-36 h-36 flex-shrink-0 ${element.category} text-center`}>
              <span className="element-number text-lg">{element.atomicNumber}</span>
              <span className="element-symbol text-5xl mt-4">{element.symbol}</span>
              <span className="element-weight text-base mt-2">{element.atomicMass}</span>
            </div>
            <h2 className="text-2xl font-bold mt-4">{element.name}</h2>
            <span className="text-sm text-muted-foreground">
              {getCategoryDescription(element.category)}
            </span>
          </div>

          <div className="md:w-2/3 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Atomic Number</p>
                <p className="font-medium">{element.atomicNumber}</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Atomic Mass</p>
                <p className="font-medium">{element.atomicMass} u</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Electron Configuration</p>
                <p className="font-medium">{element.electronConfiguration}</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Group / Period</p>
                <p className="font-medium">
                  {element.group !== null ? `${element.group} / ${element.period}` : `- / ${element.period}`}
                </p>
              </div>
              {element.electronegativity && (
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Electronegativity</p>
                  <p className="font-medium">{element.electronegativity}</p>
                </div>
              )}
              {element.density && (
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Density</p>
                  <p className="font-medium">{element.density} g/cm³</p>
                </div>
              )}
              {element.meltingPoint && (
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Melting Point</p>
                  <p className="font-medium">{element.meltingPoint} °C</p>
                </div>
              )}
              {element.boilingPoint && (
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Boiling Point</p>
                  <p className="font-medium">{element.boilingPoint} °C</p>
                </div>
              )}
            </div>

            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-2">Description</h3>
              <p className="text-sm">{element.description}</p>
            </div>

            {element.discoveredBy && (
              <div className="mt-4">
                <h3 className="text-lg font-semibold mb-2">Discovery</h3>
                <p className="text-sm">
                  Discovered by {element.discoveredBy}
                  {element.discoveryYear && ` in ${element.discoveryYear}`}.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ElementModal;
