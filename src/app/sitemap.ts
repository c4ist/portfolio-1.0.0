import type { MetadataRoute } from "next";

import { projects } from "@/content/projects";
import { posts } from "@/content/writing";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "/",
    "/writing",
    ...projects.map((project) => `/work/${project.slug}`),
    ...posts.map((post) => `/writing/${post.slug}`),
  ];

  return routes.map((route) => ({
    url: new URL(route, site.url).toString(),
    lastModified: new Date(),
  }));
}
