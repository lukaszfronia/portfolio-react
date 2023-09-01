import React from "react";

import BallCanvas from "../canvas/Ball";
import TitlePage from "../components/TitlePage/titlepage.component";
import { technologies } from "../constant/data";

const Tech = () => {
  return (
    <div className="flex flex-col items-center gap-24 xl:max-w-[1300px]  lg:max-w-[1000px] max-w-[800px]  m-auto mb-64">
      <TitlePage>TECHNOLOGIES</TitlePage>
      <div className="flex flex-row flex-wrap justify-center gap-4">
        {technologies.map((technology) => (
          <div
            className="flex flex-col justify-center items-center gap-2 bg-gray-100 p-12 rounded-xl w-64 hover:scale-110 transition duration-300 hover:drop-shadow-md "
            key={technology.name}
          >
            <img
              src={technology.icon}
              className="icons"
              alt={technology.name}
            />
            <span className="">{technology.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tech;
