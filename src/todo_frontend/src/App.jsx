import React, { useState } from "react";

function App() {
  const [tasks, setTask] = useState(['Hello there']);
  const [newTask, setNewTasks] = useState("");

  function handleInputChange(event) {
    setNewTasks(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTask((t) => [...t, newTask]);
      setNewTasks("");
    }
  }

  function deleteTask(index) {
    const updateTasks = tasks.filter((_, i) => i !== index);
    setTask(updateTasks);
  }

  return (
    <div className="to-do-list">
      <h1>To-Do-List</h1>
      <div>
        <input
          type="text"
          placeholder="Enter a Tasks..."
          value={newTask}
          onChange={handleInputChange}
        />
        <button className="add-button" onClick={addTask}>
          Add
        </button>
        <select className="options">
          <option value="">All</option>
          <option value="">Complete</option>
          <option value="">Incomplete</option>
        </select>
      </div>
      {tasks.length > 0 ? (
        <ol>
          {tasks.map((task, index) => (
            <li key={index}>
              <span className="text">{task} </span>
              <button
                className="delete-button"
                onClick={() => deleteTask(index)}
              >
                Delete
              </button>
            </li>
          ))}
        </ol>
      ) : (
        <img src="https://to-do-theta-taupe.vercel.app/find.svg" alt="img" />
      )}
    </div>
  );
}

export default App;
