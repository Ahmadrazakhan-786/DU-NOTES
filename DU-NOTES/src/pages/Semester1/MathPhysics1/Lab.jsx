// src/pages/Semester1/MathPhysics1/Lab.jsx
import DownloadCard from "../../../components/DownloadCard";

const Lab = ({ dark }) => {
  return (
    <DownloadCard
      chapterTitle="MathPhysics Lab Manual"
      pdfLink="/pdfs/mathphysics1-lab.pdf" // Use actual link from Django later
      dark={dark}
    />
  );
};

export default Lab;
