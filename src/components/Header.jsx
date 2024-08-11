  import React, { useState } from "react";
  import { FaBars, FaTimes } from "react-icons/fa";

  const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <header className="bg-black text-white opacity-60 shadow fixed w-full z-10">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold">MaubyAprll</h1>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a
                  href="#home"
                  className="text-white hover:text-gray-500 transition duration-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="text-white hover:text-gray-500 transition duration-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  About
                </a>
                <a
                  href="#projects"
                  className="text-white hover:text-gray-500 transition duration-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Projects
                </a>
                <a
                  href="#contact"
                  className="text-white hover:text-gray-500 transition duration-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Contact
                </a>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="bg-gray-100 p-2 rounded-md text-white hover:text-gray-605 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 focus:text-gray-600"
              >
                {isOpen ? (
                  <FaTimes className="block h-6 w-6" />
                ) : (
                  <FaBars className="block h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </nav>

        <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#home"
              className="text-white hover:text-gray-500 transition duration-600 block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-white hover:text-gray-500 transition duration-600 block px-3 py-2 rounded-md text-base font-medium"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-white hover:text-gray-500 transition duration-600 block px-3 py-2 rounded-md text-base font-medium"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-white hover:text-gray-500 transition duration-600 block px-3 py-2 rounded-md text-base font-medium"
            >
              Contact
            </a>
          </div>
        </div>
      </header>
    );
  };

  export default Header;
