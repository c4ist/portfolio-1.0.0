import { ImageResponse } from "next/og";

import { OgCard, ogSize } from "@/components/og-card";
import { getProject, projects } from "@/content/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export const size = ogSize;
export const contentType = "image/png";
export const alt = "Project share card";

export default async function OpengraphImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);

  return new ImageResponse(<OgCard eyebrow="Project" title={project?.name ?? "Project"} />, size);
}
