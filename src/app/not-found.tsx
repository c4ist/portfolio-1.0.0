import Link from "next/link";

import { buttonClass } from "@/components/button";

export default function NotFound() {
  return (
    <div className="flex flex-col gap-6">
      <div className="space-y-2">
        <h1 className="text-heading font-semibold tracking-[-0.015em] text-ink text-balance">
          This page doesn&rsquo;t exist
        </h1>
        <p className="text-body text-ink-muted text-pretty">
          The link may be out of date, or the page may have moved.
        </p>
      </div>
      <Link href="/" className={`${buttonClass} w-fit`}>
        Go to the home page
      </Link>
    </div>
  );
}
