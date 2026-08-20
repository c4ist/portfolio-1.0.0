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
    slug: "nex",
    name: "Nex",
    tagline: "A small language with a small runtime.",
    glyph: "terminal",
    year: "2026",
    role: "Solo project",
    stack: ["Rust", "LLVM"],
    links: { live: "https://nex.cain.codes", repo: "https://github.com/c4ist/nex" },
    overview: [
      "Nex is a small language with a small runtime: C/Go/Rust-flavoured syntax, static types with local inference, structs, enums and pattern matching, and no build boilerplate.",
      "Programs are interpreted during development and compiled to native code through LLVM (and to WebAssembly) for release. It's still unfinished — the lexer is the only working stage today.",
    ],
    highlights: [
      "Sixteen-phase roadmap from lexer to a tagged v0.1.0 release.",
      "Working lexer: the driver dumps a token stream for any .nex file.",
      "Documentation site with the full language spec, built with mdBook.",
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
