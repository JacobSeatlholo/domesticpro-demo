// Domestic Pro Service — Brand Logo (inline SVG)

export function DomesticProLogo({
  className,
  size = 40,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="dpro-leaf" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#10B981" />
          <stop offset="100%" stopColor="#0F5132" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="14" fill="url(#dpro-leaf)" />
      <path
        d="M32 12c-9 6-13 13-13 22 0 7 5 12 13 12s13-5 13-12c0-9-4-16-13-22z"
        fill="#10B981"
        opacity="0.95"
      />
      <path
        d="M32 18c-5 4-8 9-8 16 0 5 3 8 8 8s8-3 8-8c0-7-3-12-8-16z"
        fill="#ECFDF5"
      />
      <path
        d="M32 24c-2 3-3 6-3 10 0 3 1 5 3 5s3-2 3-5c0-4-1-7-3-10z"
        fill="#0F5132"
      />
      <circle cx="32" cy="32" r="2.4" fill="#10B981" />
    </svg>
  );
}
