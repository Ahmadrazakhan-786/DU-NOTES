import DownloadCard from "../../../components/DownloadCard";

const NotesEMT = ({dark}) => {
  return (
    <DownloadCard
      chapterTitle="Electromagnetic Theory Notes"
      pdfLink="/pdfs/mathphysics1-notes.pdf"
      dark={dark}
    />
  );
};

export default NotesEMT;
