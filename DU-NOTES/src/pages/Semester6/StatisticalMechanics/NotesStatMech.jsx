import DownloadCard from "../../../components/DownloadCard";

const NotesStatMech = ({dark}) => {
  return (
    <DownloadCard
      chapterTitle="Statistical Mechanics Notes"
      pdfLink="/pdfs/mathphysics1-notes.pdf"
      dark={dark}
    />
  );
};

export default NotesStatMech;
