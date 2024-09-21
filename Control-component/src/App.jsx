import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handlebar = (event) => {
    event.preventDefault();
    console.log(name);
    console.log(email);
  }

  return (
    <> 
      <div className="form-container">
        <h2>FORM</h2>
        <form onSubmit={handlebar}>
          <input 
            onChange={(e) => setName(e.target.value)} 
            type="text" 
            placeholder='Your Name' 
          />
          <input 
            onChange={(e) => setEmail(e.target.value)} 
            type="email" 
            placeholder='Your Email' 
          />
          <div className="button-container">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;