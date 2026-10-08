// Domestic Pro Service — Workflow store (Zustand)
// Orchestrates the AI job-matcher pipeline + admin lead state across panels.

import { create } from "zustand";
import type { ScenarioField, ScenarioId } from "@/lib/scenarios";
import { getScenario } from "@/lib/scenarios";

export type StageStatus = "idle" | "pending" | "active" | "done" | "error";

export interface StageResult {
  geoFence: {
    inCoverage: boolean;
    suburb: string;
    corridor: string;
    driveMinutes: number;
  };
  requirementTags: string[];
  estimate: {
    hours: number;
    teamSize: number;
    leadPriority: "Standard" | "High" | "VIP";
    estRevenueZAR: number;
    estDurationLabel: string;
  };
  dispatch: {
    assignedCrew: string;
    calendarSlot: string;
    smsPreview: string;
  };
}

export interface Lead {
  id: string;
  customer: ScenarioField;
  receivedAt: string;
  status: "incoming" | "accepted" | "dispatched" | "confirmed";
  result: StageResult | null;
}

interface WorkflowState {
  scenarioId: ScenarioId;
  setScenario: (id: ScenarioId) => void;

  // Pipeline
  isRunning: boolean;
  stageIndex: number; // -1 = not started, 0..3 active, 4 = complete
  stageStatuses: StageStatus[];
  stageLogs: string[];
  result: StageResult | null;
  lead: Lead | null;

  // Admin actions
  leadStatus: Lead["status"];
  calendarLocked: boolean;
  smsSent: boolean;
  referralInsightsOpen: boolean;

  // Actions
  reset: () => void;
  runPipeline: (customer: ScenarioField) => Promise<void>;
  setStageStatus: (idx: number, status: StageStatus) => void;
  pushLog: (msg: string) => void;
  acceptLead: () => void;
  lockCalendar: () => void;
  sendSms: () => void;
  toggleReferralInsights: () => void;
}

const emptyStatuses: StageStatus[] = ["idle", "idle", "idle", "idle"];

function delay(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}

// Build the result from the customer field. This is the deterministic "AI estimator".
function buildResult(customer: ScenarioField): StageResult {
  const isOffice = customer.serviceType.toLowerCase().includes("office");
  const isDeep = customer.serviceType.toLowerCase().includes("deep");

  // Hours & team heuristic
  let hours = 4;
  let teamSize = 2;
  if (isOffice) {
    hours = 3.5;
    teamSize = 2;
  } else if (isDeep) {
    hours = 6.5;
    teamSize = 3;
  }
  if (customer.petSafe) hours += 0.5;
  if (customer.ecoFriendly) teamSize = Math.max(teamSize, 2);

  // Rate card (ZAR)
  const ratePerHourPerCrew = 95;
  const petTreatmentFlat = customer.petSafe ? 320 : 0;
  const ecoPremium = customer.ecoFriendly ? 180 : 0;
  const estRevenueZAR =
    Math.round(hours * teamSize * ratePerHourPerCrew + petTreatmentFlat + ecoPremium);

  // Lead scoring
  let leadPriority: StageResult["estimate"]["leadPriority"] = "Standard";
  if (isDeep && customer.petSafe) leadPriority = "High";
  if (isOffice) leadPriority = "VIP"; // recurring revenue potential

  // Tags
  const requirementTags: string[] = [];
  if (customer.ecoFriendly) requirementTags.push("Eco-Friendly Supply");
  if (customer.petSafe) requirementTags.push("Pet-Safe Treatment");
  if (isOffice) requirementTags.push("After-Hours Access");
  if (isDeep) requirementTags.push("Deep-Clean Equipment");
  if (customer.preferredTime.toLowerCase().includes("after")) {
    requirementTags.push("Evening Crew");
  }

  // Coverage + corridor
  const corridorMap: Record<string, string> = {
    Durbanville: "Durbanville Corridor",
    Bellville: "Bellville Corridor",
    Tygervalley: "Tygervalley Corridor",
    Parow: "Parow Corridor",
  };
  const driveMinutesMap: Record<string, number> = {
    Durbanville: 12,
    Bellville: 8,
    Tygervalley: 10,
    Parow: 14,
  };

  // Crew assignment
  const crewPool: Record<string, string> = {
    Durbanville: "Crew A — Liezl & Thandi (Eco-certified)",
    Bellville: "Crew B — Megan & Nokwanda",
    Tygervalley: "Crew C — Jolene & Shane (After-hours)",
    Parow: "Crew D — Anthea & Refilwe",
  };

  const slot = `${customer.preferredDate} · ${customer.preferredTime}`;

  const smsPreview = `Hi ${customer.customerName.split(" ")[0]}! Domestic Pro here. Your ${customer.suburb} ${customer.serviceType.split(" +")[0]} is provisionally booked for ${slot}. ${customer.petSafe ? "Pet-safe eco products confirmed. " : ""}Our team will arrive on time. Reply YES to confirm. — Elmar, Domestic Pro Service`;

  return {
    geoFence: {
      inCoverage: true,
      suburb: customer.suburb,
      corridor: corridorMap[customer.suburb] ?? "Durbanville Corridor",
      driveMinutes: driveMinutesMap[customer.suburb] ?? 12,
    },
    requirementTags,
    estimate: {
      hours,
      teamSize,
      leadPriority,
      estRevenueZAR,
      estDurationLabel: `${hours}h · ${teamSize}-person crew`,
    },
    dispatch: {
      assignedCrew: crewPool[customer.suburb] ?? crewPool.Durbanville,
      calendarSlot: slot,
      smsPreview,
    },
  };
}

const initialCustomer = getScenario("durbanville-standard").fields;

export const useWorkflow = create<WorkflowState>((set, get) => ({
  scenarioId: "durbanville-standard",
  setScenario: (id) => {
    const sc = getScenario(id);
    set({
      scenarioId: id,
      isRunning: false,
      stageIndex: -1,
      stageStatuses: emptyStatuses,
      stageLogs: [],
      result: null,
      lead: null,
      leadStatus: "incoming",
      calendarLocked: false,
      smsSent: false,
      referralInsightsOpen: false,
    });
    // Note: we don't auto-fill the form here; the form component reads scenario fields.
    void sc;
  },

  isRunning: false,
  stageIndex: -1,
  stageStatuses: emptyStatuses,
  stageLogs: [],
  result: null,
  lead: null,

  leadStatus: "incoming",
  calendarLocked: false,
  smsSent: false,
  referralInsightsOpen: false,

  reset: () =>
    set({
      isRunning: false,
      stageIndex: -1,
      stageStatuses: emptyStatuses,
      stageLogs: [],
      result: null,
      lead: null,
      leadStatus: "incoming",
      calendarLocked: false,
      smsSent: false,
      referralInsightsOpen: false,
    }),

  setStageStatus: (idx, status) => {
    const arr = [...get().stageStatuses];
    arr[idx] = status;
    set({ stageStatuses: arr });
  },

  pushLog: (msg) => set({ stageLogs: [...get().stageLogs, msg] }),

  runPipeline: async (customer) => {
    set({
      isRunning: true,
      stageIndex: 0,
      stageStatuses: ["pending", "idle", "idle", "idle"],
      stageLogs: [],
      result: null,
      lead: {
        id: `LEAD-${Date.now().toString(36).toUpperCase()}`,
        customer,
        receivedAt: new Date().toLocaleTimeString("en-ZA", {
          hour: "2-digit",
          minute: "2-digit",
        }),
        status: "incoming",
        result: null,
      },
      leadStatus: "incoming",
      calendarLocked: false,
      smsSent: false,
      referralInsightsOpen: false,
    });

    const result = buildResult(customer);

    // Stage 1 — Geo-Fencing
    set({ stageIndex: 0, stageStatuses: ["active", "idle", "idle", "idle"] });
    get().pushLog(`Validating ${customer.suburb} against coverage map…`);
    await delay(900);
    get().pushLog(
      `${result.geoFence.suburb} → ${result.geoFence.corridor} (${result.geoFence.driveMinutes} min from depot)`
    );
    await delay(500);

    // Stage 2 — Requirement Tagging
    set({ stageIndex: 1, stageStatuses: ["done", "active", "idle", "idle"] });
    get().pushLog("Scanning notes for eco / pet / access flags…");
    await delay(800);
    get().pushLog(`Tags applied: ${result.requirementTags.join(", ")}`);
    await delay(500);

    // Stage 3 — Estimator & Lead Scoring
    set({ stageIndex: 2, stageStatuses: ["done", "done", "active", "idle"] });
    get().pushLog("Running hours × team estimator & lead priority model…");
    await delay(1000);
    get().pushLog(
      `Est: ${result.estimate.estDurationLabel} · Priority ${result.estimate.leadPriority} · R${result.estimate.estRevenueZAR.toLocaleString("en-ZA")}`
    );
    await delay(500);

    // Stage 4 — Dispatcher Routing
    set({ stageIndex: 3, stageStatuses: ["done", "done", "done", "active"] });
    get().pushLog("Preparing dispatch card for Domestic Pro ops team…");
    await delay(900);
    get().pushLog(`Routed to ${result.dispatch.assignedCrew}`);

    // Finalize
    set({
      isRunning: false,
      stageIndex: 4,
      stageStatuses: ["done", "done", "done", "done"],
      result,
      lead: {
        id: get().lead?.id ?? `LEAD-${Date.now().toString(36).toUpperCase()}`,
        customer,
        receivedAt: get().lead?.receivedAt ?? "",
        status: "incoming",
        result,
      },
    });
  },

  acceptLead: () =>
    set((s) => ({
      leadStatus: "accepted",
      lead: s.lead ? { ...s.lead, status: "accepted" } : s.lead,
    })),

  lockCalendar: () =>
    set((s) => ({
      calendarLocked: true,
      leadStatus: "dispatched",
      lead: s.lead ? { ...s.lead, status: "dispatched" } : s.lead,
    })),

  sendSms: () =>
    set((s) => ({
      smsSent: true,
      leadStatus: "confirmed",
      lead: s.lead ? { ...s.lead, status: "confirmed" } : s.lead,
    })),

  toggleReferralInsights: () =>
    set((s) => ({ referralInsightsOpen: !s.referralInsightsOpen })),
}));

// Re-export initial customer for convenience
export { initialCustomer };
