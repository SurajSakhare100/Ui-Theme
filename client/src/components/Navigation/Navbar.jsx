import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-black px-20 p-4 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        {/* Brand Name */}
        <div className="text-white text-2xl font-bold">
          <Link to="/">UI THEME</Link>
        </div>

        {/* Navbar Links */}
        <ul className="flex space-x-8 text-white">
          <li>
            <Link to="/" className="hover:text-yellow-300 transition duration-300 ease-in-out">Home</Link>
          </li>
          <li>
            <Link to="/terms" className="hover:text-yellow-300 transition duration-300 ease-in-out">Terms</Link>
          </li>
          <li>
            <Link to="/cancellation-refund" className="hover:text-yellow-300 transition duration-300 ease-in-out">Cancellation & Refund</Link>
          </li>
          <li>
            <Link to="/shipping" className="hover:text-yellow-300 transition duration-300 ease-in-out">Shipping</Link>
          </li>
          <li>
            <Link to="/privacy-policy" className="hover:text-yellow-300 transition duration-300 ease-in-out">Privacy Policy</Link>
          </li>
          <li>
            <Link to="/contact-us" className="hover:text-yellow-300 transition duration-300 ease-in-out">Contact Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
