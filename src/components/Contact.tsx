import { motion, AnimatePresence } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin, FaPaperPlane } from "react-icons/fa";
import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";

const Contact = () => {
  // Enhanced typing effect with react-type-animation
  const phrases = [
    "Let's build something amazing together",
    1500,
    "Available for freelance & full-time",
    1500,
    "Got a project? Let's talk!",
    1500,
  ];

  // Pigeon animation with physics
  const [fly, setFly] = useState(false);
  const [trigger, setTrigger] = useState(0);

  // Auto-fly every 10s
  useEffect(() => {
    const interval = setInterval(() => {
      setTrigger((prev) => prev + 1);
      setFly(true);
      setTimeout(() => setFly(false), 2500);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="contact" className="relative py-28 overflow-hidden">
      {/* Decorative elements */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.15 }}
        className="absolute inset-0 -z-10 pointer-events-none"
      >
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-green-500 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-40 h-40 rounded-full bg-purple-500 blur-3xl"></div>
      </motion.div>

      <div className="text-center">
        {/* Animated title with underline */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative inline-block mb-6"
        >
          <motion.h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-green-500 dark:from-green-400 dark:to-green-300 mb-4">
            Let's Collaborate
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute bottom-0 left-0 h-1 bg-green-500 rounded-full"
          />
        </motion.div>

        {/* Enhanced typing animation */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-xl md:text-2xl font-medium text-gray-600 dark:text-gray-300 mb-10 h-10"
        >
          <TypeAnimation
            sequence={phrases}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-green-600 dark:text-green-400"
          />
        </motion.div>

        {/* Social icons with floating effect */}
        <motion.div
          className="flex justify-center gap-8 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
        >
          {[
            {
              icon: <FaEnvelope />,
              href: "mailto:you@example.com",
              label: "Email",
            },
            {
              icon: <FaGithub />,
              href: "https://github.com/yourprofile",
              label: "GitHub",
            },
            {
              icon: <FaLinkedin />,
              href: "https://linkedin.com/in/yourprofile",
              label: "LinkedIn",
            },
          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              whileHover={{
                y: -5,
                scale: 1.1,
                color: "#10b981",
              }}
              className="text-3xl text-gray-700 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-all"
              aria-label={item.label}
            >
              {item.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* Premium pigeon button */}
        <motion.div
          className="relative inline-block"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px -5px rgba(16, 185, 129, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              setTrigger((prev) => prev + 1);
              setFly(true);
              setTimeout(() => setFly(false), 2500);
            }}
            className="relative z-10 flex items-center gap-2 bg-gradient-to-r from-green-600 to-green-500 text-white px-8 py-4 rounded-full text-lg font-medium shadow-lg hover:shadow-green-500/30 transition-all overflow-hidden group"
          >
            <span>Send Message</span>
            <motion.div
              animate={{
                x: [0, 4, 0],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <FaPaperPlane />
            </motion.div>

            {/* Button shine effect */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -inset-y-full -left-20 w-20 bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:left-full transition-all duration-1000" />
            </div>
          </motion.button>

          {/* Flying pigeon animation */}
          <AnimatePresence>
            {fly && (
              <motion.div
                key={trigger}
                initial={{ x: 0, y: 0, opacity: 1, rotate: 0 }}
                animate={{
                  x: -400,
                  y: -200,
                  opacity: 0,
                  rotate: -15,
                }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 2,
                  ease: [0.4, 0, 0.2, 1],
                }}
                className="absolute left-1/2 top-0 text-4xl -translate-x-1/2 pointer-events-none"
                style={{ transformOrigin: "center" }}
              >
                🕊️
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Subtle floating dots */}
        <motion.div
          className="absolute bottom-10 left-1/4 w-2 h-2 rounded-full bg-green-500"
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-20 right-1/4 w-3 h-3 rounded-full bg-green-400"
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
      </div>
    </section>
  );
};

export default Contact;
