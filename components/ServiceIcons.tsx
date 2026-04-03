// Circular brand-style SVG icons — matches the dark circular icon style
// Each icon renders as a circular badge with gradient bg + white SVG inside

interface IconProps {
  size?: number;
  className?: string;
}

// ── Service Icons ──────────────────────────────────────────────────────────

export function WebDesignIcon({ size = 56, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 56 56" fill="none" className={className}>
      <rect width="56" height="56" rx="14" fill="url(#webGrad)" />
      <defs>
        <linearGradient id="webGrad" x1="0" y1="0" x2="56" y2="56" gradientUnits="userSpaceOnUse">
          <stop stopColor="#e85d04" /><stop offset="1" stopColor="#dc2f02" />
        </linearGradient>
      </defs>
      {/* HTML5 brackets */}
      <path d="M14 16l3.2 22L28 42l10.8-4L42 16H14z" fill="white" fillOpacity="0.15"/>
      <path d="M28 38.5l-8.7-2.9-1.5-10.6H28v-4.5H16.3l-.6-4H28V12H12l3.2 22L28 38.5z" fill="white"/>
      <path d="M28 12v4.5h10.6l-.5 4H28V25h9.8l-1 8.5L28 36.3V41l11.5-3.8L43 12H28z" fill="rgba(255,255,255,0.7)"/>
    </svg>
  );
}

export function SEOIcon({ size = 56, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 56 56" fill="none" className={className}>
      <rect width="56" height="56" rx="14" fill="url(#seoGrad)" />
      <defs>
        <linearGradient id="seoGrad" x1="0" y1="0" x2="56" y2="56" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1a73e8" /><stop offset="1" stopColor="#0d47a1" />
        </linearGradient>
      </defs>
      {/* Google G */}
      <path d="M36.5 28.2h-8.8v4.1h5.1c-.5 2.3-2.5 4-5.1 4-3 0-5.5-2.5-5.5-5.5s2.5-5.5 5.5-5.5c1.4 0 2.6.5 3.6 1.3l3-3c-1.7-1.6-4-2.6-6.6-2.6-5.5 0-10 4.5-10 10s4.5 10 10 10c5.5 0 9.5-3.8 9.5-9.5 0-.6-.1-1.3-.2-1.9l-.5-.4z" fill="white"/>
    </svg>
  );
}

export function SocialMediaIcon({ size = 56, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 56 56" fill="none" className={className}>
      <rect width="56" height="56" rx="14" fill="url(#smGrad)" />
      <defs>
        <radialGradient id="smGrad" cx="30%" cy="100%" r="130%">
          <stop stopColor="#f09433" /><stop offset="25%" stopColor="#e6683c" />
          <stop offset="50%" stopColor="#dc2743" /><stop offset="75%" stopColor="#cc2366" />
          <stop offset="100%" stopColor="#bc1888" />
        </radialGradient>
      </defs>
      {/* Instagram camera */}
      <rect x="14" y="14" width="28" height="28" rx="7" stroke="white" strokeWidth="2.5" fill="none"/>
      <circle cx="28" cy="28" r="6.5" stroke="white" strokeWidth="2.5" fill="none"/>
      <circle cx="36.5" cy="19.5" r="1.8" fill="white"/>
    </svg>
  );
}

export function GoogleAdsIcon({ size = 56, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 56 56" fill="none" className={className}>
      <rect width="56" height="56" rx="14" fill="url(#adsGrad)" />
      <defs>
        <linearGradient id="adsGrad" x1="0" y1="0" x2="56" y2="56" gradientUnits="userSpaceOnUse">
          <stop stopColor="#f9ab00" /><stop offset="1" stopColor="#e37400" />
        </linearGradient>
      </defs>
      {/* Ads triangle / chart bars */}
      <rect x="13" y="30" width="8" height="14" rx="2" fill="white" fillOpacity="0.6"/>
      <rect x="24" y="22" width="8" height="22" rx="2" fill="white"/>
      <rect x="35" y="13" width="8" height="31" rx="2" fill="white" fillOpacity="0.8"/>
    </svg>
  );
}

export function GrowthEngineIcon({ size = 56, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 56 56" fill="none" className={className}>
      <rect width="56" height="56" rx="14" fill="url(#growthGrad)" />
      <defs>
        <linearGradient id="growthGrad" x1="0" y1="0" x2="56" y2="56" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7c3aed" /><stop offset="1" stopColor="#4f46e5" />
        </linearGradient>
      </defs>
      {/* Rocket */}
      <path d="M28 10c0 0 8 4 10 14l-10 4-10-4C20 14 28 10 28 10z" fill="white"/>
      <path d="M18 24l-4 10 6-2 4-8-6 0z" fill="rgba(255,255,255,0.7)"/>
      <path d="M38 24l4 10-6-2-4-8 6 0z" fill="rgba(255,255,255,0.7)"/>
      <path d="M24 32l-2 8 6-4 6 4-2-8-4 2-4-2z" fill="rgba(255,255,255,0.5)"/>
      <circle cx="28" cy="22" r="3" fill="url(#growthGrad)"/>
    </svg>
  );
}

export function WhatsAppIcon({ size = 56, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 56 56" fill="none" className={className}>
      <rect width="56" height="56" rx="14" fill="url(#waGrad)" />
      <defs>
        <linearGradient id="waGrad" x1="0" y1="0" x2="56" y2="56" gradientUnits="userSpaceOnUse">
          <stop stopColor="#25d366" /><stop offset="1" stopColor="#128c7e" />
        </linearGradient>
      </defs>
      <path d="M28 11C18.6 11 11 18.6 11 28c0 3 .8 5.9 2.2 8.4L11 45l8.8-2.3C22.2 44.2 25 45 28 45c9.4 0 17-7.6 17-17S37.4 11 28 11zm0 31c-2.7 0-5.2-.7-7.4-2l-.5-.3-5.2 1.4 1.4-5-.3-.5C14.7 33.3 14 30.7 14 28c0-7.7 6.3-14 14-14s14 6.3 14 14-6.3 14-14 14zm7.7-10.5c-.4-.2-2.4-1.2-2.8-1.3-.4-.1-.6-.2-.9.2-.3.4-1 1.3-1.2 1.6-.2.3-.5.3-.9.1-2.4-1.2-4-2.1-5.5-4.8-.4-.7.4-.7 1.2-2.2.1-.3 0-.5-.1-.7-.1-.2-.9-2.1-1.2-2.9-.3-.8-.6-.7-.9-.7h-.7c-.3 0-.7.1-1 .5-.4.4-1.4 1.4-1.4 3.3s1.4 3.9 1.6 4.1c.2.3 2.8 4.3 6.8 6 4 1.7 4 1.1 4.7 1 .7-.1 2.4-1 2.7-1.9.3-1 .3-1.8.2-1.9-.1-.3-.3-.3-.7-.5z" fill="white"/>
    </svg>
  );
}

export function LeadGenIcon({ size = 56, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 56 56" fill="none" className={className}>
      <rect width="56" height="56" rx="14" fill="url(#leadGrad)" />
      <defs>
        <linearGradient id="leadGrad" x1="0" y1="0" x2="56" y2="56" gradientUnits="userSpaceOnUse">
          <stop stopColor="#06b6d4" /><stop offset="1" stopColor="#0284c7" />
        </linearGradient>
      </defs>
      {/* Funnel */}
      <path d="M13 15h30l-12 14v12l-6-3V29L13 15z" fill="white" fillOpacity="0.9"/>
      <circle cx="39" cy="39" r="7" fill="url(#leadGrad)" stroke="white" strokeWidth="2"/>
      <path d="M36 39h6M39 36v6" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

// ── Feature/benefit icons ───────────────────────────────────────────────────

export function MobileIcon({ size = 48, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
      <rect width="48" height="48" rx="12" fill="rgba(59,130,246,0.15)" />
      <rect x="15" y="8" width="18" height="32" rx="4" stroke="#3b82f6" strokeWidth="2" fill="none"/>
      <circle cx="24" cy="35" r="1.5" fill="#3b82f6"/>
      <path d="M20 12h8" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

export function SpeedIcon({ size = 48, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
      <rect width="48" height="48" rx="12" fill="rgba(245,158,11,0.15)" />
      <path d="M26 10l-14 18h12l-2 10 14-18H24l2-10z" fill="#f59e0b"/>
    </svg>
  );
}

export function SecurityIcon({ size = 48, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
      <rect width="48" height="48" rx="12" fill="rgba(34,197,94,0.15)" />
      <path d="M24 8l-12 5v10c0 7 5.4 13.5 12 16 6.6-2.5 12-9 12-16V13L24 8z" stroke="#22c55e" strokeWidth="2" fill="none"/>
      <path d="M18 24l4 4 8-8" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function AnalyticsIcon({ size = 48, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
      <rect width="48" height="48" rx="12" fill="rgba(139,92,246,0.15)" />
      <rect x="10" y="28" width="7" height="12" rx="2" fill="#8b5cf6" fillOpacity="0.5"/>
      <rect x="20.5" y="20" width="7" height="20" rx="2" fill="#8b5cf6"/>
      <rect x="31" y="12" width="7" height="28" rx="2" fill="#8b5cf6" fillOpacity="0.7"/>
      <path d="M10 14l10-4 8 6 10-8" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function DesignIcon({ size = 48, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
      <rect width="48" height="48" rx="12" fill="rgba(236,72,153,0.15)" />
      <circle cx="15" cy="19" r="4" fill="#ec4899"/>
      <circle cx="28" cy="13" r="4" fill="#8b5cf6"/>
      <circle cx="35" cy="25" r="4" fill="#3b82f6"/>
      <circle cx="28" cy="35" r="4" fill="#06b6d4"/>
      <circle cx="15" cy="33" r="4" fill="#22c55e"/>
    </svg>
  );
}

export function BilingualIcon({ size = 48, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
      <rect width="48" height="48" rx="12" fill="rgba(245,158,11,0.15)" />
      <circle cx="24" cy="24" r="13" stroke="#f59e0b" strokeWidth="2" fill="none"/>
      <path d="M24 11c0 0-7 4-7 13s7 13 7 13" stroke="#f59e0b" strokeWidth="2" fill="none"/>
      <path d="M24 11c0 0 7 4 7 13s-7 13-7 13" stroke="#f59e0b" strokeWidth="2" fill="none"/>
      <path d="M11 24h26" stroke="#f59e0b" strokeWidth="2"/>
      <path d="M12 18h24M12 30h24" stroke="#f59e0b" strokeWidth="1.5"/>
    </svg>
  );
}

export function SearchRankIcon({ size = 48, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
      <rect width="48" height="48" rx="12" fill="rgba(16,185,129,0.15)" />
      <circle cx="21" cy="21" r="10" stroke="#10b981" strokeWidth="2" fill="none"/>
      <path d="M29 29l8 8" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M17 21h8M21 17v8" stroke="#10b981" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

export function MapPinIcon({ size = 48, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
      <rect width="48" height="48" rx="12" fill="rgba(239,68,68,0.15)" />
      <path d="M24 10c-5.5 0-10 4.5-10 10 0 7.5 10 18 10 18s10-10.5 10-18c0-5.5-4.5-10-10-10z" stroke="#ef4444" strokeWidth="2" fill="none"/>
      <circle cx="24" cy="20" r="3.5" fill="#ef4444"/>
    </svg>
  );
}

export function LinkBuildIcon({ size = 48, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
      <rect width="48" height="48" rx="12" fill="rgba(59,130,246,0.15)" />
      <path d="M20 28l-2 2a5.66 5.66 0 000 8 5.66 5.66 0 008 0l4-4a5.66 5.66 0 000-8l-1.5-1.5" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M28 20l2-2a5.66 5.66 0 000-8 5.66 5.66 0 00-8 0l-4 4a5.66 5.66 0 000 8l1.5 1.5" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  );
}

export function ReportIcon({ size = 48, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
      <rect width="48" height="48" rx="12" fill="rgba(139,92,246,0.15)" />
      <rect x="12" y="8" width="24" height="32" rx="3" stroke="#8b5cf6" strokeWidth="2" fill="none"/>
      <path d="M18 18h12M18 24h12M18 30h8" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round"/>
      <path d="M18 14h5" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

export function TargetIcon({ size = 48, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
      <rect width="48" height="48" rx="12" fill="rgba(245,158,11,0.15)" />
      <circle cx="24" cy="24" r="13" stroke="#f59e0b" strokeWidth="2" fill="none"/>
      <circle cx="24" cy="24" r="8" stroke="#f59e0b" strokeWidth="2" fill="none"/>
      <circle cx="24" cy="24" r="3" fill="#f59e0b"/>
      <path d="M24 8v5M24 35v5M8 24h5M35 24h5" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

export function CallTrackIcon({ size = 48, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
      <rect width="48" height="48" rx="12" fill="rgba(34,197,94,0.15)" />
      <path d="M15 10h6l3 7-3.5 2.5c1.5 3 4 5.5 7 7L30 23l7 3v6c0 2-1.5 3-3.5 2.5C18 31.5 10 18.5 12 12.5c-.5-2 1-2.5 3-2.5z" stroke="#22c55e" strokeWidth="2" fill="none" strokeLinejoin="round"/>
      <path d="M31 10c3.3 1 6 3.7 7 7" stroke="#22c55e" strokeWidth="2" strokeLinecap="round"/>
      <path d="M31 14a5 5 0 013 3" stroke="#22c55e" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

export function RetargetIcon({ size = 48, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
      <rect width="48" height="48" rx="12" fill="rgba(99,102,241,0.15)" />
      <path d="M12 24c0-6.6 5.4-12 12-12 4 0 7.5 2 9.7 5" stroke="#6366f1" strokeWidth="2" strokeLinecap="round"/>
      <path d="M36 24c0 6.6-5.4 12-12 12-4 0-7.5-2-9.7-5" stroke="#6366f1" strokeWidth="2" strokeLinecap="round"/>
      <path d="M31 12l3.5 5h-4.5" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M17 36l-3.5-5h4.5" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function ContentIcon({ size = 48, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
      <rect width="48" height="48" rx="12" fill="rgba(236,72,153,0.15)" />
      <rect x="10" y="10" width="28" height="20" rx="3" stroke="#ec4899" strokeWidth="2" fill="none"/>
      <path d="M16 18h16M16 23h10" stroke="#ec4899" strokeWidth="2" strokeLinecap="round"/>
      <path d="M10 35h7l-3-5h-4v5zM21 35h7l-3-5h-4l.5 3.5L21 35zM32 35h6v-5h-4l-2 5z" fill="#ec4899" fillOpacity="0.5"/>
    </svg>
  );
}

export function CalendarIcon({ size = 48, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
      <rect width="48" height="48" rx="12" fill="rgba(59,130,246,0.15)" />
      <rect x="9" y="13" width="30" height="26" rx="3" stroke="#3b82f6" strokeWidth="2" fill="none"/>
      <path d="M9 21h30" stroke="#3b82f6" strokeWidth="2"/>
      <path d="M17 9v8M31 9v8" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round"/>
      <rect x="15" y="27" width="5" height="5" rx="1" fill="#3b82f6"/>
      <rect x="23" y="27" width="5" height="5" rx="1" fill="#3b82f6" fillOpacity="0.5"/>
      <rect x="15" y="33" width="5" height="3" rx="1" fill="#3b82f6" fillOpacity="0.5"/>
    </svg>
  );
}

export function VideoIcon({ size = 48, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
      <rect width="48" height="48" rx="12" fill="rgba(239,68,68,0.15)" />
      <rect x="8" y="14" width="24" height="20" rx="3" stroke="#ef4444" strokeWidth="2" fill="none"/>
      <path d="M32 19l8-5v20l-8-5V19z" stroke="#ef4444" strokeWidth="2" strokeLinejoin="round" fill="none"/>
    </svg>
  );
}

export function UsersIcon({ size = 48, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
      <rect width="48" height="48" rx="12" fill="rgba(16,185,129,0.15)" />
      <circle cx="18" cy="18" r="5" stroke="#10b981" strokeWidth="2" fill="none"/>
      <circle cx="30" cy="18" r="5" stroke="#10b981" strokeWidth="2" fill="none"/>
      <path d="M8 36c0-5.5 4.5-10 10-10" stroke="#10b981" strokeWidth="2" strokeLinecap="round"/>
      <path d="M40 36c0-5.5-4.5-10-10-10" stroke="#10b981" strokeWidth="2" strokeLinecap="round"/>
      <path d="M18 26c0 0 2 1 6 1s6-1 6-1c5 0 9 4 9 9H9c0-5 4-9 9-9z" stroke="#10b981" strokeWidth="2" strokeLinejoin="round" fill="none"/>
    </svg>
  );
}

export function CRMIcon({ size = 48, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
      <rect width="48" height="48" rx="12" fill="rgba(139,92,246,0.15)" />
      <circle cx="14" cy="14" r="5" stroke="#8b5cf6" strokeWidth="2" fill="none"/>
      <circle cx="34" cy="14" r="5" stroke="#8b5cf6" strokeWidth="2" fill="none"/>
      <circle cx="14" cy="34" r="5" stroke="#8b5cf6" strokeWidth="2" fill="none"/>
      <circle cx="34" cy="34" r="5" stroke="#8b5cf6" strokeWidth="2" fill="none"/>
      <path d="M19 14h10M14 19v10M19 34h10M34 19v10" stroke="#8b5cf6" strokeWidth="2"/>
    </svg>
  );
}

export function SupportIcon({ size = 48, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
      <rect width="48" height="48" rx="12" fill="rgba(245,158,11,0.15)" />
      <circle cx="24" cy="24" r="12" stroke="#f59e0b" strokeWidth="2" fill="none"/>
      <path d="M14 18a10 10 0 000 12" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round"/>
      <path d="M34 18a10 10 0 010 12" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="24" cy="24" r="4" stroke="#f59e0b" strokeWidth="2" fill="none"/>
    </svg>
  );
}

// ── Industry icons ─────────────────────────────────────────────────────────

export function ConstructionIcon({ size = 56, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 56 56" fill="none" className={className}>
      <rect width="56" height="56" rx="14" fill="url(#conGrad)" />
      <defs>
        <linearGradient id="conGrad" x1="0" y1="0" x2="56" y2="56" gradientUnits="userSpaceOnUse">
          <stop stopColor="#f59e0b" /><stop offset="1" stopColor="#d97706" />
        </linearGradient>
      </defs>
      {/* Hard hat */}
      <path d="M18 32h20v4H18z" fill="white"/>
      <path d="M15 32c0-7 5.8-13 13-13s13 6 13 13" stroke="white" strokeWidth="2.5" fill="none"/>
      <rect x="14" y="30" width="28" height="4" rx="2" fill="white"/>
      <path d="M22 32V26" stroke="rgba(245,158,11,1)" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

export function RetailIcon({ size = 56, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 56 56" fill="none" className={className}>
      <rect width="56" height="56" rx="14" fill="url(#retGrad)" />
      <defs>
        <linearGradient id="retGrad" x1="0" y1="0" x2="56" y2="56" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ec4899" /><stop offset="1" stopColor="#a855f7" />
        </linearGradient>
      </defs>
      {/* Shopping bag */}
      <path d="M19 22h18l-3 18H22L19 22z" stroke="white" strokeWidth="2" fill="none" strokeLinejoin="round"/>
      <path d="M22 22v-4a6 6 0 0112 0v4" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      <path d="M23 30h10" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

export function HVACIcon({ size = 56, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 56 56" fill="none" className={className}>
      <rect width="56" height="56" rx="14" fill="url(#hvacGrad)" />
      <defs>
        <linearGradient id="hvacGrad" x1="0" y1="0" x2="56" y2="56" gradientUnits="userSpaceOnUse">
          <stop stopColor="#06b6d4" /><stop offset="1" stopColor="#0284c7" />
        </linearGradient>
      </defs>
      {/* Snowflake */}
      <path d="M28 14v28M14 28h28" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M18.9 18.9l18.2 18.2M37.1 18.9L18.9 37.1" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
      <circle cx="28" cy="28" r="4" fill="white"/>
      <circle cx="28" cy="14" r="2" fill="white"/>
      <circle cx="28" cy="42" r="2" fill="white"/>
      <circle cx="14" cy="28" r="2" fill="white"/>
      <circle cx="42" cy="28" r="2" fill="white"/>
    </svg>
  );
}

export function CleaningIcon({ size = 56, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 56 56" fill="none" className={className}>
      <rect width="56" height="56" rx="14" fill="url(#cleanGrad)" />
      <defs>
        <linearGradient id="cleanGrad" x1="0" y1="0" x2="56" y2="56" gradientUnits="userSpaceOnUse">
          <stop stopColor="#22c55e" /><stop offset="1" stopColor="#16a34a" />
        </linearGradient>
      </defs>
      {/* Broom / sparkle */}
      <path d="M20 20l16 16" stroke="white" strokeWidth="3" strokeLinecap="round"/>
      <path d="M28 12l2 3-3 1 2 3-3-1 1 3-3-2 1 3-3-1 2 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <path d="M20 36h16c0 4-3.6 8-8 8s-8-4-8-8z" fill="white" fillOpacity="0.8"/>
    </svg>
  );
}

export function ServiceBizIcon({ size = 56, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 56 56" fill="none" className={className}>
      <rect width="56" height="56" rx="14" fill="url(#svcGrad)" />
      <defs>
        <linearGradient id="svcGrad" x1="0" y1="0" x2="56" y2="56" gradientUnits="userSpaceOnUse">
          <stop stopColor="#8b5cf6" /><stop offset="1" stopColor="#6366f1" />
        </linearGradient>
      </defs>
      {/* Briefcase */}
      <rect x="13" y="22" width="30" height="22" rx="3" stroke="white" strokeWidth="2" fill="none"/>
      <path d="M20 22v-5a3 3 0 013-3h10a3 3 0 013 3v5" stroke="white" strokeWidth="2"/>
      <path d="M13 33h30" stroke="white" strokeWidth="2"/>
      <path d="M23 33v3M33 33v3" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

// ── Additional feature icons ────────────────────────────────────────────────

export function TrophyIcon({ size = 48, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
      <rect width="48" height="48" rx="12" fill="rgba(245,158,11,0.15)" />
      <path d="M16 10h16v16a8 8 0 01-16 0V10z" stroke="#f59e0b" strokeWidth="2" fill="none"/>
      <path d="M16 16H10a4 4 0 004 4h2M32 16h6a4 4 0 01-4 4h-2" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round"/>
      <path d="M24 26v8M18 38h12" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

export function BudgetIcon({ size = 48, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
      <rect width="48" height="48" rx="12" fill="rgba(34,197,94,0.15)" />
      <circle cx="24" cy="24" r="13" stroke="#22c55e" strokeWidth="2" fill="none"/>
      <path d="M24 14v2M24 32v2" stroke="#22c55e" strokeWidth="2" strokeLinecap="round"/>
      <path d="M19 19.5c0-2 2-3 5-3s5 1 5 3-2 2.5-5 3-5 1-5 3 2 3 5 3 5-1 5-3" stroke="#22c55e" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

export function GlobeNetIcon({ size = 48, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
      <rect width="48" height="48" rx="12" fill="rgba(59,130,246,0.15)" />
      <circle cx="24" cy="24" r="13" stroke="#3b82f6" strokeWidth="2" fill="none"/>
      <path d="M11 24h26M24 11c0 0-6 4-6 13s6 13 6 13M24 11c0 0 6 4 6 13s-6 13-6 13" stroke="#3b82f6" strokeWidth="1.5" fill="none"/>
    </svg>
  );
}

export function GearIcon({ size = 48, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
      <rect width="48" height="48" rx="12" fill="rgba(100,116,139,0.15)" />
      <path d="M24 14a2 2 0 012 2v1.3a8.9 8.9 0 012.6 1.5l1.1-.6a2 2 0 012.8.7l1 1.7a2 2 0 01-.7 2.7l-1.1.6c.1.7.1 1.4 0 2.1l1.1.6a2 2 0 01.7 2.7l-1 1.7a2 2 0 01-2.8.7l-1.1-.6A8.9 8.9 0 0126 32.7V34a2 2 0 01-4 0v-1.3a8.9 8.9 0 01-2.6-1.5l-1.1.6a2 2 0 01-2.8-.7l-1-1.7a2 2 0 01.7-2.7l1.1-.6a9 9 0 010-2.1l-1.1-.6a2 2 0 01-.7-2.7l1-1.7a2 2 0 012.8-.7l1.1.6A8.9 8.9 0 0122 15.3V14a2 2 0 012-2z" stroke="#94a3b8" strokeWidth="2" fill="none"/>
      <circle cx="24" cy="24" r="3.5" stroke="#94a3b8" strokeWidth="2" fill="none"/>
    </svg>
  );
}

export function HashtagIcon({ size = 48, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
      <rect width="48" height="48" rx="12" fill="rgba(236,72,153,0.15)" />
      <path d="M17 14l-4 20M35 14l-4 20M11 19h26M10 29h26" stroke="#ec4899" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  );
}

export function ImageIcon({ size = 48, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
      <rect width="48" height="48" rx="12" fill="rgba(139,92,246,0.15)" />
      <rect x="9" y="13" width="30" height="22" rx="3" stroke="#8b5cf6" strokeWidth="2" fill="none"/>
      <circle cx="17" cy="20" r="3" fill="#8b5cf6" fillOpacity="0.5"/>
      <path d="M9 28l8-7 7 6 5-4 10 8" stroke="#8b5cf6" strokeWidth="2" strokeLinejoin="round" fill="none"/>
    </svg>
  );
}

export function ShieldIcon({ size = 48, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
      <rect width="48" height="48" rx="12" fill="rgba(99,102,241,0.15)" />
      <path d="M24 8l-13 5v11c0 7.5 5.6 14.5 13 17 7.4-2.5 13-9.5 13-17V13L24 8z" stroke="#6366f1" strokeWidth="2" fill="none"/>
      <path d="M18 24l4 4 8-8" stroke="#6366f1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// ── Emoji → SVG icon lookup map ────────────────────────────────────────────
// Used by ServicePageTemplate and IndustryPageTemplate to replace emoji with SVG

type IconComponent = (props: IconProps) => JSX.Element;

export const EMOJI_ICON_MAP: Record<string, IconComponent> = {
  // Top-level service badge icons
  "📲": SocialMediaIcon,
  "🔍": SEOIcon,
  "🎯": GoogleAdsIcon,

  // Website features
  "📱": MobileIcon,
  "💬": WhatsAppIcon,
  "🔒": SecurityIcon,
  "📊": AnalyticsIcon,
  "🎨": DesignIcon,
  "🌍": BilingualIcon,
  "🌐": GlobeNetIcon,

  // Social media features
  "🖼️": ImageIcon,
  "📅": CalendarIcon,
  "🎬": VideoIcon,
  "👥": UsersIcon,
  "📈": GrowthEngineIcon,
  "#️⃣": HashtagIcon,

  // SEO features
  "📍": MapPinIcon,
  "🗺️": MapPinIcon,
  "📝": ContentIcon,
  "🔗": LinkBuildIcon,
  "🏆": TrophyIcon,

  // Google Ads features
  "⚡": SpeedIcon,
  "💰": BudgetIcon,
  "🔎": SearchRankIcon,
  "🔄": RetargetIcon,
  "📞": CallTrackIcon,

  // Growth Engine features
  "🛡️": ShieldIcon,

  // Industry hero icons
  "🏗️": ConstructionIcon,
  "🛍️": RetailIcon,
  "❄️": HVACIcon,
  "🧹": CleaningIcon,
  "💼": ServiceBizIcon,

  // About team + misc
  "🚀": GrowthEngineIcon,
};

/** Renders an SVG icon if the emoji has a mapping, otherwise renders the emoji as text. */
export function EmojiIcon({
  emoji,
  size = 48,
  className = "",
}: {
  emoji: string;
  size?: number;
  className?: string;
}) {
  const Icon = EMOJI_ICON_MAP[emoji];
  if (Icon) return <Icon size={size} className={className} />;
  return <span className="text-3xl">{emoji}</span>;
}
