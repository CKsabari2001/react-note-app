import Note from "./note";
import NewNote from "./new-note";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";

function NoteList({ noteListContent, getNote, deleteNote }) {
  return (
    <Row className="justify-content-start">
      {noteListContent.map((note) => {
        return (
          <Col
            key={note.id}
            sm={12}
            md={4}
            xl={3}
            className="d-flex justify-content-center mb-5"
          >
            <Note
              text={note.text}
              date={note.date}
              id={note.id}
              deleteNote={deleteNote}
              key={note.id}
            />
          </Col>
        );
      })}
      <Col sm={12} md={4} xl={3} className="d-flex justify-content-center mb-5">
        <NewNote getNote={getNote} />
      </Col>
    </Row>
  );
}

export default NoteList;
