"use client";

import { DomesticProLogo } from "./logo";
import { Mail, Phone, Globe, MapPin, Leaf, PawPrint } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-emerald-100 bg-white">
      {/* Trust bar */}
      <div className="border-b border-emerald-50 bg-emerald-50/40">
        <div className="mx-auto flex max-w-[1600px] flex-wrap items-center justify-center gap-x-6 gap-y-2 px-4 py-3 text-[11px] text-emerald-800 sm:text-xs">
          <span className="flex items-center gap-1.5 font-medium">
            <Leaf className="h-3.5 w-3.5 text-emerald-600" aria-hidden />
            Eco-friendly products
          </span>
          <span className="flex items-center gap-1.5 font-medium">
            <PawPrint className="h-3.5 w-3.5 text-emerald-600" aria-hidden />
            Pet-safe treatments
          </span>
          <span className="flex items-center gap-1.5 font-medium">
            <MapPin className="h-3.5 w-3.5 text-emerald-600" aria-hidden />
            Durbanville · Bellville · Tygervalley · Parow
          </span>
          <span className="font-semibold text-emerald-700">
            Domestic Pro Service (Pty) Ltd
          </span>
        </div>
      </div>

      {/* Main footer */}
      <div className="mx-auto max-w-[1600px] px-4 py-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand col */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <DomesticProLogo size={36} />
              <div className="leading-tight">
                <p className="brand-gradient text-base font-bold">Domestic Pro</p>
                <p className="text-[11px] text-slate-500">Eco-Friendly &amp; Pet-Safe Cleaning</p>
              </div>
            </div>
            <p className="max-w-xs text-xs leading-relaxed text-slate-500">
              High-end, eco-conscious cleaning crews covering Cape Town&apos;s Northern
              Suburbs. Family-owned, referral-driven — now AI-matched by BusinessHustle.
            </p>
          </div>

          {/* Coverage col */}
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Coverage
            </p>
            <ul className="space-y-1.5 text-sm text-slate-700">
              {["Durbanville", "Bellville", "Tygervalley", "Parow"].map((s) => (
                <li key={s} className="flex items-center gap-2">
                  <MapPin className="h-3.5 w-3.5 text-emerald-500" aria-hidden />
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact col */}
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Contact
            </p>
            <ul className="space-y-1.5 text-sm text-slate-700">
              <li>
                <a
                  href="mailto:bookings@domesticpro.co.za"
                  className="flex items-center gap-2 hover:text-emerald-700"
                >
                  <Mail className="h-3.5 w-3.5 text-emerald-500" aria-hidden />
                  bookings@domesticpro.co.za
                </a>
              </li>
              <li>
                <a
                  href="tel:+27810372833"
                  className="flex items-center gap-2 hover:text-emerald-700"
                >
                  <Phone className="h-3.5 w-3.5 text-emerald-500" aria-hidden />
                  081 037 2833
                </a>
              </li>
              <li>
                <a
                  href="https://domesticpro.co.za"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-emerald-700"
                >
                  <Globe className="h-3.5 w-3.5 text-emerald-500" aria-hidden />
                  domesticpro.co.za
                </a>
              </li>
            </ul>
          </div>

          {/* Builder col */}
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Demo built by
            </p>
            <a
              href="https://www.businesshustle.co.za"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2.5 rounded-lg border border-emerald-200 bg-emerald-50/50 p-2.5 transition-colors hover:border-emerald-400 hover:bg-emerald-50"
            >
              <span className="grid h-9 w-9 place-items-center rounded-md bg-emerald-700 text-white">
                <span className="text-sm font-bold">BH</span>
              </span>
              <span className="flex flex-col leading-tight">
                <span className="text-sm font-bold text-emerald-800 group-hover:text-emerald-900">
                  BusinessHustle
                </span>
                <span className="text-[11px] text-slate-500">
                  Local AI automation · businesshustle.co.za
                </span>
              </span>
            </a>
            <p className="text-[11px] leading-relaxed text-slate-500">
              Pairing business directories with open-source AI automation to fill
              service calendars without chasing word-of-mouth.
            </p>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-6 flex flex-col items-center justify-between gap-2 border-t border-emerald-50 pt-4 text-center sm:flex-row sm:text-left">
          <p className="text-[11px] text-slate-500">
            © {new Date().getFullYear()} Domestic Pro Service (Pty) Ltd · Managing
            Director: Elmar Stoffels
          </p>
          <p className="text-[11px] text-slate-500">
            Demo built by{" "}
            <a
              href="https://www.businesshustle.co.za"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-700 underline-offset-2 hover:underline"
            >
              BusinessHustle
            </a>{" "}
            · Fiona Burke
          </p>
        </div>
      </div>
    </footer>
  );
}
