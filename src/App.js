import React, { useState } from "react"
import { nanoid } from 'nanoid'
import "./App.css"
import Search from "./components/Search"
import NotesList from "./components/NotesList"

function App() {
	const [notes, setNotes] = useState([]);

  const [searchText, setSearchText] = useState('');


  const addNote = text => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    }

    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = id => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  }
	return (
		<div className="app-container">
		<h1>Notes</h1>
		<Search handleSearchNote={setSearchText}/>
		<NotesList 
        notes={notes.filter((note) => note.text.toLowerCase().includes(searchText))} 
        handleAddNote={addNote} 
        handleDeleteNote={deleteNote}
      />
		</div>
	)
}

export default App
