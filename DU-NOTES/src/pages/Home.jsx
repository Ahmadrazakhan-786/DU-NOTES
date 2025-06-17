import React, { useState } from "react";
import { Link } from "react-router-dom";

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
    <div className="min-h-screen flex flex-col items-center justify-start pt-20 px-4 space-y-8">
      <h1 className="text-3xl md:text-4xl font-bold text-[#FF007F] text-center">
        BSC PHYSICS NOTES 💕
      </h1>

      {/* Custom Dropdown */}
      <div className="relative w-full max-w-md px-2">
        <button
          onClick={() => setShowDropdown(!showDropdown)}
          className="w-full px-4 py-3 rounded-lg bg-white text-black shadow-lg text-lg text-left focus:outline-none dark:bg-[#2c2c2c] dark:text-white"
        >
          {selectedSemester || "Select Your Semester"}
        </button>

        {showDropdown && (
          <div className="absolute top-full mt-1 w-full max-h-60 overflow-y-auto bg-white dark:bg-[#2c2c2c] rounded-lg shadow-lg z-10">
            {Object.keys(semesterSubjects).map((sem, idx) => (
              <div
                key={idx}
                onClick={() => handleSelect(sem)}
                className="px-4 py-2 cursor-pointer hover:bg-blue-100 dark:hover:bg-gray-700"
              >
                {sem}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Subject Links */}
      {selectedSemester && (
        <div className="w-full max-w-md px-2 flex flex-col items-start space-y-4 mt-4">
          {semesterSubjects[selectedSemester].map((subject, index) => (
            <Link
              to={subject.path}
              key={index}
              className="w-full px-4 py-3 rounded-lg bg-black text-center transition-all font-medium shadow text-white"
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
