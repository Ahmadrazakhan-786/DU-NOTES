import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Sun, Moon, Menu, X } from "lucide-react";

const Navbar = ({ dark, setDark }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Navbar container */}
      <nav
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-7xl 
        rounded-xl px-8 py-4 shadow-xl border flex justify-between items-center
        ${dark ? "bg-[#2c2c2c] text-white" : "bg-[#FDFBD4] text-[#333]"} 
        transition-all duration-300`}
      >
        {/* Left: Logo */}
        <div className="text-2xl font-bold text-blue-600">
          <Link to="/">📘 DU Notes</Link>
        </div>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center space-x-6">
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

          {/* Toggle Theme */}
          <button
            onClick={() => setDark(!dark)}
            className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            {dark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Upload Button */}
          
        </div>

        {/* Mobile menu icon */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden focus:outline-none"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile fullscreen menu */}
      {menuOpen && (
        <div
          className={`fixed top-0 left-0 w-full h-full z-40 
          flex flex-col items-center justify-center space-y-8 text-2xl
          ${dark ? "bg-[#2c2c2c] text-white" : "bg-white text-black"}`}
        >
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>
            About
          </Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
          <button
            onClick={() => {
              setDark(!dark);
              setMenuOpen(false);
            }}
            className="p-2 rounded-full border"
          >
            {dark ? <Sun size={24} /> : <Moon size={24} />}
          </button>
          
        </div>
      )}
    </>
  );
};

export default Navbar;
