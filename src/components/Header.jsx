import React, { useEffect, useState } from "react";
import { motion, easeOut } from "framer-motion";
import { navItems } from "../assets/assets/assets.js";
import Button from "../utilils/Button.jsx";
import { FiMoon, FiSun } from "react-icons/fi";
import { initTheme, toggleTheme } from "../utilils/theme.js";

const Header = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const theme = initTheme();
    setIsDark(theme === "dark");
  }, []);

  const handleTheme = () => {
    toggleTheme();
    setIsDark(!isDark);
  };

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="
        sticky top-4 z-15 mx-auto
        w-[95%] max-w-7xl
        rounded-2xl
        border border-white/20 dark:border-white/10
        bg-white dark:bg-black/50
        backdrop-blur-xl
        shadow-lg
      "
    >
      <div className="px-4 py-2 flex items-center justify-between">
        
        <motion.span
          whileHover={{ scale: 1.05 }}
          className="text-xl sm:text-2xl pl-3 font-semibold gradient-text cursor-pointer tracking-wide"
        >
          My Portfolio
        </motion.span>

       
        <div className="flex items-center gap-6">
          {navItems.map((item, idx) => (
            <motion.a
              key={idx}
              whileHover="hover"
              initial="rest"
              animate="rest"
              className="relative text-sm font-medium cursor-pointer text-gray-800 dark:text-gray-200"
            >
              {item.label}

           
              <motion.span
                variants={{
                  rest: { scaleX: 0 },
                  hover: { scaleX: 1 },
                }}
                transition={{ duration: 0.25, ease: easeOut }}
                className="
                  absolute -bottom-1 left-0
                  h-0.5 w-full
                  origin-left
                  bg-linear-to-r from-indigo-500 to-purple-500
                "
              />
            </motion.a>
          ))}

        
          <Button />

         
          <motion.button
            onClick={handleTheme}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9, rotate: 15 }}
            aria-label="Toggle Theme"
            className="
              flex items-center justify-center
              h-10 w-10
              rounded-full
            glass dark:glass
              backdrop-blur-md
              shadow-md
              text-xl
            "
          >
            <motion.span
              key={isDark ? "sun" : "moon"}
              initial={{ rotate: 180, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {isDark ? <FiSun className="text-yellow-300"/> : <FiMoon className="text-white" />}
            </motion.span>
          </motion.button>
        </div>

        
      </div>
    </motion.nav>
  );
};

export default Header;
