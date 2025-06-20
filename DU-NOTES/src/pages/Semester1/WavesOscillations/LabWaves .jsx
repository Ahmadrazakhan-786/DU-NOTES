// src/pages/Semester1/MathPhysics1/Lab.jsx
import DownloadCard from "../../../components/DownloadCard";

const LabWaves = ({dark}) => {
  return (
    <DownloadCard
      chapterTitle="Wave Oscillations Lab Manual"
      pdfLink="/pdfs/mathphysics1-lab.pdf" // Use actual link from Django later
      dark={dark}
    />
  );
};

export default LabWaves;
