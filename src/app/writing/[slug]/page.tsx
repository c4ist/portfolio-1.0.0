import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { BackLink } from "@/components/back-link";
import { ArrowLeftIcon, ArrowRightIcon } from "@/components/icons";
import { formatDate, getPost, posts, type Post } from "@/content/writing";
import { readingMinutes } from "@/lib/reading-time";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/writing/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) return {};

  return {
    title: post.title,
    description: post.summary,
    alternates: { canonical: `/writing/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.summary,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function PostPage({ params }: PageProps<"/writing/[slug]">) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) notFound();

  const { Content } = post;
  const index = posts.findIndex((item) => item.slug === post.slug);
  /* The list is sorted newest first, so the previous entry is the newer post. */
  const newer = posts[index - 1];
  const older = posts[index + 1];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.summary,
    datePublished: post.date,
    author: { "@type": "Person", name: site.name, url: site.url },
    url: new URL(`/writing/${post.slug}`, site.url).toString(),
  };

  return (
    <article className="flex flex-col gap-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <BackLink href="/writing">Writing</BackLink>

      <header className="space-y-2">
        <h1 className="text-heading font-semibold tracking-[-0.015em] text-ink text-balance">
          {post.title}
        </h1>
        <p className="text-caption tabular-nums text-ink-faint">
          <time dateTime={post.date}>{formatDate(post.date)}</time> ·{" "}
          {readingMinutes(post.slug)} min read
        </p>
      </header>

      <div className="prose">
        <Content />
      </div>

      {(newer || older) && (
        <nav
          aria-label="More posts"
          className="mt-2 grid gap-2.5 border-t border-line pt-6 sm:grid-cols-2"
        >
          {newer ? <PostNavLink post={newer} direction="newer" /> : <span className="hidden sm:block" />}
          {older && <PostNavLink post={older} direction="older" />}
        </nav>
      )}
    </article>
  );
}

function PostNavLink({ post, direction }: { post: Post; direction: "newer" | "older" }) {
  const isNewer = direction === "newer";
  const Icon = isNewer ? ArrowLeftIcon : ArrowRightIcon;

  return (
    <Link
      href={`/writing/${post.slug}`}
      className={`group flex flex-col gap-1 rounded-xl bg-surface p-4 shadow-card transition-[background-color,box-shadow,translate] duration-200 ease-smooth hover:-translate-y-0.5 hover:bg-surface-raised hover:shadow-card-hover motion-reduce:transition-none motion-reduce:hover:translate-y-0 ${
        isNewer ? "items-start" : "items-start sm:items-end sm:text-right"
      }`}
    >
      <span className="inline-flex items-center gap-1.5 text-caption text-ink-faint">
        {isNewer && (
          <Icon className="size-3 transition-transform duration-200 ease-smooth group-hover:-translate-x-0.5 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0" />
        )}
        {isNewer ? "Newer" : "Older"}
        {!isNewer && (
          <Icon className="size-3 transition-transform duration-200 ease-smooth group-hover:translate-x-0.5 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0" />
        )}
      </span>
      <span className="text-body font-medium text-ink text-pretty">{post.title}</span>
    </Link>
  );
}
