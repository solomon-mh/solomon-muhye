import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section id="projects" className="py-16 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
      <div className="grid gap-8 md:grid-cols-2">
        {["Project One", "Project Two"].map((project, i) => (
          <motion.div
            key={project}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.5 }}
          >
            <h3 className="text-xl font-bold mb-2">{project}</h3>
            <p className="text-sm mb-4">
              A brief description about what this project is and what tech was
              used.
            </p>
            <a href="#" className="text-blue-500 hover:underline">
              View Project
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
