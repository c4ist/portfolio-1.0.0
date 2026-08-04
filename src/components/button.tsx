/**
 * Shared control surface for buttons and button-styled links, so the three
 * places that need one cannot drift apart.
 */
export const buttonClass =
  "inline-flex items-center gap-2 rounded-lg bg-surface px-3 py-2 text-body-sm font-medium text-ink shadow-card transition-[background-color,scale] duration-150 ease-smooth hover:bg-surface-raised active:scale-[0.96] motion-reduce:transition-none motion-reduce:active:scale-100";
