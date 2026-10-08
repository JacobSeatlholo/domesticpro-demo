"use client";

// Lightweight brand badge for inline use — falls back to text if image missing.
// The full brand wordmark uses /domestic-pro-logo.png directly in the header.

export function BrandBadge({ className, size = 28 }: { className?: string; size?: number }) {
  return (
    <span
      className={`inline-flex items-center justify-center rounded-md bg-[#80cc28] font-extrabold text-emerald-950 ${className ?? ""}`}
      style={{ width: size, height: size, fontSize: size * 0.42 }}
      aria-hidden
    >
      DP
    </span>
  );
}
