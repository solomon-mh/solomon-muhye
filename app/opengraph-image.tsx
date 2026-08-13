import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/siteConfig";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${siteConfig.name} — ${siteConfig.role}`;

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#111827",
          backgroundImage:
            "radial-gradient(circle at 25% 25%, rgba(74,222,128,0.18), transparent 50%), radial-gradient(circle at 75% 75%, rgba(22,163,74,0.18), transparent 50%)",
        }}
      >
        <div
          style={{
            fontSize: 84,
            fontWeight: 800,
            color: "#4ade80",
            display: "flex",
          }}
        >
          {siteConfig.name}
        </div>
        <div
          style={{
            fontSize: 36,
            color: "#e5e7eb",
            marginTop: 20,
            display: "flex",
          }}
        >
          {siteConfig.role}
        </div>
        <div
          style={{
            fontSize: 24,
            color: "#9ca3af",
            marginTop: 28,
            display: "flex",
          }}
        >
          {siteConfig.specialties.slice(0, 4).join("  •  ")}
        </div>
      </div>
    ),
    { ...size },
  );
}
