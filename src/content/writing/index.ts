import type { ComponentType } from "react";

/**
 * To add a post: drop an `.mdx` file in this folder and add an entry below.
 * Metadata lives here rather than in frontmatter so it stays type-checked.
 */
export type Post = {
  slug: string;
  title: string;
  /** ISO date, used for sorting and the `<time>` element. */
  date: string;
  summary: string;
  Content: ComponentType;
};

export const posts: Post[] = [
  {
    slug: "keyboard-first",
    title: "Keyboard first, mouse optional",
    date: "2026-06-18",
    summary:
      "Why the fastest interface I have built has nothing to do with rendering performance.",
    Content: KeyboardFirst,
  },
  {
    slug: "moving-to-oklch",
    title: "Moving every colour to OKLCH",
    date: "2026-03-09",
    summary:
      "HSL gives you the wrong three numbers. Here is what changed when I swapped them out.",
    Content: MovingToOklch,
  },
  {
    slug: "quiet-interfaces",
    title: "The case for quiet interfaces",
    date: "2025-11-24",
    summary:
      "Attention is a budget, and every element on the page spends a little of it.",
    Content: QuietInterfaces,
  },
].sort((a, b) => b.date.localeCompare(a.date));

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}

export function formatDate(date: string) {
  return new Date(`${date}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
}
