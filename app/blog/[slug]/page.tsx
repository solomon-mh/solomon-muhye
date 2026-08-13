import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { blogs } from "@/data/blogs";
import { siteConfig, siteUrl } from "@/lib/siteConfig";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogs.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogs.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const url = `${siteUrl}/blog/${post.slug}`;

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      type: "article",
      url,
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
      authors: [siteConfig.name],
      tags: post.tags,
      images: [
        {
          url: `/blog/${post.slug}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [`/blog/${post.slug}/opengraph-image`],
    },
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = blogs.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const url = `${siteUrl}/blog/${post.slug}`;

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${siteUrl}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: url },
    ],
  };

  const blogPostingJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    url,
    keywords: post.tags.join(", "),
    author: { "@id": `${siteUrl}#person` },
    publisher: { "@id": `${siteUrl}#person` },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  };

  return (
    <article className="w-5/6 lg:w-1/2 mx-auto min-h-screen py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingJsonLd) }}
      />

      <nav aria-label="Breadcrumb" className="text-sm">
        <Link
          href="/blog"
          className="font-semibold text-green-600 dark:text-green-400 hover:underline"
        >
          ← Back to blog
        </Link>
      </nav>

      <span className="block text-xs text-gray-500 dark:text-gray-400 mt-6">
        {new Date(post.date).toLocaleDateString(undefined, {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </span>
      <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mt-2">
        {post.title}
      </h1>

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

      <div
        className="prose dark:prose-invert max-w-none mt-8
                   prose-headings:text-green-700 dark:prose-headings:text-green-400
                   prose-a:text-green-600 dark:prose-a:text-green-400
                   prose-pre:bg-gray-900 prose-pre:text-gray-100"
      >
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {post.content}
        </ReactMarkdown>
      </div>

      <Link
        href="/#blog"
        className="mt-12 inline-block text-sm font-semibold text-green-600 dark:text-green-400 hover:underline"
      >
        ← Back to Solomon Muhye&apos;s portfolio
      </Link>
    </article>
  );
}
