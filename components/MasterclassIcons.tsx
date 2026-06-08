export function CalendarIcon3D() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden="true">
      <rect x="6" y="12" width="32" height="28" rx="4" fill="#fff" stroke="#E5E7EB" strokeWidth="1" />
      <rect x="6" y="12" width="32" height="10" rx="4" fill="#EF4444" />
      <rect x="12" y="8" width="4" height="8" rx="2" fill="#9CA3AF" />
      <rect x="28" y="8" width="4" height="8" rx="2" fill="#9CA3AF" />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <rect key={i} x={10 + (i % 3) * 9} y={26 + Math.floor(i / 3) * 7} width="6" height="5" rx="1" fill={i === 0 ? "#EF4444" : "#F3F4F6"} />
      ))}
    </svg>
  );
}

export function ClockIcon3D() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden="true">
      <circle cx="22" cy="24" r="14" fill="#EF4444" />
      <circle cx="22" cy="24" r="11" fill="#fff" />
      <path d="M22 18v6l4 3" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" />
      <path d="M34 14a16 16 0 0 1 2 8" stroke="#9CA3AF" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M36 12l2 2-2 2" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function DurationIcon3D() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden="true">
      <ellipse cx="22" cy="36" rx="10" ry="3" fill="#2F80ED" opacity="0.3" />
      <ellipse cx="22" cy="34" rx="8" ry="2.5" fill="#2F80ED" />
      <path d="M22 10c-5 0-9 4-9 9 0 6 9 15 9 15s9-9 9-15c0-5-4-9-9-9z" fill="#EF4444" />
      <circle cx="22" cy="19" r="4" fill="#fff" />
    </svg>
  );
}

export function GlobeIcon3D() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden="true">
      <rect x="8" y="10" width="28" height="26" rx="6" fill="#2F80ED" opacity="0.15" stroke="#2F80ED" strokeWidth="1.5" />
      <circle cx="22" cy="23" r="10" fill="#2F80ED" />
      <ellipse cx="22" cy="23" rx="4" ry="10" stroke="#fff" strokeWidth="1.2" fill="none" />
      <path d="M12 23h20M14 18h16M14 28h16" stroke="#fff" strokeWidth="1" strokeLinecap="round" />
    </svg>
  );
}
