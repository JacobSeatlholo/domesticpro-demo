// Domestic Pro Service — Shop DPS product catalogue
// All 9 real products + prices pulled from domesticpro.co.za/shop-dps/
// Images are stored locally in /public/products/.

export interface Product {
  id: string;
  name: string;
  /** Short tagline describing the product */
  tagline: string;
  /** Eco-safe / pet-safe / family-safe badge */
  flags: ("eco" | "pet" | "family" | "combo")[];
  /** Price in ZAR (the R prefix is added in the UI) */
  price: number;
  /** Optional sale price; if present the card shows "Sale" + struck-through original */
  salePrice?: number;
  /** Local image under /public/products/ */
  image: string;
  /** Permalink on the real site */
  shopUrl: string;
  /** WC rating out of 5 (undefined if no rating yet) */
  rating?: number;
  /** Volume / size string */
  size: string;
  /** Locale key for the tagline (e.g. "prodAirTag") */
  taglineKey?: ProductTaglineKey;
  /** Product category */
  category: ProductCategory;
}

export type ProductCategory = "air" | "kitchen" | "floor" | "fabric" | "multi" | "combo" | "sneaker";

export type ProductTaglineKey =
  | "prodAirTag"
  | "prodSneakerTag"
  | "prodDishTag"
  | "prodComboTag"
  | "prodFloorTag"
  | "prodHandyTag"
  | "prodFabricTag"
  | "prodMultiCitrusTag"
  | "prodMultiGreenTag";

export const PRODUCTS: Product[] = [
  {
    id: "cherry-fresh-250",
    name: "Cherry Fresh Air Freshener",
    tagline: "Cherry Fresh Air Freshener",
    flags: ["family"],
    price: 28,
    image: "/products/cherry-fresh.png",
    shopUrl: "https://domesticpro.co.za/shop-dps/household-cleaning-agents/cherry-fresh-air-freshener-250ml/",
    size: "250 ml",
    taglineKey: "prodAirTag",
    category: "air",
  },
  {
    id: "cleankick-sneaker-250",
    name: "CleanKick Sneaker Cleaner",
    tagline: "CleanKick Sneaker Cleaner",
    flags: ["family"],
    price: 62,
    image: "/products/sneaker-cleaner.png",
    shopUrl: "https://domesticpro.co.za/shop-dps/household-cleaning-agents/cleankick-sneaker-cleaner-250ml/",
    size: "250 ml",
    taglineKey: "prodSneakerTag",
    category: "sneaker",
  },
  {
    id: "dishwash-lemon-750",
    name: "Dishwashing Liquid (Lemon)",
    tagline: "Dishwashing Liquid – Lemon",
    flags: ["eco"],
    price: 33,
    image: "/products/dish-liquid-lemon.png",
    shopUrl: "https://domesticpro.co.za/shop-dps/household-cleaning-agents/dishwashing-liquid-750ml/",
    size: "750 ml",
    taglineKey: "prodDishTag",
    category: "kitchen",
  },
  {
    id: "dps-combo",
    name: "DPS – Cleaning Combo",
    tagline: "DPS – Cleaning Combo",
    flags: ["combo", "eco"],
    price: 350.99,
    salePrice: 300,
    image: "/products/dps-combo.png",
    shopUrl: "https://domesticpro.co.za/shop-dps/household-cleaning-agents/dps-cleaning-combo-detergents/",
    rating: 5,
    size: "Bundle",
    taglineKey: "prodComboTag",
    category: "combo",
  },
  {
    id: "floor-tile-fresh-750",
    name: "Floor & Tile Cleaner (Fresh)",
    tagline: "Floor & Tile Cleaner – Fresh",
    flags: ["eco"],
    price: 44,
    image: "/products/floor-tile-cleaner.png",
    shopUrl: "https://domesticpro.co.za/shop-dps/household-cleaning-agents/floor-tile-cleaner-fresh/",
    size: "750 ml",
    taglineKey: "prodFloorTag",
    category: "floor",
  },
  {
    id: "handy-kleen-lemon-750",
    name: "Handy Kleen (Lemon)",
    tagline: "Handy Kleen – Lemon",
    flags: ["eco", "family"],
    price: 33,
    image: "/products/handy-kleen.png",
    shopUrl: "https://domesticpro.co.za/shop-dps/household-cleaning-agents/handy-kleen-lemon/",
    size: "750 ml",
    taglineKey: "prodHandyTag",
    category: "multi",
  },
  {
    id: "linen-fabric-mist-250",
    name: "Linen & Fabric Spray (Morning Mist)",
    tagline: "Linen & Fabric Spray – Morning Mist",
    flags: ["family"],
    price: 30,
    image: "/products/linen-fabric-spray.png",
    shopUrl: "https://domesticpro.co.za/shop-dps/household-cleaning-agents/morning-mist-linen-fabric-spray-250ml/",
    size: "250 ml",
    taglineKey: "prodFabricTag",
    category: "fabric",
  },
  {
    id: "mp-cleaner-citrus-750",
    name: "Multi-Purpose Cleaner (Citrus Burst)",
    tagline: "Multi-Purpose Cleaner – Citrus Burst",
    flags: ["eco"],
    price: 46,
    image: "/products/mp-cleaner-citrus.png",
    shopUrl: "https://domesticpro.co.za/shop-dps/household-cleaning-agents/multi-purpose-cleaner/",
    size: "750 ml",
    taglineKey: "prodMultiCitrusTag",
    category: "multi",
  },
  {
    id: "mp-cleaner-green-750",
    name: "Multi-Purpose Cleaner (Green Clean)",
    tagline: "Multi-Purpose Cleaner – Green Clean",
    flags: ["eco", "pet"],
    price: 46,
    image: "/products/mp-cleaner-green.png",
    shopUrl: "https://domesticpro.co.za/shop-dps/household-cleaning-agents/multi-purpose-cleaner-green-clean/",
    size: "750 ml",
    taglineKey: "prodMultiGreenTag",
    category: "multi",
  },
];

// Categories for filtering
export const PRODUCT_CATEGORIES: { id: "all" | ProductCategory; labelKey: "catAll" | `cat${Capitalize<ProductCategory>}` }[] = [
  { id: "all", labelKey: "catAll" },
  { id: "combo", labelKey: "catCombo" },
  { id: "multi", labelKey: "catMulti" },
  { id: "kitchen", labelKey: "catKitchen" },
  { id: "floor", labelKey: "catFloor" },
  { id: "fabric", labelKey: "catFabric" },
  { id: "air", labelKey: "catAir" },
  { id: "sneaker", labelKey: "catSneaker" },
] as const;
