// components/About.tsx
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="relative md:pt-24">
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
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-xl md:text-2xl  text-center font-medium text-gray-600 dark:text-gray-300 mb-6"
        >
          <p>
            Full-Stack Developer | MERN, Next.js, NestJS & Laravel | Scalable
            Web & Mobile Apps
          </p>
        </motion.div>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          I specialize in architecting intuitive, high-performance
          applications—from SaaS platforms to real-time dashboards—using modern
          stacks like React, Node.Js, Next.js, Nest.js, and Laravel. With a
          relentless focus on clean code, pixel-perfect UI, and scalable APIs.
        </p>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          My mission is simple: to craft intuitive, user-first experiences that
          solve real-world problems. Whether I’m collaborating in a team or
          coding solo, I bring a sharp eye for detail and a love for elegant
          design patterns that scale.
        </p>

        <p className="text-gray-700 dark:text-gray-300">
          <span className="text-green-600 pr-2 dark:text-green-400 font-medium">
            Beyond Code:
          </span>
          When I'm not architecting systems, I'm exploring quantum computing
          concepts, reviewing open-source contributions, or trail running to
          clear my mind (the best debugging happens outdoors).
        </p>
      </motion.div>
    </section>
  );
};

export default About;
