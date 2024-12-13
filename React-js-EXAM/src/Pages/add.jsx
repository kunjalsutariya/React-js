import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./add.css";

const Add = () => {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();

  const addTodo = () => {
    if (taskName && taskDescription) {
      const newTask = {
        id: Date.now(),
        name: taskName,
        description: taskDescription,
        completed: false,
      };
      setTasks([...tasks, newTask]);
      setTaskName("");
      setTaskDescription("");
    } else {
      alert("Please enter both task name and description.");
    }
  };

  const completeTask = (taskId) => {
    setTasks(tasks.map((task) =>
      task.id === taskId ? { ...task, completed: true } : task
    ));
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated"); // Clear the authentication flag
    navigate("/"); // Redirect to the login page
  };

  return (
    <div className="todo-container">
      <h1>My Todos</h1>
     
      <div className="input-section">
        <input
          type="text"
          placeholder="Name"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
        />
        <button onClick={addTodo}>Add Todo</button>
        <button onClick={handleLogout} className="logout-button">
        Logout
      </button>
      </div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className={task.completed ? "completed" : ""}>
            <strong>{task.name}</strong>: {task.description}
            <button onClick={() => completeTask(task.id)}>Complete</button>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Add;
