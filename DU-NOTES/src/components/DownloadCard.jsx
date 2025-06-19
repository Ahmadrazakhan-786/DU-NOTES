// src/components/DownloadCard.jsx
const DownloadCard = ({ chapterTitle = "Chapter Title", pdfLink = "#" }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#fefcc6] dark:bg-[#2c2c2c] transition-colors duration-300">
      <div className="bg-[#0f0f1b] dark:bg-[#1e1e1e] text-white rounded-lg shadow-md p-6 w-[90%] max-w-md text-center">
        <h1 className="text-2xl font-bold mb-2">{chapterTitle}</h1>
        <p className="mb-4 text-gray-400">Showing chapter for: BSc Physics</p>
        <a
          href={pdfLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md font-semibold transition"
        >
          Download PDF
        </a>
      </div>
    </div>
  );
};

export default DownloadCard;
