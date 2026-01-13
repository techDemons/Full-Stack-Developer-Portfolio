import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaShoppingCart, FaWhatsapp } from "react-icons/fa";
import ProjectBtn from "../utilils/ProjectBtn";
import { TiWeatherCloudy } from "react-icons/ti";

const techStack = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Tailwind",
  "Node.js",
  "Express",
  "MongoDB",
  "Socket.io",
];

const toolsEcommerce = [
  "HTML",
  "CSS",
  "JavaScript",
  "Razor pay",
  "React",
  "Tailwind",
  "Material UI",
  "Node.js",
  "Payment gateway",
  "Express",
  "MongoDB",
];
const weather = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Material UI",
  "Node.js",
  "Express",
  "MongoDB",
];
const Projects = () => {
  return (
    <section className="px-4 sm:px-8 lg:px-16 py-16 max-w-6xl mx-auto">
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-center mb-10"
      >
        <h1 className="text-3xl sm:text-4xl font-extrabold gradient-text">
          Featured Projects
        </h1>

        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 1.2, repeat: Infinity }}
          className="h-1 w-32 sm:w-40 bg-violet-400 rounded-full mx-auto mt-4"
        />
        <p className="text-gray-400 mt-6 text-xl sm:text-base">
          Explore my latest works and development
        </p>
      </motion.div>

      <div className="relative  pl-6 mb-12 space-y-14">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileHover={{ scale: 1.03 }}
          // whileTap={{ scale: 0.8 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.25 }}
          className="relative"
        >
          <div
            className="bg-white/2 border
          border-amber-200 hover:backdrop-blur-md rounded-xl p-6 shadow-2xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <FaWhatsapp className="text-green-600 text-2xl " />
              <h2 className="text-lg sm:text-xl font-semibold text-gray-400 hover:text-white ">
                Real Time Chat Web Application
              </h2>
              <motion.a
                whileHover={{ scale: 1.05, rotate: 30, color: "white" }}
                whileTap={{ scale: 1.2, rotate: -30 }}
                href="https://github.com/techDemons/"
                className="flex ml-5 items-center text-3xl cursor-pointer justify-end text-gray-400 "
              >
                <FaGithub />
              </motion.a>
            </div>
            <ul className="space-y-3 text-gray-400 text-sm sm:text-base">
              <li className="flex gap-3 hover:text-white">
                <span className="mt-2 h-2 w-2 bg-violet-500 rounded-full" />
                Secure authentication with smooth UI/UX.
              </li>
              <li className="flex gap-3 hover:text-white">
                <span className="mt-2 h-2 w-2 bg-violet-500 rounded-full" />
                Real-time messaging using Socket.IO.
              </li>
              <li className="flex gap-3 hover:text-white">
                <span className="mt-2 h-2 w-2 bg-violet-500 rounded-full" />
                Typing indicators, last-seen & group features.
              </li>
            </ul>

            <div className="flex flex-wrap gap-2 mt-6">
              {techStack.map((tech) => (
                <ProjectBtn key={tech} name={tech} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
      <div className="relative  pl-6 mb-12 space-y-14">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileHover={{ scale: 1.03 }}
          // whileTap={{ scale: 0.8 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.25 }}
          className="relative"
        >
          <div
            className="bg-white/2 border
          border-amber-200 hover:backdrop-blur-md rounded-xl p-6 shadow-2xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <FaShoppingCart className="text-yellow-400 text-2xl " />
              <h2 className="text-lg sm:text-xl font-semibold text-gray-400 hover:text-white ">
                E-commerce platform using MERN Stack
              </h2>
              <motion.a
              href="https://github.com/techDemons/"
                whileHover={{ scale: 1.05, rotate: 30, color: "white" }}
                whileTap={{ scale: 1.2, rotate: -30 }}
                className="flex ml-5 items-center text-3xl cursor-pointer justify-end text-gray-400 "
              >
                <FaGithub />
              </motion.a>
            </div>
            <ul className="space-y-3 text-gray-400  text-sm sm:text-base">
              <li className="flex gap-3 hover:text-white">
                <span className="mt-2 h-2 w-2 bg-violet-500 rounded-full" />
                Developed a responsive e-commerce with product listing, dynamic
                routing, and cart management.
              </li>
              <li className="flex gap-3 hover:text-white">
                <span className="mt-2 h-2 w-2 bg-violet-500 rounded-full" />
                Implemented razorpay payment gateway for seamless transaction.
              </li>
              <li className="flex gap-3 hover:text-white">
                <span className="mt-2 h-2 w-2 bg-violet-500 rounded-full" />
                State management is fully scaled by Redux-Toolkit(RTK)
              </li>
            </ul>

            <div className="flex flex-wrap gap-2 mt-6">
              {toolsEcommerce.map((tech) => (
                <ProjectBtn key={tech} name={tech} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
      <div className="relative  pl-6 space-y-14">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileHover={{ scale: 1.03 }}
          // whileTap={{ scale: 0.8 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.25 }}
          className="relative"
        >
          <div
            className="bg-white/2 border
          border-amber-200 hover:backdrop-blur-md rounded-xl p-6 shadow-2xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <TiWeatherCloudy  className="text-yellow-400 text-2xl " />
              <h2 className="text-lg sm:text-xl font-semibold text-gray-400 hover:text-white ">
                Weather live update and broadcasting
              </h2>
              <motion.a
              href="https://github.com/techDemons/"
                whileHover={{ scale: 1.05, rotate: 30, color: "white" }}
                whileTap={{ scale: 1.2, rotate: -30 }}
                className="flex ml-5 items-center text-3xl cursor-pointer justify-end text-gray-400 "
              >
                <FaGithub />
              </motion.a>
            </div>
            <ul className="space-y-3 text-gray-400  text-sm sm:text-base">
              <li className="flex gap-3 hover:text-white">
                <span className="mt-2 h-2 w-2 bg-violet-500 rounded-full" />
                Live API fetched from WeatherAPI, which enable us to see current
                temperature, weather conditin(Rainy, Sunny and Cloudy)
              </li>
              <li className="flex gap-3 hover:text-white">
                <span className="mt-2 h-2 w-2 bg-violet-500 rounded-full" />
                Implemented a feature to search ciy and see the live update.
              </li>
              <li className="flex gap-3 hover:text-white">
                <span className="mt-2 h-2 w-2 bg-violet-500 rounded-full" />I
                built a weather pridiction website using MERN Stack.
              </li>
            </ul>

            <div className="flex flex-wrap gap-2 mt-6">
              {weather.map((tech) => (
                <ProjectBtn key={tech} name={tech} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
