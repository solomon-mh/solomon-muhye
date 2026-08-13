"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLink, FaLinkedin, FaTelegramPlane } from "react-icons/fa";

const Hero = () => {
  return (
    <header
      id="hero"
      className="relative pt-24 pb-12 md:bp-0 md:py-0 md:min-h-screen flex flex-col items-center justify-center text-center overflow-hidden"
    >
      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl my-6 mb-2 font-extrabold text-gray-900 dark:text-white"
      >
        <span className="text-green-600 dark:text-green-500">
          Solomon Muhye
        </span>
      </motion.h1>
      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="md:text-lg text-gray-600 dark:text-gray-300 mt-3"
      >
        Senior Fullstack Developer
      </motion.p>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
        className="mt-6 text-gray-700 dark:text-gray-400 text-base px-4 flex flex-col sm:flex-row items-center justify-center gap-1 text-center"
      >
        <span className="text-gray-700 dark:text-gray-400 font-normal">
          I build websites and mobile apps for international clients, making
          them beautiful, efficient, and scalable.
        </span>
      </motion.p>

      {/* CTA Buttons */}
      <div className="flex flex-wrap gap-4 mt-10">
        <a
          href="#contact"
          className="bg-white dark:bg-gray-900 border border-green-600 text-green-700 dark:text-green-400 hover:bg-green-100 dark:hover:bg-gray-800 px-6 py-3 rounded-full shadow-lg transition text-sm md:text-base"
        >
          Contact Me
        </a>
        <motion.a
          href="https://flowcv.com/resume/4s26k4fimci0"
          target="_blank"
          className="flex items-center gap-2 bg-transparent border-2 border-green-600 text-green-700 dark:text-green-400 hover:bg-green-50 dark:hover:bg-gray-800 px-6 py-3 rounded-full shadow-lg transition text-sm md:text-base"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.2 },
          }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.span
            animate={{
              y: [0, -3, 0],
              transition: { repeat: Infinity, duration: 2 },
            }}
          >
            <FaLink size={16} />
          </motion.span>
          Resume
        </motion.a>
      </div>

      {/* Social Icons */}
      <div className="flex gap-8 px-4 mt-10 text-green-600 dark:text-green-400">
        <a
          href="https://github.com/solomon-mh"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-125 transition-transform"
          title="GitHub"
          aria-label="Solomon Muhye on GitHub"
        >
          <FaGithub size={30} aria-hidden="true" />
        </a>
        <a
          href="https://linkedin.com/in/solomonmuhye"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-125 transition-transform"
          title="LinkedIn"
          aria-label="Solomon Muhye on LinkedIn"
        >
          <FaLinkedin size={30} aria-hidden="true" />
        </a>
        <a
          href="https://t.me/SolomonMuhye"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-125 transition-transform"
          title="Telegram"
          aria-label="Message Solomon Muhye on Telegram"
        >
          <FaTelegramPlane size={30} aria-hidden="true" />
        </a>
      </div>
    </header>
  );
};

export default Hero;
