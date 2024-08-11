import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { FaMouse, FaExclamation, FaLinkedin, FaGithub } from "react-icons/fa";
import Mauby from "../assets/Mauby.png";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import Skill from "./Skill";
import ProjectList from "./project/ProjectList";
import Contact from "./Contact";
import Footer from "./Footer";

const About = () => {
  const location = useLocation();
  const { name } = location.state || { name: "Tamu" };

  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animations
      easing: 'ease-in-out', // Animation easing function
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-between py-12">
      {/* Full-height span with scroll icon */}
      <div
        className="container mx-auto h-screen flex flex-col items-center justify-center text-center px-4"
        data-aos="fade-down"
        data-aos-offset="200"
      >
        <span className="text-2xl md:text-4xl font-bebas tracking-wider mb-4">
          Hallo <span className="text-yellow-500">{name} </span>, Selamat Datang Di Portfolio Saya
        </span>
        <ScrollLink
          to="about-section"
          smooth={true}
          duration={500}
          className="mt-8 cursor-pointer flex flex-col items-center"
        >
          <FaMouse className="text-4xl animate-bounce mb-2" />
          <p className="text-sm">Scroll Down</p>
        </ScrollLink>
      </div>

      {/* About Section */}
      <div
        id="about-section"
        className="container mx-auto h-screen flex flex-col items-center justify-center px-4"
      >
        {/* Animated Container Div */}
        <div
          data-aos="fade-up"
          data-aos-offset="200"
          className="flex items-center mb-8 md:mb-12 w-full justify-center"
        >
          <div className="flex items-center mr-4">
            <div className="bg-none border-2 border-yellow-500 rounded-full p-4 flex items-center justify-center transition-transform duration-700">
              <FaExclamation className="text-xl  text-yellow-500 transition-transform duration-300 ease-in-out hover:rotate-180 hover:text-white hover:scale-150 cursor-pointer" />
            </div>
          </div>
          <h1 className="text-3xl font-bebas tracking-wider text-yellow-500 text-center md:text-left transition duration-300 space-x-2">
            <span className="hover:text-white transition duration-300">
              About
            </span>
            <span className="hover:text-white transition duration-300">Me</span>
          </h1>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center w-full mt-8 md:mt-16">
          <div
            data-aos="fade-up"
            data-aos-offset="200"
            className="w-1/2 md:w-1/3 flex items-center justify-center transition-transform duration-700"
          >
            <img
              src={Mauby}
              alt="About Me"
              className="w-full md:w-64 h-auto rounded-lg opacity-80 shadow-lg border-b-2 border-yellow-500 shadow-yellow-500 hover:scale-105 cursor-pointer"
            />
          </div>
          <div
            data-aos="fade-up"
            data-aos-offset="200"
            className="w-[90%] md:w-1/3 flex items-center justify-center text-left mt-4 md:mt-0 transition-transform duration-700"
          >
            <p className="text-lg mt-4 md:mt-0">
              I am a Fullstack Web Developer with over a year of experience in
              developing dynamic and interactive web applications. My main
              skills include React.js and Express.js, which I use to build
              effective and innovative web solutions.
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto w-full h-screen mt-32 px-4">
      <Skill />
      </div>
      <div className="container mx-auto w-full h-full mt-32 md:mt-0 px-4">
      <ProjectList />
      </div>
      <div className="container mx-auto w-full h-screen mt-32 px-4">
        <Contact />
      </div>
      <div className="h-auto w-full mt-32 px-4 border-t border-gray-700">
        <Footer />
      </div>
    </div>
  );
};

export default About;
