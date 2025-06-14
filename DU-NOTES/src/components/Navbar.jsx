import React from "react";
import { Link } from "react-router-dom";
import { Sun, Moon } from "lucide-react";

const Navbar = ({ dark, setDark }) => {
  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-7xl 
      rounded-xl px-8 py-4 shadow-xl border 
      ${dark ? "bg-[#2c2c2c] text-white" : "bg-white text-[#333]"} 
      transition-all duration-300`}
    >
      <div className="flex justify-between items-center">
        {/* Left: DU Notes */}
        <div className="text-2xl font-bold text-blue-600">
          <Link to="/"> 📘 DU Notes</Link>
        </div>

        {/* Right: Navigation Links */}
        <div className="flex items-center space-x-6">
          <Link
            to="/"
            className="hover:text-blue-500 hover:underline underline-offset-4 transition duration-200"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hover:text-blue-500 hover:underline underline-offset-4 transition duration-200"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="hover:text-blue-500 hover:underline underline-offset-4 transition duration-200"
          >
            Contact
          </Link>

          {/* Toggle Theme Button */}
          <button
            onClick={() => setDark(!dark)}
            className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            {dark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Login Button */}
          <button className="px-4 py-1 rounded bg-blue-600 text-white hover:bg-blue-700 transition duration-200">
            Upload Notes
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
