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
      className="max-w-[1300px] h-screen m-auto pt-32 pb-32 flex flex-col items-center  gap-24 text-gray-900"
    >
      <TitlePage>PROJECTS</TitlePage>
      <div className="max-w-[1300px]">
        <Swiper
          // install Swiper modules
          modules={[Pagination, Autoplay]}
          spaceBetween={50}
          slidesPerView={3}
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
