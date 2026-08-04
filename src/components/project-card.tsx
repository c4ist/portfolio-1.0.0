import Link from "next/link";

import { glyphs } from "@/components/icons";
import type { Project } from "@/content/projects";

/**
 * Radii are concentric: 12px inner + 6px padding = 18px outer.
 */
export function ProjectCard({ project }: { project: Project }) {
  const Glyph = glyphs[project.glyph];

  return (
    <Link
      href={`/work/${project.slug}`}
      className="group block rounded-[18px] bg-surface p-1.5 shadow-card transition-[background-color,box-shadow,translate] duration-200 ease-smooth hover:-translate-y-0.5 hover:bg-surface-raised hover:shadow-card-hover focus-visible:outline-offset-4 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
    >
      <div className="grid h-30 place-items-center rounded-xl bg-inset">
        <Glyph className="size-10 text-ink-faint transition-[color,scale] duration-200 ease-smooth group-hover:scale-[1.04] group-hover:text-accent motion-reduce:transition-none motion-reduce:group-hover:scale-100" />
      </div>
      <div className="px-2.5 pt-3 pb-2">
        <h3 className="text-body font-medium text-ink">{project.name}</h3>
        <p className="mt-0.5 text-body-sm text-ink-muted text-pretty">{project.tagline}</p>
      </div>
    </Link>
  );
}
