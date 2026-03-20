import gsap, { Linear, Power4, ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef } from "react";

const Images = () => {
  const parent = useRef(null);
  const first = useRef(null);
  const second = useRef(null);
  const third = useRef(null);
  const fourth = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: parent.current,
        start: "0 90%",
        scrub: 1,
      },
    });
    tl.to(
      first.current,
      {
        x: "40%",
        ease: Linear,
      },
      "a"
    )
      .to(
        second.current,
        {
          x: "-15%",
          ease: Linear,
        },
        "a"
      )

      .to(
        third.current,
        {
          x: "-50%",
          y: "30%",
          ease: Linear,
        },
        "a"
      )
      .to(
        fourth.current,
        {
          x: "70%",
          y: "8%",
          ease: Linear,
        },
        "a"
      );
  });
  return (
    <div
      ref={parent}
      className="w-full h-[70vh] sm:h-[140vh]  bg-white flex items-center justify-center overflow-hidden sm:py-25 "
    >
      <div className="w-[38%] sm:w-[30%] h-[38vh] sm:h-[90%]   relative ">
        <div
          ref={first}
          className=" absolute w-18 h-[6rem] sm:w-44 sm:h-[17rem] -right-1/3 top-6 sm:top-20 "
        >
          <img
            className="h-full w-full object-cover"
            src="https://a.storyblok.com/f/133769/348x494/21becfd449/home-news-3.jpg/m/1200x1703/filters:quality(90)"
            alt=""
          />
        </div>
        <div
          ref={second}
          className="absolute w-[8rem] sm:w-[23rem] aspect-video -left-1/2 top-1/3 sm:-left-70 overflow-hidden "
        >
          <video
            loop
            muted
            autoPlay
            className="w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "
            src="https://a.storyblok.com/f/133769/x/9c433c7aac/home-news-diesel-be-a-follower.mp4"
          ></video>
        </div>
        <div
          ref={third}
          className="absolute w-[9rem] sm:w-[28rem] aspect-video  -left-[32%] sm:-left-[65%] -bottom-10"
        >
          <img
            className="h-full w-full object-cover"
            src="https://a.storyblok.com/f/133769/758x508/8a1ff60d00/home-news-4.jpg/m/1200x804/filters:quality(90)"
            alt=""
          />
        </div>
        <div
          ref={fourth}
          className="absolute w-[7rem] sm:w-[20rem] sm:h-[28rem]  h-[9rem] aspect-[1.5/1] sm:aspect-video  -right-[5%] -bottom-25  sm:-right-[58%] sm:-bottom-40 overflow-hidden"
        >
          <video
            loop
            muted
            autoPlay
            className="w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "
            src="https://a.storyblok.com/f/133769/x/88b4bf7989/news-rino-pelle.mp4"
          ></video>
        </div>
        <img
          className="w-full h-full object-cover"
          src="https://a.storyblok.com/f/133769/748x1278/5784aa7150/home-news-1.jpg/m/1200x2050/filters:quality(90)"
          alt=""
        />
      </div>
    </div>
  );
};

export default Images;
