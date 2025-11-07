import React, { useState } from "react"; // Import useState
import Header from "./components/Header";
import TaskItem from "./components/TaskItem"; // Import TaskItem
import type { Task } from "./types"; // Import our Task interface

function App() {
  // 1. Declare state for our tasks
  const [tasks, setTasks] = useState<Task[]>([]);
  // 2. Declare state for the new task input field
  const [newTaskText, setNewTaskText] = useState<string>("");

  // Handler for input change (Controlled Component)
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTaskText(e.target.value);
  };

  // Handler for adding a new task
  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent page reload on form submission
    if (newTaskText.trim() === "") return; // Don't add empty tasks

    // Task is an interface and newTask is an actual data object.
    const newTask: Task = {
      id: Date.now().toString(), // Simple unique ID for now
      text: newTaskText,
      completed: false,
    };

    setTasks((prevTasks) => [...prevTasks, newTask]); // Add new task to the list
    setNewTaskText(""); // Clear the input field
  };

  return (
    <div className="App">
      <Header title="My Task Manager" />

      {/* Task Input Form */}
      <form onSubmit={handleAddTask} className="task-input-form">
        <input
          type="text"
          placeholder="Add a new task..."
          value={newTaskText} // Controlled component: input value is tied to state
          onChange={handleInputChange} // Update state on input change
          aria-label="New task text"
        />
        <button type="submit">Add Task</button>
      </form>

      {/* Task List */}
      <ul className="task-list">
        {tasks.length === 0 ? (
          <p>No tasks yet! Add one above.</p>
        ) : (
          tasks.map((task) => (
            <TaskItem key={task.id} task={task} /> // key is crucial for lists!
          ))
        )}
      </ul>
    </div>
  );
}

export default App;
