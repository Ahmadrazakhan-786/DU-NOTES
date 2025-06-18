import React from "react";
import DownloadCard from "../../components/DownloadCard";

const Notes = () => {
  const handleDownload = () => {
    alert("📥 Download Math Physics Notes PDF from Django backend");
    // window.open("https://your-backend-link.pdf", "_blank");
  };

  return (
    <div className="min-h-screen px-4 py-10 bg-white dark:bg-[#1a1a1a] transition-colors duration-300">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
        📚 Math Physics Notes
      </h2>

      <div className="flex justify-center">
        <DownloadCard
          title="📘 Math Physics Complete Notes"
          onClick={handleDownload}
        />
      </div>
    </div>
  );
};

export default Notes;
