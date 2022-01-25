import React from "react";

function Note(props) {

  function deleteAction(e) {
    console.log("delete is pressed")
    props.deleteNote(props.id)
    e.preventDefault()
  }
  
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={deleteAction}>DELETE</button>
    </div>
  );
}

export default Note;
