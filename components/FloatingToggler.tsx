"use client";

import { useEffect, useState } from "react";
import { motion, type TargetAndTransition } from "framer-motion";
import { LightBulb } from "./LightBulb";

const HangingToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Sync with the theme already applied by the blocking init script in <head>.
  // Deliberately a post-mount effect (not derived during render): reading it during
  // render would make the client's first pass diverge from the server-rendered HTML
  // (which has no access to the DOM/localStorage) and trigger a hydration mismatch.
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setDarkMode(document.documentElement.classList.contains("dark"));
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  // Smooth swinging motion
  const sway: TargetAndTransition = {
    x: [-4, 4, -6, 6, -4, 4, 0],
    rotate: [-2, 2, -1, 1, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "easeInOut",
    },
  };

  // Rope lags slightly behind bulb for realism
  const ropeSway: TargetAndTransition = {
    ...sway,
    transition: { ...sway.transition, delay: 0.1 },
  };

  return (
    <div className="fixed top-0 right-0 md:right-10 z-50 flex flex-col items-center cursor-pointer select-none">
      {/* Rope */}
      <motion.svg
        width="180"
        height="30"
        viewBox="0 0 10 100"
        animate={ropeSway}
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

      {/* Bulb */}
      <motion.div
        animate={sway}
        whileHover={{ rotate: 4, scale: 1.05 }}
        whileTap={{ scale: 0.92, rotate: 0 }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 12,
        }}
        onClick={() => setDarkMode((prev) => !prev)}
      >
        <motion.div
          animate={{
            filter: darkMode
              ? "drop-shadow(0px 0px 0px rgba(255,255,150,0))"
              : "drop-shadow(0px 0px 10px rgba(255,255,150,0.8))",
            opacity: darkMode ? 0.8 : 1,
          }}
          transition={{ duration: 0.4 }}
        >
          {darkMode ? <LightBulb isOn={false} /> : <LightBulb isOn={true} />}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HangingToggle;
