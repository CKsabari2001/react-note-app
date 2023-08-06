import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import NoteList from "./components/note-list";
import Search from "./components/search-bar";

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

  const getNote = (data) => {
    const date = new Date();
    const newNote = {
      id: uuidv4(),
      text: data,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...noteListContent, newNote];
    setNoteListContent(newNotes);
  };

  const deleteNote = (id) => {
    const newNote = noteListContent.filter((note) => note.id !== id);
    setNoteListContent(newNote);
  };

  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="container">
      <Search setSearchValue={setSearchValue} />
      <NoteList
        noteListContent={noteListContent.filter((note) => {
          return note.text.toLowerCase().includes(searchValue);
        })}
        getNote={getNote}
        deleteNote={deleteNote}
      />
    </div>
  );
}

export default App;
