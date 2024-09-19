import React from 'react';
import { FaDollarSign, FaUser, FaStar, FaSlideshare } from 'react-icons/fa';
import PricingSection from '../components/PricingCard';
import TestimonialsSection from '../components/Testimonial.jsx';

const Home = () => {
  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen flex flex-col dark:bg-gray-900 dark:text-gray-100">
      {/* Header */}
      <header className="bg-gray-800 w-full p-4 text-white shadow-md dark:bg-gray-900">
        <nav className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <h1 className="text-4xl font-bold mb-4 md:mb-0">Template Hub</h1>
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
            <li><a href="#features" className="hover:text-gray-400 transition duration-300">Features</a></li>
            <li><a href="#pricing" className="hover:text-gray-400 transition duration-300">Pricing</a></li>
            <li><a href="#testimonials" className="hover:text-gray-400 transition duration-300">Testimonials</a></li>
            <li><a href="#contact" className="hover:text-gray-400 transition duration-300">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 text-white text-center py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold mb-6 leading-tight">Find Your Perfect Web Template</h2>
          <p className="text-lg mb-8 max-w-xl mx-auto">Discover a range of beautifully designed templates to help you get started quickly and effortlessly.</p>
          <a href="#explore" className="bg-blue-500 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-blue-400 transition duration-300">Explore Templates</a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-gray-800">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-semibold mb-12 text-white">Why Choose Us?</h2>
          <div className="flex flex-col md:flex-row justify-center space-y-12 md:space-y-0 md:space-x-12">
            <div className="bg-gray-700 p-8 rounded-lg shadow-lg max-w-xs mx-auto">
              <FaSlideshare className="text-blue-400 text-5xl mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-white">Variety</h3>
              <p className="text-gray-300">Choose from a diverse range of high-quality templates tailored to different needs.</p>
            </div>
            <div className="bg-gray-700 p-8 rounded-lg shadow-lg max-w-xs mx-auto">
              <FaDollarSign className="text-green-400 text-5xl mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-white">Affordable</h3>
              <p className="text-gray-300">Get access to premium templates at competitive prices with great value for money.</p>
            </div>
            <div className="bg-gray-700 p-8 rounded-lg shadow-lg max-w-xs mx-auto">
              <FaUser className="text-red-400 text-5xl mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-white">24/7 Support</h3>
              <p className="text-gray-300">Our dedicated support team is here to assist you anytime, anywhere.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
     <PricingSection/>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Contact Section */}
      <section id="contact" className="bg-gray-900 text-white py-24">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-semibold mb-4">Get in Touch</h2>
          <p className="mb-8">Have questions or need help? We're here to assist you!</p>
          <a href="mailto:info@templatehub.com" className="bg-blue-500 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-blue-400 transition duration-300">Email Us</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-400 text-center py-4">
        <p>&copy; 2024 Template Hub. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
