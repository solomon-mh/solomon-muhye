import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaChevronDown,
  FaGithub,
  FaLinkedin,
  FaStar,
  FaTelegramPlane,
} from "react-icons/fa";
import { SiUpwork } from "react-icons/si";

const texts = [
  "Full Stack Developer",
  "Freelancer",
  "MERN stack & (Laravel + Vue)",
];

const TYPING_SPEED = 100;
const DELETE_SPEED = 50;
const DELAY = 2000;

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = texts[index % texts.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (isDeleting) {
      timeout = setTimeout(() => {
        setDisplayText(current.substring(0, displayText.length - 1));
      }, DELETE_SPEED);
      if (displayText === "") {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % texts.length);
      }
    } else {
      timeout = setTimeout(() => {
        setDisplayText(current.substring(0, displayText.length + 1));
      }, TYPING_SPEED);
      if (displayText === current) {
        setTimeout(() => setIsDeleting(true), DELAY);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, index]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center lg:px-12"
    >
      {/* Animated Floating Background */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full bg-green-400 opacity-20 blur-3xl -z-10"
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight"
      >
        Hi, I'm{" "}
        <span className="text-green-600 dark:text-green-500">Solomon</span>
      </motion.h1>

      {/* Typing Text */}
      <motion.p
        key={displayText}
        className="text-xl md:text-2xl font-mono text-gray-600 dark:text-gray-300 mt-2 h-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        {displayText}
        <span className="text-green-500 dark:text-green-300 animate-pulse">
          |
        </span>
      </motion.p>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
        className="mt-6 text-gray-700 dark:text-gray-400 text-base md:text-lg leading-relaxed"
      >
        <span className="text-green-500 italic font-semibold inline-flex items-center gap-1">
          <FaStar className="text-yellow-400" /> Top Rated
        </span>{" "}
        with <span className="text-green-500 font-semibold">100%</span> client
        satisfaction upwork freelancer. I transform ideas into clean, scalable
        full-stack apps using React, NextJs, NodeJS, NestJS, and Laravel.
        Passionate about performance and design, and always eager to collaborate
        on meaningful projects.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        className="flex flex-wrap gap-4 mt-8"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.3, duration: 0.6 }}
      >
        <a
          href="#contact"
          className="bg-white dark:bg-gray-900 border border-green-600 text-green-700 dark:text-green-400 hover:bg-green-100 dark:hover:bg-gray-800 px-6 py-3 rounded-full shadow-md text-lg transition"
        >
          Contact Me
        </a>
        <a
          href="https://www.upwork.com/freelancers/~01055c6673bf8711c5?mp_source=share"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full shadow-md text-lg transition"
        >
          <SiUpwork size={20} /> Hire Me
        </a>
      </motion.div>

      {/* Social Icons */}
      <motion.div
        className="flex gap-6 px-4 mt-8 text-green-600 dark:text-green-400"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 0.6 }}
      >
        <a
          href="https://github.com/solomon-mh"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-125 transition-transform"
          title="GitHub"
        >
          <FaGithub size={28} />
        </a>
        <a
          href="https://linkedin.com/in/solomonmuhye"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-125 transition-transform"
          title="LinkedIn"
        >
          <FaLinkedin size={28} />
        </a>
        <a
          href="https://t.me/Solomonmh"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-125 transition-transform"
          title="Telegram"
        >
          <FaTelegramPlane size={28} />
        </a>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 10 }}
        transition={{
          delay: 2,
          duration: 1.2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute bottom-12 left-1/2 lg:hidden text-green-600 dark:text-green-400"
      >
        <FaChevronDown size={28} />
      </motion.div>
    </section>
  );
};

export default Hero;
