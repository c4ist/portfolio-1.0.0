import type { GlyphName } from "@/components/icons";

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  glyph: GlyphName;
  year: string;
  role: string;
  stack: string[];
  links?: { live?: string; repo?: string };
  overview: string[];
  highlights: string[];
};

export const projects: Project[] = [
  {
    slug: "swift",
    name: "Swift",
    tagline: "Privacy-first mail and image hosting. ",
    glyph: "terminal",
    year: "2026",
    role: "Founder",
    stack: ["Rust", "Next.js", "Postgres", "Redis"],
    links: { live: "https://swift.cain.codes", repo: "https://github.com/c4ist/swift" },
    overview: [
      "We're a privacy-first email and image hosting service. No tracking, no ads, no data collection.",
      "Using industry-standard encryption and only store necessary information (i.e. password hashes).",
    ],
    highlights: [
      "We've received 2 subpoenas in the last 2 months. We threw them out.",
      "Infrastructure is clean, untouched, and opensource.",
      "Fully customizable, host it yourself or don't.",
    ],
  },
  {
    slug: "otterlog",
    name: "Otterlog",
    tagline: "A structured log viewer that stays readable.",
    glyph: "pulse",
    year: "2026",
    role: "Solo project",
    stack: ["Rust", "React", "SQLite"],
    links: { repo: "https://github.com/c4ist/otterlog" },
    overview: [
      "Most log tools show you everything and let you sort it out. Otterlog does the opposite: it collapses repeated events, keeps timestamps aligned in tabular figures, and only expands what you ask for.",
      "It ships as a single binary that indexes JSONL locally, so there is nothing to host and nothing to pay for.",
    ],
    highlights: [
      "Indexes a gigabyte of JSONL in about three seconds.",
      "Virtualised list holds 60fps while tailing live output.",
      "Zero configuration: point it at a file and it infers the schema.",
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
