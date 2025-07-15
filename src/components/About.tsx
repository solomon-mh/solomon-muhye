// components/About.tsx
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="relative pt-24">
      {/* About Text */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-left"
      >
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          passionate full-stack developer who thrives at the intersection of
          creativity and clean code. I specialize in building beautiful,
          scalable web applications using technologies like React, NestJS, and
          MongoDB.
        </p>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          My mission is simple: to create intuitive, user-first experiences that
          help people solve real problems. Whether I’m collaborating with a team
          or coding solo, I bring a sharp eye for detail and a love for elegant
          design patterns.
        </p>

        <p className="text-gray-700 dark:text-gray-300">
          🧩{" "}
          <span className="text-green-600 dark:text-green-400 font-medium">
            Fun Fact:
          </span>{" "}
          When I’m not coding, you’ll probably find me sketching futuristic UI
          designs or solving Rubik's cubes with one hand.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
