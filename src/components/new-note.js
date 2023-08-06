import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from "react-bootstrap";

function NewNote({ getNote }) {
  const [noteData, setNoteData] = useState("");
  const CharacterLimit = 200;

  function handleChange(e) {
    if (CharacterLimit - e.target.value.length >= 0) {
      setNoteData(e.target.value);
    }
  }

  function sendNote() {
    if (noteData.trim().length > 0) {
      getNote(noteData);
      setNoteData("");
    }
  }

  return (
    <Card className="c-card im-card">
      <Card.Body>
        <Card.Text className="h-100">
          <textarea
            className="form-control"
            name="getNote"
            id="get-Note"
            onChange={handleChange}
            value={noteData}
          ></textarea>
        </Card.Text>
      </Card.Body>
      <Card.Footer className="d-flex justify-content-between align-items-center">
        <p className="mb-0">{CharacterLimit - noteData.length} Remaining</p>
        <Button className="save-btn" onClick={sendNote}>
          Save
        </Button>
      </Card.Footer>
    </Card>
  );
}

export default NewNote;
