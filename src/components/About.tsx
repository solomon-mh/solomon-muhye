// components/About.tsx
import { motion } from "framer-motion";
import { SiUpwork } from "react-icons/si";

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
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12 text-green-600 dark:text-green-400"
        >
          About Me
        </motion.h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          <span className="inline-block bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded-full">
            <SiUpwork size={20} />
          </span>
          work top-rated full-stack developer who thrives at the intersection of
          creativity and clean code. I specialize in building beautiful,
          scalable web applications using technologies like React,NodeJS,
          NestJS, Laravel and React Native for mobile app development.
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
          When I’m not coding, you’ll probably find me reading tech news,
          reading books and wondering about life.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
