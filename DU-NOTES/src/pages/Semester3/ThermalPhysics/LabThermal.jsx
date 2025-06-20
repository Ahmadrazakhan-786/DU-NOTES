// src/pages/Semester1/MathPhysics1/Lab.jsx
import DownloadCard from "../../../components/DownloadCard";

const LabThermal = ({dark}) => {
  return (
    <DownloadCard
      chapterTitle="Thermal Physics Lab Manual"
      pdfLink="/pdfs/mathphysics1-lab.pdf" // Use actual link from Django later
      dark={dark}
    />
  );
};

export default LabThermal;
