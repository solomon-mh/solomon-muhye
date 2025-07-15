import { motion } from "framer-motion";
const Experience = () => {
  return (
    <section
      id="experience"
      className="py-16 px-4 bg-gray-100 dark:bg-gray-800"
    >
      <h2 className="text-3xl font-bold text-center mb-10">Experience</h2>
      <div className="space-y-8 max-w-3xl mx-auto">
        <motion.div
          className="border-l-4 border-blue-600 pl-4"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="font-bold">Frontend Developer at XYZ</h3>
          <span className="text-sm">2023 - Present</span>
          <p>
            Worked on creating modern UIs using React and TailwindCSS. Led a
            redesign project that improved engagement by 30%.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
