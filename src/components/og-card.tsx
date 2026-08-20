import { site } from "@/lib/site";

/**
 * Shared share-card layout. The image renderer does not support OKLCH, so
 * these are the sRGB equivalents of the canvas, ink and accent tokens.
 */
export const ogSize = { width: 1200, height: 630 };

const color = {
  canvas: "#fcf9f7",
  glow: "#ffffff",
  ink: "#211c17",
  inkMuted: "#5e5650",
  accent: "#a0601b",
};

export function OgCard({ eyebrow, title }: { eyebrow?: string; title: string }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: `radial-gradient(circle at 22% 18%, ${color.glow} 0%, ${color.canvas} 60%)`,
        padding: 80,
      }}
    >
      <div style={{ display: "flex", width: 64, height: 6, background: color.accent }} />

      <div style={{ display: "flex", flexDirection: "column" }}>
        {eyebrow ? (
          <div
            style={{
              display: "flex",
              fontSize: 30,
              letterSpacing: 2,
              textTransform: "uppercase",
              color: color.accent,
            }}
          >
            {eyebrow}
          </div>
        ) : null}
        <div
          style={{
            display: "flex",
            marginTop: eyebrow ? 20 : 0,
            fontSize: title.length > 34 ? 64 : 84,
            fontWeight: 600,
            letterSpacing: -2,
            lineHeight: 1.1,
            color: color.ink,
          }}
        >
          {title}
        </div>
      </div>

      <div style={{ display: "flex", fontSize: 30, color: color.inkMuted }}>
        {site.name} · {site.role} at {site.company.name}
      </div>
    </div>
  );
}
