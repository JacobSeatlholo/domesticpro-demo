# Domestic Pro Service — AI Job Matcher Demo

A sleek, modern, trust-first demo application for **Domestic Pro Service** ([domesticpro.co.za](https://domesticpro.co.za)) — a high-end eco-friendly cleaning company operating across Cape Town's Northern Suburbs (Durbanville, Bellville, Tygervalley, Parow).

> Professional Cleaning You Can Trust Since 2021 · Eco-Friendly & Pet-Safe

**Demo built by [BusinessHustle](https://www.businesshustle.co.za)** (Fiona Burke) for Domestic Pro Service (Pty) Ltd — Elmar Stoffels, Managing Director.

---

## Highlights

- ✅ **Real Domestic Pro branding** — actual logo, real service list, real pricing (R450 / R1 500 / R750 / R1 120), real Google reviews pulled from domesticpro.co.za
- ✅ **Authentic lime-green brand palette** (`#80cc28`) — matches the live site, not a generic AI template
- ✅ **Multi-language** — full English / Afrikaans / isiXhosa switcher (the three dominant Cape Town languages). Stored in localStorage; auto-detects browser language.
- ✅ **Trust-first UX** — hero with real team photo, 5.0★ rating + "111 Google reviews" badge, real customer testimonials, coverage area cards with community descriptions
- ✅ **Live 3-column / dual-panel AI workflow demo**:
  - **Left** — Customer intake form with two pre-populated Cape Town scenarios (Durbanville Deep Clean + Eco Pet Treatment, Tygervalley Office Clean)
  - **Center** — Animated 4-stage pipeline (Geo-Fencing → Requirement Tagging → Estimator & Lead Scoring → Dispatcher Routing) with a live console
  - **Right** — Ops dashboard with instant lead card, equipment checklist, and one-click dispatch (Accept → Lock Calendar → Send SMS/WhatsApp → Referral Insights)
- ✅ **ROI & Referral Engine widget** — animated counters (+35% off-season fill, 22% cross-referral, 68% recurring)
- ✅ **Sticky header, sticky footer, mobile-first responsive** — tested down to 390px

## Demo scenarios (pre-populated for easy testing)

### 1. Durbanville Deep Clean + Eco Pet Treatment
- **Customer:** Saskia van Wyk · **Phone:** +27 82 415 7782
- **Suburb:** Durbanville (Durbanville Hills / Protea Valley)
- **Service:** Deep Clean + Eco-Friendly Pet Treatment (2 Dogs)
- **Property:** 3 Bedroom, 2 Bath · **Preferred:** Friday Morning
- **Notes:** "Need eco-friendly products due to sensitive pets."

### 2. Tygervalley Office Clean (After-Hours)
- **Customer:** Pieter Joubert · **Phone:** +27 71 902 3344
- **Suburb:** Tygervalley (Waterfront / Bloemhof)
- **Service:** Office Clean — Eco-Friendly Sanitising (After Hours)
- **Property:** Open-plan office, ~180 m² (12 desks, 2 meeting rooms, 1 kitchen)
- **Preferred:** Wednesday After-hours
- **Notes:** "Recurring weekly clean preferred. Staff with mild allergies — fragrance-free eco products."

## Tech stack

- **Framework:** [Next.js 16](https://nextjs.org/) with App Router, TypeScript 5
- **Styling:** Tailwind CSS 4 with [shadcn/ui](https://ui.shadcn.com/) (New York)
- **State:** Zustand (cross-panel workflow) + Framer Motion (animations)
- **i18n:** Custom `useSyncExternalStore`-based provider (English / Afrikaans / isiXhosa) with localStorage persistence
- **API routes:** `POST /api/job-request` (intake + estimator), `POST /api/dispatch` (one-click actions)
- **Icons:** [lucide-react](https://lucide.dev/)
- **Brand assets:** Real Domestic Pro logo + hero photo, downloaded from domesticpro.co.za

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
public/
├── domestic-pro-logo.png       # Real Domestic Pro wordmark
├── dp-logo-full.png             # Real Domestic Pro icon (192px)
├── dp-hero.jpg                  # Real hero photo
└── favicon.svg
src/
├── app/
│   ├── api/
│   │   ├── job-request/route.ts # Intake + estimator endpoint
│   │   └── dispatch/route.ts     # One-click dispatch actions
│   ├── layout.tsx               # Metadata, fonts, I18nProvider, Toaster
│   ├── page.tsx                 # Hero + Services + Why + Areas + Demo + Reviews + Footer
│   └── globals.css              # Lime/sage theme tokens, animations
├── components/
│   ├── domestic-pro/
│   │   ├── header.tsx           # Brand + nav + language switcher + AI badge
│   │   ├── hero.tsx             # Real hero photo + trust signals
│   │   ├── services.tsx         # 4 service cards with real pricing
│   │   ├── why-choose-us.tsx    # Reasons + stats (real reviews count)
│   │   ├── areas.tsx            # 4 coverage suburb cards
│   │   ├── customer-intake-form.tsx # Left demo panel
│   │   ├── ai-pipeline.tsx      # Center demo panel (animated)
│   │   ├── admin-dashboard.tsx  # Right demo panel (dispatch actions)
│   │   ├── roi-counter.tsx      # ROI widget with animated counters
│   │   ├── reviews.tsx          # Real Google reviews grid
│   │   ├── footer.tsx           # Footer with BusinessHustle credit
│   │   └── logo.tsx             # Inline brand badge
│   └── ui/                      # shadcn/ui components
└── lib/
    ├── scenarios.ts             # Pre-populated demo data
    ├── workflow-store.ts       # Zustand workflow orchestration
    ├── i18n.ts                  # EN/AF/XH dictionary
    └── i18n-context.tsx         # useSyncExternalStore locale provider
```

## Multi-language feature

Three locales available in the header dropdown:

| Code | Language     | Native label | Coverage                          |
|------|--------------|--------------|-----------------------------------|
| `en` | English      | English      | Default / fallback                |
| `af` | Afrikaans    | Afrikaans    | Auto-detected from browser lang   |
| `xh` | isiXhosa     | isiXhosa     | Auto-detected from browser lang   |

- Selected locale is persisted to `localStorage` (key: `dp-locale`)
- Other browser tabs sync automatically via the `storage` event
- All UI strings are translated; booking scenarios and review text remain in English (since they're the actual client's content)

## Credits

- **Client:** Domestic Pro Service (Pty) Ltd — [domesticpro.co.za](https://domesticpro.co.za)
  - Elmar Stoffels, Managing Director · bookings@domesticpro.co.za · 081 037 2833
  - Real content (services, pricing, reviews, area descriptions) pulled from the live site
- **Demo built by:** [BusinessHustle](https://www.businesshustle.co.za) — Fiona Burke
  - Local AI agency pairing business directories with open-source AI automation to fill service-business calendars without chasing word-of-mouth.

## License

This demo is a sales/marketing proof-of-concept for Domestic Pro Service (Pty) Ltd, built by BusinessHustle. All rights to the Domestic Pro brand, coverage areas, services and contact details belong to Domestic Pro Service (Pty) Ltd.
