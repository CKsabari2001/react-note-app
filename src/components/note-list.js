import Note from "./note";
import NewNote from "./new-note";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";
import EditNote from "./edit-note";
import { useState } from "react";

function NoteList({ noteListContent, getNote, deleteNote, getEditNoteData }) {
  const [renderEditNote, setRenderEditNote] = useState(false);
  const [sendEditNoteData, setSendEditNoteData] = useState({
    id: "",
    data: "",
  });
  const editNote = (id, data) => {
    setRenderEditNote(true);
    const newNote = {
      id: id,
      data: data,
    };
    setSendEditNoteData(newNote);
  };

  const getRenderEditNote = () => {
    setRenderEditNote(!renderEditNote);
  };

  const CancelEdit = () => {
    setRenderEditNote(false);
  };

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
              editNote={editNote}
            />
          </Col>
        );
      })}
      <Col sm={12} md={4} xl={3} className="d-flex justify-content-center mb-5">
        {renderEditNote ? (
          <EditNote
            sendEditNoteData={sendEditNoteData}
            getEditNoteData={getEditNoteData}
            getRenderEditNote={getRenderEditNote}
            CancelEdit={CancelEdit}
          />
        ) : (
          <NewNote getNote={getNote} />
        )}
      </Col>
    </Row>
  );
}

export default NoteList;
