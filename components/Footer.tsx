const Footer = () => {
  return (
    <footer className="relative px-4 pt-12 pb-6 text-center bg-white dark:bg-black text-gray-600 dark:text-gray-400">
      {/* Top Gradient Border */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-green-400 via-emerald-500 to-green-400" />

      {/* Footer Text */}
      <p className="text-sm">
        &copy; {new Date().getFullYear()}{" "}
        <span className="text-green-600 dark:text-green-400 font-semibold">
          Solomon Muhye &nbsp;
        </span>
        Software Engineer | AI/ML Engineer
      </p>
    </footer>
  );
};

export default Footer;
