import { motion } from "framer-motion";

const experiences = [
  {
    role: "Frontend Developer",
    company: "XYZ Tech",
    period: "2023 – Present",
    details:
      "Built modern UIs with React, TailwindCSS, and Framer Motion. Spearheaded a redesign project that boosted engagement by 30%.",
  },
  {
    role: "Freelance Full-Stack Developer",
    company: "Upwork",
    period: "2022 – Present",
    details:
      "Delivered over 10 successful freelance projects, earning $1,000+ with 5-star client satisfaction. Focused on MERN & NestJS stack.",
  },
  {
    role: "Web Intern",
    company: "CodeCraft Ethiopia",
    period: "2021 – 2022",
    details:
      "Assisted in developing internal tools and UI components. Learned Git workflows, REST APIs, and agile collaboration.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-12 text-green-600 dark:text-green-400"
      >
        Experience
      </motion.h2>

      <div className="relative max-w-4xl mx-auto border-l-2 border-green-500 dark:border-green-400 pl-6">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="mb-10 group"
          >
            {/* Timeline dot */}
            <div className="w-4 h-4 bg-green-500 dark:bg-green-400 rounded-full absolute -left-2.5 top-1.5 group-hover:scale-125 transition-transform" />

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {exp.role}
            </h3>
            <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">
              {exp.company} • {exp.period}
            </span>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              {exp.details}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
