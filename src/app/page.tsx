"use client";

import { Header } from "@/components/domestic-pro/header";
import { CustomerIntakeForm } from "@/components/domestic-pro/customer-intake-form";
import { AiPipeline } from "@/components/domestic-pro/ai-pipeline";
import { AdminDashboard } from "@/components/domestic-pro/admin-dashboard";
import { RoiCounter } from "@/components/domestic-pro/roi-counter";
import { Footer } from "@/components/domestic-pro/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-sage-mesh bg-fixed">
      <Header />

      <main className="mx-auto w-full max-w-[1600px] flex-1 px-3 py-4 sm:px-4 sm:py-6">
        {/* Intro strip */}
        <section className="mb-4 sm:mb-6">
          <div className="rounded-2xl border border-emerald-100 bg-white/80 p-4 shadow-sm backdrop-blur sm:p-5">
            <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
              <div className="max-w-2xl">
                <h1 className="text-lg font-bold tracking-tight text-slate-900 sm:text-xl">
                  AI Job Matcher — instant lead → dispatch demo
                </h1>
                <p className="mt-1 text-xs leading-relaxed text-slate-600 sm:text-sm">
                  A live walkthrough of how a Durbanville job request lands with
                  Domestic Pro Service, gets tagged for eco &amp; pet-safe supply,
                  estimated, and routed to the ops team — in seconds. Built by{" "}
                  <a
                    href="https://www.businesshustle.co.za"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-emerald-700 underline-offset-2 hover:underline"
                  >
                    BusinessHustle
                  </a>{" "}
                  for Domestic Pro Service (Pty) Ltd.
                </p>
              </div>
              <div className="flex flex-shrink-0 flex-wrap items-center gap-2 text-[11px]">
                <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 font-medium text-emerald-700">
                  3-column / dual-panel
                </span>
                <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 font-medium text-emerald-700">
                  Live automation
                </span>
                <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 font-medium text-emerald-700">
                  No login required
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* 3-column dual panel */}
        <section
          aria-label="Domestic Pro Demo Workspace"
          className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)]"
        >
          {/* Left panel */}
          <div className="lg:row-span-1">
            <CustomerIntakeForm />
          </div>
          {/* Center panel */}
          <div className="lg:row-span-1">
            <AiPipeline />
          </div>
          {/* Right panel */}
          <div className="lg:row-span-1">
            <AdminDashboard />
          </div>
        </section>

        {/* ROI widget full-width below */}
        <section className="mt-4 sm:mt-6">
          <RoiCounter />
        </section>

        {/* How it works — quick explainer */}
        <section className="mt-4 sm:mt-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <ExplainerCard
              step={1}
              title="Customer submits intake"
              body="A pre-populated Durbanville or Tygervalley scenario — captured directly into the Domestic Pro pipeline."
            />
            <ExplainerCard
              step={2}
              title="AI matcher runs 4 stages"
              body="Geo-fencing → eco/pet tagging → estimator & lead scoring → dispatch card, all animated live."
            />
            <ExplainerCard
              step={3}
              title="Ops team one-click dispatches"
              body="Accept the lead, lock a calendar slot, send SMS/WhatsApp, and review referral booster insights."
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function ExplainerCard({
  step,
  title,
  body,
}: {
  step: number;
  title: string;
  body: string;
}) {
  return (
    <div className="rounded-xl border border-emerald-100 bg-white p-4 shadow-sm">
      <div className="flex items-center gap-2">
        <span className="grid h-7 w-7 place-items-center rounded-full bg-emerald-700 text-xs font-bold text-white">
          {step}
        </span>
        <h3 className="text-sm font-semibold text-slate-800">{title}</h3>
      </div>
      <p className="mt-2 text-xs leading-relaxed text-slate-600">{body}</p>
    </div>
  );
}
