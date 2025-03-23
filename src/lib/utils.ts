import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatNumber(num: number | undefined, precision: number = 2): string {
  if (num === undefined) return "N/A";
  return num.toFixed(precision);
}

export function capitalizeFirstLetter(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Format temperature for display
export function formatTemperature(temp: number | undefined): string {
  if (temp === undefined) return "N/A";
  return `${temp.toLocaleString()} °C`;
}

// Format year for display
export function formatYear(year: number | undefined): string {
  if (year === undefined) return "unknown";
  
  if (year < 0) {
    return `${Math.abs(year)} BCE`;
  }
  
  return year.toString();
}

// Format atomic mass for display
export function formatAtomicMass(mass: string): string {
  // If mass is in parentheses (for unstable elements)
  if (mass.startsWith('(') && mass.endsWith(')')) {
    return mass;
  }
  
  // Try to parse as number and format
  const num = parseFloat(mass);
  if (!isNaN(num)) {
    // If it has a decimal part, keep it, otherwise show as integer
    if (Math.floor(num) !== num) {
      return num.toFixed(4).replace(/\.?0+$/, '');
    } else {
      return num.toString();
    }
  }
  
  return mass;
}
