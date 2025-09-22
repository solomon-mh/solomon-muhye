import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skillData, type SkillCategory } from "./SkillsList";

const tabs: SkillCategory[] = Object.keys(skillData) as SkillCategory[];

const SkillsAndTools = () => {
  const [activeTab, setActiveTab] = useState<SkillCategory>("Frontend");

  return (
    <section id="skills" className="relative scroll-mt-12">
      {/* Animated background elements */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.1 }}
        className="absolute inset-0 -z-10 pointer-events-none"
      >
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-green-500 blur-3xl opacity-20"></div>
        <div className="absolute bottom-1/3 right-1/3 w-40 h-40 rounded-full bg-purple-500 blur-3xl opacity-20"></div>
      </motion.div>

      <div className="mx-auto text-center">
        {/* Animated title */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12 text-green-600 dark:text-green-400"
        >
          Skills and Tools
        </motion.h2>

        {/* Animated tabs */}
        <motion.div
          className="flex justify-center flex-wrap gap-3 mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
        >
          {tabs.map((tab) => (
            <motion.button
              key={tab}
              onClick={() => setActiveTab(tab)}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2.5 rounded-full text-sm font-medium border-2 transition-all relative overflow-hidden ${
                activeTab === tab
                  ? "bg-gradient-to-r from-green-600 to-green-500 text-white border-transparent shadow-lg shadow-green-500/20"
                  : "text-gray-600 dark:text-gray-400 border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {tab}
              {activeTab === tab && (
                <motion.span
                  layoutId="activeTab"
                  className="absolute inset-0 bg-green-600 rounded-full -z-10"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Animated grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className="flex flex-wrap justify-center gap-x-4 gap-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {skillData[activeTab].map(({ icon, label }) => (
              <motion.div
                key={label}
                whileHover={{
                  y: -8,
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex flex-col items-center justify-center w-[100px] h-[100px] p-4 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gradient-to-br from-white to-green-50 dark:from-gray-800 dark:to-green-900/20 border border-gray-100 dark:border-gray-700 transition-all cursor-pointer relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-green-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <div className="text-2xl mb-2 text-green-600 dark:text-green-400 transition-colors">
                  {icon}
                </div>
                <span className="text-xs font-medium text-gray-700 dark:text-gray-300 text-center">
                  {label}
                </span>
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-green-500 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                  initial={{ scaleX: 0 }}
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default SkillsAndTools;
