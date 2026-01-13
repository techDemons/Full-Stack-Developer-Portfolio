import React from "react";
import { motion } from "framer-motion";
import {
  FaArrowLeft,
  FaArrowRight,
  FaDownload,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import ProfilePicture from "../assets/assets/images/ProfilePicture.jpg"

const Hero = () => {
  return (
    <div>
      <section
        id="home"
        className="relative left-10 z-10 min-h-screen flex items-center justify-center px-4 sm:px-8"
      >
        <div className="max-w-4xl py-6  flex flex-col items-center text-center sm:items-start sm:text-left gap-6">
         
          <motion.img
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-19 h-45 sm:w-45 rounded-full border border-white/20 shadow-[-1px_-1px_12px_rgba(255,255,255,1),2px_2px_15px_rgba(0,0,0,0.25)] transition-all hover:shadow-[1px_6px_5px_rgba(255,255,255,0.6),1px_1px_5px_rgba(0,0,0,0.3),inset_-2px_-2px_5px_rgba(255,255,255,1),inset_2px_2px_4px_rgba(0,0,0,0.3)]"
            src={ProfilePicture}
            alt="Nikhil Pandey"
          />

        
          <div className="flex items-center gap-2 px-4 py-1.5 border border-gray-600 rounded-full">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-green-600 opacity-75 animate-ping"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400"></span>
            </span>
            <p className="font-mono text-xs sm:text-sm">Available for work</p>
          </div>

       
          <p className="text-sm sm:text-base opacity-60 font-serif">
            Currently resides in <span className="font-medium">Delhi-NCR</span>
          </p>

          
          <h1 className="font-mono font-extrabold leading-tight  sm:text-4xl md:text-5xl">
            Hi, I’m{" "}
            <motion.span
              className="text-violet-500 inline-block"
              animate={{
                y: [0, -6, 0],
                textShadow: [
                  "0px 0px 0px rgba(139,92,246,0)",
                  "0px 0px 12px rgba(139,92,246,0.8)",
                  "0px 0px 0px rgba(139,92,246,0)",
                ],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              Nikhil Pandey
            </motion.span>
            <br />
            <span className="text-lg sm:text-xl md:text-5xl font-semibold">
              Full Stack Developer
            </span>
          </h1>

          <p className="opacity-65 font-sans mt-3 mb-2">
            I build fast, accessible, and responsive web applications using
            React.js, Tailwind CSS/MaterialUI, and other framework. With strong
            full-stack skills in JavaScript and NodeJs, I am passionate about
            creating smooth user interfaces, maintaining excellent UI/UX, and
            writing clean, maintainable code. I craft modern user experiences
            while also delivering scalable backend integrations when needed.
          </p>
          <div className="flex gap-5">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className=" bg-white border border-black text-black px-5 py-2 rounded-2xl inline-flex items-center gap-2 font-mono text-sm sm:text-base shadow-md hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-violet-400"
            >
              Get in touch
              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </motion.button>
            <div>
              <motion.button className="cursor-pointer gradient-text px-5 py-2 rounded-2xl inline-flex items-center gap-2 font-mono text-sm sm:text-base hover:bg-white border border-black">
                View projects
                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </motion.button>
            </div>
            <motion.a
            href="/resume.pdf"
      download
              animate={{
                boxShadow: [
                  "0 0 0px rgba(0,0,0,0)",
                  "0 0 12px rgba(0,0,0,0.25)",
                  "0 0 0px rgba(0,0,0,0)",
                ],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{
                scale: 1.05,
                y: -2,
              }}
              whileTap={{ scale: 0.95 }}
              className="group cursor-pointer border border-black px-5 py-2 rounded-2xl inline-flex items-center gap-3 font-mono text-sm sm:text-base  text-gradient transition-colors hover:bg-black hover:text-white"
            >
              Download CV
              <FaDownload className="transition-transform duration-300 group-hover:translate-y-0.5 group-hover:scale-110" />
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/nikhil-pandey2003/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="group  bg-white inline-flex items-center justify-center w-11 h-11 rounded-full border border-black text-black transition-all duration-300 hover:bg-[#0A66C2] hover:border-[#0A66C2] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#0A66C2]"
              aria-label="LinkedIn profile"
            >
              <FaLinkedin className="text-lg transition-transform duration-300 group-hover:scale-110" />
            </motion.a>
            <motion.a
              href="https://github.com/techDemons/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              className="group bg-white inline-flex items-center justify-center w-11 h-11 rounded-full border border-black text-black transition-all duration-300 hover:bg-black  hover:text-white focus:outline-none focus:ring-2 focus:ring-[#0A66C2]"
              aria-label="LinkedIn profile"
            >
              <FaGithub className="text-lg transition-transform duration-300 group-hover:scale-110" />
            </motion.a>
          </div>

          <div className="flex items-center justify-center my-30 ml-1  ">
            <motion.div animate={{
            scale: [1.05, 1.08, 1],
            textShadow: [
              "0px 0px 0px rgba(139,92,246,0)",
              "0px 0px 12px rgba(139,92,246,0.8)",
              "0px 0px 0px rgba(139,92,246,0)",
            ],
          }}
          transition={{
            duration: 1.05,
            repeat: Infinity,
            ease: "easeInOut",
          }} className="h-32 w-1 rounded-4xl opacity-70 bg-white relative sm:left-50 md:left-91"></motion.div>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <div className="flex items-center justify-center relative right-8">
          <h1 className="font-extrabold gradient-text font-serif sm:text-4xl md:5xl mb-5">
            About Me
          </h1>
        </div>
        <motion.div animate={{
            scale: [1.05, 1.08, 1],
            textShadow: [
              "0px 0px 0px rgba(139,92,246,0)",
              "0px 0px 12px rgba(139,92,246,0.8)",
              "0px 0px 0px rgba(139,92,246,0)",
            ],
          }}
          transition={{
            duration: 1.05,
            repeat: Infinity,
            ease: "easeInOut",
          }}
         className="h-1.5 w-24 sm:w-28 md:w-32 lg:w-36 rounded-full opacity-70 bg-white mx-auto relative -top-3 right-7"
></motion.div>
        <div className="ml-10 mr-10 max-3xl text-center leading-7">
          <p className="md:ml-20 md:mr-20 mb-4">
            My name is Nikhil Pandey, and I am a Software Developer writing
            clean and understandable codes, have real-world experience designing
            fast, usable, and web applications. My specialty is crafting
            smooth-looking UIs with React.js, Next.js, Tailwind CSS, and
            managing the state and bringing things to life with Framer Motion.
          </p>
          <p className="md:ml-20 md:mr-20 mb-4">
            Alongside my frontend experience, I possess good full-stack skills
            in JavaScript and Reactjs, and talk about my backend skills i have
            built multiple servers which can handle upto 1000 request
            simultaneouly, efficient in Node.js, Express, and databases like
            MongoDB and MySQL.{" "}
          </p>
          <p className="md:ml-20 md:mr-20 ">
            {" "}
            Writing elegant, up-to-date code and discovering new tools and
            trends thrills me. Outside of work, I enjoy cricket and a good cup
            of tea, but now I am used to drinking coffee. I'm always up for
            learning, experimenting, and growing and looking for opportunities
            wherein I can bring value toward impactful products and inventive
            teams.
          </p>
        </div>
      </section>

      
    </div>
  );
};

export default Hero;
