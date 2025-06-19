// src/components/Footer.jsx
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaTelegramPlane,
  FaGithub,
} from "react-icons/fa";

const Footer = ({ dark }) => {
  return (
    <footer
      className={`pt-10 pb-6 text-center mt-16 transition-colors duration-300 ${
        dark ? "bg-[#2c2c2c] text-white" : "bg-[#fdfbd4] text-black"
      }`}
    >
      <h2 className="text-2xl font-bold text-[#a958f4] mb-4">DU NOTES</h2>

      <div className="space-x-6 mb-4 font-medium">
        <a
          href="#"
          className={`hover:text-purple-500 ${
            dark ? "hover:text-purple-400" : ""
          }`}
        >
          Home
        </a>
        <a
          href="#"
          className={`hover:text-purple-500 ${
            dark ? "hover:text-purple-400" : ""
          }`}
        >
          About
        </a>
        <a
          href="#"
          className={`hover:text-purple-500 ${
            dark ? "hover:text-purple-400" : ""
          }`}
        >
          Contact
        </a>
      </div>

      <div className="flex justify-center items-center space-x-5 mb-6 text-2xl">
        <a href="#" className="hover:text-purple-500">
          <FaFacebookF />
        </a>
        <a href="#" className="hover:text-purple-500">
          <FaTwitter />
        </a>
        <a href="#" className="hover:text-purple-500">
          <FaLinkedinIn />
        </a>
        <a href="#" className="hover:text-purple-500">
          <FaInstagram />
        </a>
        <a href="#" className="hover:text-purple-500">
          <FaTelegramPlane />
        </a>
        <a href="#" className="hover:text-purple-500">
          <FaGithub />
        </a>
      </div>

      <p className={`text-sm ${dark ? "text-gray-400" : "text-gray-700"}`}>
        © 2025 DU NOTES. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
