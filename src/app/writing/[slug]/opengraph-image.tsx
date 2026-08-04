import { ImageResponse } from "next/og";

import { OgCard, ogSize } from "@/components/og-card";
import { getPost, posts } from "@/content/writing";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export const size = ogSize;
export const contentType = "image/png";
export const alt = "Post share card";

export default async function OpengraphImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);

  return new ImageResponse(<OgCard eyebrow="Writing" title={post?.title ?? "Writing"} />, size);
}
