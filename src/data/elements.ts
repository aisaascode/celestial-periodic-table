
export interface Element {
  atomicNumber: number;
  symbol: string;
  name: string;
  atomicMass: string;
  category: string;
  group: number | null;
  period: number;
  block: string;
  electronConfiguration: string;
  electronegativity?: number;
  atomicRadius?: number;
  ionizationEnergy?: number;
  density?: number;
  meltingPoint?: number;
  boilingPoint?: number;
  discoveredBy?: string;
  discoveryYear?: number;
  description: string;
}

export type ElementCategory =
  | "alkali"
  | "alkaline"
  | "transition"
  | "post-transition"
  | "metalloid"
  | "nonmetal"
  | "halogen"
  | "noble-gas"
  | "lanthanide"
  | "actinide"
  | "unknown";

export const elements: Element[] = [
  {
    atomicNumber: 1,
    symbol: "H",
    name: "Hydrogen",
    atomicMass: "1.008",
    category: "nonmetal",
    group: 1,
    period: 1,
    block: "s",
    electronConfiguration: "1s¹",
    electronegativity: 2.2,
    atomicRadius: 120,
    ionizationEnergy: 13.598,
    density: 0.00008988,
    meltingPoint: -259.16,
    boilingPoint: -252.87,
    discoveredBy: "Henry Cavendish",
    discoveryYear: 1766,
    description: "Hydrogen is the lightest element and the most abundant chemical substance in the universe, constituting roughly 75% of all normal matter."
  },
  {
    atomicNumber: 2,
    symbol: "He",
    name: "Helium",
    atomicMass: "4.0026",
    category: "noble-gas",
    group: 18,
    period: 1,
    block: "s",
    electronConfiguration: "1s²",
    atomicRadius: 140,
    ionizationEnergy: 24.587,
    density: 0.0001785,
    meltingPoint: -272.2,
    boilingPoint: -268.93,
    discoveredBy: "Pierre Janssen, Norman Lockyer",
    discoveryYear: 1868,
    description: "Helium is a colorless, odorless, tasteless, non-toxic, inert, monatomic gas. It is the second lightest and second most abundant element in the observable universe."
  },
  {
    atomicNumber: 3,
    symbol: "Li",
    name: "Lithium",
    atomicMass: "6.94",
    category: "alkali",
    group: 1,
    period: 2,
    block: "s",
    electronConfiguration: "[He] 2s¹",
    electronegativity: 0.98,
    atomicRadius: 182,
    ionizationEnergy: 5.392,
    density: 0.534,
    meltingPoint: 180.54,
    boilingPoint: 1342,
    discoveredBy: "Johan August Arfwedson",
    discoveryYear: 1817,
    description: "Lithium is a soft, silvery-white alkali metal. Under standard conditions, it is the lightest metal and the lightest solid element."
  },
  {
    atomicNumber: 4,
    symbol: "Be",
    name: "Beryllium",
    atomicMass: "9.0122",
    category: "alkaline",
    group: 2,
    period: 2,
    block: "s",
    electronConfiguration: "[He] 2s²",
    electronegativity: 1.57,
    atomicRadius: 153,
    ionizationEnergy: 9.323,
    density: 1.85,
    meltingPoint: 1287,
    boilingPoint: 2470,
    discoveredBy: "Louis Nicolas Vauquelin",
    discoveryYear: 1798,
    description: "Beryllium is a relatively rare element in the universe. It is a divalent element which occurs naturally only in combination with other elements to form minerals."
  },
  {
    atomicNumber: 5,
    symbol: "B",
    name: "Boron",
    atomicMass: "10.81",
    category: "metalloid",
    group: 13,
    period: 2,
    block: "p",
    electronConfiguration: "[He] 2s² 2p¹",
    electronegativity: 2.04,
    atomicRadius: 192,
    ionizationEnergy: 8.298,
    density: 2.34,
    meltingPoint: 2076,
    boilingPoint: 3927,
    discoveredBy: "Joseph Louis Gay-Lussac, Louis Jacques Thénard",
    discoveryYear: 1808,
    description: "Boron is a chemical element with symbol B and atomic number 5. It is a low-abundance element that is present in the Earth's crust."
  },
  {
    atomicNumber: 6,
    symbol: "C",
    name: "Carbon",
    atomicMass: "12.011",
    category: "nonmetal",
    group: 14,
    period: 2,
    block: "p",
    electronConfiguration: "[He] 2s² 2p²",
    electronegativity: 2.55,
    atomicRadius: 170,
    ionizationEnergy: 11.260,
    density: 2.267,
    meltingPoint: 3550,
    boilingPoint: 4027,
    description: "Carbon is a chemical element with symbol C and atomic number 6. It is nonmetallic and tetravalent—making four electrons available to form covalent chemical bonds."
  },
  {
    atomicNumber: 7,
    symbol: "N",
    name: "Nitrogen",
    atomicMass: "14.007",
    category: "nonmetal",
    group: 15,
    period: 2,
    block: "p",
    electronConfiguration: "[He] 2s² 2p³",
    electronegativity: 3.04,
    atomicRadius: 155,
    ionizationEnergy: 14.534,
    density: 0.0012506,
    meltingPoint: -210.1,
    boilingPoint: -195.79,
    discoveredBy: "Daniel Rutherford",
    discoveryYear: 1772,
    description: "Nitrogen is a chemical element with symbol N and atomic number 7. It was first discovered and isolated by Scottish physician Daniel Rutherford in 1772."
  },
  {
    atomicNumber: 8,
    symbol: "O",
    name: "Oxygen",
    atomicMass: "15.999",
    category: "nonmetal",
    group: 16,
    period: 2,
    block: "p",
    electronConfiguration: "[He] 2s² 2p⁴",
    electronegativity: 3.44,
    atomicRadius: 152,
    ionizationEnergy: 13.618,
    density: 0.001429,
    meltingPoint: -218.79,
    boilingPoint: -182.95,
    discoveredBy: "Carl Wilhelm Scheele",
    discoveryYear: 1771,
    description: "Oxygen is a chemical element with symbol O and atomic number 8. It is a member of the chalcogen group on the periodic table, a highly reactive nonmetal, and an oxidizing agent that readily forms oxides with most elements as well as with other compounds."
  },
  {
    atomicNumber: 9,
    symbol: "F",
    name: "Fluorine",
    atomicMass: "18.998",
    category: "halogen",
    group: 17,
    period: 2,
    block: "p",
    electronConfiguration: "[He] 2s² 2p⁵",
    electronegativity: 3.98,
    atomicRadius: 135,
    ionizationEnergy: 17.423,
    density: 0.001696,
    meltingPoint: -219.67,
    boilingPoint: -188.11,
    discoveredBy: "André-Marie Ampère",
    discoveryYear: 1810,
    description: "Fluorine is a chemical element with symbol F and atomic number 9. It is the lightest halogen and exists as a highly toxic pale yellow diatomic gas at standard conditions."
  },
  {
    atomicNumber: 10,
    symbol: "Ne",
    name: "Neon",
    atomicMass: "20.180",
    category: "noble-gas",
    group: 18,
    period: 2,
    block: "p",
    electronConfiguration: "[He] 2s² 2p⁶",
    atomicRadius: 154,
    ionizationEnergy: 21.565,
    density: 0.0008999,
    meltingPoint: -248.59,
    boilingPoint: -246.08,
    discoveredBy: "William Ramsay, Morris Travers",
    discoveryYear: 1898,
    description: "Neon is a chemical element with symbol Ne and atomic number 10. It is a noble gas. Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about two-thirds the density of air."
  },
  // Add more elements as needed
];

// This is a function to help with the layout of the periodic table
export function getGridPosition(element: Element): { row: number; col: number } {
  let row = element.period;
  let col = element.group || 0;

  // Special handling for lanthanides and actinides
  if (element.category === "lanthanide") {
    row = 8;
    col = element.atomicNumber - 54;
  } else if (element.category === "actinide") {
    row = 9;
    col = element.atomicNumber - 86;
  }

  return { row, col };
}

// Get element category color
export function getCategoryColor(category: string): string {
  switch (category) {
    case "alkali": return "bg-alkali border-alkali/30";
    case "alkaline": return "bg-alkaline border-alkaline/30";
    case "transition": return "bg-transition border-transition/30";
    case "post-transition": return "bg-post-transition border-post-transition/30";
    case "metalloid": return "bg-metalloid border-metalloid/30";
    case "nonmetal": return "bg-nonmetal border-nonmetal/30";
    case "halogen": return "bg-halogen border-halogen/30";
    case "noble-gas": return "bg-noble-gas border-noble-gas/30";
    case "lanthanide": return "bg-lanthanide border-lanthanide/30";
    case "actinide": return "bg-actinide border-actinide/30";
    default: return "bg-unknown border-unknown/30";
  }
}

// Get category description
export function getCategoryDescription(category: string): string {
  switch (category) {
    case "alkali": return "Alkali Metals";
    case "alkaline": return "Alkaline Earth Metals";
    case "transition": return "Transition Metals";
    case "post-transition": return "Post-transition Metals";
    case "metalloid": return "Metalloids";
    case "nonmetal": return "Nonmetals";
    case "halogen": return "Halogens";
    case "noble-gas": return "Noble Gases";
    case "lanthanide": return "Lanthanides";
    case "actinide": return "Actinides";
    default: return "Unknown";
  }
}
