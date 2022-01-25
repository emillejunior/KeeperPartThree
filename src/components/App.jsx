import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import uuidv4 from "uuid/v4";

function App() {

  let [notes, setNotes] = useState([
    {id: uuidv4(), title: "First Title", content: "Lorem Ipsum ..."},
    {id: uuidv4(), title: "Second Title", content: "Dolor Sit Amet ..."}
  ])

  function deleteNote(id) {
    console.log("deleting a note " + id)
    const newNotes = notes.filter((note)=>{
      return note.id !== id
    })
    setNotes(newNotes)
  }

  function saveNote(newNote) {
    console.log("saving a note")
    console.log(newNote)
    setNotes((prevNotes)=>{
      return [...prevNotes,{
        id: uuidv4(),
        title: newNote.title,
        content: newNote.content
      }]
    })
  }
  
  return (
    <div>
      <Header />
      <CreateArea saveNote={saveNote}/>
      {notes.map((note) => {
        return <Note key={note.id} id={note.id} deleteNote={deleteNote} title={note.title} content={note.content} />
      })}
      <Footer />
    </div>
  );
}

export default App;
