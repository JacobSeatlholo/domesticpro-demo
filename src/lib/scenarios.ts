// Domestic Pro Service — Scenario definitions
// Two pre-populated demo scenarios for easy testing.

export type ScenarioId = "durbanville-standard" | "tygervalley-office";

export interface ScenarioField {
  customerName: string;
  phone: string;
  suburb: string;
  suburbArea: string;
  serviceType: string;
  propertySize: string;
  preferredDate: string;
  preferredTime: string;
  customerNotes: string;
  petSafe: boolean;
  ecoFriendly: boolean;
}

export interface Scenario {
  id: ScenarioId;
  label: string;
  shortLabel: string;
  description: string;
  fields: ScenarioField;
}

export const SCENARIOS: Scenario[] = [
  {
    id: "durbanville-standard",
    label: "Durbanville Deep Clean + Eco Pet Treatment",
    shortLabel: "Durbanville Standard Clean",
    description: "Residential deep clean with eco-friendly pet treatment for 2 dogs.",
    fields: {
      customerName: "Saskia van Wyk",
      phone: "+27 82 415 7782",
      suburb: "Durbanville",
      suburbArea: "Durbanville Hills / Protea Valley",
      serviceType: "Deep Clean + Eco-Friendly Pet Treatment (2 Dogs)",
      propertySize: "3 Bedroom, 2 Bath",
      preferredDate: "Friday",
      preferredTime: "Morning (08:00 – 12:00)",
      customerNotes:
        "Need eco-friendly products due to sensitive pets. Two indoor dogs — please use pet-safe detergents and avoid strong bleach in lounge & bedrooms.",
      petSafe: true,
      ecoFriendly: true,
    },
  },
  {
    id: "tygervalley-office",
    label: "Tygervalley Office Clean (After-Hours)",
    shortLabel: "Tygervalley Office Clean",
    description: "Small commercial office cleaning — after-hours, eco-friendly sanitising.",
    fields: {
      customerName: "Pieter Joubert",
      phone: "+27 71 902 3344",
      suburb: "Tygervalley",
      suburbArea: "Tygervalley Waterfront / Bloemhof",
      serviceType: "Office Clean — Eco-Friendly Sanitising (After Hours)",
      propertySize: "Open-plan office, ~180 m² (12 desks, 2 meeting rooms, 1 kitchen)",
      preferredDate: "Wednesday",
      preferredTime: "After-hours (17:30 – 20:30)",
      customerNotes:
        "Recurring weekly clean preferred. Staff with mild allergies — please use fragrance-free eco products on desks and air-purifier-friendly sanitisers in kitchen.",
      petSafe: false,
      ecoFriendly: true,
    },
  },
];

export const COVERAGE_SUBURBS = [
  "Durbanville",
  "Bellville",
  "Tygervalley",
  "Parow",
] as const;

export function getScenario(id: ScenarioId): Scenario {
  return SCENARIOS.find((s) => s.id === id) ?? SCENARIOS[0];
}
