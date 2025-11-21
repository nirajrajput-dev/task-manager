// src/pages/HomePage.tsx
import React, { useState } from "react"; // Keep useState for the form
import TaskItem from "../components/TaskItem";
import type { Task, TaskAction } from "../types"; // Import TaskAction

// Define props for the component
interface HomePageProps {
  tasks: Task[];
  dispatch: React.Dispatch<TaskAction>;
}

const HomePage: React.FC<HomePageProps> = ({ tasks, dispatch }) => {
  // Keep form state local to this page
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
    dispatch({ type: "ADD_TASK", payload: newTask });
    setNewTaskText("");
  };

  const handleToggleTask = (id: string) => {
    dispatch({ type: "TOGGLE_TASK", payload: { id } });
  };

  const handleDeleteTask = (id: string) => {
    dispatch({ type: "DELETE_TASK", payload: { id } });
  };

  return (
    <>
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
    </>
  );
};

export default HomePage;
