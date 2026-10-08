"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star, ShieldCheck, PawPrint, Leaf, Clock, Phone, ArrowRight } from "lucide-react";
import { useI18n } from "@/lib/i18n-context";

export function Hero() {
  const { t } = useI18n();

  return (
    <section id="top" className="relative overflow-hidden bg-emerald-950">
      {/* Hero photo from the real site */}
      <div className="absolute inset-0">
        <Image
          src="/dp-hero.jpg"
          alt="Domestic Pro Service team cleaning"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 hero-overlay" aria-hidden />
      </div>

      {/* Decorative lime mesh top-right */}
      <div
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#80cc28]/30 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-[1600px] px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 rounded-full border border-lime-300/40 bg-lime-300/15 px-3 py-1 text-xs font-semibold text-lime-100 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-lime-300 status-pulse" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-lime-200" />
            </span>
            {t.heroEyebrow}
            <span className="text-lime-300/70">·</span>
            <span className="text-lime-100/90">{t.since}</span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            {t.heroTitle}
          </motion.h1>

          {/* Suburb line — accent */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-lime-300 sm:text-base"
          >
            <Leaf className="h-4 w-4" aria-hidden />
            {t.heroSuburbLine}
          </motion.p>

          {/* Lead */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="mt-4 max-w-2xl text-sm leading-relaxed text-emerald-50/90 sm:text-base lg:text-lg"
          >
            {t.heroLead}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.24 }}
            className="mt-6 flex flex-wrap items-center gap-3"
          >
            <a
              href="#demo"
              className="inline-flex items-center gap-2 rounded-md bg-[#80cc28] px-5 py-3 text-sm font-bold text-emerald-950 shadow-lg shadow-lime-900/30 transition-transform hover:scale-[1.02] hover:bg-[#8eda3a]"
            >
              {t.heroCtaBook}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
            <a
              href="tel:+27810372833"
              className="inline-flex items-center gap-2 rounded-md border border-lime-300/40 bg-emerald-950/30 px-5 py-3 text-sm font-semibold text-lime-100 backdrop-blur-sm transition-colors hover:bg-emerald-950/50"
            >
              <Phone className="h-4 w-4" aria-hidden />
              {t.heroCtaCall}
            </a>
          </motion.div>

          {/* Inline trust pills */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-emerald-50/90 sm:text-sm"
          >
            <span className="inline-flex items-center gap-1.5">
              <Star className="h-3.5 w-3.5 fill-lime-300 text-lime-300" aria-hidden />
              <strong className="text-lime-100">5.0</strong> · 111 Google reviews
            </span>
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5 text-lime-300" aria-hidden />
              {t.trust5}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Leaf className="h-3.5 w-3.5 text-lime-300" aria-hidden />
              {t.trust2}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 text-lime-300" aria-hidden />
              {t.trust3}
            </span>
          </motion.div>
        </div>
      </div>

      {/* Trust marquee strip */}
      <div className="relative border-t border-lime-300/20 bg-emerald-950/40 py-2 backdrop-blur-sm">
        <div className="marquee-mask overflow-hidden">
          <div className="flex animate-marquee gap-8 whitespace-nowrap text-[11px] text-lime-100/80 sm:text-xs">
            {[...Array(2)].map((_, dup) => (
              <div key={dup} className="flex items-center gap-8">
                {[
                  t.trust1,
                  t.trust2,
                  t.trust3,
                  t.trust4,
                  t.trust5,
                ].map((line, i) => (
                  <span key={`${dup}-${i}`} className="flex items-center gap-2">
                    <Leaf className="h-3 w-3 text-lime-300" aria-hidden />
                    {line}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
