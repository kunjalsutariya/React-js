import './App.css';
import Table from './Table';
import Form from './Form';
import { useState } from 'react';

function App() {
  let old = localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : [];

  const [allrecord, setAllRecord] = useState(old);

  const AddRecord = (data) => {
    let newdata = [...allrecord, data];
    localStorage.setItem("users", JSON.stringify(newdata));
    setAllRecord(newdata);
  };

  const deleteUser = (id) =>{
    let d = allrecord.filter(val=> val.id != id);
    localStorage.setItem("users",JSON.stringify(d))
    setAllRecord(d);
    alert("Record Delete")


  }

  return (
    <div align="center">
      <Form addrecord={AddRecord} />
      <Table 
        alluser={allrecord} 
        deletedata={deleteUser}
      />
    </div>
  );
}

export default App;
