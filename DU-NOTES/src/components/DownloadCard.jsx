const DownloadCard = ({ chapterTitle = "Chapter Title", pdfLink = "#", dark }) => {
  return (
    <div
      className={`flex items-center justify-center min-h-screen transition-colors duration-300 ${
        dark ? "bg-[#2c2c2c]" : "bg-[#fdfbd4]"
      }`}
    >
      <div className="bg-[#fdfbd4] text-gray-900 rounded-2xl p-8 w-[90%] max-w-md text-center border-[2px] border-black shadow-lg">
        <h1 className="text-2xl font-bold mb-2">{chapterTitle}</h1>
        <p className="mb-4 text-gray-700">Showing content for: Bsc Physics Honours</p>
        <a
          href={pdfLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-2 bg-[#9249d6] hover:bg-purple-500 text-white rounded-md font-semibold transition"
        >
          Download PDF
        </a>
      </div>
    </div>
  );
};

export default DownloadCard;
