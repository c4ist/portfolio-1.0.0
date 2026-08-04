import { posts } from "@/content/writing";
import { site } from "@/lib/site";

export const dynamic = "force-static";

const feedDescription = "Notes on interface craft, colour, and building software carefully.";

function escapeXml(text: string) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function absolute(path: string) {
  return new URL(path, site.url).toString();
}

export function GET() {
  const items = posts
    .map((post) => {
      const url = absolute(`/writing/${post.slug}`);

      return `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${new Date(`${post.date}T00:00:00Z`).toUTCString()}</pubDate>
      <description>${escapeXml(post.summary)}</description>
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(site.name)} — Writing</title>
    <link>${absolute("/writing")}</link>
    <description>${escapeXml(feedDescription)}</description>
    <language>en</language>
    <atom:link href="${absolute("/writing/rss.xml")}" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: { "content-type": "application/rss+xml; charset=utf-8" },
  });
}
