import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Sun, Moon, Menu, X } from "lucide-react";

const Navbar = ({ dark, setDark }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-7xl 
        rounded-xl px-8 py-4 shadow-xl border flex justify-between items-center
        ${dark ? "bg-[#2c2c2c] text-white" : "bg-[#FDFBD4] text-[#333]"} 
        transition-all duration-300`}
      >
        {/* Logo */}
        <div className="text-2xl font-bold text-[#a958f4]">
          <Link to="/">📘 DU Notes</Link>
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex items-center space-x-6 font-serif">
          {["Home", "About", "Contact"].map((item, idx) => (
            <Link
              key={idx}
              to={`/${item === "Home" ? "" : item.toLowerCase()}`}
              className={`
                relative px-5 py-2 rounded-lg font-medium transition-all duration-300
                group overflow-hidden
                ${dark ? "text-white" : "text-black"}
              `}
            >
              <span className="relative z-10">{item}</span>

              {/* Full blue box on hover */}
              <span
                className="absolute inset-0 z-0 rounded-lg
                  border border-purple-500 opacity-0 group-hover:opacity-100 
                  group-hover:bg-purple-500 group-hover:shadow-[0_0_10px_#3b82f6]
                  transition-all duration-300"
              ></span>

              {/* Text color switch on hover */}
              <span
                className="absolute inset-0 rounded-lg group-hover:backdrop-blur-sm"
              ></span>

              <style jsx>{`
                .group:hover span:first-child {
                  color: white;
                }
              `}</style>
            </Link>
          ))}

          {/* Toggle Theme */}
          <button
            onClick={() => setDark(!dark)}
            className="ml-4 p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            {dark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile menu icon */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden focus:outline-none"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className={`fixed top-0 left-0 w-full h-full z-40 
          flex flex-col items-center justify-center space-y-8 text-2xl
          ${dark ? "bg-[#2c2c2c] text-white" : "bg-white text-black"}`}
        >
          {["Home", "About", "Contact"].map((item, idx) => (
            <Link
              key={idx}
              to={`/${item === "Home" ? "" : item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="px-6 py-3 rounded-lg border border-purple-500 text-purple-600 
              hover:bg-purple-500 hover:text-white transition-all duration-300"
            >
              {item}
            </Link>
          ))}

          <button
            onClick={() => {
              setDark(!dark);
              setMenuOpen(false);
            }}
            className="p-2 rounded-full border mt-4"
          >
            {dark ? <Sun size={24} /> : <Moon size={24} />}
          </button>
        </div>
      )}
    </>
  );
};

export default Navbar;
