// src/pages/Semester1/MathPhysics1/Lab.jsx
import DownloadCard from "../../../components/DownloadCard";

const LabMath2 = ({dark}) => {
  return (
    <DownloadCard
      chapterTitle="Mathematical Physics-2 Lab Manual"
      pdfLink="/pdfs/mathphysics1-lab.pdf" // Use actual link from Django later
      dark={dark}
    />
  );
};

export default LabMath2;
