import React, { useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";
import { useNavigate } from "react-router-dom";
import bgImageHero from "../assets/intro-bg.jpg";

const Hero = () => {
  const [name, setName] = useState("");
  const [inputVisible, setInputVisible] = useState(true);
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "hello there 🗿, before we get started. what is your name?";

  const navigate = useNavigate();

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, currentIndex + 1));
      currentIndex++;
      if (currentIndex === fullText.length) {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleNameSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      setInputVisible(false);
    }
  };

  const handleButtonClick = () => {
    if (name.trim()) {
      navigate("/about", { state: { name } }); // Mengirimkan nama sebagai state
    }
  };

  const buttonProps = useSpring({
    opacity: inputVisible ? 0 : 1,
    transform: inputVisible ? "translateY(50px)" : "translateY(0px)",
    config: { tension: 220, friction: 120 },
  });

  return (
    <div
      className="relative h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImageHero})` }}
    >
      <div className="absolute inset-0 bg-black opacity-75"></div>
      <div className="relative text-center text-white p-4">
        <h1 className="text-5xl font-bebas tracking-widest">
          Hi, My name is Mauby Purnama Aprilianto
        </h1>
        <p className="text-xl mt-4 font-sans">{displayedText}</p>

        <form onSubmit={handleNameSubmit} className="mt-4">
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            className="p-2 bg-transparent text-white text-center focus:outline-none hover:border-b-2 border-yellow-400 rounded-md"
            placeholder="Enter your name"
          />
        </form>

        {!inputVisible && (
          <animated.div
            style={buttonProps}
            className="mt-16 flex justify-center items-center"
          >
            <button
              onClick={handleButtonClick}
              className="text-2xl bg-transparent text-white border-2 border-yellow-500 w-28 h-28 rounded-full shadow-lg flex items-center justify-center hover:scale-110 hover:text-yellow-500 transition-transform duration-300"
            >
              Lesgo
            </button>
          </animated.div>
        )}
      </div>
    </div>
  );
};

export default Hero;