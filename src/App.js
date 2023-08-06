import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import NoteList from "./components/note-list";

function App() {
  const [noteListContent, setNoteListContent] = useState([
    {
      text: "this is a first note",
      date: "18/05/2001",
      id: uuidv4(),
    },
    {
      text: "this is a second note",
      date: "01/01/2001",
      id: uuidv4(),
    },
  ]);

  return (
    <div>
      <NoteList noteListContent={noteListContent} />
    </div>
  );
}

export default App;
