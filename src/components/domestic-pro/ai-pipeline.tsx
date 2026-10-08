"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Leaf,
  Calculator,
  Send,
  CheckCircle2,
  Loader2,
  Circle,
  Cpu,
  Activity,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { useWorkflow, type StageStatus } from "@/lib/workflow-store";

interface Stage {
  index: number;
  icon: React.ElementType;
  emoji: string;
  title: string;
  subtitle: string;
}

const STAGES: Stage[] = [
  {
    index: 0,
    icon: MapPin,
    emoji: "📍",
    title: "Geo-Fencing & Service Area Match",
    subtitle: "Validates location is within Durbanville coverage.",
  },
  {
    index: 1,
    icon: Leaf,
    emoji: "🌿",
    title: "Special Requirement Tagging",
    subtitle: 'Flags "Pet-Safe / Eco-Friendly" supply assignment.',
  },
  {
    index: 2,
    icon: Calculator,
    emoji: "📊",
    title: "Job Estimator & Lead Scoring",
    subtitle: "Calculates estimated hours, team size, and lead priority.",
  },
  {
    index: 3,
    icon: Send,
    emoji: "📨",
    title: "Dispatcher Routing",
    subtitle: "Prepares dispatch card for Domestic Pro operations team.",
  },
];

function StatusIcon({ status }: { status: StageStatus }) {
  if (status === "done")
    return <CheckCircle2 className="h-4 w-4 text-emerald-600" aria-hidden />;
  if (status === "active")
    return <Loader2 className="h-4 w-4 animate-spin text-emerald-700" aria-hidden />;
  if (status === "pending")
    return <Loader2 className="h-4 w-4 animate-spin text-slate-400" aria-hidden />;
  return <Circle className="h-4 w-4 text-slate-300" aria-hidden />;
}

export function AiPipeline() {
  const stageIndex = useWorkflow((s) => s.stageIndex);
  const stageStatuses = useWorkflow((s) => s.stageStatuses);
  const stageLogs = useWorkflow((s) => s.stageLogs);
  const result = useWorkflow((s) => s.result);
  const isRunning = useWorkflow((s) => s.isRunning);

  const hasStarted = stageIndex >= 0;
  const isComplete = stageIndex === 4 && result;

  return (
    <section
      aria-label="AI Processing Pipeline"
      className="flex h-full flex-col gap-4 rounded-xl border border-emerald-100 bg-gradient-to-br from-white via-emerald-50/30 to-white p-4 shadow-sm sm:p-5"
    >
      {/* Panel header */}
      <div className="flex items-start justify-between gap-3">
        <div>
          <h2 className="flex items-center gap-2 text-base font-bold tracking-tight text-slate-900">
            <span className="grid h-7 w-7 place-items-center rounded-lg bg-emerald-900 text-emerald-50">
              <Cpu className="h-4 w-4" aria-hidden />
            </span>
            AI Processing Pipeline
          </h2>
          <p className="mt-1 text-xs text-slate-500">
            Live automation workflow — runs as soon as a job request is submitted.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Badge
            variant="outline"
            className="border-emerald-200 bg-emerald-50 text-emerald-700 gap-1.5"
          >
            <Activity className="h-3.5 w-3.5" aria-hidden />
            {isRunning ? "Running" : isComplete ? "Complete" : "Idle"}
          </Badge>
        </div>
      </div>

      {/* Pipeline body */}
      <div className="scroll-thin -mr-2 flex-1 overflow-y-auto pr-2">
        {!hasStarted ? (
          <div className="flex h-full flex-col items-center justify-center gap-3 py-10 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="grid h-16 w-16 place-items-center rounded-2xl bg-emerald-50 ring-1 ring-emerald-100"
            >
              <Cpu className="h-8 w-8 text-emerald-600" aria-hidden />
            </motion.div>
            <div className="space-y-1">
              <p className="text-sm font-semibold text-slate-700">
                Pipeline idle
              </p>
              <p className="max-w-[14rem] text-xs text-slate-500">
                Submit a job request from the intake form to watch the AI matcher run end-to-end.
              </p>
            </div>
          </div>
        ) : (
          <ol className="relative space-y-3">
            {STAGES.map((stage) => {
              const status = stageStatuses[stage.index];
              const Icon = stage.icon;
              const isActive = status === "active";
              const isDone = status === "done";

              return (
                <li key={stage.index} className="relative pl-9">
                  {/* Vertical connector */}
                  {stage.index < STAGES.length - 1 && (
                    <span
                      className="absolute left-[14px] top-[42px] h-[calc(100%-12px)] w-px bg-gradient-to-b from-emerald-200 to-emerald-50"
                      aria-hidden
                    />
                  )}
                  {/* Node */}
                  <span
                    className={`absolute left-0 top-1 grid h-7 w-7 place-items-center rounded-full border transition-colors ${
                      isDone
                        ? "border-emerald-600 bg-emerald-600 text-white"
                        : isActive
                        ? "border-emerald-500 bg-emerald-100 text-emerald-700 ring-4 ring-emerald-100"
                        : "border-slate-200 bg-white text-slate-400"
                    }`}
                  >
                    <Icon className="h-3.5 w-3.5" aria-hidden />
                  </span>

                  <motion.div
                    initial={{ opacity: 0, x: -6 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: stage.index * 0.04 }}
                    className={`rounded-lg border p-3 transition-colors ${
                      isActive
                        ? "border-emerald-300 bg-emerald-50 shadow-sm"
                        : isDone
                        ? "border-emerald-100 bg-emerald-50/40"
                        : "border-slate-100 bg-white"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="text-base" aria-hidden>
                          {stage.emoji}
                        </span>
                        <div className="leading-tight">
                          <p className="text-sm font-semibold text-slate-800">
                            {stage.title}
                          </p>
                          <p className="text-[11px] text-slate-500">
                            {stage.subtitle}
                          </p>
                        </div>
                      </div>
                      <StatusIcon status={status} />
                    </div>

                    {/* Per-stage inline detail when active or done */}
                    <AnimatePresence>
                      {(isActive || isDone) && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <StageDetail stageIndex={stage.index} result={result} />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </li>
              );
            })}
          </ol>
        )}
      </div>

      {/* Live console */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
            Live console
          </span>
          <span className="text-[11px] text-slate-400">
            {stageLogs.length} log{stageLogs.length === 1 ? "" : "s"}
          </span>
        </div>
        <div className="scroll-thin h-24 overflow-y-auto rounded-lg border border-emerald-100 bg-slate-950 p-2.5 font-mono text-[11px] leading-relaxed text-emerald-200">
          {stageLogs.length === 0 ? (
            <p className="text-slate-500">
              [ready] Waiting for job request submission…
            </p>
          ) : (
            <AnimatePresence initial={false}>
              {stageLogs.map((log, i) => (
                <motion.div
                  key={`${i}-${log}`}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex gap-2"
                >
                  <span className="shrink-0 text-emerald-500/70">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="break-words">{log}</span>
                </motion.div>
              ))}
              {isRunning && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-0.5 text-emerald-400"
                >
                  <span className="inline-block h-3 w-1.5 animate-pulse bg-emerald-400 align-middle" />
                </motion.div>
              )}
            </AnimatePresence>
          )}
        </div>
      </div>
    </section>
  );
}

function StageDetail({
  stageIndex,
  result,
}: {
  stageIndex: number;
  result: ReturnType<typeof useWorkflow.getState>["result"];
}) {
  if (!result) {
    return (
      <div className="mt-2 flex items-center gap-2 text-[11px] text-slate-500">
        <Loader2 className="h-3 w-3 animate-spin" aria-hidden />
        Working…
      </div>
    );
  }

  if (stageIndex === 0) {
    return (
      <div className="mt-2 flex flex-wrap gap-1.5">
        <Badge variant="outline" className="border-emerald-200 bg-white text-emerald-700 text-[10px]">
          ✓ {result.geoFence.suburb}
        </Badge>
        <Badge variant="outline" className="border-emerald-200 bg-white text-emerald-700 text-[10px]">
          {result.geoFence.corridor}
        </Badge>
        <Badge variant="outline" className="border-emerald-200 bg-white text-emerald-700 text-[10px]">
          ~{result.geoFence.driveMinutes} min from depot
        </Badge>
      </div>
    );
  }

  if (stageIndex === 1) {
    return (
      <div className="mt-2 flex flex-wrap gap-1.5">
        {result.requirementTags.map((tag) => (
          <Badge
            key={tag}
            variant="outline"
            className="border-emerald-200 bg-emerald-50 text-emerald-700 text-[10px]"
          >
            {tag}
          </Badge>
        ))}
      </div>
    );
  }

  if (stageIndex === 2) {
    return (
      <div className="mt-2 grid grid-cols-3 gap-2 text-center">
        <MiniStat label="Hours" value={`${result.estimate.hours}h`} />
        <MiniStat label="Crew" value={`${result.estimate.teamSize}`} />
        <MiniStat
          label="Priority"
          value={result.estimate.leadPriority}
          highlight={result.estimate.leadPriority === "VIP" || result.estimate.leadPriority === "High"}
        />
      </div>
    );
  }

  if (stageIndex === 3) {
    return (
      <div className="mt-2 space-y-1.5 rounded-lg border border-emerald-100 bg-white p-2 text-[11px]">
        <p className="font-semibold text-slate-700">Dispatch card prepared</p>
        <p className="text-slate-600">
          <span className="text-slate-400">Crew:</span> {result.dispatch.assignedCrew}
        </p>
        <p className="text-slate-600">
          <span className="text-slate-400">Slot:</span> {result.dispatch.calendarSlot}
        </p>
      </div>
    );
  }

  return null;
}

function MiniStat({
  label,
  value,
  highlight,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`rounded-lg border p-1.5 ${
        highlight
          ? "border-emerald-300 bg-emerald-50"
          : "border-emerald-100 bg-white"
      }`}
    >
      <p className="text-[10px] uppercase tracking-wide text-slate-500">{label}</p>
      <p className="text-sm font-bold text-slate-800">{value}</p>
    </div>
  );
}
