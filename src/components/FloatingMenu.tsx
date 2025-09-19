import { useEffect, useState } from "react";
import {
  HiOutlineHome,
  HiOutlineUserCircle,
  HiOutlineCog,
  HiOutlineCode,
  HiOutlineChatAlt,
} from "react-icons/hi";
import { FiPlus } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";

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
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <motion.div
            className={`flex items-center rounded-full shadow-2xl backdrop-blur-lg ${
              isOpen
                ? "bg-white/90 dark:bg-gray-900/90 px-6 py-3 gap-6"
                : "bg-white/70 dark:bg-black/50 px-3 py-3"
            } border border-green-400/30 dark:border-green-400/20`}
            layout
            transition={{
              type: "spring",
              damping: 25,
              stiffness: 200,
            }}
          >
            <motion.button
              className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-green-600 text-white shadow-md"
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
                  className="flex gap-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.03 }}
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
                    >
                      <div className="relative">{item.icon}</div>
                      <span className="text-xs mt-1 font-medium">
                        {item.label}
                      </span>
                    </motion.a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingMenu;
