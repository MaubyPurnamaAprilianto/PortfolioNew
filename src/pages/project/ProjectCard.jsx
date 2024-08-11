import React from 'react';
import { FaEye, FaCode } from 'react-icons/fa';
import 'aos/dist/aos.css'; // Import AOS CSS
import AOS from 'aos';

const ProjectCard = ({ imgsrc, title, view, source }) => {
  // Initialize AOS on component mount
  React.useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animation in milliseconds
      easing: 'ease-in-out', // Easing function
    });
  }, []);

  return (
    <div 
      className="relative bg-gray-800  rounded-lg  transition-transform transform hover:-translate-y-2 l group"
      data-aos="fade-up" // Add AOS animation attribute here
    >
      <img className="w-full h-42 md:h-44 object-cover rounded-t-lg" src={imgsrc} alt={title} />
      <div className="p-6">
        <h5 className="text-lg md:text-2xl font-semibold mb-2 text-white">{title}</h5>
      </div>
      <div className="absolute top-2 left-2 flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
        {view && (
          <a
            href={view}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-500 text-white p-2 rounded-full hover:bg-gray-600 transition-colors"
          >
            <FaEye size={20} />
          </a>
        )}
      </div>
      <div className="absolute top-2 right-2 flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
        {source && (
          <a
            href={source}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-500 text-white p-2 rounded-full hover:bg-gray-600 transition-colors"
          >
            <FaCode size={20} />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
