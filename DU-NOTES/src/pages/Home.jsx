import React, { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [selectedSemester, setSelectedSemester] = useState("");

  const semesterSubjects = {
    "Semester 1": [
      { name: "MATHEMATICAL PHYSICS - 1", path: "/semester1/math-physics-1" },
      { name: "MECHANICS", path: "/semester1/mechanics" },
      { name: "WAVES AND OSCILLATIONS", path: "/semester1/waves-oscillations" },
    ],
    // Add more semesters later if needed
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start pt-20 space-y-8">
      <h1 className="text-3xl font-bold text-[#FF007F] text-center">
        BSC PHYSICS NOTES 💕
      </h1>

      {/* Semester Select Dropdown */}
      <div className="relative w-72">
        <select
          value={selectedSemester}
          onChange={(e) => setSelectedSemester(e.target.value)}
          className="w-full px-4 py-3 rounded-lg bg-white text-black shadow-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-[#2c2c2c] dark:text-white dark:shadow-gray-800"
        >
          <option value="" disabled>
            Select Your Semester
          </option>
          {Object.keys(semesterSubjects).map((sem, idx) => (
            <option key={idx} value={sem}>
              {sem}
            </option>
          ))}
        </select>
      </div>

      {/* Subject Links */}
      {selectedSemester && (
        <div className="flex flex-col items-start space-y-4 mt-4 w-72">
          {semesterSubjects[selectedSemester].map((subject, index) => (
            <Link
              to={subject.path}
              key={index}
              className="w-full px-4 py-3 rounded-lg bg-blue-100 hover:bg-blue-300 dark:bg-[#1e1e1e] dark:hover:bg-[#333] text-center transition-all font-medium shadow"
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
