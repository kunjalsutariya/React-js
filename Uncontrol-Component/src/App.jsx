import { useRef } from "react";
import './App.css'; 

function App() {
  const name = useRef("");
  const email = useRef("");
  const phone = useRef(null);

  const handlebar = (event) => {
    event.preventDefault();  
    console.log("Name:", name.current.value);
    console.log("Email:", email.current.value);
    console.log("Phone:", phone.current.value);
  };

  return (
    <div className="container">
      <h2>Uncontrolled Component</h2>
      <form onSubmit={handlebar} className="form">
        <div className="input-group">
          <label>Name: </label>
          <input type="text" ref={name} className="input-field" />
        </div>
        <div className="input-group">
          <label>E-mail: </label>
          <input type="email" ref={email} className="input-field" />
        </div>
        <div className="input-group">
          <label>Phone: </label>
          <input type="text" ref={phone} className="input-field" />
        </div>
        <button type="submit" className="submit-button">SUBMIT</button>
      </form>
    </div>
  );
}

export default App;
