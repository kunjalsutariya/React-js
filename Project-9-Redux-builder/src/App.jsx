import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Add } from "./Redux/Action/NoteAction";
import "./App.css"

function App() {
  const [Title, setTitle] = useState("")
  const [note, setNote] = useState("")

  const record = useSelector(state => state.user)
console.log(record);

  const dispach = useDispatch()

  const handlesubmit = (e) => {
    e.preventDefault();

    if (!Title || !note) {
      alert("write note")
      return false;
    }

    let obj = {
      id: Math.floor(Math.random() * 10000),
      Title,
      note
    }
    dispach(Add(obj))
    setTitle("")
    setNote("")
    alert("not added")
  }
  return (
    <>
    <div className="container">
      <div className="row">
        <header className="header">
          <h1>📒 Google Keep Clone</h1>
        </header>
  
        <div className="form-container">
          <form onSubmit={handlesubmit} className="note-form">
            <input
              type="text"
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter Title"
              value={Title || ""}
              className="note-input"
            />
            <textarea
              onChange={(e) => setNote(e.target.value)}
              placeholder="Write your note here..."
              value={note || ""}
              className="note-textarea"
            ></textarea>
            <button type="submit" className="submit-button">Add Note</button>
          </form>
        </div>
  
        <div className="notes-container">
          {record.length > 0 ? (
            record.map((item, index) => (
              <div key={index} className="note-card">
                <h2 className="note-title">{item.Title}</h2>
                <p className="note-content">{item.note}</p>
              </div>
            ))
          ) : (
            <p className="no-notes">No notes available. Start adding some!</p>
          )}
        </div>
      </div>
    </div>
  </>
  
  
  )
}
export default App;