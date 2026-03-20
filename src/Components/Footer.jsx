import React from "react";
import { TbPoint } from "react-icons/tb";

const Footer = () => {
  return (
    <div className="w-full sm:h-[135vh] h-[100vh] pt-10 bg-[#070707] text-[#E0CCBB] sm:px-22 sm:py-18  px-8 py-2 ">
      <div className="w-full sm:h-[65%] h-[48%] sm:mt-10  flex items-center justify-between relative">
        <div>
          <h1 className=" sm:text-[11vw] text-5xl sm:leading-36 sm:tracking-tight">
            Our
          </h1>
          <h1 className=" sm:text-[11vw] text-5xl sm:leading-36 sm:tracking-tight">
            Story
          </h1>
          <p className="sm:text-2xl font-semibold pt-20 mb-14  text-[#B5A598] text-sm sm:w-[70%] sm:mb-34 sm:mt-16">
            The story behind Studio D is one of exploration, creativity and
            curiosity.
          </p>
        </div>
        <div className="sm:w-[80%] w-[120%]  h-[60vh] overflow-hidden aspect-video relative ">
          <video
            className="w-full h-full  absolute -top-30 sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 scale-[1.1] sm:scale-[1.1] "
            muted
            loop
            autoPlay
            src="https://www.exoape.com/video/video-6.mp4"
          ></video>
        </div>
      </div>
      <hr />
      <div className="w-full h-[15%] flex items-center justify-between">
        <div className="w-[48%] leading-8 sm:text-lg text-lg text-[#B5A598] pt-28 h-full flex items-center justify-between relative">
          <div className="sm:block hidden">
            <h3>Willem II Singel 8</h3>
            <h3>6041 HS, Roermond</h3>
            <h3>The Netherlands</h3>
            <h3>hello@studiod.com</h3>
          </div>
          <div className="mr-25">
            <h3>Work</h3>
            <h3>Studio</h3>
            <h3>News</h3>
            <h3>Contact</h3>
          </div>
          <div>
            <h3>Behance</h3>
            <h3>Dribbble</h3>
            <h3>Linkedin</h3>
            <h3>Instagram</h3>
          </div>
        </div>
        <div className="flex  items-center justify-center pt-60 relative">
          <div className="flex items-center justify-center absolute right-58 top-10 sm:top-50 w-20">
            <TbPoint className="w-10" />
            <h1 className="w-70"> Our Story</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
