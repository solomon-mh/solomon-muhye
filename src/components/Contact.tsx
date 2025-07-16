import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";

const Contact = () => {
  // Enhanced typing effect with react-type-animation

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState("idle"); // 'idle', 'submitting', 'success', 'error'
  interface ContactFormData {
    name: string;
    email: string;
    message: string;
  }
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev: ContactFormData) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setFormStatus("submitting");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.target as HTMLFormElement,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setFormStatus("success");
          setFormData({ name: "", email: "", message: "" });
        },
        () => {
          setFormStatus("idle");
          toast.error("Something went wrong. Please try again later.");
        }
      )
      .finally(() => {
        setTimeout(() => {
          setFormStatus("idle");
        }, 2300);
      });
  };

  return (
    <section id="contact" className="relative py-28 overflow-hidden">
      {/* Decorative elements */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.15 }}
        className="absolute inset-0 -z-10 pointer-events-none"
      >
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-green-500 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-40 h-40 rounded-full bg-purple-500 blur-3xl"></div>
      </motion.div>

      <div className="text-center">
        {/* Animated title with underline */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative inline-block mb-6"
        >
          <motion.h2 className="text-4xl font-bold text-center mb-6 text-green-600 dark:text-green-400">
            Let's Collaborate
          </motion.h2>
        </motion.div>

        {/* Enhanced typing animation */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-xl md:text-2xl font-medium text-gray-600 dark:text-gray-300 mb-6"
        >
          <p>Available for freelance & full-time.</p>
        </motion.div>

        {/* Social icons with floating effect */}
        <motion.div
          className="flex lg:hidden justify-center gap-8 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
        >
          {[
            {
              icon: <FaEnvelope />,
              href: "mailto:solomon.muhye.wd@gmail.com",
              label: "Email",
            },
            {
              icon: <FaGithub />,
              href: "https://github.com/solomon-mh",
              label: "GitHub",
            },
            {
              icon: <FaLinkedin />,
              href: "https://linkedin.com/in/solomonmuhye",
              label: "LinkedIn",
            },
          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              whileHover={{
                y: -5,
                scale: 1.1,
                color: "#10b981",
              }}
              className="text-3xl text-gray-700 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-all"
              aria-label={item.label}
            >
              {item.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* Animated Form */}
        <AnimatePresence>
          {
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="mt-6 max-w-md mx-auto overflow-hidden"
            >
              <motion.form
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.2 }}
                onSubmit={handleSubmit}
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700"
              >
                {formStatus === "success" ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <motion.div
                      animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, -5, 0],
                      }}
                      transition={{ duration: 0.6 }}
                      className="text-5xl mb-4 text-green-500"
                    >
                      ✉️
                    </motion.div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      I'll get back to you soon. Thanks for reaching out!
                    </p>
                  </motion.div>
                ) : (
                  <>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="mb-6"
                    >
                      <label
                        htmlFor="name"
                        className="block text-left text-gray-700 dark:text-gray-300 mb-2 font-medium"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-800 dark:text-white transition-all"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="mb-6"
                    >
                      <label
                        htmlFor="email"
                        className="block text-left text-gray-700 dark:text-gray-300 mb-2 font-medium"
                      >
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-800 dark:text-white transition-all"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      className="mb-8"
                    >
                      <label
                        htmlFor="message"
                        className="block text-left text-gray-700 dark:text-gray-300 mb-2 font-medium"
                      >
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-800 dark:text-white transition-all"
                      ></textarea>
                    </motion.div>

                    <motion.button
                      type="submit"
                      disabled={formStatus === "submitting"}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full py-3 px-6 rounded-full font-medium text-white transition-all ${
                        formStatus === "submitting"
                          ? "bg-green-400 cursor-not-allowed"
                          : "bg-gradient-to-r from-green-600 to-green-500 hover:shadow-lg hover:shadow-green-500/30"
                      }`}
                    >
                      {formStatus === "submitting" ? (
                        <motion.span
                          animate={{ opacity: [0.6, 1, 0.6] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          Sending...
                        </motion.span>
                      ) : (
                        <span>Send Message</span>
                      )}
                    </motion.button>
                  </>
                )}
              </motion.form>
            </motion.div>
          }
        </AnimatePresence>
        {/* Subtle floating dots */}
        <motion.div
          className="absolute bottom-10 left-1/4 w-2 h-2 rounded-full bg-green-500"
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            duration: 8,
            repeat: 4,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-20 right-1/4 w-3 h-3 rounded-full bg-green-400"
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
      </div>
    </section>
  );
};

export default Contact;
