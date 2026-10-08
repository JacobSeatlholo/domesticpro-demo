"use client";

import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Radio, MapPin, Phone, Globe, ChevronDown, Menu, Sparkles } from "lucide-react";
import { useI18n } from "@/lib/i18n-context";
import { useState } from "react";

export function Header() {
  const { t, locale, setLocale, locales } = useI18n();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-lime-100 bg-white/90 backdrop-blur-md supports-[backdrop-filter]:bg-white/75">
      {/* Top utility strip — lime green like the real site */}
      <div className="bg-[#80cc28] text-emerald-950 text-[11px] sm:text-xs">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-2 px-4 py-1.5">
          <div className="flex items-center gap-1.5 font-semibold">
            <MapPin className="h-3 w-3" aria-hidden />
            <span className="hidden sm:inline">{t.coverage}</span>
            <span className="sm:hidden">Northern Suburbs</span>
            <span className="mx-1 hidden text-emerald-900/40 sm:inline">·</span>
            <span className="hidden sm:inline">{t.since}</span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="mailto:bookings@domesticpro.co.za"
              className="hidden items-center gap-1.5 hover:underline sm:flex"
            >
              <span aria-hidden>✉</span>
              bookings@domesticpro.co.za
            </a>
            <a
              href="tel:+27810372833"
              className="flex items-center gap-1.5 font-bold hover:underline"
            >
              <Phone className="h-3 w-3" aria-hidden />
              {t.callNow}
            </a>
            {/* Language switcher */}
            <div className="flex items-center gap-1">
              <Globe className="h-3 w-3" aria-hidden />
              <Select value={locale} onValueChange={(v) => setLocale(v as typeof locale)}>
                <SelectTrigger
                  className="h-6 w-auto gap-1 border-0 bg-emerald-950/10 px-1.5 py-0 text-[11px] font-semibold text-emerald-950 hover:bg-emerald-950/20 focus:ring-0"
                  aria-label="Select language"
                >
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="min-w-[10rem]" align="end">
                  {locales.map((l) => (
                    <SelectItem key={l.id} value={l.id} className="gap-2">
                      <span className="font-mono text-[10px] text-slate-400">{l.flag}</span>
                      <span className="font-medium">{l.nativeLabel}</span>
                      <span className="ml-auto text-[10px] text-slate-400">{l.label}</span>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>

      {/* Main brand row */}
      <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="flex items-center gap-2.5" aria-label="Domestic Pro — home">
          <Image
            src="/domestic-pro-logo.png"
            alt="Domestic Pro Service logo"
            width={200}
            height={67}
            priority
            className="h-9 w-auto sm:h-10"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {[
            { label: t.navHome, href: "#top" },
            { label: t.navAbout, href: "#about" },
            { label: t.navServices, href: "#services" },
            { label: t.navContact, href: "#contact" },
          ].map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-lime-50 hover:text-emerald-900"
            >
              {n.label}
            </a>
          ))}
          <a
            href="#demo"
            className="ml-2 inline-flex items-center gap-1.5 rounded-md bg-[#80cc28] px-4 py-2 text-sm font-bold text-emerald-950 shadow-sm transition-colors hover:bg-[#6fb81e]"
          >
            <Sparkles className="h-4 w-4" aria-hidden />
            {t.navBook}
          </a>
        </nav>

        {/* Mobile menu */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href="#demo"
            className="inline-flex items-center gap-1.5 rounded-md bg-[#80cc28] px-3 py-1.5 text-xs font-bold text-emerald-950"
          >
            <Sparkles className="h-3.5 w-3.5" aria-hidden />
            {t.navBook}
          </a>
          <DropdownMenu open={mobileOpen} onOpenChange={setMobileOpen}>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="border-lime-200 px-2 text-emerald-900"
                aria-label="Open menu"
              >
                <Menu className="h-4 w-4" aria-hidden />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-52">
              <DropdownMenuLabel className="text-xs text-slate-500">
                Domestic Pro Service
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <a href="#top" className="cursor-pointer">{t.navHome}</a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href="#about" className="cursor-pointer">{t.navAbout}</a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href="#services" className="cursor-pointer">{t.navServices}</a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href="#demo" className="cursor-pointer">{t.navBook}</a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href="#contact" className="cursor-pointer">{t.navContact}</a>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <a
                  href="tel:+27810372833"
                  className="flex items-center gap-2 font-semibold text-emerald-700"
                >
                  <Phone className="h-3.5 w-3.5" aria-hidden />
                  {t.callNow}
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* AI matcher badge strip (under brand) */}
      <div className="border-t border-lime-100 bg-lime-50/50">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-3 px-4 py-1.5">
          <div className="relative flex items-center gap-2 rounded-full border border-lime-200 bg-white py-0.5 pl-2.5 pr-3 text-xs">
            <span className="relative flex h-2 w-2.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[#80cc28] status-pulse" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-700" />
            </span>
            <Radio className="h-3.5 w-3.5 text-emerald-700" aria-hidden />
            <span className="text-[11px] font-semibold text-emerald-900 sm:text-xs">
              {t.aiMatcherBadge}
              <span className="hidden text-emerald-700/80 sm:inline">
                {" "}· {t.durbanvilleCorridor}
              </span>
            </span>
          </div>
          <Badge
            variant="outline"
            className="border-lime-200 bg-white text-emerald-800 gap-1.5 px-2.5 py-1 text-[11px] font-semibold sm:text-xs"
          >
            <Sparkles className="h-3.5 w-3.5 text-emerald-600" aria-hidden />
            <span className="hidden md:inline">{t.demoBadge}</span>
            <a
              href="https://www.businesshustle.co.za"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-emerald-700 underline-offset-2 hover:underline"
            >
              BusinessHustle
            </a>
          </Badge>
        </div>
      </div>
    </header>
  );
}
