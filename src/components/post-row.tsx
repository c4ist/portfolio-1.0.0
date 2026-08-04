import Link from "next/link";

import { formatDate, type Post } from "@/content/writing";
import { readingMinutes } from "@/lib/reading-time";

export function PostRow({ post }: { post: Post }) {
  return (
    <li>
      <Link
        href={`/writing/${post.slug}`}
        className="-mx-3 block rounded-lg px-3 py-2.5 transition-colors duration-150 ease-smooth hover:bg-surface"
      >
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="text-body font-medium text-ink">{post.title}</h3>
          <span className="shrink-0 text-caption tabular-nums text-ink-faint">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            {/* Secondary detail; it drops out before it can squeeze the title. */}
            <span className="hidden sm:inline"> · {readingMinutes(post.slug)} min</span>
          </span>
        </div>
        <p className="mt-0.5 text-body-sm text-ink-muted text-pretty">{post.summary}</p>
      </Link>
    </li>
  );
}
