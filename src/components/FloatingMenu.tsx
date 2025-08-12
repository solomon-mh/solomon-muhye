import { useEffect, useState } from "react";
import {
  HiOutlineHome, // Home (cleaner home icon)
  HiOutlineUserCircle, // About (person outline)
  HiOutlineCog, // Skills (gear/technical)
  HiOutlineCode, // Projects (code brackets)
  HiOutlineChatAlt, // Contact (speech bubble)
} from "react-icons/hi";
import { FiPlus } from "react-icons/fi";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

const FloatingMenu = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { icon: <HiOutlineHome />, label: "Home", href: "#hero" },
    { icon: <HiOutlineUserCircle />, label: "About", href: "#about" },
    { icon: <HiOutlineCog />, label: "Skills", href: "#skills" },
    { icon: <HiOutlineCode />, label: "Projects", href: "#projects" },
    { icon: <HiOutlineChatAlt />, label: "Contact", href: "#contact" },
  ];

  return (
    <AnimatePresence>
      {scrolled && (
        <motion.div
          className="fixed hidden lg:flex bottom-8 left-1/2 transform -translate-x-1/2 z-50"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className={`flex items-center px-6 py-3 rounded-full shadow-2xl backdrop-blur-lg ${
              isOpen
                ? "bg-white/90 dark:bg-gray-900/90"
                : "bg-white/70 dark:bg-black/50"
            } border border-green-400/30 dark:border-green-400/20 space-x-2 relative overflow-hidden`}
            layout
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.button
              className="flex items-center justify-center w-10 h-10 px-4 rounded-full bg-gradient-to-br from-green-400 to-green-600 text-white shadow-md"
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.1 }}
              layout
            >
              <motion.span
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <FiPlus size={20} />
              </motion.span>
            </motion.button>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  className="flex space-x-4"
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "auto" }}
                  exit={{ opacity: 0, width: 0 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  {menuItems.map((item) => (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      className={`flex flex-col items-center text-md ${
                        activeItem === item.label
                          ? "text-green-600 dark:text-green-400"
                          : "text-gray-600 dark:text-gray-300"
                      } hover:text-green-700 dark:hover:text-green-300 transition-all duration-300 relative`}
                      whileHover={{ y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      onHoverStart={() => setActiveItem(item.label)}
                      onHoverEnd={() => setActiveItem(null)}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="relative">
                        {item.icon}
                        {activeItem === item.label && (
                          <motion.span
                            className="absolute -bottom-1 left-1/2 w-1 h-1 bg-green-500 rounded-full"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                            layoutId="activeIndicator"
                          />
                        )}
                      </div>
                      <motion.span
                        className="text-xs mt-1 font-medium"
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 5 }}
                        transition={{ delay: 0.1 }}
                      >
                        {item.label}
                      </motion.span>
                    </motion.a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Glow effect */}
          <motion.div
            className="absolute inset-0 rounded-full bg-green-400/10 blur-md -z-10"
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingMenu;
