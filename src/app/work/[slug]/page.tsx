import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { BackLink } from "@/components/back-link";
import { buttonClass } from "@/components/button";
import { ArrowUpRightIcon, GitHubIcon, glyphs } from "@/components/icons";
import { getProject, projects } from "@/content/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) return {};

  return {
    title: project.name,
    description: project.tagline,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: { title: project.name, description: project.tagline, type: "article" },
  };
}

export default async function ProjectPage({ params }: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  const Glyph = glyphs[project.glyph];
  const index = projects.findIndex((item) => item.slug === project.slug);
  const next = projects[(index + 1) % projects.length];

  return (
    <article className="flex flex-col gap-8">
      <BackLink href="/">Home</BackLink>

      <header className="flex items-start gap-4">
        <div className="grid size-14 shrink-0 place-items-center rounded-xl bg-surface shadow-card">
          <Glyph className="size-7 text-ink-muted" />
        </div>
        <div className="space-y-1">
          <h1 className="text-heading font-semibold tracking-[-0.015em] text-ink text-balance">
            {project.name}
          </h1>
          <p className="text-body text-ink-muted text-pretty">{project.tagline}</p>
        </div>
      </header>

      <dl className="grid grid-cols-2 gap-x-6 gap-y-4 border-y border-line py-5 sm:grid-cols-3">
        <div>
          <dt className="text-caption text-ink-faint">Year</dt>
          <dd className="mt-0.5 text-body-sm tabular-nums text-ink">{project.year}</dd>
        </div>
        <div>
          <dt className="text-caption text-ink-faint">Role</dt>
          <dd className="mt-0.5 text-body-sm text-ink">{project.role}</dd>
        </div>
        <div className="col-span-2 sm:col-span-1">
          <dt className="text-caption text-ink-faint">Built with</dt>
          <dd className="mt-0.5 text-body-sm text-ink">{project.stack.join(", ")}</dd>
        </div>
      </dl>

      {project.links && (
        <div className="flex flex-wrap gap-3">
          {project.links.live && (
            <ProjectLinkButton href={project.links.live} icon={<ArrowUpRightIcon className="size-3.5" />}>
              Visit site
            </ProjectLinkButton>
          )}
          {project.links.repo && (
            <ProjectLinkButton href={project.links.repo} icon={<GitHubIcon className="size-3.5" />}>
              View source
            </ProjectLinkButton>
          )}
        </div>
      )}

      <div className="prose">
        {project.overview.map((paragraph) => (
          <p key={paragraph.slice(0, 32)}>{paragraph}</p>
        ))}
      </div>

      <section aria-labelledby="highlights" className="space-y-3">
        <h2 id="highlights" className="text-body font-semibold text-ink">
          Highlights
        </h2>
        <ul className="space-y-2">
          {project.highlights.map((highlight) => (
            <li key={highlight} className="flex gap-3 text-body-sm text-ink-muted text-pretty">
              <span aria-hidden className="mt-[0.6em] size-1 shrink-0 rounded-full bg-accent-dim" />
              {highlight}
            </li>
          ))}
        </ul>
      </section>

      <Link
        href={`/work/${next.slug}`}
        className="group mt-2 flex items-center justify-between gap-4 rounded-[18px] bg-surface p-5 shadow-card transition-[background-color,box-shadow,translate] duration-200 ease-smooth hover:-translate-y-0.5 hover:bg-surface-raised hover:shadow-card-hover motion-reduce:transition-none motion-reduce:hover:translate-y-0"
      >
        <span>
          <span className="block text-caption text-ink-faint">Next project</span>
          <span className="mt-0.5 block text-body font-medium text-ink">{next.name}</span>
        </span>
        <ArrowUpRightIcon className="size-4 shrink-0 text-ink-faint transition-[color,translate] duration-200 ease-smooth group-hover:-translate-y-0.5 group-hover:text-ink motion-reduce:transition-none motion-reduce:group-hover:translate-y-0" />
      </Link>
    </article>
  );
}

function ProjectLinkButton({
  href,
  icon,
  children,
}: {
  href: string;
  icon: React.ReactNode;
  children: string;
}) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={buttonClass}>
      <span aria-hidden className="text-ink-faint">
        {icon}
      </span>
      {children}
    </a>
  );
}
