import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { useEffect, useState } from "react";

const phrases = [
  "Let’s build something together.",
  "Ready for freelance or full-time!",
  "Got a project? Let's connect.",
];

const Contact = () => {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  // Typing effect
  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    const timeout = setTimeout(() => {
      if (charIndex < currentPhrase.length) {
        setText((prev) => prev + currentPhrase[charIndex]);
        setCharIndex((prev) => prev + 1);
      } else {
        setTimeout(() => {
          setText("");
          setCharIndex(0);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
        }, 2500);
      }
    }, 100);

    return () => clearTimeout(timeout);
  }, [charIndex, phraseIndex]);

  // Pigeon fly logic (auto & on-click)
  const [fly, setFly] = useState(false);
  const [trigger, setTrigger] = useState(0);

  // Trigger flying every 8s
  useEffect(() => {
    const interval = setInterval(() => {
      setTrigger((prev) => prev + 1);
      setFly(true);
      setTimeout(() => setFly(false), 3000);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="contact"
      className="py-20 px-4 max-w-2xl mx-auto text-center text-gray-900"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-4 text-green-600 dark:text-green-400"
      >
        👋 Let's Connect
      </motion.h2>

      {/* Typing CTA */}
      <p className="text-xl font-mono mb-6 h-6">
        {text}
        <span className="animate-pulse">|</span>
      </p>

      {/* Social Icons */}
      <motion.div
        className="flex justify-center space-x-6 mb-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <a
          href="mailto:you@example.com"
          className="text-green-600 hover:scale-125 transition-transform"
          title="Email"
        >
          <FaEnvelope size={28} />
        </a>
        <a
          href="https://github.com/yourprofile"
          className="text-green-600 hover:scale-125 transition-transform"
          title="GitHub"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={28} />
        </a>
        <a
          href="https://linkedin.com/in/yourprofile"
          className="text-green-600 hover:scale-125 transition-transform"
          title="LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={28} />
        </a>
      </motion.div>

      {/* Pigeon Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => {
          setFly(true);
          setTimeout(() => setFly(false), 3000);
        }}
        className="relative inline-block bg-green-600 text-white px-6 py-3 rounded-full text-lg shadow-lg hover:bg-green-700 transition"
      >
        Send a Pigeon 🕊️
        {/* Flying pigeon emoji */}
        {fly && (
          <motion.div
            key={trigger}
            initial={{ x: 0, y: 0, opacity: 1 }}
            animate={{ x: -350, y: -180, opacity: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute left-1/2 top-0 text-3xl -translate-x-1/2"
            style={{ transform: "scaleX(-1)" }} // Flips the dove to face right
          >
            🕊️
          </motion.div>
        )}
      </motion.button>
    </section>
  );
};

export default Contact;
