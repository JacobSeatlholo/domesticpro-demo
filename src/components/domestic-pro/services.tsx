"use client";

import { motion } from "framer-motion";
import {
  Home,
  Building2,
  Sparkles,
  Truck,
  ArrowUpRight,
  Check,
} from "lucide-react";
import { useI18n } from "@/lib/i18n-context";

interface ServiceCard {
  key: "residential" | "commercial" | "deep" | "move";
  icon: React.ElementType;
  name: string;
  desc: string;
  price: string;
}

export function Services() {
  const { t } = useI18n();

  const services: ServiceCard[] = [
    {
      key: "residential",
      icon: Home,
      name: t.serviceResidentialName,
      desc: t.serviceResidentialDesc,
      price: "R450",
    },
    {
      key: "commercial",
      icon: Building2,
      name: t.serviceCommercialName,
      desc: t.serviceCommercialDesc,
      price: "R1 500",
    },
    {
      key: "deep",
      icon: Sparkles,
      name: t.serviceDeepName,
      desc: t.serviceDeepDesc,
      price: "R750",
    },
    {
      key: "move",
      icon: Truck,
      name: t.serviceMoveName,
      desc: t.serviceMoveDesc,
      price: "R1 120",
    },
  ];

  return (
    <section id="services" className="bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6">
        {/* Section heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="leaf-dot text-xs font-bold uppercase tracking-wider text-emerald-700">
            {t.servicesTitle}
          </span>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            {t.servicesTitle}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
            {t.servicesLead}
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.article
                key={s.key}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group relative flex flex-col overflow-hidden rounded-xl border border-lime-100 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:border-lime-200 hover:shadow-lime"
              >
                {/* corner accent */}
                <div
                  className="pointer-events-none absolute right-0 top-0 h-16 w-16 -translate-y-8 translate-x-8 rounded-full bg-lime-100/60 transition-transform group-hover:translate-x-6 group-hover:-translate-y-6"
                  aria-hidden
                />
                <div className="relative grid h-12 w-12 place-items-center rounded-lg bg-[#80cc28]/15 text-emerald-700 ring-1 ring-[#80cc28]/30">
                  <Icon className="h-6 w-6" aria-hidden />
                </div>
                <h3 className="mt-4 text-base font-bold text-slate-900">
                  {s.name}
                </h3>
                <p className="mt-1.5 flex-1 text-sm leading-relaxed text-slate-600">
                  {s.desc}
                </p>
                <div className="mt-4 flex items-end justify-between border-t border-lime-50 pt-3">
                  <div>
                    <p className="text-[11px] font-medium uppercase tracking-wide text-slate-400">
                      {t.startingFrom}
                    </p>
                    <p className="text-xl font-extrabold text-emerald-800">
                      {s.price}
                    </p>
                  </div>
                  <a
                    href="#demo"
                    className="inline-flex items-center gap-1 rounded-md border border-lime-200 bg-lime-50 px-3 py-1.5 text-xs font-semibold text-emerald-800 transition-colors hover:bg-[#80cc28] hover:text-emerald-950"
                    aria-label={`${t.viewMore} — ${s.name}`}
                  >
                    {t.viewMore}
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
