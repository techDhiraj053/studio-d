import { motion } from "motion/react";
import React from "react";

const Spread = () => {
  return (
    <div className="w-full bg-white py-18 mb-5">
      <div className="max-w-screen-2xl mx-auto px-8 sm:px-10 ">
        <div className=" flex items-center justify-center gap-2">
          <svg
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-3"
            data-v-669b4a84=""
          >
            <path
              d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"
              fill="currentColor"
              data-v-669b4a84=""
            ></path>
          </svg>
          <h1 className="text-sm font-semibold">In the media</h1>
        </div>
        <div className="text mt-5 sm:mt-5 text-center ">
          {["Spread", "the News"].map((item, index) => {
            return (
              <h1 key={index} className="text-6xl sm:text-[10vw] sm:font-semibold sm:leading-none tracking-tighter leading-20 overflow-hidden ">
                <motion.span
                  initial={{ rotate: 90, y: "40%", opacity: 0 }}
                  whileInView={{ rotate: 0, y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    ease: [0.22, 1, 0.36, 1],
                    duration: 1.5,
                  }}
                  className="inline-block origin-left "
                >
                  {item}
                </motion.span>
              </h1>
            );
          })}

         
          <p className="w-[90%] sm:w-[35%] sm:leading-none sm:text-2xl mx-auto mt-10 sm:mt-15 text-lg leading-5 font-semibold">
            Find out more about our work on these leading design and technology
            platforms.
          </p>
          <a
            className="border-b-[1px] border-zinc-900 pb-1 mt-10 sm:mt-14 inline-block text-[#101116]"
            href="#"
          >
            Browse all news
          </a>
        </div>
      </div>
    </div>
  );
};

export default Spread;
