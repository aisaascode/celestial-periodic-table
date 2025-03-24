
import React, { useState } from "react";
import { X, Check } from "lucide-react";
import { Switch } from "@/components/ui/switch";

export type FilterOptions = {
  categories: {
    alkali: boolean;
    alkaline: boolean;
    transition: boolean;
    postTransition: boolean;
    metalloid: boolean;
    nonmetal: boolean;
    halogen: boolean;
    nobleGas: boolean;
    lanthanide: boolean;
    actinide: boolean;
    unknown: boolean;
  };
  state: {
    solid: boolean;
    liquid: boolean;
    gas: boolean;
  };
};

interface ElementFilterProps {
  onClose: () => void;
  filters: FilterOptions;
  onFilterChange: (filters: FilterOptions) => void;
}

const ElementFilter: React.FC<ElementFilterProps> = ({ onClose, filters, onFilterChange }) => {
  const [localFilters, setLocalFilters] = useState<FilterOptions>(filters);

  const handleCategoryChange = (category: keyof FilterOptions['categories']) => {
    setLocalFilters(prev => ({
      ...prev,
      categories: {
        ...prev.categories,
        [category]: !prev.categories[category]
      }
    }));
  };

  const handleStateChange = (state: keyof FilterOptions['state']) => {
    setLocalFilters(prev => ({
      ...prev,
      state: {
        ...prev.state,
        [state]: !prev.state[state]
      }
    }));
  };

  const handleApplyFilters = () => {
    onFilterChange(localFilters);
    onClose();
  };

  const handleResetFilters = () => {
    const resetFilters: FilterOptions = {
      categories: {
        alkali: true,
        alkaline: true,
        transition: true,
        postTransition: true,
        metalloid: true,
        nonmetal: true,
        halogen: true,
        nobleGas: true,
        lanthanide: true,
        actinide: true,
        unknown: true
      },
      state: {
        solid: true,
        liquid: true,
        gas: true
      }
    };
    
    setLocalFilters(resetFilters);
    onFilterChange(resetFilters);
  };

  return (
    <>
      <div className="modal-overlay" onClick={onClose}></div>
      <div className="modal-content">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Filter Elements</h2>
          <button onClick={onClose} className="p-1 rounded-full hover:bg-muted">
            <X size={20} />
          </button>
        </div>
        
        <div className="space-y-6">
          <div className="space-y-3">
            <h3 className="font-medium">Element Categories</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <FilterSwitch 
                label="Alkali Metals" 
                checked={localFilters.categories.alkali}
                onCheckedChange={() => handleCategoryChange('alkali')}
                className="bg-alkali"
              />
              <FilterSwitch 
                label="Alkaline Earth Metals" 
                checked={localFilters.categories.alkaline}
                onCheckedChange={() => handleCategoryChange('alkaline')}
                className="bg-alkaline"
              />
              <FilterSwitch 
                label="Transition Metals" 
                checked={localFilters.categories.transition}
                onCheckedChange={() => handleCategoryChange('transition')}
                className="bg-transition"
              />
              <FilterSwitch 
                label="Post-Transition Metals" 
                checked={localFilters.categories.postTransition}
                onCheckedChange={() => handleCategoryChange('postTransition')}
                className="bg-post-transition"
              />
              <FilterSwitch 
                label="Metalloids" 
                checked={localFilters.categories.metalloid}
                onCheckedChange={() => handleCategoryChange('metalloid')}
                className="bg-metalloid"
              />
              <FilterSwitch 
                label="Nonmetals" 
                checked={localFilters.categories.nonmetal}
                onCheckedChange={() => handleCategoryChange('nonmetal')}
                className="bg-nonmetal"
              />
              <FilterSwitch 
                label="Halogens" 
                checked={localFilters.categories.halogen}
                onCheckedChange={() => handleCategoryChange('halogen')}
                className="bg-halogen"
              />
              <FilterSwitch 
                label="Noble Gases" 
                checked={localFilters.categories.nobleGas}
                onCheckedChange={() => handleCategoryChange('nobleGas')}
                className="bg-noble-gas"
              />
              <FilterSwitch 
                label="Lanthanides" 
                checked={localFilters.categories.lanthanide}
                onCheckedChange={() => handleCategoryChange('lanthanide')}
                className="bg-lanthanide"
              />
              <FilterSwitch 
                label="Actinides" 
                checked={localFilters.categories.actinide}
                onCheckedChange={() => handleCategoryChange('actinide')}
                className="bg-actinide"
              />
              <FilterSwitch 
                label="Unknown Properties" 
                checked={localFilters.categories.unknown}
                onCheckedChange={() => handleCategoryChange('unknown')}
                className="bg-unknown"
              />
            </div>
          </div>
          
          <div className="space-y-3">
            <h3 className="font-medium">Physical State (at STP)</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              <FilterSwitch 
                label="Solid" 
                checked={localFilters.state.solid}
                onCheckedChange={() => handleStateChange('solid')}
              />
              <FilterSwitch 
                label="Liquid" 
                checked={localFilters.state.liquid}
                onCheckedChange={() => handleStateChange('liquid')}
              />
              <FilterSwitch 
                label="Gas" 
                checked={localFilters.state.gas}
                onCheckedChange={() => handleStateChange('gas')}
              />
            </div>
          </div>
          
          <div className="flex justify-between pt-4 border-t">
            <button 
              onClick={handleResetFilters}
              className="px-4 py-2 text-sm rounded-md border border-border hover:bg-muted transition-colors"
            >
              Reset All
            </button>
            
            <button 
              onClick={handleApplyFilters}
              className="px-4 py-2 text-sm font-medium rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors flex items-center gap-1"
            >
              <Check size={16} />
              Apply Filters
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

interface FilterSwitchProps {
  label: string;
  checked: boolean;
  onCheckedChange: () => void;
  className?: string;
}

const FilterSwitch: React.FC<FilterSwitchProps> = ({ label, checked, onCheckedChange, className }) => (
  <div className="flex items-center justify-between border rounded-lg px-3 py-2 bg-background/30 backdrop-blur-sm">
    <div className="flex items-center gap-2">
      {className && <div className={`w-4 h-4 rounded-sm ${className} border`}></div>}
      <span className="text-sm">{label}</span>
    </div>
    <Switch checked={checked} onCheckedChange={onCheckedChange} />
  </div>
);

export default ElementFilter;
