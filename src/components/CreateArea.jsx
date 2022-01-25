import React, {useState} from "react";

function CreateArea(props) {

  let [newNote,setNewNote] = useState({title: "Default Title", content: "default content"})

  function saveAction(e) {
    console.log("save is pressed")
    props.saveNote(newNote)
    e.preventDefault()
  }

  function changeAction(e) {
    // setNewNote(e.target.value)
    const formInput = e.target
    console.log("one of the fields is changed")
    if (formInput.name === "title") {
      // set only the title
      setNewNote((prevNote)=> {
        const x = { title: formInput.value, content: prevNote.content}
        console.log("x", x)
        return x
      })

    } else if (formInput.name === "content") {
      // set only the content
      setNewNote((prevNote)=> {
        const x = { title: prevNote.title, content: formInput.value}
        console.log("x", x)
        return x
      })
    }
  }
  
  return (
    <div>
      <form>
        <input onChange={changeAction} name="title" value={newNote.title} placeholder="Title" />
        <textarea onChange={changeAction} name="content" value={newNote.content} placeholder="Take a note..." rows="3" />
        <button onClick={saveAction}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
