import React, { useState } from "react";
import Header from "./components/Header";
import TaskItem from "./components/TaskItem";
import type { Task } from "./types";

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
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

    setTasks((prevTasks) => [...prevTasks, newTask]);
    setNewTaskText("");
  };

  // New: Function to toggle task completion
  const handleToggleTask = (id: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // New: Function to delete a task
  const handleDeleteTask = (id: string) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
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
              onToggle={handleToggleTask} // Pass the toggle handler down
              onDelete={handleDeleteTask} // Pass the delete handler down
            />
          ))
        )}
      </ul>
    </div>
  );
}

export default App;
