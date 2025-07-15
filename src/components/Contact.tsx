import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-16 px-4 max-w-xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-6">Let's Connect</h2>
      <p className="mb-6">
        Open to freelance work and full-time roles. Let's build something
        together!
      </p>
      <div className="flex justify-center space-x-6">
        <a href="mailto:you@example.com" className="hover:text-blue-600">
          <FaEnvelope size={24} />
        </a>
        <a
          href="https://github.com/yourprofile"
          className="hover:text-blue-600"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://linkedin.com/in/yourprofile"
          className="hover:text-blue-600"
        >
          <FaLinkedin size={24} />
        </a>
      </div>
    </section>
  );
};

export default Contact;
