import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { blogs } from "../data/blogs";

const Blog = () => {
  return (
    <section id="blog" className="py-12 px-8 scroll-mt-16">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-12 text-green-600 dark:text-green-400"
      >
        Blog
      </motion.h2>

      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
        {blogs.map((post) => (
          <motion.div
            key={post.slug}
            whileHover={{ y: -3 }}
            className="p-5 rounded-xl bg-white/50 dark:bg-gray-800/50 border border-green-500/10 dark:border-green-400/10 shadow-sm backdrop-blur-sm flex flex-col"
          >
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {new Date(post.date).toLocaleDateString(undefined, {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mt-1">
              {post.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 flex-1">
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
              to={`/blog/${post.slug}`}
              className="mt-4 text-sm font-semibold text-green-600 dark:text-green-400 hover:underline self-start"
            >
              Read more →
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
