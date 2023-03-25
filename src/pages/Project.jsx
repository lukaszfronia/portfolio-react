import React from "react";
import { Navigation, Pagination, Autoplay, Scrollbar, A11y } from "swiper";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import TitlePage from "../components/TitlePage/titlepage.component";
import Card from "../components/card/card.component";
import { projects } from "../constant/data";

import Tech from "./Tech";
const Project = () => {
  return (
    <div
      id="projects"
      className="xl:max-w-[1300px]  lg:max-w-[1000px] max-w-[800px] h-screen m-auto py-3
      mb-96 sm:mb-0 md:py-32 flex flex-col items-center  gap-24 text-gray-900"
    >
      <TitlePage>PROJECTS</TitlePage>
      <div className=" xl:max-w-[1300px]  lg:max-w-[820px] md:max-w-[760px] max-w-[350px]">
        <Swiper
          breakpoints={{
            370: {
              width: 370,
              slidesPerView: 1,
              spaceBetween: 70,
            },
            768: {
              width: 768,
              slidesPerView: 2,
              spaceBetween: 70,
            },
            1280: {
              width: 1280,
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          modules={[Pagination, Autoplay]}
          pagination={{
            clickable: true,
          }}
          speed={2000}
          autoplay={{ delay: 2500 }}
        >
          {projects.map((project, i) => (
            <SwiperSlide key={Math.floor(Math.random() * 10000)}>
              <Card key={`project-${i}`} project={project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Tech />
    </div>
  );
};

export default Project;
