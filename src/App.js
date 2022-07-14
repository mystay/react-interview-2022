import React, { useState } from 'react'
import './App.css';

const App = () => {
  const [creating, setCreating] = useState(false)
  const [notes, setNotes] = React.useState([
    { title: 'test', content: 'test' }
  ])

  const makeNote = ({ note }) => { setNotes([...notes, note]) }

  function submitForm(e) {
    e.preventDefault();
    var formData = new FormData(e.target), formentries = Object.fromEntries(formData);
    let Note = { title: formentries['title'], content: formentries['content'] }

    makeNote(Note)
    setCreating(false)
  }

  return (
  <div class="d-flex flex-column p-5">
    <div >
    <section style={{ display: 'flex' }}>
    <h1 style={{ flex: 1 }}>React App</h1>
    <button   class="addNote btn btn-primary" onClick={() => setCreating(true)} >Add Note
    </section>
    </div>
    {creating ? (
      <div class="mt-3">
      <h2>Create Note</h2>
      <hr />
        <form onSubmit={submitForm} style={{ paddingTop: 10, maxWidth: 500 }}>
          <label>Title</label>
          <div style={{ marginBottom: 10 }}></div>
          <input className="form-control" id="title" name="title" />
          <div style={{ marginBottom: 10 }}></div>
          <label>Content</label>
          <div style={{ marginBottom: 10 }}></div>
          <input className="form-control "id="content" name="content" />
          <div style={{ marginBottom: 10 }}></div>
        <input type="submit" value="submit" />
        </form>
      </div>
    ) : (
      <div class="mt-3">
      <h2>My Notes</h2>
      <hr>
      {notes.map(function(note) { return (
        <div className="d-flex"><p className="me-3"><span style={{ fontWeight: 'bold' }}>Title:</span> {note.title}</p><p><strong>Content:</strong> {note.contents}</p></div>
      ) })}
      </div>
    )}
    <div>
    </div>
  </div>
  );
}

export default App;
