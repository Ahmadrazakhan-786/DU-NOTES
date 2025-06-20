import React, { useState } from "react";
import { Link } from "react-router-dom";
import heroOval from "/heroOval.png";

const Home = () => {
  const [selectedSemester, setSelectedSemester] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const semesterSubjects = {
    "Semester 1": [
      { name: "MATHEMATICAL PHYSICS - 1", path: "/semester1/math-physics-1" },
      { name: "MECHANICS", path: "/semester1/mechanics" },
      { name: "WAVES AND OSCILLATIONS", path: "/semester1/waves-oscillations" },
    ],
    "Semester 2": [
      { name: "MATHEMATICAL PHYSICS - 2", path: "/semester2/math-physics-2" },
      { name: "ELECTRICITY AND MAGNETISM", path: "/semester2/electricity-magnetism" },
      { name: "ELECTRICAL CIRCUIT ANALYSIS", path: "/semester2/electrical-circuit-analysis" },
    ],
    "Semester 3": [
      { name: "MATHEMATICAL PHYSICS - 3", path: "/semester3/math-physics-3" },
      { name: "THERMAL PHYSICS", path: "/semester3/thermal-physics" },
      { name: "LIGHT AND MATTER", path: "/semester3/light-and-matter" },
    ],
    "Semester 4": [
      { name: "MODERN PHYSICS", path: "/semester4/modern-physics" },
      { name: "SOLID STATE PHYSICS", path: "/semester4/solid-state-physics" },
      { name: "ANALOG ELECTRONICS", path: "/semester4/analog-electronics" },
    ],
    "Semester 5": [
      { name: "ELECTROMAGNETIC THEORY", path: "/semester5/electromagnetic-theory" },
      { name: "QUANTUM MECHANICS - 1", path: "/semester5/quantum-mechanics-1" },
      { name: "DIGITAL ELECTRONICS", path: "/semester5/digital-electronics" },
    ],
    "Semester 6": [
      { name: "STATISTICAL MECHANICS", path: "/semester6/statistical-mechanics" },
      {
        name: "ATOMIC, MOLECULAR AND NUCLEAR PHYSICS",
        path: "/semester6/atomic-molecular-nuclear-physics",
      },
      {
        name: "STATISTICAL ANALYSIS IN PHYSICS",
        path: "/semester6/statistical-analysis",
      },
    ],
  };

  const handleSelect = (sem) => {
    setSelectedSemester(sem);
    setShowDropdown(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start pt-32 px-4 space-y-10">

      {/* ✅ Hero Section */}
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-32 max-w-6xl">
        {/* Left Text */}
        <div className="text-left space-y-4 md:w-1/2">
          <h2 className="text-2xl md:text-3xl font-bold text-[#FF007F] font-serif">
            WELCOME TO DU NOTES
          </h2>
          <p className="text-base md:text-lg text-gray-500 font-semibold font-serif">
            Your one-stop destination for all B.Sc. Physics (Hons.) DU resources!
            Access high-quality notes, PYQs, syllabus, lab manuals, and more – all in one place.
            Created specially for DU students.
            Study smart, stay consistent, and top your semester exams with confidence.
            Let’s make physics fun and stress-free together! ✨
          </p>
        </div>

        {/* ✅ Right Image with Hover Rotate + Glow Effect */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative group w-60 h-60 rounded-full border-4 border-transparent group-hover:border-pink-500 transition-all duration-500">
            <img
              src={heroOval}
              alt="DU Physics"
              className="w-full h-full object-cover rounded-full transform transition-all duration-500 ease-in-out group-hover:rotate-12 group-hover:scale-110 group-hover:shadow-[0_0_40px_10px_rgba(255,0,127,0.6)]"
            />
          </div>
        </div>
      </div>

      {/* ✅ Main Heading */}
      <h1 className="text-3xl font-bold text-[#FF007F] text-center mt-10 font-serif">
        BSC PHYSICS NOTES 💕
      </h1>

      {/* ✅ Dropdown */}
      <div className="relative w-full max-w-md px-2">
        <button
          onClick={() => setShowDropdown(!showDropdown)}
          className="w-full px-4 py-3 rounded-lg bg-white text-black shadow-lg text-lg text-left focus:outline-none dark:bg-[#2c2c2c] dark:text-white font-semibold"
        >
          {selectedSemester || "Select Your Semester"}
        </button>

        {showDropdown && (
          <>
            <div
              className="fixed inset-0 z-10"
              onClick={() => setShowDropdown(false)}
            ></div>

            <div className="absolute top-full left-2 right-2 mt-1 max-h-64 overflow-y-auto 
              bg-white dark:bg-gray-800 rounded-lg shadow-lg z-50">
              {Object.keys(semesterSubjects).map((sem, idx) => (
                <div
                  key={idx}
                  onClick={() => handleSelect(sem)}
                  className="px-4 py-2 cursor-pointer 
                  hover:bg-blue-100 dark:hover:bg-gray-600 
                  text-black dark:text-white font-semibold"
                >
                  {sem}
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      {/* ✅ Subject List */}
      {selectedSemester && (
        <div className="w-full max-w-md px-2 flex flex-col items-start space-y-4 mt-4">
          {semesterSubjects[selectedSemester].map((subject, index) => (
            <Link
              to={subject.path}
              key={index}
              className="w-full px-4 py-3 rounded-lg bg-black text-center transition-all font-medium shadow text-white border border-gray-50 hover:scale-[1.02] hover:shadow-lg hover:shadow-pink-500/10 
                active:scale-95 duration-200 ease-out"
            >
              {subject.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
