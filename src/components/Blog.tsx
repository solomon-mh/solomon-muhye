import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { blogs } from "../data/blogs";

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 40 : -40,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -40 : 40,
    opacity: 0,
  }),
};

const Blog = () => {
  const [[index, direction], setIndex] = useState([0, 0]);

  const post = blogs[index];

  const goTo = (newIndex: number, dir: number) => {
    const wrapped = (newIndex + blogs.length) % blogs.length;
    setIndex([wrapped, dir]);
  };

  const handlePrev = () => goTo(index - 1, -1);
  const handleNext = () => goTo(index + 1, 1);

  return (
    <section id="blog" className="py-12 px-8 scroll-mt-16">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-green-600 dark:text-green-400"
          >
            Blog
          </motion.h2>

          {blogs.length > 1 && (
            <div className="flex items-center gap-2">
              <motion.button
                type="button"
                onClick={handlePrev}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.92 }}
                aria-label="Previous post"
                className="w-9 h-9 flex items-center justify-center rounded-full border border-green-500/20 dark:border-green-400/20 text-green-600 dark:text-green-400 hover:bg-green-500/10 transition-colors"
              >
                <FaChevronLeft className="text-sm" />
              </motion.button>
              <motion.button
                type="button"
                onClick={handleNext}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.92 }}
                aria-label="Next post"
                className="w-9 h-9 flex items-center justify-center rounded-full border border-green-500/20 dark:border-green-400/20 text-green-600 dark:text-green-400 hover:bg-green-500/10 transition-colors"
              >
                <FaChevronRight className="text-sm" />
              </motion.button>
            </div>
          )}
        </div>

        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={post.slug}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="min-h-[220px] p-5 rounded-xl bg-white/50 dark:bg-gray-800/50 border border-green-500/10 dark:border-green-400/10 shadow-sm backdrop-blur-sm flex flex-col"
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
          </AnimatePresence>
        </div>

        {blogs.length > 1 && (
          <div className="flex justify-center gap-2 mt-4">
            {blogs.map((b, i) => (
              <button
                key={b.slug}
                type="button"
                onClick={() => goTo(i, i > index ? 1 : -1)}
                aria-label={`Go to post ${i + 1}`}
                className={`h-2 rounded-full transition-all ${
                  i === index
                    ? "w-6 bg-green-600 dark:bg-green-400"
                    : "w-2 bg-gray-300 dark:bg-gray-600"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;
