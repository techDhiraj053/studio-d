import gsap, { Power4, ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef } from "react";

const PlayReel = () => {
  const parent = useRef(null);
  const videodiv = useRef(null);
  const play = useRef(null);
  const reel = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: parent.current,
        top: "0 0",
        pin: true,
        scrub: 1,
      },
    });
    tl.to(videodiv.current, {
      width: "100%",
      height: "100%",
      ease: Power4,
    })
      .to(
        play.current,
        {
          x: "112%",
          ease: Power4,
          scale: 1.2,
        },
        "a"
      )
      .to(
        reel.current,
        {
          x: "-112%",
          ease: Power4,
          scale: 1.2,
        },
        "a"
      );
  });
  return (
    <div
      ref={parent}
      className="w-full h-screen relative overflow-hidden bg-black"
    >
      <div
        ref={videodiv}
        className="w-44 sm:w-96 overflow-hidden aspect-video  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <video
          loop
          muted
          autoPlay
          className="w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[1.2]"
          src="https://player.vimeo.com/progressive_redirect/playback/914803778/rendition/1080p/file.mp4?loc=external&log_user=0&signature=5344c0e4fea63ca54bb433621ca0be7b9470b475583fa68b26de2b6e380a390a"
        ></video>
      </div>
      <div className="overlay absolute w-full h-full  text-white flex flex-col justify-between py-20">
        <div className="w-full flex items-center justify-center gap-3 ">
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
          <h3 className="text-sm">Work In Motion</h3>
        </div>
        <h1 className="w-full flex justify-center items-center gap-36 sm:gap-[40%]">
          <div
            ref={play}
            className="text-3xl sm:text-[#E4E0DB] sm:text-9xl  font-semibold"
          >
            Play
          </div>
          <div
            ref={reel}
            className="text-3xl sm:text-[#E4E0DB] sm:text-9xl  font-semibold"
          >
            Reel
          </div>
        </h1>
        <p className="text-center px-10 text-sm">
          Our work is best experienced in motion. Don’t forget to put on your
          headphones.
        </p>
      </div>
    </div>
  );
};

export default PlayReel;
