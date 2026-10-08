"use client";

import { motion } from "framer-motion";
import { Star, ExternalLink } from "lucide-react";
import { useI18n } from "@/lib/i18n-context";

interface Review {
  author: string;
  when: string;
  body: string;
}

const REVIEWS: Review[] = [
  {
    author: "Erna Neethling",
    when: "a month ago",
    body:
      "The best service, quick and thorough. Elmar is very friendly and helpful. I can recommend his company without reservation. Will definitely use them again.",
  },
  {
    author: "Corné Maass",
    when: "a month ago",
    body:
      "Highly recommend Domestic Pro Service. Friendly, reliable and professional service. They accommodated me for post construction cleaning on very short notice and I’m very pleased with the end result!",
  },
  {
    author: "Zo Jo",
    when: "2 months ago",
    body:
      "As usual the team did a wonderful job. A year later and standard has definitely been maintained! Thank you for delivering excellent service.",
  },
  {
    author: "Sumith R.",
    when: "2 months ago",
    body:
      "I wish I could give them 10 stars. My new home was in terrible condition after contractors left. I only had a day to deep clean a 5 bedroom home before moving in. They came to my rescue. Will highly recommend them.",
  },
  {
    author: "Liezel Britz",
    when: "3 months ago",
    body:
      "Elmar and his team are a miracle. They managed to save a house from a really bad situation. Every room looks and feels brand new. Friendly, considerate, and dedicated — I can wholeheartedly recommend them for a deep clean done right.",
  },
  {
    author: "Allan Joyner",
    when: "6 months ago",
    body:
      "Couldn’t recommend a better deep cleaning company. Messaged Elmar late Monday about my couch and 8:30 the next morning they were here. My couch looks as good as new! Don’t hesitate, book Domestic Pro right now!",
  },
];

export function Reviews() {
  const { t } = useI18n();

  return (
    <section className="bg-emerald-950 py-14 sm:py-16">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6">
        {/* Heading */}
        <div className="grid grid-cols-1 items-end gap-6 lg:grid-cols-[1fr_auto]">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-lime-300">
              {t.reviewsTitle}
            </span>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
              {t.reviewsTitle}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-emerald-100/85 sm:text-base">
              {t.reviewsLead}
            </p>
          </div>

          {/* Rating summary — pulled from real site (5.0 · 111 reviews) */}
          <div className="flex items-center gap-4 rounded-xl border border-lime-300/20 bg-emerald-900/40 p-4 backdrop-blur-sm">
            <div className="flex flex-col items-center">
              <span className="text-4xl font-extrabold text-lime-300">5.0</span>
              <span className="text-[11px] uppercase tracking-wide text-emerald-100/70">
                {t.reviewsOutOf}
              </span>
            </div>
            <div className="h-10 w-px bg-lime-300/20" aria-hidden />
            <div>
              <div className="flex gap-0.5" aria-label="5 out of 5 stars">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-lime-300 text-lime-300"
                    aria-hidden
                  />
                ))}
              </div>
              <p className="mt-1 text-xs text-emerald-100/80">
                111 Google reviews · <span className="text-lime-200">{t.reviewsVerifiedBy}</span>
              </p>
              <a
                href="https://domesticpro.co.za/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-lime-200 hover:underline"
              >
                {t.reviewGoogleCta}
                <ExternalLink className="h-3 w-3" aria-hidden />
              </a>
            </div>
          </div>
        </div>

        {/* Reviews grid */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <motion.article
              key={r.author}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.06 }}
              className="flex flex-col rounded-xl border border-lime-300/15 bg-emerald-900/30 p-5 backdrop-blur-sm transition-colors hover:bg-emerald-900/50"
            >
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2.5">
                  <div className="grid h-9 w-9 place-items-center rounded-full bg-lime-300 text-sm font-bold text-emerald-950">
                    {r.author.charAt(0)}
                  </div>
                  <div className="leading-tight">
                    <p className="text-sm font-semibold text-white">{r.author}</p>
                    <p className="text-[11px] text-emerald-100/60">{r.when}</p>
                  </div>
                </div>
                <div className="flex gap-0.5" aria-label="5 out of 5 stars">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="h-3 w-3 fill-lime-300 text-lime-300" aria-hidden />
                  ))}
                </div>
              </div>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-emerald-50/90">
                “{r.body}”
              </p>
              <p className="mt-3 inline-flex items-center gap-1.5 text-[11px] text-emerald-100/60">
                <span className="grid h-4 w-4 place-items-center rounded-full bg-white/90 text-[8px] font-bold text-emerald-700">
                  G
                </span>
                Posted on Google
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
