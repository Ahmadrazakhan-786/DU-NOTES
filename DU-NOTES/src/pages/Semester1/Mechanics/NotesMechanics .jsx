import DownloadCard from "../../../components/DownloadCard";

const NotesMechanics = ({dark}) => {
  return (
    <DownloadCard
      chapterTitle="Mechanics Notes"
      pdfLink="/pdfs/mathphysics1-notes.pdf"
      dark={dark}
    />
  );
};

export default NotesMechanics;
