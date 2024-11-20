import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const [Title, setTitle] = useState("")
  const [note, setNote] = useState("")

  const record = useSelector(state => state.notes.users)

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
    dispach(add(obj))
    setTitle("")
    setNote("")
    alert("not added")
  }
  return (
    <>
      <div>
        <div>
          <h1>GOOGLE KEEP</h1>
          <div>
            <form onSubmit={handlesubmit}>
              <input type="text" onChange={(e) => setTitle(e.target.value)} placeholder="Title" value={Title || ""} />
              <textarea onChange={(e) => setNote(e.target.value)} placeholder="Note" value={note || ""}></textarea>
              <button type="submit">Submit</button>
            </form>
          </div>

          <div>
            {
              record.map((item) => {
                return (
                  <div key={item.id}>
                    <h2>{item.Title}</h2>
                    <p>{item.note}</p>
                  </div>
                )
              })
            }
          </div>

        </div>
      </div>
    </>
  )
}
export default App;