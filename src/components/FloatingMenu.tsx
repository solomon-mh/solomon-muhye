import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHome,
  FaUser,
  FaProjectDiagram,
  FaPhone,
  FaTools,
} from "react-icons/fa";

const FloatingMenu = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { icon: <FaHome />, label: "Home", href: "#hero" },
    { icon: <FaUser />, label: "About", href: "#about" },
    { icon: <FaTools />, label: "Skills", href: "#skills" },
    { icon: <FaProjectDiagram />, label: "Projects", href: "#projects" },
    { icon: <FaPhone />, label: "Contact", href: "#contact" },
  ];

  return (
    <AnimatePresence>
      {scrolled && (
        <motion.div
          className="fixed bottom-24 left-1/2 transform -translate-x-3/5 md:-translate-x-1/2 z-50 flex px-4  md:px-8 py-4 rounded-full shadow-xl backdrop-blur-md bg-white/70 dark:bg-black/40 border border-green-500 dark:border-green-400 space-x-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {menuItems.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              whileHover={{ scale: 1.15 }}
              className="flex flex-col items-center text-sm text-green-700 dark:text-green-300 hover:text-green-900 dark:hover:text-green-100 transition-all duration-300"
            >
              <div className="text-xl">{item.icon}</div>
              <span className="text-xs mt-1 font-medium">{item.label}</span>
            </motion.a>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingMenu;
