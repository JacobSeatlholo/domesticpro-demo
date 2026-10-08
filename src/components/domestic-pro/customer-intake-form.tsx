"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  Phone,
  MapPin,
  Sparkles,
  Home,
  Calendar,
  Clock,
  StickyNote,
  PawPrint,
  Leaf,
  Send,
  Loader2,
  RefreshCw,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Separator } from "@/components/ui/separator";

import { SCENARIOS, COVERAGE_SUBURBS, type ScenarioField, type ScenarioId } from "@/lib/scenarios";
import { useWorkflow } from "@/lib/workflow-store";
import { toast } from "sonner";

function FieldWrap({
  icon: Icon,
  label,
  htmlFor,
  children,
  hint,
}: {
  icon: React.ElementType;
  label: string;
  htmlFor?: string;
  children: React.ReactNode;
  hint?: string;
}) {
  return (
    <div className="space-y-1.5">
      <Label htmlFor={htmlFor} className="flex items-center gap-1.5 text-xs font-semibold text-slate-700">
        <Icon className="h-3.5 w-3.5 text-emerald-600" aria-hidden />
        {label}
      </Label>
      {children}
      {hint && <p className="text-[11px] text-slate-500">{hint}</p>}
    </div>
  );
}

export function CustomerIntakeForm() {
  const scenarioId = useWorkflow((s) => s.scenarioId);
  const setScenario = useWorkflow((s) => s.setScenario);
  const runPipeline = useWorkflow((s) => s.runPipeline);
  const isRunning = useWorkflow((s) => s.isRunning);
  const stageIndex = useWorkflow((s) => s.stageIndex);
  const reset = useWorkflow((s) => s.reset);

  const activeScenario = useMemo(
    () => SCENARIOS.find((s) => s.id === scenarioId) ?? SCENARIOS[0],
    [scenarioId]
  );

  const [form, setForm] = useState<ScenarioField>(activeScenario.fields);

  // Sync form whenever scenario toggle changes (or reset).
  useEffect(() => {
    setForm(activeScenario.fields);
  }, [activeScenario]);

  const isBusy = isRunning || (stageIndex >= 0 && stageIndex < 4);

  const set = <K extends keyof ScenarioField>(key: K, val: ScenarioField[K]) =>
    setForm((f) => ({ ...f, [key]: val }));

  const handleSubmit = async () => {
    if (!form.customerName.trim() || !form.suburb.trim()) {
      toast.error("Please add at least a name and suburb before submitting.");
      return;
    }
    reset();
    // Tiny delay so the UI can reset visually before the run starts.
    await new Promise((r) => setTimeout(r, 60));
    toast.success("Job request submitted — AI matcher is processing…");
    await runPipeline(form);
  };

  const handleScenarioToggle = (val: string) => {
    if (val) setScenario(val as ScenarioId);
  };

  return (
    <section
      aria-label="Customer Intake Form"
      className="flex h-full flex-col gap-4 rounded-xl border border-emerald-100 bg-white p-4 shadow-sm sm:p-5"
    >
      {/* Panel header */}
      <div className="flex items-start justify-between gap-3">
        <div>
          <h2 className="flex items-center gap-2 text-base font-bold tracking-tight text-slate-900">
            <span className="grid h-7 w-7 place-items-center rounded-lg bg-emerald-100 text-emerald-700">
              <Sparkles className="h-4 w-4" aria-hidden />
            </span>
            Customer Intake
          </h2>
          <p className="mt-1 text-xs text-slate-500">
            Public booking widget — captured directly into the Domestic Pro pipeline.
          </p>
        </div>
        <Badge
          variant="secondary"
          className="border-emerald-100 bg-emerald-50 text-emerald-700"
        >
          Live
        </Badge>
      </div>

      {/* Scenario toggle */}
      <div className="space-y-2">
        <Label className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
          Example scenario
        </Label>
        <ToggleGroup
          type="single"
          value={scenarioId}
          onValueChange={handleScenarioToggle}
          variant="outline"
          className="grid w-full grid-cols-1 gap-2 sm:grid-cols-2"
        >
          {SCENARIOS.map((sc) => (
            <ToggleGroupItem
              key={sc.id}
              value={sc.id}
              className="flex h-auto flex-col items-start gap-0.5 border-emerald-100 bg-white px-3 py-2 text-left data-[state=on]:border-emerald-500 data-[state=on]:bg-emerald-50 data-[state=on]:text-emerald-900"
            >
              <span className="text-xs font-semibold">{sc.shortLabel}</span>
              <span className="text-[10px] leading-tight text-slate-500 data-[state=on]:text-emerald-700">
                {sc.description}
              </span>
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </div>

      <Separator className="bg-emerald-100" />

      {/* Scrollable form */}
      <div className="scroll-thin -mr-2 flex-1 space-y-4 overflow-y-auto pr-2">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <FieldWrap icon={User} label="Customer name" htmlFor="cust-name">
            <Input
              id="cust-name"
              value={form.customerName}
              onChange={(e) => set("customerName", e.target.value)}
              placeholder="Jane Doe"
              className="border-emerald-100 focus-visible:ring-emerald-500"
            />
          </FieldWrap>
          <FieldWrap icon={Phone} label="Phone" htmlFor="cust-phone">
            <Input
              id="cust-phone"
              value={form.phone}
              onChange={(e) => set("phone", e.target.value)}
              placeholder="+27 82 000 0000"
              className="border-emerald-100 focus-visible:ring-emerald-500"
            />
          </FieldWrap>
        </div>

        <FieldWrap
          icon={MapPin}
          label="Location / Suburb"
          htmlFor="cust-suburb"
          hint="Domestic Pro covers Cape Town Northern Suburbs only."
        >
          <Select value={form.suburb} onValueChange={(v) => set("suburb", v)}>
            <SelectTrigger id="cust-suburb" className="border-emerald-100 focus:ring-emerald-500">
              <SelectValue placeholder="Select suburb" />
            </SelectTrigger>
            <SelectContent>
              {COVERAGE_SUBURBS.map((sub) => (
                <SelectItem key={sub} value={sub}>
                  {sub}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </FieldWrap>

        <FieldWrap icon={MapPin} label="Area / Estate" htmlFor="cust-area">
          <Input
            id="cust-area"
            value={form.suburbArea}
            onChange={(e) => set("suburbArea", e.target.value)}
            placeholder="e.g. Durbanville Hills / Protea Valley"
            className="border-emerald-100 focus-visible:ring-emerald-500"
          />
        </FieldWrap>

        <FieldWrap icon={Sparkles} label="Service requested" htmlFor="cust-service">
          <Textarea
            id="cust-service"
            value={form.serviceType}
            onChange={(e) => set("serviceType", e.target.value)}
            rows={2}
            placeholder="e.g. Deep Clean + Eco Pet Treatment"
            className="resize-none border-emerald-100 focus-visible:ring-emerald-500"
          />
        </FieldWrap>

        <FieldWrap icon={Home} label="Property size" htmlFor="cust-size">
          <Input
            id="cust-size"
            value={form.propertySize}
            onChange={(e) => set("propertySize", e.target.value)}
            placeholder="e.g. 3 Bedroom, 2 Bath"
            className="border-emerald-100 focus-visible:ring-emerald-500"
          />
        </FieldWrap>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <FieldWrap icon={Calendar} label="Preferred day" htmlFor="cust-day">
            <Input
              id="cust-day"
              value={form.preferredDate}
              onChange={(e) => set("preferredDate", e.target.value)}
              placeholder="e.g. Friday"
              className="border-emerald-100 focus-visible:ring-emerald-500"
            />
          </FieldWrap>
          <FieldWrap icon={Clock} label="Preferred time" htmlFor="cust-time">
            <Input
              id="cust-time"
              value={form.preferredTime}
              onChange={(e) => set("preferredTime", e.target.value)}
              placeholder="e.g. Morning (08:00 – 12:00)"
              className="border-emerald-100 focus-visible:ring-emerald-500"
            />
          </FieldWrap>
        </div>

        <FieldWrap icon={StickyNote} label="Customer notes" htmlFor="cust-notes">
          <Textarea
            id="cust-notes"
            value={form.customerNotes}
            onChange={(e) => set("customerNotes", e.target.value)}
            rows={3}
            placeholder="Anything our ops team should know…"
            className="resize-none border-emerald-100 focus-visible:ring-emerald-500"
          />
        </FieldWrap>

        {/* Toggles */}
        <div className="grid grid-cols-1 gap-2 rounded-lg border border-emerald-100 bg-emerald-50/40 p-3 sm:grid-cols-2">
          <label className="flex items-center justify-between gap-2">
            <span className="flex items-center gap-2 text-xs font-medium text-slate-700">
              <PawPrint className="h-4 w-4 text-emerald-600" aria-hidden />
              Pet-Safe required
            </span>
            <Switch
              checked={form.petSafe}
              onCheckedChange={(v) => set("petSafe", v)}
              aria-label="Toggle pet-safe"
            />
          </label>
          <label className="flex items-center justify-between gap-2">
            <span className="flex items-center gap-2 text-xs font-medium text-slate-700">
              <Leaf className="h-4 w-4 text-emerald-600" aria-hidden />
              Eco-friendly products
            </span>
            <Switch
              checked={form.ecoFriendly}
              onCheckedChange={(v) => set("ecoFriendly", v)}
              aria-label="Toggle eco-friendly"
            />
          </label>
        </div>
      </div>

      {/* Sticky action */}
      <div className="sticky bottom-0 -mx-4 -mb-4 border-t border-emerald-100 bg-white/95 p-3 backdrop-blur sm:-mx-5 sm:-mb-5 sm:px-5">
        <div className="flex items-center gap-2">
          <Button
            onClick={handleSubmit}
            disabled={isBusy}
            className="flex-1 bg-emerald-700 text-white shadow-sm hover:bg-emerald-800 disabled:opacity-60"
            size="lg"
          >
            {isBusy ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
                Processing…
              </>
            ) : (
              <>
                <Send className="h-4 w-4" aria-hidden />
                Submit Job Request
              </>
            )}
          </Button>
          <Button
            variant="outline"
            onClick={() => {
              reset();
              setForm(activeScenario.fields);
              toast.message("Intake cleared.");
            }}
            disabled={isBusy}
            className="border-emerald-200 text-emerald-700 hover:bg-emerald-50"
            size="lg"
            aria-label="Reset form"
          >
            <RefreshCw className="h-4 w-4" aria-hidden />
          </Button>
        </div>
        <AnimatePresence>
          {isBusy && (
            <motion.p
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mt-2 text-center text-[11px] text-slate-500"
            >
              AI matcher running — see live pipeline →
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
