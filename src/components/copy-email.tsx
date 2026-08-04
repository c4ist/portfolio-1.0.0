"use client";

import { useEffect, useRef, useState } from "react";

import { buttonClass } from "@/components/button";
import { CheckIcon, CopyIcon } from "@/components/icons";

/**
 * Both icons stay in the DOM and cross-fade, so the swap has an enter and an
 * exit without pulling in an animation library. The status region is rendered
 * empty up front so repeated polite announcements land reliably.
 */
export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => () => clearTimeout(timer.current), []);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      /* Clipboard access can be blocked. The address stays visible and
         selectable either way, so there is nothing to recover from. */
      return;
    }
    setCopied(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 2000);
  }

  const iconClass =
    "absolute size-3.5 transition-[opacity,scale,filter] duration-300 ease-smooth motion-reduce:transition-[opacity] motion-reduce:duration-150";

  return (
    <>
      <button type="button" onClick={handleCopy} className={buttonClass} aria-label={`Copy ${email} to clipboard`}>
        <span aria-hidden className="relative grid size-3.5 place-items-center text-ink-faint">
          <CopyIcon
            className={`${iconClass} ${
              copied ? "scale-25 opacity-0 blur-[4px]" : "scale-100 opacity-100 blur-0"
            }`}
          />
          <CheckIcon
            className={`${iconClass} text-accent ${
              copied ? "scale-100 opacity-100 blur-0" : "scale-25 opacity-0 blur-[4px]"
            }`}
          />
        </span>
        {email}
      </button>
      <span role="status" className="sr-only">
        {copied ? "Email address copied" : ""}
      </span>
    </>
  );
}
