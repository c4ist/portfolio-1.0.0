import type { ReactNode } from "react";

export function Section({
  title,
  action,
  children,
}: {
  title: string;
  /** Optional trailing control, e.g. a link to the full index. */
  action?: ReactNode;
  children: ReactNode;
}) {
  const headingId = title.toLowerCase().replace(/\s+/g, "-");

  return (
    <section aria-labelledby={headingId}>
      <div className="mb-3 flex items-baseline justify-between gap-4">
        <h2 id={headingId} className="text-body font-semibold text-ink">
          {title}
        </h2>
        {action}
      </div>
      {children}
    </section>
  );
}
