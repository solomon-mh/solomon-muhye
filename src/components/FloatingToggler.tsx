import { useEffect, useState } from "react";
import { motion, type TargetAndTransition } from "framer-motion";
import { LightBulb } from "./LightBulb";

const HangingToggle = () => {
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  // Sway animation shared by both rope and toggle
  const sway = {
    x: [-5, 5, -8, 8, -6, 6, 0],
    rotate: [-3, 3, -2, 2, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <div className="fixed top-0 right-10 z-50 flex flex-col items-center cursor-pointer">
      {/* Wiggly Rope using SVG */}
      <motion.svg
        width="180"
        height="40"
        viewBox="0 0 10 100"
        animate={sway as TargetAndTransition}
        className="overflow-visible"
      >
        <motion.path
          d="M5 0 Q 10 10, 5 20 Q 0 30, 5 40 Q 10 50, 5 60 Q 0 70, 5 80 Q 10 90, 5 100"
          stroke="gray"
          strokeWidth="2"
          fill="transparent"
          className="dark:stroke-gray-300"
        />
      </motion.svg>

      {/* Floating toggle icon */}
      <motion.div
        animate={sway as TargetAndTransition}
        whileHover={{ rotate: 5 }}
        onClick={() => setDarkMode((prev) => !prev)}
      >
        {darkMode ? <LightBulb isOn={false} /> : <LightBulb isOn={true} />}
      </motion.div>
    </div>
  );
};

export default HangingToggle;
