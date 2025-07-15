import { motion } from "framer-motion";
const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-6xl font-bold mb-4"
      >
        Hi, I'm Solomon
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-xl md:text-2xl mb-6"
      >
        Full Stack Developer | MERN & Laravel + Vue
      </motion.p>
      <motion.a
        href="#projects"
        whileHover={{ scale: 1.1 }}
        className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-700"
      >
        View Work
      </motion.a>
    </section>
  );
};

export default Hero;
