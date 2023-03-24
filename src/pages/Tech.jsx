import React from "react";

import BallCanvas from "../canvas/Ball";

import { technologies } from "../constant/data";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-8 md:gap-6 lg:gap-10 mb-20">
      {technologies.map((technology) => (
        <div className="w-20 h-20" key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default Tech;
