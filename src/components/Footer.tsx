import { FaGithub, FaLinkedin, FaTelegramPlane } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="relative px-4 pt-12 pb-6 text-center bg-white dark:bg-black text-gray-600 dark:text-gray-400">
      {/* Top Gradient Border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 via-emerald-500 to-green-400 animate-pulse" />

      {/* Social Links */}
      <div className="flex justify-center gap-6 mb-4">
        <a
          href="https://github.com/solomon-mh"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-500 transition-colors"
          title="GitHub"
        >
          <FaGithub size={22} />
        </a>
        <a
          href="https://linkedin.com/in/solomonmuhye"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-500 transition-colors"
          title="LinkedIn"
        >
          <FaLinkedin size={22} />
        </a>
        <a
          href="https://t.me/Solomonmh"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-500 transition-colors"
          title="Telegram"
        >
          <FaTelegramPlane size={22} />
        </a>
        <a
          href="https://www.upwork.com/freelancers/~01055c6673bf8711c5?mp_source=share"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-500 transition-colors"
          title="Upwork"
        >
          <SiUpwork size={22} />
        </a>
      </div>

      {/* Footer Text */}
      <p className="text-sm">
        &copy; {new Date().getFullYear()}{" "}
        <span className="text-green-600 dark:text-green-400 font-semibold">
          Solomon Muhye &nbsp;
        </span>
        Software Engineer | Web developer | Freelancer
      </p>
    </footer>
  );
};

export default Footer;
