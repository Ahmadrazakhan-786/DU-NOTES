import React from "react";
import DownloadCard from "./DownloadCard";

const SubjectNotes = ({ subjectName, onDownload }) => {
  return (
    <div className="min-h-screen px-4 py-10 bg-white dark:bg-[#1a1a1a] transition-colors duration-300">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
        📚 {subjectName} Notes
      </h2>

      <div className="flex justify-center">
        <DownloadCard
          title={`📘 ${subjectName} Complete Notes`}
          onClick={onDownload}
        />
      </div>
    </div>
  );
};

export default SubjectNotes;
