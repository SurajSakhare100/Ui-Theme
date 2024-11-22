import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 ">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          
          {/* Brand & Navigation Links Section */}
          <div>
            <h2 className="text-3xl font-bold mb-6">UI THEME</h2>
            <p className="text-gray-400 mb-4">© 2024 UI THEME. All rights reserved.</p>
            <ul className="space-y-2">
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-yellow-300">Terms</Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-gray-400 hover:text-yellow-300">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/cancellation-refund" className="text-gray-400 hover:text-yellow-300">Cancellation & Refund</Link>
              </li>
              <li>
                <Link to="/shipping" className="text-gray-400 hover:text-yellow-300">Shipping</Link>
              </li>
              <li>
                <Link to="/contact-us" className="text-gray-400 hover:text-yellow-300">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Social Media Links Section */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-semibold mb-4">Stay Connected</h3>
            <div className="flex space-x-6 mb-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-300">
                <FaFacebook size={30} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-300">
                <FaTwitter size={30} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-300">
                <FaInstagram size={30} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-300">
                <FaLinkedin size={30} />
              </a>
            </div>
            <p className="text-gray-400 text-center md:text-left">Follow us on social media for updates and promotions.</p>
          </div>

          {/* Newsletter Subscription Section */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-semibold mb-4">Subscribe to our Newsletter</h3>
            <form className="flex flex-col items-center md:items-start w-full max-w-xs">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-3 mb-4 w-full rounded-md bg-gray-300 text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-yellow-300"
              />
              <button
                type="submit"
                className="bg-yellow-300 text-gray-800 p-3 rounded-md w-full hover:bg-yellow-400 transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
          
        </div>

        {/* Bottom Footer */}
        <div className="mt-12 border-t border-gray-600 pt-6 text-center">
          <p className="text-gray-400">&copy; 2024 UI THEME | All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
