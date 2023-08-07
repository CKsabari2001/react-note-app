import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import NoteList from "./components/note-list";
import Search from "./components/search-bar";
import Header from "./components/header";

function App() {
  const [noteListContent, setNoteListContent] = useState([]);

  console.log(noteListContent);

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

  const [bgColor, setBgColor] = useState(false);

  useEffect(() => {
    const saveNotes = JSON.parse(localStorage.getItem("react-notes-app-data"));
    if (saveNotes) {
      setNoteListContent(saveNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "react-notes-app-data",
      JSON.stringify(noteListContent)
    );
  }, [noteListContent]);

  return (
    <div className={`h100vh ${bgColor ? "bg-color-dark" : "bg-color-light"}`}>
      <div className="container-fluid">
        <div className="container">
          <Header setBgColor={setBgColor} bgColor={bgColor} />
          <Search setSearchValue={setSearchValue} />
          <NoteList
            noteListContent={noteListContent.filter((note) => {
              return note.text.toLowerCase().includes(searchValue);
            })}
            getNote={getNote}
            deleteNote={deleteNote}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
