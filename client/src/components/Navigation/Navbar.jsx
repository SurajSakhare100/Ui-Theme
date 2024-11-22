import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-black px-20 p-4 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-white text-2xl font-bold">
          <Link to="/">UI THEME</Link>
        </div>

        <ul className="flex space-x-8 text-white">
          <li>
            <Link to="/" className="hover:text-yellow-300 transition duration-300 ease-in-out">Home</Link>
          </li>
          <li>
            <Link to="/templates" className="hover:text-yellow-300 transition duration-300 ease-in-out">Templates</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
