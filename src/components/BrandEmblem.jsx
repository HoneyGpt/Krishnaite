import React from 'react';

/**
 * BrandEmblem
 * A distinctive geometric vector emblem inspired by Indian architectural symmetry
 * (stepped-well / mandapa proportions) fused with clean modern technology coordinates.
 */
const BrandEmblem = ({ size = 28, variant = 'default', className = '' }) => {
  // Color configuration
  let strokePrimary = 'var(--charcoal, #20221F)';
  let strokeAccent = 'var(--heritage-bronze, #B77B43)';
  let fillCenter = 'var(--charcoal, #20221F)';

  if (variant === 'light') {
    strokePrimary = 'var(--warm-ivory, #F2EEE4)';
    strokeAccent = 'var(--heritage-bronze, #B77B43)';
    fillCenter = 'var(--warm-ivory, #F2EEE4)';
  } else if (variant === 'bronze') {
    strokePrimary = 'var(--heritage-bronze, #B77B43)';
    strokeAccent = 'var(--charcoal, #20221F)';
    fillCenter = 'var(--heritage-bronze, #B77B43)';
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`brand-emblem ${className}`}
      style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }}
      aria-hidden="true"
    >
      {/* Outer subtle circular boundary */}
      <circle
        cx="32"
        cy="32"
        r="30"
        stroke={strokePrimary}
        strokeWidth="1.2"
        strokeDasharray="2 2"
        opacity="0.4"
      />

      {/* Primary Square (0 deg) */}
      <rect
        x="13"
        y="13"
        width="38"
        height="38"
        stroke={strokePrimary}
        strokeWidth="1.6"
        fill="none"
      />

      {/* Interlocking Diamond / Square rotated 45 deg (Ashta-mandapa geometry) */}
      <rect
        x="13"
        y="13"
        width="38"
        height="38"
        transform="rotate(45 32 32)"
        stroke={strokeAccent}
        strokeWidth="1.4"
        fill="none"
      />

      {/* Inner Stepped-well Architectural Inset */}
      <rect
        x="21"
        y="21"
        width="22"
        height="22"
        stroke={strokePrimary}
        strokeWidth="1"
        fill="none"
        opacity="0.8"
      />

      {/* Cardinal Axis Crosshairs (Modern Digital Alignment) */}
      <line x1="32" y1="4" x2="32" y2="12" stroke={strokeAccent} strokeWidth="1.5" />
      <line x1="32" y1="52" x2="32" y2="60" stroke={strokeAccent} strokeWidth="1.5" />
      <line x1="4" y1="32" x2="12" y2="32" stroke={strokeAccent} strokeWidth="1.5" />
      <line x1="52" y1="32" x2="60" y2="32" stroke={strokeAccent} strokeWidth="1.5" />

      {/* Center Nexus (Creative & Tech Convergence) */}
      <circle cx="32" cy="32" r="3.5" fill={fillCenter} />
      <circle cx="32" cy="32" r="7" stroke={strokeAccent} strokeWidth="0.8" />
    </svg>
  );
};

export default BrandEmblem;
