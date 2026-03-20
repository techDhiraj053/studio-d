import { Power4 } from "gsap/all";
import { motion } from "motion/react";
import React from "react";
import { IoMenuSharp } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="w-full fixed z-[999]">
      <div className="max-w-screen-2xl flex text-white items-center justify-between px-5 py-5 sm:px-10 sm:py-10 mx-auto ">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: Power4.easeInOut, duration: 0.8 }}
          className="logo p-3"
        >
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 drop-shadow-sm">
            Studio D.
          </h1>
        </motion.div>
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: Power4.easeInOut, duration: 0.8 }}
          className="sm:hidden"
        >
          <IoMenuSharp />
        </motion.span>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: Power4.easeInOut, duration: 0.8 }}
          className="links hidden sm:flex gap-10"
        >
          {["Work", "Studio", "News", "Contact"].map((item, index) => (
            <a key={index} className="text-md font-medium">
              {item}
            </a>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
