import type { SVGProps } from "react";

/**
 * One SVG per icon, coloured with `currentColor`. States come from CSS, never
 * from a second asset. Strokes are 1.5px to match regular-weight body text.
 */
type IconProps = SVGProps<SVGSVGElement>;

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

export function GitHubIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 16 16" width="1em" height="1em" fill="currentColor" aria-hidden {...props}>
      <path d="M8 0a8 8 0 0 0-2.53 15.59c.4.07.55-.17.55-.38l-.01-1.49c-2.23.48-2.7-1.07-2.7-1.07-.36-.93-.89-1.18-.89-1.18-.73-.5.05-.49.05-.49.8.06 1.23.83 1.23.83.72 1.23 1.88.87 2.34.67.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.6 7.6 0 0 1 4 0c1.53-1.03 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.28.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.24.54.72.54 1.45l-.01 2.15c0 .21.14.46.55.38A8 8 0 0 0 8 0Z" />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" aria-hidden {...props} {...stroke}>
      <rect x="2.75" y="4.75" width="18.5" height="14.5" rx="2.5" />
      <path d="m3.5 7 7.34 5.24a2 2 0 0 0 2.32 0L20.5 7" />
    </svg>
  );
}

export function HomeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" aria-hidden {...props} {...stroke}>
      <path d="M3.75 10.4 12 4l8.25 6.4V19a1.25 1.25 0 0 1-1.25 1.25H5A1.25 1.25 0 0 1 3.75 19z" />
      <path d="M9.75 20.25v-6h4.5v6" />
    </svg>
  );
}

export function ArrowUpRightIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" aria-hidden {...props} {...stroke}>
      <path d="M7 17 17 7M8.5 7H17v8.5" />
    </svg>
  );
}

export function ArrowLeftIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" aria-hidden {...props} {...stroke}>
      <path d="m11 18-6-6 6-6M19 12H5.5" />
    </svg>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" aria-hidden {...props} {...stroke}>
      <path d="m13 6 6 6-6 6M5 12h13.5" />
    </svg>
  );
}

export function CopyIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" aria-hidden {...props} {...stroke}>
      <rect x="9" y="9" width="11.5" height="11.5" rx="2.5" />
      <path d="M15 6.25A2.75 2.75 0 0 0 12.25 3.5h-6A2.75 2.75 0 0 0 3.5 6.25v6A2.75 2.75 0 0 0 6.25 15" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" aria-hidden {...props} {...stroke}>
      <path d="m4.5 12.5 5 5 10-11" />
    </svg>
  );
}

/**
 * Project marks. Abstract rather than literal so they read as a set.
 */
export const glyphs = {
  layers: (props: IconProps) => (
    <svg viewBox="0 0 48 48" aria-hidden {...props} {...stroke}>
      <path d="M24 6 42 16.5 24 27 6 16.5 24 6Z" />
      <path d="M6 24.5 24 35 42 24.5" />
      <path d="M6 32.5 24 43 42 32.5" />
    </svg>
  ),
  orbit: (props: IconProps) => (
    <svg viewBox="0 0 48 48" aria-hidden {...props} {...stroke}>
      <circle cx="24" cy="24" r="7" />
      <ellipse cx="24" cy="24" rx="18" ry="8" transform="rotate(-28 24 24)" />
      <ellipse cx="24" cy="24" rx="18" ry="8" transform="rotate(28 24 24)" />
    </svg>
  ),
  grid: (props: IconProps) => (
    <svg viewBox="0 0 48 48" aria-hidden {...props} {...stroke}>
      <rect x="6" y="6" width="36" height="36" rx="8" />
      <rect x="15" y="15" width="18" height="18" rx="4" />
      <path d="M24 6v9M24 33v9M6 24h9M33 24h9" />
    </svg>
  ),
  pulse: (props: IconProps) => (
    <svg viewBox="0 0 48 48" aria-hidden {...props} {...stroke}>
      <path d="M4 27h9l4-13 6 22 5-14 4 5h12" />
    </svg>
  ),
  terminal: (props: IconProps) => (
    <svg viewBox="0 0 48 48" aria-hidden {...props} {...stroke}>
      <rect x="5" y="9" width="38" height="30" rx="6" />
      <path d="m15 20 5 4-5 4M25 28h9" />
    </svg>
  ),
} as const;

export type GlyphName = keyof typeof glyphs;
