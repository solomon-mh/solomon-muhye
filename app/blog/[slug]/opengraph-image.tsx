import { ImageResponse } from "next/og";
import { blogs } from "@/data/blogs";
import { siteConfig } from "@/lib/siteConfig";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return blogs.map((post) => ({ slug: post.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogs.find((p) => p.slug === slug);
  const title = post?.title ?? siteConfig.title;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          backgroundColor: "#111827",
          backgroundImage:
            "radial-gradient(circle at 80% 20%, rgba(74,222,128,0.18), transparent 50%)",
        }}
      >
        <div
          style={{
            fontSize: 28,
            fontWeight: 600,
            color: "#4ade80",
            display: "flex",
          }}
        >
          {siteConfig.name} — Blog
        </div>
        <div
          style={{
            fontSize: 56,
            fontWeight: 800,
            color: "#f9fafb",
            lineHeight: 1.2,
            display: "flex",
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontSize: 24,
            color: "#9ca3af",
            display: "flex",
          }}
        >
          {siteConfig.role}
        </div>
      </div>
    ),
    { ...size },
  );
}
