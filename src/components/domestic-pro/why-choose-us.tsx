"use client";

import { motion } from "framer-motion";
import {
  Award,
  Leaf,
  CalendarClock,
  Tag,
  ShieldCheck,
  Quote,
} from "lucide-react";
import { useI18n } from "@/lib/i18n-context";

export function WhyChooseUs() {
  const { t } = useI18n();

  const reasons = [
    { icon: Award, text: t.why1 },
    { icon: Leaf, text: t.why2 },
    { icon: CalendarClock, text: t.why3 },
    { icon: Tag, text: t.why4 },
    { icon: ShieldCheck, text: t.why5 },
  ];

  return (
    <section id="about" className="bg-lime-50/40 py-14 sm:py-16">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.1fr]">
          {/* Left: heading + lead */}
          <div className="flex flex-col justify-center">
            <span className="leaf-dot text-xs font-bold uppercase tracking-wider text-emerald-700">
              {t.whyTitle}
            </span>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
              {t.whyTitle}
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
              {t.whyLead}
            </p>

            {/* Stats — pulled from the real site's "Numbers Speak" section */}
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                { label: t.statsReviews, value: "111+" },
                { label: t.statsClients, value: "300+" },
                { label: t.statsJobs, value: "5 000+" },
                { label: t.statsYears, value: "2021" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.92 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="rounded-xl border border-lime-200 bg-white p-3 text-center shadow-sm"
                >
                  <p className="text-2xl font-extrabold text-emerald-700 sm:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-[11px] font-medium uppercase tracking-wide text-slate-500">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: reason cards */}
          <div className="space-y-3">
            {reasons.map((r, i) => {
              const Icon = r.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.35, delay: i * 0.05 }}
                  className="flex items-center gap-3 rounded-xl border border-lime-100 bg-white p-4 shadow-sm transition-shadow hover:shadow-lime"
                >
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-[#80cc28] text-emerald-950">
                    <Icon className="h-5 w-5" aria-hidden />
                  </div>
                  <p className="text-sm font-semibold text-slate-800 sm:text-base">
                    {r.text}
                  </p>
                  <Quote className="ml-auto h-4 w-4 text-lime-300" aria-hidden />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
