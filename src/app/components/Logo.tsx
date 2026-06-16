export function Logo({ size = 24, color = "#111" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-label="HC" role="img">
      <rect x="0.5" y="0.5" width="31" height="31" rx="7.5" fill={color} />
      <path
        d="M 10 9 L 10 23 M 10 16 L 18 16 M 18 12 L 18 23"
        stroke="#FFFFFF"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
}
