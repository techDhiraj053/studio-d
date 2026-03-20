import { motion } from "motion/react";
import React from "react";
import { useState } from "react";

const Work = () => {
  const [elems, setElems] = useState([
    {
      heading: "Ottografie",
      subheading: "Seamless Photographic Journey",
      video:
        "https://player.vimeo.com/progressive_redirect/playback/1047169994/rendition/720p/file.mp4?loc=external&log_user=0&signature=780c70237c241a1fe7a4b3837cad974ed7fb98f38cd2e6f912752ff9e44107ee",
      image:
        "https://a.storyblok.com/f/133769/2400x2990/729680ed7f/ottografie-2025-hero.jpg/m/1300x1620/filters:quality(90)",
    },
    {
      heading: "Amaterasu",
      subheading: "Frontier Health Innovation",
      video:
        "https://player.vimeo.com/progressive_redirect/playback/1020697798/rendition/720p/file.mp4?loc=external&log_user=0&signature=cd45f23683db91c40f08a3f4a31ba153f1e93eac3d4f98cb3ca4b651b8830d04",
      image:
        "https://a.storyblok.com/f/133769/2409x3000/c155d3e27e/amaterasu-hero.jpg/m/1300x1619/filters:quality(90)",
    },
    {
      heading: "Columbia Pictures",
      subheading: "Celebrating a Century of Cinema",
      video:
        "https://player.vimeo.com/progressive_redirect/playback/927016456/rendition/720p/file.mp4?loc=external&log_user=0&signature=270ce5ba6bf44a717c74cf85de5f3de1d33a36ba5205b660e5e23b873199d71a",
      image:
        "https://a.storyblok.com/f/133769/2400x2990/540fb12941/columbia-pictures-thumbnail.jpg/m/1300x1620/filters:quality(90)",
    },
    {
      heading: "Cambium",
      subheading: "Pioneering Sustainable Solutions",
      video:
        "https://player.vimeo.com/progressive_redirect/playback/1001982172/rendition/720p/file.mp4?loc=external&log_user=0&signature=b92eb1ab8119f2ffaaa03f075ef271714f5ee63065ee8d29f4e188ce30202de0",
      image:
        "https://a.storyblok.com/f/133769/2409x3000/cfd16e1a58/cambium-carbon-hero.jpg/m/1300x1619/filters:quality(90)",
    },
  ]);
  return (
    <div className="w-full relative">
      <div className="max-w-screen-2xl mx-auto px-5 sm:px-10 py-16">
        <div className="featured flex gap-2 ">
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

          <h3 className="font-semibold">Featured Projects</h3>
        </div>
        <h1
          
          className="text-5xl sm:text-[13rem] sm:leading-none sm:tracking-tight my-8 font-semibold overflow-hidden"
        >
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
            Work
          </motion.span>
        </h1>
        <p className="text-lg leading-6 ">
          Highlights of cases that we passionately built with forward-thinking
          clients and friends over the years.
        </p>
        <div className="elems sm:flex sm:flex-wrap sm:gap-5 mt-15 ">
          {elems.map((item, index) => {
            return (
              <div key={index} className="elem sm:ml-14 w-full mt-10 sm:w-[42%] ">
                <div className="video w-full  h-[104vw] sm:h-[50vw] relative overflow-hidden ">
                  <motion.img
                    initial={{ opacity: 1 }}
                    whileHover={{ opacity: 0 }}
                    data-scroll
                    data-scroll-speed="-.5"
                    className="hidden sm:z-[2] sm:absolute sm:left-0 sm:top-0 sm:block h-full w-full object-cover"
                    src={item.image}
                    alt=""
                  />
                  <video
                    loop
                    muted
                    autoPlay
                    className="block  z-[1] w-full scale-[1.3] h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "
                    src={item.video}
                  ></video>
                </div>
                <div className="mt-4">
                  <h3 className="font-semibold">{item.heading}</h3>
                  <h3 className="opacity-60">{item.subheading}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Work;
