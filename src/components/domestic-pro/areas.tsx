"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { useI18n } from "@/lib/i18n-context";

interface Area {
  name: string;
  blurb: string;
  hue: string;
}

export function Areas() {
  const { t } = useI18n();

  const areas: Area[] = [
    { name: "Durbanville", blurb: t.areaDurbanvilleDesc, hue: "from-emerald-100 to-lime-50" },
    { name: "Bellville", blurb: t.areaBellvilleDesc, hue: "from-lime-100 to-emerald-50" },
    { name: "Tygervalley", blurb: t.areaTygervalleyDesc, hue: "from-emerald-100 to-lime-50" },
    { name: "Parow", blurb: t.areaParowDesc, hue: "from-lime-100 to-emerald-50" },
  ];

  return (
    <section className="bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="leaf-dot text-xs font-bold uppercase tracking-wider text-emerald-700">
            {t.areasTitle}
          </span>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            {t.areasTitle}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
            {t.areasLead}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {areas.map((a, i) => (
            <motion.article
              key={a.name}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={`group relative overflow-hidden rounded-xl border border-lime-100 bg-gradient-to-br ${a.hue} p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lime`}
            >
              <div className="flex items-center gap-2.5">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-[#80cc28] text-emerald-950 shadow-sm">
                  <MapPin className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="text-lg font-extrabold text-emerald-900">
                  {a.name}
                </h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">
                {a.blurb}
              </p>
              <div className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-white/70 px-2.5 py-1 text-[11px] font-semibold text-emerald-800 backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" aria-hidden />
                In coverage
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
