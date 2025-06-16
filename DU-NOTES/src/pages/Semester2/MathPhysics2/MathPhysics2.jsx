import React from "react";
import { Link } from "react-router-dom";

const MathPhysics2 = () => {
  return (
    <div className="p-6 space-y-4">
      <h2 className="text-2xl font-bold text-[#FF007F]">📘 Mathematical Physics II</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
        <Link
          to="/semester2/math-physics-2/syllabus"
          className="px-4 py-3 text-center rounded-lg bg-blue-200 hover:bg-blue-300 dark:bg-[#1e1e1e] dark:hover:bg-[#333] font-medium transition-all"
        >
          📖 Syllabus
        </Link>
        <Link
          to="/semester2/math-physics-2/notes"
          className="px-4 py-3 text-center rounded-lg bg-blue-200 hover:bg-blue-300 dark:bg-[#1e1e1e] dark:hover:bg-[#333] font-medium transition-all"
        >
          📝 Notes
        </Link>
        <Link
          to="/semester2/math-physics-2/pyqs"
          className="px-4 py-3 text-center rounded-lg bg-blue-200 hover:bg-blue-300 dark:bg-[#1e1e1e] dark:hover:bg-[#333] font-medium transition-all"
        >
          ❓ PYQs
        </Link>
        <Link
          to="/semester2/math-physics-2/pyq-solutions"
          className="px-4 py-3 text-center rounded-lg bg-blue-200 hover:bg-blue-300 dark:bg-[#1e1e1e] dark:hover:bg-[#333] font-medium transition-all"
        >
          ✅ PYQ Solutions
        </Link>
        <Link
          to="/semester2/math-physics-2/lab"
          className="px-4 py-3 text-center rounded-lg bg-blue-200 hover:bg-blue-300 dark:bg-[#1e1e1e] dark:hover:bg-[#333] font-medium transition-all"
        >
          🔬 Lab Content
        </Link>
      </div>
    </div>
  );
};

export default MathPhysics2;
