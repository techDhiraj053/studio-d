import { Power4 } from "gsap/all";
import { motion } from "motion/react";
import React from "react";

const Landing = () => {
  return (
    <div className="relative w-full h-[170vh] sm:h-[300vh] ">
      <div  className="picture w-full h-full overflow-hidden">
        <img
        data-scroll data-scroll-speed="-1"
          className="w-full h-full object-cover object-top"
          src="https://a.storyblok.com/f/133769/1920x2716/5c24d6b467/exo-ape-hero-1.jpg/m/2400x3395/filters:quality(90)"
          alt=""
        />
      </div>
      <div className="w-full absolute top-0">
        <div className=" h-full text max-w-screen-2xl mx-auto px-8 sm:px-10 text-white">
          <div className="para mt-76 sm:mt-[30rem] sm:pl-40">
            {[
              "Global digital design studio partnering",
              "with brands and businesses that create",
              "exceptional experiences where people",
              "live, work, and unwind.",
            ].map((item, index) => {
              return (
                <p key={index} className="text-lg sm:p-[3px] sm:text-4xl leading-6 sm:leading-10 tracking-tight font-semibold overflow-hidden">
                  <motion.span
                    initial={{ rotate: 90, y: "100%", opacity: 0 }}
                    animate={{ rotate: 0, y: 0, opacity: 1 }}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      duration: 1.5,
                      delay: index * 0.2,
                    }}
                    className={"inline-block origin-left"}
                  >
                    {item}
                  </motion.span>
                </p>
              );
            })}
          </div>
          <div className="headings sm:pl-14 mt-10 sm:mt-18">
            {['Digital', 'Design', 'Experience'].map((item, index)=>{
              return <h1 key={index} className="text-6xl sm:py-10 sm:text-[15rem] tracking-tighter sm:-mt-10 leading-20 sm:leading-59 overflow-hidden">
              <motion.span
                    initial={{ rotate: 90, y: "100%", opacity: 0 }}
                    animate={{ rotate: 0, y: 0, opacity: 1 }}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      duration: 1.5,
                      delay: 1+index*.5
                    }}
                    className={"inline-block origin-left"}
                  >
                    {item}
                  </motion.span>
            </h1>

            })}
            
           
          </div>
          <div className="para2 sm:pl-20 sm:mt-20  mt-19 text-lg leading-6 tracking-tight  font-semibold ">
            <p className="sm:w-[38%] sm:font-semibold sm:text-2xl sm:leading-8">
              We help experience-driven companies thrive by making their
              audience feel the refined intricacies of their brand and product
              in the digital space. Unforgettable journeys start with a click.
            </p>
            <a
              href="#"
              className="sm:border-b-[1px] border-b-[.3px] mt-18 inline-block border-zinc-200 pb-1 sm:mt-20"
            >
              The Studio
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
