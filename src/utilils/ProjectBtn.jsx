import { motion } from "framer-motion";

const ProjectBtn = ({ name }) => {
  return (
    <motion.span
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.95 }}
      className="
        px-3 py-1
        rounded-full
        text-xs sm:text-sm
        bg-white/5 border border-white/20
        text-gray-200 font-mono
        backdrop-blur-md
        hover:border-violet-400 hover:text-white
        transition-all duration-200
        whitespace-nowrap
      "
    >
      {name}
    </motion.span>
  );
};

export default ProjectBtn;
