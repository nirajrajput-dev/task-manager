import React, { useState, useReducer } from "react"; // Import useReducer
import Header from "./components/Header";
import TaskItem from "./components/TaskItem";
import type { Task } from "./types";
import { tasksReducer } from "./tasksReducer"; // Import our reducer

function App() {
  // 1. Replace useState for tasks with useReducer
  // useReducer returns the current state and a dispatch function
  const [tasks, dispatch] = useReducer(tasksReducer, []); // [] is the initial state

  // State for the new task input field remains with useState
  const [newTaskText, setNewTaskText] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTaskText(e.target.value);
  };

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTaskText.trim() === "") return;

    const newTask: Task = {
      id: Date.now().toString(),
      text: newTaskText,
      completed: false,
    };

    // 2. Dispatch an action instead of directly calling setTasks
    dispatch({ type: "ADD_TASK", payload: newTask }); // Send ADD_TASK action
    setNewTaskText("");
  };

  // 3. Refactor toggle handler to dispatch an action
  const handleToggleTask = (id: string) => {
    dispatch({ type: "TOGGLE_TASK", payload: { id } }); // Send TOGGLE_TASK action
  };

  // 4. Refactor delete handler to dispatch an action
  const handleDeleteTask = (id: string) => {
    dispatch({ type: "DELETE_TASK", payload: { id } }); // Send DELETE_TASK action
  };

  return (
    <div className="App">
      <Header title="My Task Manager" />

      <form onSubmit={handleAddTask} className="task-input-form">
        <input
          type="text"
          placeholder="Add a new task..."
          value={newTaskText}
          onChange={handleInputChange}
          aria-label="New task text"
        />
        <button type="submit">Add Task</button>
      </form>

      <ul className="task-list">
        {tasks.length === 0 ? (
          <p>No tasks yet! Add one above.</p>
        ) : (
          tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onToggle={handleToggleTask}
              onDelete={handleDeleteTask}
            />
          ))
        )}
      </ul>
    </div>
  );
}

export default App;
