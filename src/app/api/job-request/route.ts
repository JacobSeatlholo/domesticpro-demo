// Domestic Pro Service — Job Request API
// Simulates server-side intake validation + estimator echo.
// Frontend pipeline is animated locally; this endpoint provides a
// persistent server record so the demo can be replayed & logged.

import { NextRequest, NextResponse } from "next/server";
import { COVERAGE_SUBURBS } from "@/lib/scenarios";

export const runtime = "nodejs";

interface JobRequestBody {
  customerName: string;
  phone: string;
  suburb: string;
  serviceType: string;
  propertySize: string;
  preferredDate: string;
  preferredTime: string;
  customerNotes: string;
  petSafe: boolean;
  ecoFriendly: boolean;
  scenarioId?: string;
}

function estimate(
  body: JobRequestBody
): {
  hours: number;
  teamSize: number;
  estRevenueZAR: number;
  leadPriority: "Standard" | "High" | "VIP";
  inCoverage: boolean;
  corridor: string;
} {
  const isOffice = body.serviceType.toLowerCase().includes("office");
  const isDeep = body.serviceType.toLowerCase().includes("deep");

  let hours = 4;
  let teamSize = 2;
  if (isOffice) {
    hours = 3.5;
    teamSize = 2;
  } else if (isDeep) {
    hours = 6.5;
    teamSize = 3;
  }
  if (body.petSafe) hours += 0.5;

  const ratePerHourPerCrew = 95;
  const petTreatmentFlat = body.petSafe ? 320 : 0;
  const ecoPremium = body.ecoFriendly ? 180 : 0;
  const estRevenueZAR = Math.round(
    hours * teamSize * ratePerHourPerCrew + petTreatmentFlat + ecoPremium
  );

  let leadPriority: "Standard" | "High" | "VIP" = "Standard";
  if (isDeep && body.petSafe) leadPriority = "High";
  if (isOffice) leadPriority = "VIP";

  const corridorMap: Record<string, string> = {
    Durbanville: "Durbanville Corridor",
    Bellville: "Bellville Corridor",
    Tygervalley: "Tygervalley Corridor",
    Parow: "Parow Corridor",
  };

  const inCoverage = (COVERAGE_SUBURBS as readonly string[]).includes(body.suburb);

  return {
    hours,
    teamSize,
    estRevenueZAR,
    leadPriority,
    inCoverage,
    corridor: corridorMap[body.suburb] ?? "Out-of-area",
  };
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as JobRequestBody;

    if (!body.customerName || !body.suburb) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    const est = estimate(body);
    const leadId = `LEAD-${Date.now().toString(36).toUpperCase()}`;

    return NextResponse.json({
      ok: true,
      leadId,
      receivedAt: new Date().toISOString(),
      scenarioId: body.scenarioId ?? "custom",
      coverage: {
        suburb: body.suburb,
        inCoverage: est.inCoverage,
        corridor: est.corridor,
      },
      estimate: {
        hours: est.hours,
        teamSize: est.teamSize,
        estRevenueZAR: est.estRevenueZAR,
        leadPriority: est.leadPriority,
      },
      message: `Job request received for ${body.customerName} in ${body.suburb}. Dispatch card prepared for Domestic Pro operations team.`,
    });
  } catch (e) {
    return NextResponse.json(
      { ok: false, error: (e as Error).message },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    service: "Domestic Pro Service — Job Request API",
    version: "1.0.0",
    coverage: COVERAGE_SUBURBS,
    builder: "BusinessHustle (https://www.businesshustle.co.za)",
    client: "Domestic Pro Service (Pty) Ltd",
    contact: "bookings@domesticpro.co.za · +27 81 037 2833",
  });
}
