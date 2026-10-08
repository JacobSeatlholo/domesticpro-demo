"use client";

import { DomesticProLogo } from "./logo";
import { Badge } from "@/components/ui/badge";
import { Radio, Sparkles, MapPin, Phone } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-emerald-100/80 bg-white/85 backdrop-blur-md supports-[backdrop-filter]:bg-white/70">
      {/* Top utility strip */}
      <div className="bg-emerald-900 text-emerald-50 text-[11px] sm:text-xs">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-2 px-4 py-1.5">
          <div className="flex items-center gap-1.5 font-medium">
            <MapPin className="h-3 w-3 text-emerald-300" aria-hidden />
            <span className="hidden sm:inline">
              Durbanville · Bellville · Tygervalley · Parow
            </span>
            <span className="sm:hidden">Cape Town Northern Suburbs</span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="mailto:bookings@domesticpro.co.za"
              className="hidden items-center gap-1.5 hover:text-white transition-colors sm:flex"
            >
              <span className="text-emerald-300">✉</span>
              bookings@domesticpro.co.za
            </a>
            <a
              href="tel:+27810372833"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="h-3 w-3 text-emerald-300" aria-hidden />
              081 037 2833
            </a>
          </div>
        </div>
      </div>

      {/* Main brand row */}
      <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-4 px-4 py-3">
        <div className="flex items-center gap-3">
          <DomesticProLogo size={44} />
          <div className="flex flex-col leading-tight">
            <div className="flex items-baseline gap-2">
              <span className="brand-gradient text-lg font-bold tracking-tight sm:text-xl">
                Domestic Pro
              </span>
              <span className="hidden text-xs font-medium text-emerald-700/80 sm:inline">
                Service
              </span>
            </div>
            <span className="text-[11px] font-medium text-slate-500 sm:text-xs">
              Eco-Friendly &amp; Pet-Safe Cleaning
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <Badge
            variant="outline"
            className="border-emerald-200 bg-emerald-50 text-emerald-700 gap-1.5 px-2.5 py-1 text-[11px] font-semibold sm:text-xs"
          >
            <Sparkles className="h-3.5 w-3.5 text-emerald-600" aria-hidden />
            <span className="hidden md:inline">Demo by</span>
            <a
              href="https://www.businesshustle.co.za"
              target="_blank"
              rel="noopener noreferrer"
              className="underline-offset-2 hover:underline"
            >
              BusinessHustle
            </a>
          </Badge>

          <div className="relative flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50/80 py-1 pl-2.5 pr-3">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 status-pulse" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-600" />
            </span>
            <Radio className="h-3.5 w-3.5 text-emerald-700" aria-hidden />
            <span className="text-[11px] font-semibold text-emerald-800 sm:text-xs">
              AI Job Matcher Active
              <span className="hidden text-emerald-600/80 sm:inline">
                {" "}· Durbanville Corridor
              </span>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
