import React, { useEffect } from "react";
import ProjectCard from "./ProjectCard";
import ProjectCardData from "../../Data/ProjectCardData"; // Pastikan path ini sesuai
import { FaCode } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const ProjectList = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
    });
  }, []);
  return (
    <div className="container mx-auto w-full min-h-screen mt-32 px-4 flex flex-col items-center justify-center">
      <div className="flex items-center mb-8 justify-center space-x-2" data-aos="fade-up">
        <div className="bg-none border-2 border-yellow-500 rounded-full p-4 flex items-center justify-center transition-transform duration-700">
          <FaCode className="text-xl md:text-3xl text-yellow-500 transition-transform duration-300 ease-in-out hover:rotate-180 hover:text-white hover:scale-150 cursor-pointer" />
        </div>
        <h2 className="text-4xl font-bebas tracking-wider text-yellow-500 text-center md:text-left hover:text-white">
          Projects
        </h2>
      </div>

      <p className="text-center mb-12 text-lg text-gray-600" data-aos="fade-up">
        Here are some of the projects I have worked on:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-aos="fade-up">
        {ProjectCardData.map((project, index) => (
          <ProjectCard
            key={index}
            imgsrc={project.imgsrc}
            title={project.title}
            view={project.view}
            source={project.source}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
