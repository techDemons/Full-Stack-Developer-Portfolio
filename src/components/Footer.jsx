import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="w-full m-10 mb-40 "
    >
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        
       
        <p className="text-xl text-gray-400 font-mono text-center sm:text-left">
          © {new Date().getFullYear()} Nikhil Pandey. All rights reserved.
        </p>

        
        <div className="flex items-center gap-4 relative right-40 ">
          {[
            { icon: <FaGithub className="size-10"/>, link: "https://github.com/techDemons/" },
            { icon: <FaLinkedin  className="size-10"/>, link: "https://www.linkedin.com/in/nikhil-pandey2003/" },
          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ rotate:30 }}
              whileTap={{ rotate:-30 }}
              className="text-gray-400 hover:text-violet-400 transition-colors text-lg"
            >
              {item.icon}
            </motion.a>
          ))}
        </div>

      </div>
    </motion.footer>
  );
};

export default Footer;
