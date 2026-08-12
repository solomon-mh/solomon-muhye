import { Link, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { blogs } from "../data/blogs";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogs.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="w-5/6 lg:w-1/2 mx-auto py-20 text-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Post not found
        </h1>
        <Link
          to="/"
          className="mt-4 inline-block text-green-600 dark:text-green-400 hover:underline"
        >
          ← Back to portfolio
        </Link>
      </div>
    );
  }

  return (
    <article className="w-5/6 lg:w-1/2 mx-auto min-h-screen py-16">
      <Link
        to="/#blog"
        className="text-sm font-semibold text-green-600 dark:text-green-400 hover:underline"
      >
        ← Back to blog
      </Link>

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
    </article>
  );
};

export default BlogPost;
