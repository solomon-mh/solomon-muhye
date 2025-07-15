import { motion } from "framer-motion";

const SkillsAndTools = () => {
  return (
    <section id="skills" className="py-16 px-4 bg-gray-100 dark:bg-gray-800">
      <h2 className="text-3xl font-bold text-center mb-10">Skills & Tools</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {[
          "React",
          "Next.js",
          "TailwindCSS",
          "Framer Motion",
          "Node.js",
          "NestJS",
          "MongoDB",
          "Firebase",
        ].map((skill, i) => (
          <motion.div
            key={skill}
            className="bg-white dark:bg-gray-700 rounded-lg p-4 text-center shadow-md hover:shadow-lg"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillsAndTools;
