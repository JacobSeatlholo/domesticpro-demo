// Domestic Pro Service — i18n React context
// Persists chosen locale to localStorage; provides `t()` to any component.
// Uses useSyncExternalStore for SSR-safe, lint-safe external store binding.

"use client";

import {
  createContext,
  useContext,
  useSyncExternalStore,
  useState,
  ReactNode,
} from "react";
import { DICT, LOCALES, type Locale, type Dict } from "@/lib/i18n";

interface I18nContextValue {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: Dict;
  locales: typeof LOCALES;
}

const I18nContext = createContext<I18nContextValue | null>(null);

const STORAGE_KEY = "dp-locale";

// --- External store for the chosen locale ---
const listeners = new Set<() => void>();

function getSnapshotClient(): Locale {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "af" || stored === "xh") return stored;
  } catch {
    // ignore
  }
  const nav = (navigator?.language ?? "en").toLowerCase();
  if (nav.startsWith("af")) return "af";
  if (nav.startsWith("xh")) return "xh";
  return "en";
}

// SSR snapshot — always "en"; client hydrates to the stored value via getSnapshot
function getSnapshotServer(): Locale {
  return "en";
}

function subscribe(callback: () => void) {
  listeners.add(callback);
  // Also subscribe to storage events so other tabs stay in sync
  const onStorage = (e: StorageEvent) => {
    if (e.key === STORAGE_KEY) callback();
  };
  if (typeof window !== "undefined") {
    window.addEventListener("storage", onStorage);
  }
  return () => {
    listeners.delete(callback);
    if (typeof window !== "undefined") {
      window.removeEventListener("storage", onStorage);
    }
  };
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const locale = useSyncExternalStore(
    subscribe,
    // getSnapshot — runs only on the client after hydration
    () => (typeof window === "undefined" ? getSnapshotServer() : getSnapshotClient()),
    // getServerSnapshot — used during SSR
    getSnapshotServer
  );

  // We track a "version" so a manual setLocale bumps the store even when
  // localStorage is unchanged across renders (e.g. first selection).
  const [, setVersion] = useState(0);

  const setLocale = (l: Locale) => {
    if (typeof window !== "undefined") {
      try {
        window.localStorage.setItem(STORAGE_KEY, l);
      } catch {
        // ignore
      }
    }
    // Notify all subscribers
    listeners.forEach((cb) => cb());
    // Bump local state to ensure re-render of this provider
    setVersion((v) => v + 1);
  };

  const value: I18nContextValue = {
    locale,
    setLocale,
    t: DICT[locale],
    locales: LOCALES,
  };

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error("useI18n must be used inside I18nProvider");
  }
  return ctx;
}
