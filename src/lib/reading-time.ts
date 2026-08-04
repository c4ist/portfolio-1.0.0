import { readFileSync } from "node:fs";
import path from "node:path";

/**
 * Reads the source `.mdx` at build time. Every page that calls this is
 * prerendered, so this never runs on a request. Server-only: do not import it
 * from a client component.
 */
const WORDS_PER_MINUTE = 220;

export function readingMinutes(slug: string) {
  const file = path.join(process.cwd(), "src", "content", "writing", `${slug}.mdx`);
  const words = readFileSync(file, "utf8").trim().split(/\s+/).length;

  return Math.max(1, Math.round(words / WORDS_PER_MINUTE));
}
