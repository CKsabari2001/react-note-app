import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import { MdDeleteForever } from "react-icons/md";

function Note({ text, date, id, deleteNote }) {
  return (
    <Card className="c-card">
      <Card.Body>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
      <Card.Footer className="d-flex justify-content-between align-items-center">
        <p className="mb-0">{date}</p>
        <MdDeleteForever onClick={() => deleteNote(id)} />
      </Card.Footer>
    </Card>
  );
}

export default Note;
