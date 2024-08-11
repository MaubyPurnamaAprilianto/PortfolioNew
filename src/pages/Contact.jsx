import React, { useState } from 'react';
import { FaPhone } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
      alert('Message sent!');
    }, 2000);
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div
        data-aos="fade-up"
        data-aos-offset="200"
        className="flex flex-col items-center mb-6 md:mb-8 w-full justify-center text-center"
      >
        <div className="flex items-center mb-4 md:mb-6">
          <div className="bg-none border-2 border-yellow-500 rounded-full p-4 flex items-center justify-center transition-transform duration-700">
            <FaPhone className="text-xl md:text-3xl text-yellow-500 transition-transform duration-300 ease-in-out hover:rotate-180 hover:text-white hover:scale-180 cursor-pointer" />
          </div>
        </div>
        <h1 className="text-3xl md:text-4xl font-bebas tracking-wider text-yellow-500 transition duration-300 space-x-2">
          <span className="hover:text-white transition duration-300">Contact</span>
          <span className="hover:text-white transition duration-300">Us</span>
        </h1>
      </div>
      <p className="text-center text-gray-600 text-lg mb-8" data-aos="fade-up">
        Let's Connect and Collaborate
      </p>
      <div
        className="w-full max-w-lg mx-auto"
        data-aos="fade-up"
        data-aos-offset="200"
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-white text-sm font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-gray-900 text-white"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-white text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-gray-900 text-white"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-white text-sm font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className="w-full p-3 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-gray-900 text-white"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className={`w-full py-3 bg-yellow-500 text-white rounded-lg font-semibold hover:bg-yellow-600 transition-colors ${
              isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
