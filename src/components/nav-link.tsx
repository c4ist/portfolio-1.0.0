"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

/**
 * Marks the active route for assistive technology with `aria-current` and
 * visually with both colour and weight, so the state is never colour alone.
 */
export function NavLink({
  href,
  className,
  children,
}: {
  href: string;
  className: string;
  children: ReactNode;
}) {
  const pathname = usePathname();
  const isCurrent = href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <Link
      href={href}
      aria-current={isCurrent ? "page" : undefined}
      className={`${className} ${isCurrent ? "font-medium text-ink" : ""}`}
    >
      {children}
    </Link>
  );
}
