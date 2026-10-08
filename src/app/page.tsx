"use client";

import { Header } from "@/components/domestic-pro/header";
import { Hero } from "@/components/domestic-pro/hero";
import { Services } from "@/components/domestic-pro/services";
import { WhyChooseUs } from "@/components/domestic-pro/why-choose-us";
import { Areas } from "@/components/domestic-pro/areas";
import { CustomerIntakeForm } from "@/components/domestic-pro/customer-intake-form";
import { AiPipeline } from "@/components/domestic-pro/ai-pipeline";
import { AdminDashboard } from "@/components/domestic-pro/admin-dashboard";
import { RoiCounter } from "@/components/domestic-pro/roi-counter";
import { Reviews } from "@/components/domestic-pro/reviews";
import { Footer } from "@/components/domestic-pro/footer";
import { useI18n } from "@/lib/i18n-context";

export default function Home() {
  const { t } = useI18n();

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />

      <main className="flex-1">
        <Hero />
        <Services />
        <WhyChooseUs />
        <Areas />

        {/* Demo section — 3-column / dual-panel */}
        <section
          id="demo"
          className="bg-lime-mesh bg-fixed scroll-mt-24 py-14 sm:py-16"
        >
          <div className="mx-auto max-w-[1600px] px-3 sm:px-6">
            {/* Intro strip */}
            <div className="mb-6 sm:mb-8">
              <div className="rounded-2xl border border-lime-100 bg-white/85 p-4 shadow-sm backdrop-blur sm:p-5">
                <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
                  <div className="max-w-2xl">
                    <span className="inline-flex items-center gap-2 rounded-full border border-lime-200 bg-lime-50 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-emerald-700">
                      {t.demoEyebrow}
                    </span>
                    <h2 className="mt-2 text-lg font-extrabold tracking-tight text-slate-900 sm:text-2xl">
                      {t.demoTitle}
                    </h2>
                    <p className="mt-1.5 text-xs leading-relaxed text-slate-600 sm:text-sm">
                      {t.demoLead}
                    </p>
                  </div>
                  <div className="flex flex-shrink-0 flex-wrap items-center gap-2 text-[11px]">
                    <span className="rounded-full border border-lime-200 bg-lime-50 px-2.5 py-1 font-medium text-emerald-700">
                      {t.demoThreeCol}
                    </span>
                    <span className="rounded-full border border-lime-200 bg-lime-50 px-2.5 py-1 font-medium text-emerald-700">
                      {t.demoLiveAuto}
                    </span>
                    <span className="rounded-full border border-lime-200 bg-lime-50 px-2.5 py-1 font-medium text-emerald-700">
                      {t.demoNoLogin}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* 3-column dual panel */}
            <div
              aria-label="Domestic Pro Demo Workspace"
              className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)]"
            >
              <CustomerIntakeForm />
              <AiPipeline />
              <AdminDashboard />
            </div>

            {/* ROI widget full-width below */}
            <div className="mt-4 sm:mt-6">
              <RoiCounter />
            </div>

            {/* How it works explainer */}
            <div className="mt-4 grid grid-cols-1 gap-4 sm:mt-6 sm:grid-cols-3">
              <ExplainerCard step={1} title={t.how1Title} body={t.how1Body} />
              <ExplainerCard step={2} title={t.how2Title} body={t.how2Body} />
              <ExplainerCard step={3} title={t.how3Title} body={t.how3Body} />
            </div>
          </div>
        </section>

        {/* Reviews */}
        <Reviews />
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
    <div className="rounded-xl border border-lime-100 bg-white p-4 shadow-sm">
      <div className="flex items-center gap-2">
        <span className="grid h-7 w-7 place-items-center rounded-full bg-[#80cc28] text-xs font-bold text-emerald-950">
          {step}
        </span>
        <h3 className="text-sm font-semibold text-slate-800">{title}</h3>
      </div>
      <p className="mt-2 text-xs leading-relaxed text-slate-600">{body}</p>
    </div>
  );
}
