import React from "react";

import github from "../../assets/github.png";

const Card = ({ project }) => {
  const { name, tags, image, source_code_link } = project;
  return (
    <div className="bg-gray-100 p-8 rounded-[10px] flex flex-col items-center gap-11 md:w-[300px]  lg:w-[400px] w-[350px] flex-wrap ">
      <div className="relative">
        <img
          src={image}
          alt="project-image"
          className="rounded-[20px] md:w-[300px]  lg:w-[350px]  h-[150px] lg:h-[170px] shadow-lg "
        />
        <div>
          <div
            onClick={() => window.open(source_code_link, "_blank")}
            className="absolute top-[6%] right-[1%] w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center shadow-md shadow-gray-800 cursor-pointer"
          >
            <img src={github} className="w-[30px] h-[30px]" />
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{name}</h2>
      </div>
      <div className="flex gap-4">
        {tags.map((tag) => {
          return (
            <p
              key={Math.floor(Math.random() * 10000)}
              className={` text-[10px] md:text-sm font-extrabold ${tag.color}`}
            >
              #{tag.name.toUpperCase()}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
