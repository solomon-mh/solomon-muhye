import type { Metadata } from "next";
import Link from "next/link";
import { blogs } from "@/data/blogs";
import { siteConfig, siteUrl } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Articles by Solomon Muhye, Senior Fullstack Developer, on software architecture, system design, and building with AI.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    type: "website",
    url: `${siteUrl}/blog`,
    title: `Blog | ${siteConfig.name}`,
    description:
      "Articles by Solomon Muhye, Senior Fullstack Developer, on software architecture, system design, and building with AI.",
  },
};

export default function BlogIndex() {
  const sortedPosts = [...blogs].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${siteUrl}/blog` },
    ],
  };

  const blogJsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${siteUrl}/blog#blog`,
    name: `${siteConfig.name} — Blog`,
    url: `${siteUrl}/blog`,
    author: { "@id": `${siteUrl}#person` },
    blogPost: sortedPosts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      url: `${siteUrl}/blog/${post.slug}`,
      datePublished: post.date,
    })),
  };

  return (
    <main className="w-5/6 lg:w-1/2 mx-auto min-h-screen py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />

      <nav aria-label="Breadcrumb" className="text-sm">
        <Link
          href="/"
          className="font-semibold text-green-600 dark:text-green-400 hover:underline"
        >
          ← Back to home
        </Link>
      </nav>

      <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mt-6">
        Blog
      </h1>
      <p className="mt-3 text-gray-600 dark:text-gray-300">
        Notes on fullstack development, software architecture, and AI from
        Solomon Muhye.
      </p>

      <div className="mt-10 space-y-8">
        {sortedPosts.map((post) => (
          <article
            key={post.slug}
            className="p-5 rounded-xl bg-white/50 dark:bg-gray-800/50 border border-green-500/10 dark:border-green-400/10 shadow-sm backdrop-blur-sm"
          >
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {new Date(post.date).toLocaleDateString(undefined, {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mt-1">
              <Link
                href={`/blog/${post.slug}`}
                className="hover:text-green-600 dark:hover:text-green-400"
              >
                {post.title}
              </Link>
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
              {post.excerpt}
            </p>

            <div className="mt-3 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium bg-gray-100 text-green-700
                             dark:bg-gray-800 dark:text-white px-2 py-0.5 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>

            <Link
              href={`/blog/${post.slug}`}
              className="mt-4 inline-block text-sm font-semibold text-green-600 dark:text-green-400 hover:underline"
            >
              Read &ldquo;{post.title}&rdquo; →
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
