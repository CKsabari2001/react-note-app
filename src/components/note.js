import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import { MdDeleteForever } from "react-icons/md";

function Note(props) {
  return (
    <Card className="c-card">
      <Card.Body>
        <Card.Text>{props.text}</Card.Text>
      </Card.Body>
      <Card.Footer className="d-flex justify-content-between align-items-center">
        <p className="mb-0">{props.date}</p>
        <MdDeleteForever />
      </Card.Footer>
    </Card>
  );
}

export default Note;
