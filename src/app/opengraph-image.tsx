import { ImageResponse } from "next/og";

import { OgCard, ogSize } from "@/components/og-card";
import { site } from "@/lib/site";

export const size = ogSize;
export const contentType = "image/png";
export const alt = `${site.name} — ${site.role} at ${site.company.name}`;

export default function OpengraphImage() {
  return new ImageResponse(<OgCard title={site.name} />, size);
}
