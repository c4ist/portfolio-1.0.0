import Image from "next/image";
import type { CSSProperties } from "react";

import { buttonClass } from "@/components/button";
import { CopyEmail } from "@/components/copy-email";
import { ExperienceList } from "@/components/experience-list";
import { GitHubIcon, MailIcon } from "@/components/icons";
import { ProjectCard } from "@/components/project-card";
import { Section } from "@/components/section";
import { TextLink } from "@/components/text-link";
import { projects } from "@/content/projects";
import { site } from "@/lib/site";

/** Staggers the one-time entrance defined in `globals.css`. */
const step = (index: number) => ({ "--index": index }) as CSSProperties;

/* Helps search engines resolve the page to a person rather than a company. */
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.role,
  description: site.description,
  url: site.url,
  email: site.links.email.handle,
  worksFor: { "@type": "Organization", name: site.company.name, url: site.company.url },
  sameAs: [site.links.github.url],
};

const AVATAR_FALLBACK = `${site.links.github.url}.png`;

async function getAvatarUrl(): Promise<string> {
  try {
    const res = await fetch(`https://api.github.com/users/${site.links.github.handle}`, {
      next: { revalidate: 86400 },
    });
    if (!res.ok) return AVATAR_FALLBACK;
    const data = await res.json();
    return (data.avatar_url as string | undefined) ?? AVATAR_FALLBACK;
  } catch {
    return AVATAR_FALLBACK;
  }
}

export default async function HomePage() {
  const avatarUrl = await getAvatarUrl();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      {/* Groups are separated by 40px and their contents by 20px, so the
          grouping reads without needing a single divider line. */}
      <div className="stagger flex flex-col gap-10">
        <div style={step(0)} className="space-y-5">
          <header className="flex items-center gap-3.5">
            <Image
              src={avatarUrl}
              alt={`Profile picture of ${site.name}`}
              width={44}
              height={44}
              priority
              className="size-11 rounded-full object-cover outline outline-black/10 -outline-offset-1"
            />
            <div>
              <h1 className="text-title font-semibold tracking-[-0.01em] text-ink">{site.name}</h1>
              <p className="text-body-sm text-ink-muted">
                {site.role} at {site.company.name}
              </p>
            </div>
          </header>

          <div className="space-y-3 text-body text-ink-muted text-pretty">
            <p>
              I&rsquo;m a software engineer at{" "}
              <TextLink href={site.company.url}>{site.company.name}</TextLink>, where I build the
              services and tooling our products run on. I care{" "}
              <em className="font-serif text-[1.06em] italic">deeply</em> about craft &mdash; the
              parts of a product you only notice on the second look.
            </p>
            <p>
              Before that I worked on internal tools and a handful of side projects, mostly around
              developer experience and making slow things fast. You can see my code on{" "}
              <TextLink href={site.links.github.url} icon={<GitHubIcon />}>
                GitHub
              </TextLink>
              , or reach me by{" "}
              <TextLink href={site.links.email.url} icon={<MailIcon />}>
                email
              </TextLink>
              .
            </p>
          </div>
        </div>

        <div style={step(1)}>
          <Section title="Projects">
            <ul className="grid gap-3.5 sm:grid-cols-2">
              {projects.map((project) => (
                <li key={project.slug}>
                  <ProjectCard project={project} />
                </li>
              ))}
            </ul>
          </Section>
        </div>

        <div style={step(2)}>
          <Section title="Experience">
            <ExperienceList />
          </Section>
        </div>

        <div style={step(3)}>
          <Section title="Contact">
            <p className="mb-4 text-body text-ink-muted text-pretty">
              Email is the best way to reach me. I read everything and reply to most of it.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href={site.links.email.url} className={buttonClass}>
                <span aria-hidden className="text-ink-faint">
                  <MailIcon className="size-3.5" />
                </span>
                Send an email
              </a>
              <CopyEmail email={site.links.email.handle} />
            </div>
          </Section>
        </div>
      </div>
    </>
  );
}
