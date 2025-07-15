import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-16 px-4 max-w-4xl mx-auto">
      <motion.h2
        className="text-3xl font-bold mb-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h2>
      <motion.p
        className="text-lg leading-relaxed"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        I'm a passionate developer who enjoys crafting interactive web
        experiences. I specialize in building scalable full-stack applications
        using modern frameworks. In my free time, I love exploring UI design
        trends and playing chess.
      </motion.p>
    </section>
  );
};

export default About;
