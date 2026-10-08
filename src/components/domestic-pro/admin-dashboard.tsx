"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  ClipboardList,
  Calendar,
  Check,
  MessageSquare,
  Network,
  PawPrint,
  Leaf,
  Clock,
  Ruler,
  User,
  MapPin,
  Phone,
  Sparkles,
  Inbox,
  TrendingUp,
  ShieldCheck,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { useWorkflow } from "@/lib/workflow-store";
import { toast } from "sonner";

const EQUIPMENT_CHECKLIST = [
  { item: "Eco-certified multi-surface cleaner", eco: true },
  { item: "Pet-safe floor detergent (fragrance-free)", pet: true },
  { item: "HEPA vacuum + microfibre cloths", eco: true },
  { item: "Steam mop (no bleach)", eco: true },
  { item: "Pet treat pouch + dog-friendly wipes", pet: true },
];

export function AdminDashboard() {
  const lead = useWorkflow((s) => s.lead);
  const result = useWorkflow((s) => s.result);
  const leadStatus = useWorkflow((s) => s.leadStatus);
  const calendarLocked = useWorkflow((s) => s.calendarLocked);
  const smsSent = useWorkflow((s) => s.smsSent);
  const referralInsightsOpen = useWorkflow((s) => s.referralInsightsOpen);
  const acceptLead = useWorkflow((s) => s.acceptLead);
  const lockCalendar = useWorkflow((s) => s.lockCalendar);
  const sendSms = useWorkflow((s) => s.sendSms);
  const toggleReferralInsights = useWorkflow((s) => s.toggleReferralInsights);
  const stageIndex = useWorkflow((s) => s.stageIndex);

  const isComplete = stageIndex === 4 && result && lead;
  const accepted = leadStatus === "accepted" || leadStatus === "dispatched" || leadStatus === "confirmed";

  const handleAccept = () => {
    acceptLead();
    toast.success("Lead accepted — locked into Domestic Pro ops queue.");
  };

  const handleLockCalendar = async () => {
    if (!lead) return;
    lockCalendar();
    try {
      await fetch("/api/dispatch", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "lock_calendar",
          leadId: lead.id,
          customerName: lead.customer.customerName,
          suburb: lead.customer.suburb,
          slot: result?.dispatch.calendarSlot,
        }),
      });
    } catch {
      // demo — fail silently
    }
    toast.success(`Calendar slot locked · ${result?.dispatch.calendarSlot}`);
  };

  const handleSendSms = async () => {
    if (!lead) return;
    sendSms();
    try {
      await fetch("/api/dispatch", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "send_sms",
          leadId: lead.id,
          customerName: lead.customer.customerName,
          smsPreview: result?.dispatch.smsPreview,
        }),
      });
    } catch {
      // demo — fail silently
    }
    toast.success("WhatsApp + SMS confirmation sent to client.");
  };

  const handleReferral = () => {
    toggleReferralInsights();
  };

  return (
    <section
      aria-label="Domestic Pro Admin Dashboard"
      className="flex h-full flex-col gap-4 rounded-xl border border-emerald-100 bg-white p-4 shadow-sm sm:p-5"
    >
      {/* Panel header */}
      <div className="flex items-start justify-between gap-3">
        <div>
          <h2 className="flex items-center gap-2 text-base font-bold tracking-tight text-slate-900">
            <span className="grid h-7 w-7 place-items-center rounded-lg bg-emerald-100 text-emerald-700">
              <ClipboardList className="h-4 w-4" aria-hidden />
            </span>
            Ops Dashboard
          </h2>
          <p className="mt-1 text-xs text-slate-500">
            Operations view — instant lead, dispatch &amp; referral actions.
          </p>
        </div>
        <LeadStatusBadge status={leadStatus} />
      </div>

      <div className="scroll-thin -mr-2 flex-1 space-y-4 overflow-y-auto pr-2">
        <AnimatePresence mode="wait">
          {!isComplete ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex h-full min-h-[18rem] flex-col items-center justify-center gap-3 rounded-lg border border-dashed border-emerald-200 bg-emerald-50/30 p-6 text-center"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-white shadow-sm ring-1 ring-emerald-100">
                <Inbox className="h-6 w-6 text-emerald-600" aria-hidden />
              </div>
              <div className="space-y-1">
                <p className="text-sm font-semibold text-slate-700">
                  No incoming lead yet
                </p>
                <p className="max-w-[16rem] text-xs text-slate-500">
                  Once the AI matcher finishes, the instant lead card will appear here with one-click dispatch actions.
                </p>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="lead"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              {/* Incoming instant lead card */}
              <div className="rounded-xl border border-emerald-200 bg-gradient-to-br from-emerald-50/80 to-white p-4 shadow-sm">
                <div className="flex items-center justify-between gap-2">
                  <Badge className="gap-1 bg-emerald-700 text-white hover:bg-emerald-700">
                    <Sparkles className="h-3 w-3" aria-hidden />
                    Instant Lead
                  </Badge>
                  <span className="text-[11px] font-mono text-slate-400">
                    {lead?.id}
                  </span>
                </div>

                <div className="mt-3 space-y-2.5 text-sm">
                  <Row icon={User} label="Client">
                    <span className="font-semibold text-slate-800">{lead?.customer.customerName}</span>
                  </Row>
                  <Row icon={Phone} label="Phone">
                    <a
                      href={`tel:${lead?.customer.phone.replace(/\s/g, "")}`}
                      className="text-emerald-700 hover:underline"
                    >
                      {lead?.customer.phone}
                    </a>
                  </Row>
                  <Row icon={MapPin} label="Suburb">
                    <span className="font-medium text-slate-700">
                      {lead?.customer.suburb}
                    </span>
                    <span className="text-slate-400"> · {lead?.customer.suburbArea}</span>
                  </Row>
                  <Row icon={Ruler} label="Property">
                    <span className="text-slate-700">{lead?.customer.propertySize}</span>
                  </Row>
                  <Row icon={Clock} label="Preferred">
                    <span className="text-slate-700">
                      {lead?.customer.preferredDate} · {lead?.customer.preferredTime}
                    </span>
                  </Row>
                </div>

                <Separator className="my-3 bg-emerald-100" />

                {/* Estimated revenue / duration */}
                <div className="grid grid-cols-3 gap-2 text-center">
                  <Metric
                    label="Est. revenue"
                    value={`R${result?.estimate.estRevenueZAR.toLocaleString("en-ZA")}`}
                    tone="emerald"
                  />
                  <Metric
                    label="Duration"
                    value={result?.estimate.estDurationLabel.split(" · ")[0] ?? ""}
                  />
                  <Metric
                    label="Team size"
                    value={`${result?.estimate.teamSize} crew`}
                  />
                </div>

                <div className="mt-3 flex items-center justify-between gap-2 rounded-lg border border-emerald-200 bg-emerald-50/60 p-2.5">
                  <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800">
                    <ShieldCheck className="h-4 w-4" aria-hidden />
                    Eco-Safety Flag
                  </div>
                  <div className="flex flex-wrap justify-end gap-1.5">
                    {result?.requirementTags.map((t) => (
                      <Badge
                        key={t}
                        variant="outline"
                        className="border-emerald-300 bg-white text-emerald-700 text-[10px]"
                      >
                        {t}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              {/* Equipment checklist */}
              <div className="rounded-xl border border-emerald-100 bg-white p-4">
                <p className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <ClipboardList className="h-4 w-4 text-emerald-600" aria-hidden />
                  Equipment checklist
                </p>
                <ul className="mt-2 space-y-1.5">
                  {EQUIPMENT_CHECKLIST.map((c) => (
                    <li
                      key={c.item}
                      className="flex items-center justify-between gap-2 rounded-md px-1 py-1 text-xs hover:bg-emerald-50/40"
                    >
                      <span className="flex items-center gap-2 text-slate-700">
                        <Check className="h-3.5 w-3.5 text-emerald-600" aria-hidden />
                        {c.item}
                      </span>
                      <span className="flex gap-1">
                        {c.eco && (
                          <span title="Eco-friendly" className="text-emerald-600">
                            <Leaf className="h-3.5 w-3.5" aria-hidden />
                          </span>
                        )}
                        {c.pet && (
                          <span title="Pet-safe" className="text-amber-600">
                            <PawPrint className="h-3.5 w-3.5" aria-hidden />
                          </span>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-3 flex items-center gap-1.5 text-[11px] text-slate-500">
                  <Leaf className="h-3 w-3 text-emerald-600" aria-hidden /> Eco supply
                  <span className="mx-1 text-slate-300">·</span>
                  <PawPrint className="h-3 w-3 text-amber-600" aria-hidden /> Pet-safe supply
                </div>
              </div>

              {/* Dispatch actions */}
              <div className="space-y-2 rounded-xl border border-emerald-100 bg-white p-4">
                <p className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <Sparkles className="h-4 w-4 text-emerald-600" aria-hidden />
                  One-click dispatch
                </p>

                <div className="grid grid-cols-1 gap-2">
                  <Button
                    onClick={handleAccept}
                    disabled={accepted}
                    className="justify-start bg-emerald-700 text-white hover:bg-emerald-800 disabled:opacity-70"
                  >
                    <Check className="h-4 w-4" aria-hidden />
                    {accepted ? "Lead accepted" : "Accept & lock into ops queue"}
                  </Button>

                  <Button
                    onClick={handleLockCalendar}
                    disabled={!accepted || calendarLocked}
                    variant="outline"
                    className="justify-start border-emerald-200 text-emerald-800 hover:bg-emerald-50 disabled:opacity-60"
                  >
                    {calendarLocked ? (
                      <Check className="h-4 w-4 text-emerald-600" aria-hidden />
                    ) : (
                      <Calendar className="h-4 w-4" aria-hidden />
                    )}
                    {calendarLocked
                      ? "Calendar slot locked"
                      : "Accept & Lock Calendar Slot"}
                  </Button>

                  <Button
                    onClick={handleSendSms}
                    disabled={!accepted || smsSent}
                    variant="outline"
                    className="justify-start border-emerald-200 text-emerald-800 hover:bg-emerald-50 disabled:opacity-60"
                  >
                    {smsSent ? (
                      <Check className="h-4 w-4 text-emerald-600" aria-hidden />
                    ) : (
                      <MessageSquare className="h-4 w-4" aria-hidden />
                    )}
                    {smsSent
                      ? "Confirmation sent to client"
                      : "Send Automated SMS / WhatsApp Confirmation"}
                  </Button>

                  <Button
                    onClick={handleReferral}
                    variant="ghost"
                    className="justify-start text-emerald-800 hover:bg-emerald-50"
                  >
                    <Network className="h-4 w-4" aria-hidden />
                    View Area Referral Booster Insights
                  </Button>
                </div>

                {leadStatus === "confirmed" && (
                  <motion.div
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-1 rounded-lg border border-emerald-200 bg-emerald-50 p-2.5 text-[11px] text-emerald-800"
                  >
                    ✓ Lead fully dispatched &amp; client confirmed. Job is now on the
                    Domestic Pro live calendar.
                  </motion.div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* SMS preview modal */}
      <Dialog open={referralInsightsOpen} onOpenChange={toggleReferralInsights}>
        <DialogContent className="border-emerald-100">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-emerald-800">
              <Network className="h-5 w-5" aria-hidden />
              Area Referral Booster Insights
            </DialogTitle>
            <DialogDescription>
              How this lead ripples across the Domestic Pro Northern Suburbs corridor.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-3 text-sm">
            <div className="rounded-lg border border-emerald-100 bg-emerald-50/40 p-3">
              <p className="flex items-center gap-2 font-semibold text-emerald-800">
                <TrendingUp className="h-4 w-4" aria-hidden />
                Cross-referral score: 78 / 100
              </p>
              <p className="mt-1 text-xs text-slate-600">
                {lead?.customer.suburb} neighbours show 22% cross-referral overlap
                with adjacent corridors.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-2 text-center">
              <Metric label="Adjacent suburbs" value="3" />
              <Metric label="Recurring potential" value="High" tone="emerald" />
              <Metric label="Off-season uplift" value="+35%" tone="emerald" />
            </div>

            <div className="rounded-lg border border-emerald-100 bg-white p-3 text-xs text-slate-600">
              <span className="font-semibold text-slate-800">Recommendation:</span>{" "}
              Offer a 3-suburb bundle discount (Durbanville + Bellville + Tygervalley)
              to lift off-season calendar fill rate by an estimated 35%.
            </div>
          </div>

          <DialogFooter>
            <Button
              onClick={toggleReferralInsights}
              className="bg-emerald-700 text-white hover:bg-emerald-800"
            >
              Got it
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  );
}

function Row({
  icon: Icon,
  label,
  children,
}: {
  icon: React.ElementType;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-2">
      <Icon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600" aria-hidden />
      <span className="w-20 shrink-0 text-[11px] font-medium uppercase tracking-wide text-slate-400">
        {label}
      </span>
      <div className="flex-1">{children}</div>
    </div>
  );
}

function Metric({
  label,
  value,
  tone,
}: {
  label: string;
  value: string | number;
  tone?: "emerald";
}) {
  return (
    <div
      className={`rounded-lg border p-2 ${
        tone === "emerald"
          ? "border-emerald-200 bg-emerald-50"
          : "border-slate-100 bg-slate-50"
      }`}
    >
      <p className="text-[10px] font-medium uppercase tracking-wide text-slate-500">
        {label}
      </p>
      <p className="text-sm font-bold text-slate-800">{value}</p>
    </div>
  );
}

function LeadStatusBadge({ status }: { status: string }) {
  const map: Record<string, { label: string; cls: string }> = {
    incoming: { label: "Incoming", cls: "border-amber-200 bg-amber-50 text-amber-700" },
    accepted: { label: "Accepted", cls: "border-emerald-200 bg-emerald-50 text-emerald-700" },
    dispatched: { label: "Dispatched", cls: "border-emerald-300 bg-emerald-100 text-emerald-800" },
    confirmed: { label: "Confirmed", cls: "border-emerald-500 bg-emerald-600 text-white" },
  };
  const s = map[status] ?? map.incoming;
  return (
    <Badge variant="outline" className={`gap-1.5 text-[11px] font-semibold ${s.cls}`}>
      <span className="h-1.5 w-1.5 rounded-full bg-current" aria-hidden />
      {s.label}
    </Badge>
  );
}
