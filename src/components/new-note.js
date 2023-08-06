import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import { MdDeleteForever } from "react-icons/md";

function NewNote() {
  return (
    <Card className="c-card">
      <Card.Body>
        <Card.Text className="h-100">
          <textarea
            className="form-control"
            name="getNote"
            id="get-Note"
          ></textarea>
        </Card.Text>
      </Card.Body>
      <Card.Footer className="d-flex justify-content-between align-items-center">
        <p className="mb-0"></p>
        <MdDeleteForever />
      </Card.Footer>
    </Card>
  );
}

export default NewNote;
