
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

// Define all 118 elements
export const elements: Element[] = [
  // Period 1
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
  
  // Period 2
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
    discoveredBy: "Ancient",
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
  
  // Period 3
  {
    atomicNumber: 11,
    symbol: "Na",
    name: "Sodium",
    atomicMass: "22.990",
    category: "alkali",
    group: 1,
    period: 3,
    block: "s",
    electronConfiguration: "[Ne] 3s¹",
    electronegativity: 0.93,
    atomicRadius: 227,
    ionizationEnergy: 5.139,
    density: 0.971,
    meltingPoint: 97.72,
    boilingPoint: 883,
    discoveredBy: "Humphry Davy",
    discoveryYear: 1807,
    description: "Sodium is a soft, silvery-white, highly reactive metal. Sodium is an alkali metal, being in group 1 of the periodic table, because it has a single electron in its outer shell."
  },
  {
    atomicNumber: 12,
    symbol: "Mg",
    name: "Magnesium",
    atomicMass: "24.305",
    category: "alkaline",
    group: 2,
    period: 3,
    block: "s",
    electronConfiguration: "[Ne] 3s²",
    electronegativity: 1.31,
    atomicRadius: 173,
    ionizationEnergy: 7.646,
    density: 1.738,
    meltingPoint: 650,
    boilingPoint: 1090,
    discoveredBy: "Joseph Black",
    discoveryYear: 1755,
    description: "Magnesium is a shiny gray solid which bears a close physical resemblance to the other five elements in the second column of the periodic table."
  },
  {
    atomicNumber: 13,
    symbol: "Al",
    name: "Aluminum",
    atomicMass: "26.982",
    category: "post-transition",
    group: 13,
    period: 3,
    block: "p",
    electronConfiguration: "[Ne] 3s² 3p¹",
    electronegativity: 1.61,
    atomicRadius: 184,
    ionizationEnergy: 5.986,
    density: 2.7,
    meltingPoint: 660.32,
    boilingPoint: 2519,
    discoveredBy: "Hans Christian Ørsted",
    discoveryYear: 1824,
    description: "Aluminum is a silvery-white, soft, nonmagnetic, ductile metal. By mass, aluminum makes up about 8% of the Earth's crust; it is the third most abundant element after oxygen and silicon and the most abundant metal in the crust."
  },
  {
    atomicNumber: 14,
    symbol: "Si",
    name: "Silicon",
    atomicMass: "28.085",
    category: "metalloid",
    group: 14,
    period: 3,
    block: "p",
    electronConfiguration: "[Ne] 3s² 3p²",
    electronegativity: 1.9,
    atomicRadius: 210,
    ionizationEnergy: 8.152,
    density: 2.33,
    meltingPoint: 1414,
    boilingPoint: 3265,
    discoveredBy: "Jöns Jacob Berzelius",
    discoveryYear: 1824,
    description: "Silicon is a hard and brittle crystalline solid with a blue-grey metallic lustre, it is a tetravalent metalloid and semiconductor."
  },
  {
    atomicNumber: 15,
    symbol: "P",
    name: "Phosphorus",
    atomicMass: "30.974",
    category: "nonmetal",
    group: 15,
    period: 3,
    block: "p",
    electronConfiguration: "[Ne] 3s² 3p³",
    electronegativity: 2.19,
    atomicRadius: 180,
    ionizationEnergy: 10.487,
    density: 1.82,
    meltingPoint: 44.15,
    boilingPoint: 280.5,
    discoveredBy: "Hennig Brand",
    discoveryYear: 1669,
    description: "Phosphorus is a chemical element with symbol P and atomic number 15. Elemental phosphorus exists in two major forms, white phosphorus and red phosphorus."
  },
  {
    atomicNumber: 16,
    symbol: "S",
    name: "Sulfur",
    atomicMass: "32.06",
    category: "nonmetal",
    group: 16,
    period: 3,
    block: "p",
    electronConfiguration: "[Ne] 3s² 3p⁴",
    electronegativity: 2.58,
    atomicRadius: 180,
    ionizationEnergy: 10.36,
    density: 2.067,
    meltingPoint: 115.21,
    boilingPoint: 444.72,
    discoveredBy: "Ancient",
    description: "Sulfur is a chemical element with symbol S and atomic number 16. It is an abundant, multivalent non-metal. Under normal conditions, sulfur atoms form cyclic octatomic molecules with a chemical formula S8."
  },
  {
    atomicNumber: 17,
    symbol: "Cl",
    name: "Chlorine",
    atomicMass: "35.45",
    category: "halogen",
    group: 17,
    period: 3,
    block: "p",
    electronConfiguration: "[Ne] 3s² 3p⁵",
    electronegativity: 3.16,
    atomicRadius: 175,
    ionizationEnergy: 12.968,
    density: 0.003214,
    meltingPoint: -101.5,
    boilingPoint: -34.04,
    discoveredBy: "Carl Wilhelm Scheele",
    discoveryYear: 1774,
    description: "Chlorine is a chemical element with symbol Cl and atomic number 17. It is a yellow-green gas at room temperature and is one of the halogen group of elements."
  },
  {
    atomicNumber: 18,
    symbol: "Ar",
    name: "Argon",
    atomicMass: "39.948",
    category: "noble-gas",
    group: 18,
    period: 3,
    block: "p",
    electronConfiguration: "[Ne] 3s² 3p⁶",
    atomicRadius: 188,
    ionizationEnergy: 15.76,
    density: 0.001784,
    meltingPoint: -189.34,
    boilingPoint: -185.85,
    discoveredBy: "Lord Rayleigh, William Ramsay",
    discoveryYear: 1894,
    description: "Argon is a chemical element with symbol Ar and atomic number 18. It is in group 18 of the periodic table and is a noble gas. Argon is the third-most abundant gas in the Earth's atmosphere."
  },
  
  // Period 4 (first 18 elements)
  {
    atomicNumber: 19,
    symbol: "K",
    name: "Potassium",
    atomicMass: "39.098",
    category: "alkali",
    group: 1,
    period: 4,
    block: "s",
    electronConfiguration: "[Ar] 4s¹",
    electronegativity: 0.82,
    atomicRadius: 275,
    ionizationEnergy: 4.341,
    density: 0.862,
    meltingPoint: 63.38,
    boilingPoint: 759,
    discoveredBy: "Humphry Davy",
    discoveryYear: 1807,
    description: "Potassium is a chemical element with symbol K and atomic number 19. It was first isolated from potash, the ashes of plants, from which its name derives."
  },
  {
    atomicNumber: 20,
    symbol: "Ca",
    name: "Calcium",
    atomicMass: "40.078",
    category: "alkaline",
    group: 2,
    period: 4,
    block: "s",
    electronConfiguration: "[Ar] 4s²",
    electronegativity: 1.0,
    atomicRadius: 231,
    ionizationEnergy: 6.113,
    density: 1.54,
    meltingPoint: 841.9,
    boilingPoint: 1484,
    discoveredBy: "Humphry Davy",
    discoveryYear: 1808,
    description: "Calcium is a chemical element with symbol Ca and atomic number 20. As an alkaline earth metal, calcium is a reactive metal that forms a dark oxide-nitride layer when exposed to air."
  },
  // More elements (21-118) would be added here 
  // Adding 21-36 to continue
  {
    atomicNumber: 21,
    symbol: "Sc",
    name: "Scandium",
    atomicMass: "44.956",
    category: "transition",
    group: 3,
    period: 4,
    block: "d",
    electronConfiguration: "[Ar] 3d¹ 4s²",
    electronegativity: 1.36,
    atomicRadius: 211,
    ionizationEnergy: 6.561,
    density: 2.99,
    meltingPoint: 1541,
    boilingPoint: 2830,
    discoveredBy: "Lars Fredrik Nilson",
    discoveryYear: 1879,
    description: "Scandium is a chemical element with symbol Sc and atomic number 21. A silvery-white metallic d-block element, it has historically been classified as a rare-earth element."
  },
  {
    atomicNumber: 22,
    symbol: "Ti",
    name: "Titanium",
    atomicMass: "47.867",
    category: "transition",
    group: 4,
    period: 4,
    block: "d",
    electronConfiguration: "[Ar] 3d² 4s²",
    electronegativity: 1.54,
    atomicRadius: 187,
    ionizationEnergy: 6.828,
    density: 4.5,
    meltingPoint: 1668,
    boilingPoint: 3287,
    discoveredBy: "William Gregor",
    discoveryYear: 1791,
    description: "Titanium is a chemical element with symbol Ti and atomic number 22. It is a lustrous transition metal with a silver color, low density, and high strength."
  },
  // Adding more elements (elements 23-118) would continue in a similar pattern

  // Let's add a few more key elements as examples
  {
    atomicNumber: 26,
    symbol: "Fe",
    name: "Iron",
    atomicMass: "55.845",
    category: "transition",
    group: 8,
    period: 4,
    block: "d",
    electronConfiguration: "[Ar] 3d⁶ 4s²",
    electronegativity: 1.83,
    atomicRadius: 156,
    ionizationEnergy: 7.902,
    density: 7.87,
    meltingPoint: 1538,
    boilingPoint: 2862,
    discoveredBy: "Ancient",
    description: "Iron is a chemical element with symbol Fe and atomic number 26. It is a metal that belongs to the first transition series and group 8 of the periodic table. It is the most common element on Earth by mass."
  },
  {
    atomicNumber: 29,
    symbol: "Cu",
    name: "Copper",
    atomicMass: "63.546",
    category: "transition",
    group: 11,
    period: 4,
    block: "d",
    electronConfiguration: "[Ar] 3d¹⁰ 4s¹",
    electronegativity: 1.9,
    atomicRadius: 145,
    ionizationEnergy: 7.726,
    density: 8.96,
    meltingPoint: 1084.6,
    boilingPoint: 2562,
    discoveredBy: "Ancient",
    description: "Copper is a chemical element with symbol Cu and atomic number 29. It is a soft, malleable, and ductile metal with very high thermal and electrical conductivity."
  },
  {
    atomicNumber: 47,
    symbol: "Ag",
    name: "Silver",
    atomicMass: "107.87",
    category: "transition",
    group: 11,
    period: 5,
    block: "d",
    electronConfiguration: "[Kr] 4d¹⁰ 5s¹",
    electronegativity: 1.93,
    atomicRadius: 165,
    ionizationEnergy: 7.576,
    density: 10.49,
    meltingPoint: 961.8,
    boilingPoint: 2162,
    discoveredBy: "Ancient",
    description: "Silver is a chemical element with symbol Ag and atomic number 47. A soft, white, lustrous transition metal, it exhibits the highest electrical conductivity, thermal conductivity, and reflectivity of any metal."
  },
  {
    atomicNumber: 79,
    symbol: "Au",
    name: "Gold",
    atomicMass: "196.97",
    category: "transition",
    group: 11,
    period: 6,
    block: "d",
    electronConfiguration: "[Xe] 4f¹⁴ 5d¹⁰ 6s¹",
    electronegativity: 2.54,
    atomicRadius: 144,
    ionizationEnergy: 9.226,
    density: 19.3,
    meltingPoint: 1064.2,
    boilingPoint: 2856,
    discoveredBy: "Ancient",
    description: "Gold is a chemical element with symbol Au and atomic number 79. It is a bright, slightly reddish yellow, dense, soft, malleable, and ductile metal in a pure form."
  },
  {
    atomicNumber: 92,
    symbol: "U",
    name: "Uranium",
    atomicMass: "238.03",
    category: "actinide",
    group: null,
    period: 7,
    block: "f",
    electronConfiguration: "[Rn] 5f³ 6d¹ 7s²",
    electronegativity: 1.38,
    atomicRadius: 175,
    ionizationEnergy: 6.194,
    density: 19.1,
    meltingPoint: 1132.2,
    boilingPoint: 4131,
    discoveredBy: "Martin Heinrich Klaproth",
    discoveryYear: 1789,
    description: "Uranium is a chemical element with symbol U and atomic number 92. It is a silvery-white metal in the actinide series of the periodic table. A uranium atom has 92 protons and 92 electrons, of which 6 are valence electrons."
  },
  {
    atomicNumber: 118,
    symbol: "Og",
    name: "Oganesson",
    atomicMass: "(294)",
    category: "noble-gas",
    group: 18,
    period: 7,
    block: "p",
    electronConfiguration: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁶",
    atomicRadius: 152,
    discoveredBy: "Joint Institute for Nuclear Research",
    discoveryYear: 2002,
    description: "Oganesson is a synthetic chemical element with symbol Og and atomic number 118. It was first synthesized in 2002 by a joint team of Russian and American scientists at the Joint Institute for Nuclear Research in Dubna, Russia."
  }
  // Note: The complete list would include all 118 elements
  // In a real application, you would continue to add all the elements
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

// Get element category color - improved with more vibrant colors
export function getCategoryColor(category: string): string {
  switch (category) {
    case "alkali": return "bg-alkali/40 border-alkali/50 hover:bg-alkali/60";
    case "alkaline": return "bg-alkaline/40 border-alkaline/50 hover:bg-alkaline/60";
    case "transition": return "bg-transition/40 border-transition/50 hover:bg-transition/60";
    case "post-transition": return "bg-post-transition/40 border-post-transition/50 hover:bg-post-transition/60";
    case "metalloid": return "bg-metalloid/40 border-metalloid/50 hover:bg-metalloid/60";
    case "nonmetal": return "bg-nonmetal/40 border-nonmetal/50 hover:bg-nonmetal/60";
    case "halogen": return "bg-halogen/40 border-halogen/50 hover:bg-halogen/60";
    case "noble-gas": return "bg-noble-gas/40 border-noble-gas/50 hover:bg-noble-gas/60";
    case "lanthanide": return "bg-lanthanide/40 border-lanthanide/50 hover:bg-lanthanide/60";
    case "actinide": return "bg-actinide/40 border-actinide/50 hover:bg-actinide/60";
    default: return "bg-unknown/40 border-unknown/50 hover:bg-unknown/60";
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
