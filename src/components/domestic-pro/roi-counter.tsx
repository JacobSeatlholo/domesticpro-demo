"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { TrendingUp, Calendar, Users, Repeat } from "lucide-react";

interface Metric {
  icon: React.ElementType;
  label: string;
  value: number;
  suffix: string;
  prefix?: string;
  description: string;
}

const METRICS: Metric[] = [
  {
    icon: Calendar,
    label: "Off-season calendar fill",
    value: 35,
    suffix: "%",
    prefix: "+",
    description: "Estimated monthly uplift from automated intake vs. word-of-mouth referrals.",
  },
  {
    icon: Users,
    label: "Adjacent corridor leads",
    value: 22,
    suffix: "%",
    description: "Cross-referral overlap between Durbanville / Bellville / Tygervalley / Parow.",
  },
  {
    icon: Repeat,
    label: "Recurring weekly rate",
    value: 68,
    suffix: "%",
    description: "Likelihood of converting a one-off deep clean into a recurring weekly slot.",
  },
];

function AnimatedCounter({
  to,
  prefix = "",
  suffix = "",
}: {
  to: number;
  prefix?: string;
  suffix?: string;
}) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) =>
    `${prefix}${Math.round(v)}${suffix}`
  );
  const [display, setDisplay] = useState(`${prefix}0${suffix}`);

  useEffect(() => {
    const controls = animate(count, to, {
      duration: 1.4,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(`${prefix}${Math.round(v)}${suffix}`),
    });
    return () => controls.stop();
  }, [to, prefix, suffix, count]);

  return (
    <motion.span
      initial={{ opacity: 0.6 }}
      animate={{ opacity: 1 }}
      className="tabular-nums"
    >
      {display}
    </motion.span>
  );
}

export function RoiCounter() {
  return (
    <section
      aria-label="ROI & Referral Engine"
      className="rounded-xl border border-emerald-200 bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-900 p-4 text-emerald-50 shadow-md sm:p-5"
    >
      <div className="flex items-center justify-between gap-3">
        <div>
          <h2 className="flex items-center gap-2 text-sm font-bold tracking-tight">
            <span className="grid h-7 w-7 place-items-center rounded-lg bg-emerald-50/10 ring-1 ring-emerald-300/30">
              <TrendingUp className="h-4 w-4 text-emerald-200" aria-hidden />
            </span>
            ROI &amp; Referral Engine
          </h2>
          <p className="mt-1 text-[11px] text-emerald-200/80">
            Live business impact — BusinessHustle automation for Domestic Pro.
          </p>
        </div>
        <Badge className="gap-1 border-emerald-300/30 bg-emerald-50/10 text-emerald-100">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-300 status-pulse" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-200" />
          </span>
          Realtime
        </Badge>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
        {METRICS.map((m) => {
          const Icon = m.icon;
          return (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="rounded-lg border border-emerald-300/20 bg-emerald-50/5 p-3 backdrop-blur-sm"
            >
              <div className="flex items-center gap-2 text-emerald-200">
                <Icon className="h-3.5 w-3.5" aria-hidden />
                <span className="text-[11px] font-medium uppercase tracking-wide">
                  {m.label}
                </span>
              </div>
              <p className="mt-1 text-2xl font-bold text-white">
                <AnimatedCounter to={m.value} prefix={m.prefix} suffix={m.suffix} />
              </p>
              <p className="mt-1 text-[10.5px] leading-tight text-emerald-200/70">
                {m.description}
              </p>
            </motion.div>
          );
        })}
      </div>

      <p className="mt-3 text-[11px] text-emerald-200/70">
        <span className="font-semibold text-emerald-100">Headline:</span>{" "}
        Estimated monthly off-season calendar fill rate:{" "}
        <span className="font-bold text-white">+35%</span> vs. word-of-mouth only.
      </p>
    </section>
  );
}

// tiny local Badge to keep this component self-contained
function Badge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-semibold ${className}`}
    >
      {children}
    </span>
  );
}
