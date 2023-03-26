import React from "react";
import { hero } from "../constant/data.js";
import hire from "../assets/search.png";

const Hero = () => {
  return (
    <div
      id="home"
      className="h-screen bg-scroll xl:bg-fixed bg-center bg-cover custom-img"
    >
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
        <div className="max-w-[700px] m-auto w-full h-full flex flex-col justify-center items-center gap-6  ">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-gray-900">
            {hero.name}
          </h1>
          <p className="text-xl font-bold sm:text-2xl md:text-3xl text-gray-800">
            {hero.description}
          </p>
          <a
            href="CV.pdf"
            className="flex justify-center items-center gap-4 text-xl font-semibold bg-slate-100 px-8  py-4 rounded-[15px] shadow-lg shadow-gray-500 cursor-pointer  w-[250px] md:w-[200px]"
          >
            <img src={hire} className="w-[35px] h-[35px] scale-x-[-1] " />
            Hire Me !
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
