import React from 'react';

/**
 * Styled text wordmark with a hand-rendered rainbow arc.
 * No <img> — SVG + serif type only. Two sizes: sm (navbar) and lg (footer / hero).
 */
export default function Logo({ tone = 'dark', size = 'sm', className = '' }) {
  const text = tone === 'dark' ? 'text-navy-800' : 'text-ivory-50';
  const arcStart = '#D97706';
  const arcEnd = '#F4B857';

  const wordSize =
    size === 'lg'
      ? 'text-[28px] sm:text-[32px] leading-none'
      : 'text-[18px] sm:text-[20px] leading-none';
  const tracking = 'tracking-tight';

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`} aria-label="The Rainbow Towers">
      {/* Rainbow arc — gradient SVG */}
      <svg
        viewBox="0 0 40 30"
        width={size === 'lg' ? 44 : 34}
        height={size === 'lg' ? 33 : 26}
        className="shrink-0"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="rt-rainbow" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor={arcStart} />
            <stop offset="100%" stopColor={arcEnd} />
          </linearGradient>
        </defs>
        <path
          d="M4 26 Q20 2 36 26"
          fill="none"
          stroke="url(#rt-rainbow)"
          strokeWidth="2.6"
          strokeLinecap="round"
        />
        <path
          d="M9 26 Q20 8 31 26"
          fill="none"
          stroke={tone === 'dark' ? '#0E1B33' : '#F5F0E4'}
          strokeOpacity="0.6"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        {/* Small tower line */}
        <line
          x1="20"
          y1="4"
          x2="20"
          y2="26"
          stroke={tone === 'dark' ? '#0E1B33' : '#F5F0E4'}
          strokeOpacity="0.35"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </svg>

      <span className={`font-display ${wordSize} ${tracking} ${text} flex flex-col`}>
        <span className="leading-none">The Rainbow</span>
        <span className="leading-none italic text-sun-500 text-[0.86em] mt-0.5">
          Towers
        </span>
      </span>
    </span>
  );
}
