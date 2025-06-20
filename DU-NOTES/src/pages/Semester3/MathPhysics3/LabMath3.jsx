// src/pages/Semester1/MathPhysics1/Lab.jsx
import DownloadCard from "../../../components/DownloadCard";

const LabMath3 = ({dark}) => {
  return (
    <DownloadCard
      chapterTitle="Mathematical Physics-3 Lab Manual"
      pdfLink="/pdfs/mathphysics1-lab.pdf" // Use actual link from Django later
      dark={dark}
    />
  );
};

export default LabMath3;
