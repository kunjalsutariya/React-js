

import React, { useState } from "react";

function App() {

  const [task, setTask] = useState("");
  const [alltask, setAllTasks] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();


    let obj = {
      id: Math.floor(Math.random() * 10000),
      task: task,
      status: 'active'
    }
    let newRecord = [...alltask, obj];
    setAllTasks(newRecord)
    setTask("");
  }



  const changeStatus = (id,st)=>{
    if(st === "active"){
      let up = alltask.map((val)=>{
        if(val.id == id){
          val.status = "deactive";
        }
        return val;
      })
      setAllTasks(up);
      alert("status successfully changes");
    }
    else{
      let up = alltask.map((val)=>{
        if(val.id == id){
          val.status = "active";
        }
        return val;
      })
      setAllTasks(up);
      alert("status successfully changes");
    }
  }
  
  return (
    <>
      <div align="center">
        <h2>Add Task</h2>
        <form onSubmit={handleSubmit}>
          Task:{" "}
          <input
            type="text"
            onChange={(e) => setTask(e.target.value)}
            value={task}
          />
          <button type="submit">Add</button>
        </form>

        <h2>View Task</h2>
        <table border={1}>
          <thead>
            <tr>
              <th>Srno</th>
              <th>Task</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {alltask.map((t, i) => {
              const { id, task, status } = t;
              return (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{task}</td>
                  <td>
                    <button
                      onClick={() => changeStatus(id, status)}
                      style={{
                        backgroundColor: status === "active" ? "green" : "red"
                      }}
                    >
                      {status}
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;




