"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, Globe, MapPin, Leaf, PawPrint, Clock } from "lucide-react";
import { useI18n } from "@/lib/i18n-context";

export function Footer() {
  const { t } = useI18n();

  return (
    <footer id="contact" className="mt-auto border-t border-lime-100 bg-white">
      {/* Trust bar */}
      <div className="border-b border-lime-50 bg-lime-50/40">
        <div className="mx-auto flex max-w-[1600px] flex-wrap items-center justify-center gap-x-6 gap-y-2 px-4 py-3 text-[11px] text-emerald-800 sm:text-xs">
          <span className="flex items-center gap-1.5 font-medium">
            <Leaf className="h-3.5 w-3.5 text-emerald-600" aria-hidden />
            {t.footerTrustEco}
          </span>
          <span className="flex items-center gap-1.5 font-medium">
            <PawPrint className="h-3.5 w-3.5 text-emerald-600" aria-hidden />
            {t.footerTrustPet}
          </span>
          <span className="flex items-center gap-1.5 font-medium">
            <MapPin className="h-3.5 w-3.5 text-emerald-600" aria-hidden />
            {t.footerTrustCoverage}
          </span>
          <span className="font-semibold text-emerald-700">{t.footerCompany}</span>
        </div>
      </div>

      {/* Main footer */}
      <div className="mx-auto max-w-[1600px] px-4 py-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand col */}
          <div className="space-y-3">
            <Link href="/" className="block">
              <Image
                src="/domestic-pro-logo.png"
                alt="Domestic Pro Service logo"
                width={200}
                height={67}
                className="h-9 w-auto"
              />
            </Link>
            <p className="max-w-xs text-xs leading-relaxed text-slate-500">
              {t.footerBrandDesc}
            </p>
            <div className="flex items-center gap-2 pt-1">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-8 w-8 place-items-center rounded-full bg-lime-50 text-emerald-700 transition-colors hover:bg-[#80cc28] hover:text-emerald-950"
                aria-label="Facebook"
              >
                <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.99 22 12z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-8 w-8 place-items-center rounded-full bg-lime-50 text-emerald-700 transition-colors hover:bg-[#80cc28] hover:text-emerald-950"
                aria-label="Instagram"
              >
                <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.332.014 7.052.072 2.695.272.273 2.69.073 7.052.014 8.332 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.332 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.668-.072-4.948-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href="https://domesticpro.co.za/"
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-8 w-8 place-items-center rounded-full bg-lime-50 text-emerald-700 transition-colors hover:bg-[#80cc28] hover:text-emerald-950"
                aria-label="Website"
              >
                <Globe className="h-3.5 w-3.5" aria-hidden />
              </a>
            </div>
          </div>

          {/* Coverage col */}
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              {t.footerCoverage}
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
              {t.footerContact}
            </p>
            <ul className="space-y-1.5 text-sm text-slate-700">
              <li>
                <a href="mailto:bookings@domesticpro.co.za" className="flex items-center gap-2 hover:text-emerald-700">
                  <Mail className="h-3.5 w-3.5 text-emerald-500" aria-hidden />
                  bookings@domesticpro.co.za
                </a>
              </li>
              <li>
                <a href="tel:+27810372833" className="flex items-center gap-2 hover:text-emerald-700">
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
              <li className="flex items-start gap-2 pt-1 text-slate-600">
                <Clock className="mt-0.5 h-3.5 w-3.5 text-emerald-500" aria-hidden />
                <span>
                  <span className="block text-xs font-semibold text-slate-700">
                    {t.footerBusinessHours}
                  </span>
                  <span className="text-xs">{t.footerBusinessHoursValue}</span>
                </span>
              </li>
            </ul>
          </div>

          {/* Builder col */}
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              {t.footerBuiltBy}
            </p>
            <a
              href="https://www.businesshustle.co.za"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2.5 rounded-lg border border-lime-200 bg-lime-50/50 p-2.5 transition-colors hover:border-[#80cc28] hover:bg-lime-50"
            >
              <span className="grid h-9 w-9 place-items-center rounded-md bg-[#80cc28] text-emerald-950">
                <span className="text-sm font-bold">BH</span>
              </span>
              <span className="flex flex-col leading-tight">
                <span className="text-sm font-bold text-emerald-800 group-hover:text-emerald-900">
                  BusinessHustle
                </span>
                <span className="text-[11px] text-slate-500">{t.footerBuiltByDesc}</span>
              </span>
            </a>
            <p className="text-[11px] leading-relaxed text-slate-500">
              Pairing business directories with open-source AI automation to fill
              service calendars without chasing word-of-mouth.
            </p>
            <a
              href="https://wa.me/27810372833"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-flex items-center gap-1.5 rounded-md bg-emerald-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-emerald-700"
            >
              <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.687-6.046C.057 5.373 5.386 0 12.057 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.978-.519z" />
              </svg>
              {t.whatsapp}
            </a>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-6 flex flex-col items-center justify-between gap-2 border-t border-lime-50 pt-4 text-center sm:flex-row sm:text-left">
          <p className="text-[11px] text-slate-500">{t.footerRights}</p>
          <p className="text-[11px] text-slate-500">
            {t.footerFiona}
          </p>
        </div>
      </div>
    </footer>
  );
}
