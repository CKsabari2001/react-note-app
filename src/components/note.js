import "bootstrap/dist/css/bootstrap.min.css";
// import { useState } from "react";
import { Card } from "react-bootstrap";
import { MdDeleteForever } from "react-icons/md";
import { BiSolidEditAlt } from "react-icons/bi";

function Note({ text, date, id, deleteNote, editNote }) {
  return (
    <Card className="c-card">
      <Card.Body>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
      <Card.Footer className="d-flex justify-content-between align-items-center">
        <p className="mb-0">{date}</p>
        <div>
          <BiSolidEditAlt onClick={() => editNote(id, text)} />
          <MdDeleteForever onClick={() => deleteNote(id)} />
        </div>
      </Card.Footer>
    </Card>
  );
}

export default Note;
