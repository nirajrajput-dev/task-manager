// src/pages/HomePage.tsx
import React, { useState, useReducer } from "react";
import TaskItem from "../components/TaskItem";
import type { Task } from "../types";
import { tasksReducer } from "../tasksReducer";

// Renamed from App to HomePage
function HomePage() {
  const [tasks, dispatch] = useReducer(tasksReducer, []);
  const [newTaskText, setNewTaskText] = useState<string>("");
  // ... (all the handleAddTask, handleToggleTask, etc. functions)
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Add function back
    setNewTaskText(e.target.value);
  };
  const handleAddTask = (e: React.FormEvent) => {
    // Add function back
    e.preventDefault();
    if (newTaskText.trim() === "") return;
    const newTask: Task = {
      id: Date.now().toString(),
      text: newTaskText,
      completed: false,
    };
    dispatch({ type: "ADD_TASK", payload: newTask });
    setNewTaskText("");
  };
  const handleToggleTask = (id: string) => {
    // Add function back
    dispatch({ type: "TOGGLE_TASK", payload: { id } });
  };
  const handleDeleteTask = (id: string) => {
    // Add function back
    dispatch({ type: "DELETE_TASK", payload: { id } });
  };

  return (
    <>
      {" "}
      {/* Use a fragment because we don't need a wrapper div */}
      <form onSubmit={handleAddTask} className="task-input-form">
        {/* ... form JSX ... */}
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
        {/* ... list JSX ... */}
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
    </>
  );
}

export default HomePage;
