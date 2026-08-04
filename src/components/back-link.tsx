import Link from "next/link";

import { ArrowLeftIcon } from "@/components/icons";

export function BackLink({ href, children }: { href: string; children: string }) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-1.5 text-caption text-ink-faint transition-colors duration-150 ease-smooth hover:text-ink"
    >
      <ArrowLeftIcon className="size-3.5 transition-transform duration-200 ease-smooth group-hover:-translate-x-0.5 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0" />
      {children}
    </Link>
  );
}
