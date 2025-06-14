import React, { useState } from "react";

const Home = () => {
  const [selectedSemester, setSelectedSemester] = useState("");
  const semesters = [
    "Semester 1",
    "Semester 2",
    "Semester 3",
    "Semester 4",
    "Semester 5",
    "Semester 6",
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center space-y-8">
      <h1 className="text-3xl font-bold text-[#FF007F]">BSC PHYSICS NOTES 💕</h1>

      <div className="relative w-72">
        <select
          value={selectedSemester}
          onChange={(e) => setSelectedSemester(e.target.value)}
          className="w-full px-4 py-3 rounded-lg bg-white text-black shadow-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-[#2c2c2c] dark:text-white dark:shadow-gray-800"
        >
          <option value="" disabled>Select Your Semester</option>
          {semesters.map((sem, idx) => (
            <option key={idx} value={sem}>
              {sem}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Home;
