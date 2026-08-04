import type { Metadata } from "next";

import { BackLink } from "@/components/back-link";
import { RssIcon } from "@/components/icons";
import { PostRow } from "@/components/post-row";
import { posts } from "@/content/writing";

export const metadata: Metadata = {
  title: "Writing",
  description: "Notes on interface craft, colour, and building software carefully.",
  alternates: {
    canonical: "/writing",
    types: { "application/rss+xml": "/writing/rss.xml" },
  },
};

export default function WritingPage() {
  return (
    <div className="flex flex-col gap-8">
      <BackLink href="/">Home</BackLink>

      <header className="space-y-2">
        <div className="flex items-baseline justify-between gap-4">
          <h1 className="text-heading font-semibold tracking-[-0.015em] text-ink text-balance">
            Writing
          </h1>
          <a
            href="/writing/rss.xml"
            className="link-underline inline-flex shrink-0 items-center gap-1.5 text-caption text-ink-muted transition-colors duration-150 ease-smooth hover:text-ink"
          >
            <RssIcon aria-hidden className="size-3.5 text-ink-faint" />
            Subscribe by RSS
          </a>
        </div>
        <p className="text-body text-ink-muted text-pretty">
          Notes on interface craft, colour, and the parts of building software that are easy to
          skip.
        </p>
      </header>

      {posts.length > 0 ? (
        <ul>
          {posts.map((post) => (
            <PostRow key={post.slug} post={post} />
          ))}
        </ul>
      ) : (
        <div className="rounded-[18px] bg-surface p-6 shadow-card">
          <p className="text-body font-medium text-ink">No notes yet</p>
          <p className="mt-1 text-body-sm text-ink-muted text-pretty">
            Notes go in <code className="font-mono text-[0.9em]">src/content/writing</code> and
            appear here once they are listed in that folder&rsquo;s index.
          </p>
        </div>
      )}
    </div>
  );
}
