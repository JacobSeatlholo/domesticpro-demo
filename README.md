# Domestic Pro Service — AI Job Matcher Demo

A sleek, modern demo application for **Domestic Pro Service**, a high-end eco-friendly cleaning company operating across Cape Town's Northern Suburbs (Durbanville, Bellville, Tygervalley, Parow).

> 🌿 Eco-Friendly & Pet-Safe Cleaning · AI Job Matcher Active · Durbanville Corridor

**Demo built by [BusinessHustle](https://www.businesshustle.co.za)** for Domestic Pro Service (Pty) Ltd.

---

## What this demo does

This is a live, interactive walkthrough showing how a nearby job request (e.g. from a Durbanville resident) would land directly with Domestic Pro's operations team — instead of relying on slow word-of-mouth referrals during the rainy off-season.

It runs a **3-column / dual-panel architecture**:

| Panel | What it does |
|-------|--------------|
| **Left — Customer Intake Form** | A public booking widget with two pre-populated example scenarios for easy testing. |
| **Center — AI Processing Pipeline** | A live 4-stage automation workflow animated end-to-end on submission. |
| **Right — Admin Dashboard** | Operations view: instant lead card, one-click dispatch actions, referral insights. |

Below the panels is an **ROI & Referral Engine** widget showing estimated off-season calendar fill uplift (+35%) and cross-corridor referral scores.

### The 4-stage AI pipeline (animated)

1. 📍 **Geo-Fencing & Service Area Match** — validates the suburb is within Domestic Pro's Northern Suburbs coverage.
2. 🌿 **Special Requirement Tagging** — flags "Pet-Safe / Eco-Friendly" supply assignment from notes.
3. 📊 **Job Estimator & Lead Scoring** — calculates hours, team size, lead priority (Standard / High / VIP) and estimated revenue.
4. 📨 **Dispatcher Routing** — prepares a dispatch card (crew + slot + SMS preview) for the Domestic Pro ops team.

### One-click dispatch actions (admin)

- **Accept & Lock into ops queue**
- **Accept & Lock Calendar Slot**
- **Send Automated SMS / WhatsApp Confirmation** (sends a preview message to the client)
- **View Area Referral Booster Insights** (opens a modal with cross-corridor scores)

## Pre-populated example scenarios

Toggle between them in the left panel for easy testing:

### 1. Durbanville Deep Clean + Eco Pet Treatment
- **Customer:** Saskia van Wyk
- **Suburb:** Durbanville (Durbanville Hills / Protea Valley)
- **Service:** Deep Clean + Eco-Friendly Pet Treatment (2 Dogs)
- **Property:** 3 Bedroom, 2 Bath
- **Preferred:** Friday Morning
- **Notes:** "Need eco-friendly products due to sensitive pets."

### 2. Tygervalley Office Clean (After-Hours)
- **Customer:** Pieter Joubert
- **Suburb:** Tygervalley (Tygervalley Waterfront / Bloemhof)
- **Service:** Office Clean — Eco-Friendly Sanitising (After Hours)
- **Property:** Open-plan office, ~180 m² (12 desks, 2 meeting rooms, 1 kitchen)
- **Preferred:** Wednesday After-hours
- **Notes:** "Recurring weekly clean preferred. Staff with mild allergies — fragrance-free eco products."

## Tech stack

- **Framework:** [Next.js 16](https://nextjs.org/) with App Router, TypeScript 5
- **Styling:** Tailwind CSS 4 with [shadcn/ui](https://ui.shadcn.com/) (New York)
- **State:** Zustand (cross-panel workflow) + Framer Motion (animations)
- **API routes:** `POST /api/job-request`, `POST /api/dispatch` (mock server-side intake + dispatch actions)
- **Icons:** [lucide-react](https://lucide.dev/)
- **Brand:** Custom emerald + sage palette, inlined SVG logo

## Local development

```bash
# Install deps
bun install

# Push the (optional) Prisma schema
bun run db:push

# Start dev server
bun run dev   # http://localhost:3000

# Lint
bun run lint
```

## Project layout

```
src/
├── app/
│   ├── api/
│   │   ├── job-request/route.ts    # Intake + estimator endpoint
│   │   └── dispatch/route.ts       # One-click dispatch actions
│   ├── layout.tsx                  # Metadata, fonts, toaster
│   ├── page.tsx                   # 3-column layout orchestrator
│   └── globals.css                 # Emerald / sage theme tokens
├── components/
│   ├── domestic-pro/
│   │   ├── header.tsx              # Top bar + live status badge
│   │   ├── customer-intake-form.tsx# Left panel
│   │   ├── ai-pipeline.tsx         # Center panel (animated)
│   │   ├── admin-dashboard.tsx     # Right panel (dispatch actions)
│   │   ├── roi-counter.tsx        # ROI & referral widget
│   │   ├── footer.tsx              # Footer with BH credit
│   │   └── logo.tsx                # Inline SVG brand
│   └── ui/                         # shadcn/ui components
└── lib/
    ├── scenarios.ts               # Pre-populated demo data
    └── workflow-store.ts          # Zustand workflow orchestration
```

## Credits

- **Client:** Domestic Pro Service (Pty) Ltd — [domesticpro.co.za](https://domesticpro.co.za)
  - Elmar Stoffels, Managing Director · bookings@domesticpro.co.za · 081 037 2833
- **Demo built by:** [BusinessHustle](https://www.businesshustle.co.za) — Fiona Burke
  - Local AI agency pairing business directories with open-source AI automation to fill service-business calendars without chasing word-of-mouth.

## License

This demo is a sales/marketing proof-of-concept for Domestic Pro Service (Pty) Ltd, built by BusinessHustle. All rights to the Domestic Pro brand, coverage areas and contact details belong to Domestic Pro Service (Pty) Ltd.
