// Domestic Pro Service — Dispatch Actions API
// Simulates the one-click dispatch actions from the admin dashboard.

import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

interface DispatchBody {
  action: "lock_calendar" | "send_sms" | "referral_insights";
  leadId: string;
  customerName?: string;
  suburb?: string;
  slot?: string;
  smsPreview?: string;
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as DispatchBody;

    switch (body.action) {
      case "lock_calendar": {
        return NextResponse.json({
          ok: true,
          action: body.action,
          leadId: body.leadId,
          lockedAt: new Date().toISOString(),
          slot: body.slot,
          message: `Calendar slot locked for ${body.customerName} — ${body.slot}. Crew notified via internal dispatch board.`,
        });
      }
      case "send_sms": {
        // Simulate SMS/WhatsApp send
        await new Promise((r) => setTimeout(r, 400));
        return NextResponse.json({
          ok: true,
          action: body.action,
          leadId: body.leadId,
          sentAt: new Date().toISOString(),
          channel: "WhatsApp + SMS",
          message: `Confirmation sent to ${body.customerName}. Preview: ${body.smsPreview?.slice(0, 80)}…`,
        });
      }
      case "referral_insights": {
        return NextResponse.json({
          ok: true,
          action: body.action,
          leadId: body.leadId,
          insights: {
            adjacentSuburbs: ["Bellville", "Parow", "Tygervalley"],
            recurringPotential: "High — weekly cadence likely",
            crossReferralScore: 78,
            offSeasonFillUpliftPct: 35,
            note: "Adjacent corridor neighbours show 22% cross-referral overlap. Recommend a 3-suburb bundle discount to lift off-season fill rate.",
          },
        });
      }
      default:
        return NextResponse.json(
          { ok: false, error: "Unknown action" },
          { status: 400 }
        );
    }
  } catch (e) {
    return NextResponse.json(
      { ok: false, error: (e as Error).message },
      { status: 500 }
    );
  }
}
