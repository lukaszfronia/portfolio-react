import React from "react";
import { about } from "../constant/data";
import TitlePage from "../components/TitlePage/titlepage.component";

const About = () => {
  return (
    <div
      id="about"
      className="max-w-[1200px] mx-auto pt-32 pb-32 h-screen flex flex-col items-center gap-12 text-gray-900"
    >
      <TitlePage>ABOUT</TitlePage>
      <div className=" max-w-[1200px]  p-9 flex gap-10  rounded-[20px] ">
        <img
          src={about.image}
          alt={about.alt}
          className="rounded-[20px] shadow-lg shadow-gray-900 w-[310px]"
        />
        <div className="flex flex-col  justify-center gap-4 p-8">
          <h2 className="text-4xl font-semibold">{about.title}</h2>
          <p className="text-2xl">{about.description}</p>
        </div>
      </div>
    </div>
  );
};

export default About;
