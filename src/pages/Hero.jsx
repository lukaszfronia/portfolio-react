import React from "react";
import { hero } from "../constant/data.js";

const Hero = () => {
  return (
    <div>
      <img
        className="w-full h-screen object-cover object-left"
        src={hero.backgroundImage}
        alt={hero.alt}
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
        <div className="max-w-[700px] m-auto w-full h-full flex flex-col justify-center items-center gap-6  ">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-gray-900">
            {hero.name}
          </h1>
          <p className="text-xl font-bold sm:text-2xl md:text-3xl text-gray-800">
            {hero.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
