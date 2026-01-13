import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaGithub, FaLinkedin, FaMessage } from "react-icons/fa6";
import { FaPhoneAlt, FaVoicemail } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { ToastContainer, toast } from "react-toastify";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const toastify=()=>{
    toast("Message Sent to Nikhil");
  }
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div>
      <section className="max-w-6xl mx-auto">
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-15 mt-10"
        >
          <h1 className="font-extrabold sm:text-4xl text-4xl gradient-text ">
            Get in Touch
          </h1>
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 1.2, repeat: Infinity }}
            className="h-1 w-10 sm:w-37 bg-violet-400 rounded-full mx-auto mt-1"
          />
        </motion.div>

        <motion.div className="flex items-center ">
          <motion.form
            initial={{ opacity: 0, x: -40 }}
            whileHover={{ scale: 1.03 }}
            // whileTap={{ scale: 0.8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.25 }}
            onSubmit={handleSubmit}
            className="backdrop-blur-md border  border-white rounded-2xl h-full w-120 p-10"
          >
            <div className="relative mx-auto text-center">
              <label className="inline-block relative right-43 text-gray-400 mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="
                    w-full px-4 py-2 rounded-lg
                    bg-black/30 border border-white/10
                    text-white placeholder-gray-500
                    focus:outline-none focus:border-violet-400
                    mb-6

                  "
              />
            </div>

            <div>
              <label className="inline-block relative right-45 text-sm text-gray-400 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="
                    w-full px-4 py-2 rounded-lg
                    bg-black/30 border border-white/10
                    text-white placeholder-gray-500
                    focus:outline-none focus:border-violet-400
                    mb-6
                  "
              />
            </div>

            <div>
              <label className="inline-block relative right-42 text-sm text-gray-400 mb-1">
                Message
              </label>
              <textarea
                name="message"
                rows="4"
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message..."
                className="
                    w-full px-4 py-2 rounded-lg
                    bg-black/30 border border-white/10
                    text-white placeholder-gray-500
                    focus:outline-none focus:border-violet-400
                    resize-none
                    mb-6
                  "
              />
            </div>

            <button
              type="submit"
              onClick={toastify}
              className="
                  w-full py-2 rounded-lg
                  bg-violet-500 hover:bg-violet-600
                  text-white font-medium
                  transition-all
                "
            >
              Send Message
            </button>
          </motion.form>

          <motion.div initial={{ opacity: 0, x: -40 }}
            whileHover={{ scale: 1.02 }}
            // whileTap={{ scale: 0.8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.25 }} className="ml-25  backdrop-blur-xs border border-white rounded-2xl">
            <motion.div  whileHover={{ scale: 1.02 }} className="m-10 border border-white h-full w-120  rounded-2xl ">
              <span className="relative left-5 mx-auto top-5 size-5 items-center ">
                <MdOutlineEmail className="size-7" />
              </span>
              <div className="relative bottom-4 left-16">
                <h2 className="flex font-bold gradient-text">Email</h2>
                <p className="relative right-41">np68169@gmail.com</p>
              </div>
            </motion.div>
            <motion.div  whileHover={{ scale: 1.02 }} className="m-10 border border-white h-full w-120  rounded-2xl ">
              <span className="relative left-5 mx-auto top-5 size-5 items-center ">
                <FaPhoneAlt className="size-7" />
              </span>
              <div className="relative bottom-4 left-16">
                <h2 className="flex font-bold gradient-text">Phone no</h2>
                <p className="relative right-48">812-7087-089</p>
              </div>
            </motion.div>
            <motion.div  whileHover={{ scale: 1.02 }} className="m-10 border border-white h-full w-120  rounded-2xl ">
              <span className="relative left-5 mx-auto top-5 size-5 items-center ">
                <CiLocationOn className="size-7" />
              </span>
              <div className="relative bottom-4 left-16">
                <h2 className="flex font-bold gradient-text">Location</h2>
                <p className="relative right-50">Delhi-NCR</p>
              </div>
            </motion.div>

            <motion.div  className="flex text-start px-10 pb-1">
              <h2>Connect with me</h2>
            </motion.div>
            <div className="pb-5 pt-2 space-x-5">

            <motion.a
              href="https://github.com/techDemons/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              className="group relative right-46 bg-white inline-flex items-center justify-center w-11 h-11 rounded-full border border-black text-black transition-all duration-300 hover:bg-black  hover:text-white focus:outline-none focus:ring-2 focus:ring-[#0A66C2]"
              aria-label="LinkedIn profile"
              >
              <FaGithub className="https://github.com/techDemons/" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/nikhil-pandey2003/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="group relative right-46  bg-white inline-flex items-center justify-center w-11 h-11 rounded-full border border-black text-black transition-all duration-300 hover:bg-[#0A66C2] hover:border-[#0A66C2] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#0A66C2] "
              aria-label="LinkedIn profile"
              >
              <FaLinkedin className="text-lg transition-transform duration-300 group-hover:scale-110 " />
            </motion.a>
              </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default Contact;
