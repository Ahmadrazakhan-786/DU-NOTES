import React from "react";

const DownloadCard = ({ title, onClick }) => {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-md w-full max-w-md text-center transition-colors duration-300">
      <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
        {title}
      </h2>
      <button
        onClick={onClick}
        className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
      >
        📥 Download PDF
      </button>
    </div>
  );
};

export default DownloadCard;
