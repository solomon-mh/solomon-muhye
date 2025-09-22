// components/About.tsx
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="relative scroll-mt-16">
      {/* About Text */}
      <div className="text-left">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12 text-green-600 dark:text-green-400"
        >
          About Me
        </motion.h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          I&apos;m the kind of developer who wants to understand how things
          works, not just make it work. I&apos;m always digging into the details
          to figure out why things are the way they are, and how I can make them
          better.
        </p>

        <p className="text-gray-700 mt-4 dark:text-gray-300 leading-relaxed mb-4">
          When it comes to projects, I&apos;m all about execution. I once
          knocked out an MVP front-end in 7 days for a client, staying focused
          and getting it done—fast and clean.
          <span className="block">
            If I&apos;m on something, I&apos;m all in, and I make sure it gets
            <span className="text-green-500 mx-1">done right.</span>{" "}
          </span>
        </p>
      </div>
    </section>
  );
};

export default About;
