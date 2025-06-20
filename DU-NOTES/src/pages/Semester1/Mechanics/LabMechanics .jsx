// src/pages/Semester1/MathPhysics1/Lab.jsx
import DownloadCard from "../../../components/DownloadCard";

const LabMechanics = ({dark}) => {
  return (
    <DownloadCard
      chapterTitle="Mechanics Lab Manual"
      pdfLink="/pdfs/mathphysics1-lab.pdf" // Use actual link from Django later
      dark={dark}
    />
  );
};

export default LabMechanics;
