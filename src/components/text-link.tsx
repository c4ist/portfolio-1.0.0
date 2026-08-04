import Link from "next/link";
import type { ReactNode } from "react";

type TextLinkProps = {
  href: string;
  children: ReactNode;
  /** Rendered before the label, e.g. a GitHub mark. Decorative only. */
  icon?: ReactNode;
  className?: string;
};

/**
 * Inline link for running text. Internal routes navigate client-side; external
 * ones open in a new tab with a safe `rel`. `mailto:` and `#` stay in place.
 */
export function TextLink({ href, children, icon, className = "" }: TextLinkProps) {
  const label = icon ? (
    <span className="inline-flex items-baseline gap-[0.3em]">
      <span aria-hidden className="translate-y-[0.12em] text-[0.95em] text-ink-faint">
        {icon}
      </span>
      <span>{children}</span>
    </span>
  ) : (
    children
  );

  const classes = `link-underline font-medium text-ink hover:text-accent ${className}`;

  if (href.startsWith("/")) {
    return (
      <Link href={href} className={classes}>
        {label}
      </Link>
    );
  }

  const isExternal = href.startsWith("http");

  return (
    <a
      href={href}
      className={classes}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {label}
    </a>
  );
}
