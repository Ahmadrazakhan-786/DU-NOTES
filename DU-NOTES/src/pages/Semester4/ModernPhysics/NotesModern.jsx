import DownloadCard from "../../../components/DownloadCard";

const NotesModern = ({dark}) => {
  return (
    <DownloadCard
      chapterTitle="Modern Physics Notes"
      pdfLink="/pdfs/mathphysics1-notes.pdf"
      dark={dark}
    />
  );
};

export default NotesModern;
