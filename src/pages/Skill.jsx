import React, { useState, useEffect } from "react";
import SkillsData from "../Data/Skills"; // Ensure the path is correct
import { FaCog } from "react-icons/fa"; // Import the settings icon
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const Skills = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animations
      easing: 'ease-in-out', // Animation easing function
    });
  }, []);

  return (
    <div className="container mx-auto w-full h-screen mt-32 md:mt-0 px-4 flex flex-col items-center justify-center">
      <div
        data-aos="fade-up"
        data-aos-offset="200"
        className="flex items-center mb-8 justify-center space-x-2"
      >
        <div className="bg-none border-2 border-yellow-500 rounded-full p-4 flex items-center justify-center transition-transform duration-700">
          <FaCog className="text-xl md:text-3xl text-yellow-500 transition-transform duration-300 ease-in-out hover:rotate-180 hover:text-white hover:scale-150 cursor-pointer" />
        </div>
        <h2 className="text-4xl font-bebas tracking-wider text-yellow-500 text-center md:text-left hover:text-white">
          Skills
        </h2>
      </div>
      <p
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="200"
        className="text-center mb-12 text-lg text-gray-600"
      >
        Here are some of the skills I have acquired over time:
      </p>
      <div
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="400"
        className="grid grid-cols-3 md:grid-cols-6 gap-6 items-center justify-center"
      >
        {SkillsData.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </div>
    </div>
  );
};

const SkillCard = ({ skill }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    if (isHovered && skill.percentage) {
      const start = 0;
      const end = skill.percentage;
      const duration = 1000; // Duration of the animation in milliseconds
      let startTime = null;

      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        setPercentage(Math.floor(progress * end));
        if (progress < 1) requestAnimationFrame(animate);
      };

      requestAnimationFrame(animate);
    } else {
      // Reset the percentage to 0 when not hovered
      setPercentage(0);
    }
  }, [isHovered, skill.percentage]);

  return (
    <div
      data-aos="zoom-in-up"
      data-aos-duration="1000"
      className="relative bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center overflow-hidden transition-transform duration-700 transform hover:bg-gray-700 group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={skill.imgsrc}
        alt={skill.text}
        className="w-20 h-20 object-contain transition-transform duration-300"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 backdrop-blur">
        <h3 className="text-xl font-semibold text-white font-bold">
          {skill.text}
        </h3>
      </div>
      {skill.percentage !== undefined && (
        <div className="absolute top-2 right-2 bg-gray-800 text-white py-1 px-2 rounded-md transition-opacity duration-300 opacity-0 group-hover:opacity-100">
          <span className="text-sm font-semibold">{percentage}%</span>
        </div>
      )}
    </div>
  );
};

export default Skills;
