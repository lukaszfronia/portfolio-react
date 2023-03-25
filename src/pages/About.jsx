import React from "react";
import { about } from "../constant/data";
import TitlePage from "../components/TitlePage/titlepage.component";

const About = () => {
  return (
    <div
      id="about"
      className="xl:max-w-[1200px] lg:max-w-[1000px] mt-40 h-screen mx-auto mb-64 sm:mb-0 py-10 sm:py-44 flex flex-col items-center gap-12 text-gray-900"
    >
      <TitlePage>ABOUT</TitlePage>
      <div className="  md:p-12  lg:p-9 flex gap-10 justify-center items-center flex-col md:flex-row   ">
        <img
          src={about.image}
          alt={about.alt}
          className="rounded-[20px] shadow-lg shadow-gray-900 lg:w-[310px] md:w-[250px]  w-[280px] "
        />
        <div className="flex flex-col  justify-center gap-4 p-16 md:p-8">
          <h2 className="text-3xl xl:text-4xl lg:text-3xl md:text-2xl font-semibold">
            {about.title}
          </h2>
          <p className=" text-lg lg:text-xl xl:text-2xl">{about.description}</p>
        </div>
      </div>
    </div>
  );
};

export default About;
