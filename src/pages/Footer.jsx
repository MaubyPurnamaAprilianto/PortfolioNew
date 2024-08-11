import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 pt-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-xl font-semibold text-yellow-500 mb-4">About Us</h3>
          <p>
            We are a team of passionate developers dedicated to building beautiful and functional web applications.
            Our mission is to deliver the best user experience possible.
          </p>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="text-xl font-semibold text-yellow-500 mb-4">Contact Us</h3>
          <p>
            DayeuhLuhur<br />
            Cilacap, Indonesia<br />
            Email: maubypurnama010407@gmail.com<br />
            Phone: +62 858 7695 1232
          </p>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-xl font-semibold text-yellow-500 mb-4">Follow Us</h3>
          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-2xl hover:text-yellow-500 transition" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-2xl hover:text-yellow-500 transition" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-2xl hover:text-yellow-500 transition" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-2xl hover:text-yellow-500 transition" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-4">
        <p className="text-center text-gray-500">
          &copy; {new Date().getFullYear()}-Present By Mauby . All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
