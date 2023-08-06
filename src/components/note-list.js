import Note from "./note";
import NewNote from "./new-note";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
// import { Card } from "react-bootstrap";
// import { MdDeleteForever } from "react-icons/Md";

function NoteList({ noteListContent }) {
  return (
    <Container>
      <Row className="justify-content-start">
        {noteListContent.map((note) => {
          return (
            <Col
              sm={12}
              md={4}
              xl={3}
              className="d-flex justify-content-center mb-5"
            >
              <Note text={note.text} date={note.date} id={note.id} />
            </Col>
          );
        })}
        <Col
          sm={12}
          md={4}
          xl={3}
          className="d-flex justify-content-center mb-5"
        >
          <NewNote />
        </Col>
      </Row>
    </Container>
  );
}

export default NoteList;
