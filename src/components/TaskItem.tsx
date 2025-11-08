import React from "react";
import type { Task } from "../types";

interface TaskItemProps {
  task: Task;
  onToggle: (id: string) => void; // Callback to toggle task completion
  onDelete: (id: string) => void; // Callback to delete a task
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onToggle, onDelete }) => {
  return (
    <li className="task-item">
      {" "}
      {/* Add a class for styling */}
      <span
        style={{ textDecoration: task.completed ? "line-through" : "none" }}
        onClick={() => onToggle(task.id)} // Click on text to toggle
        className="task-text" // Add class for styling
      >
        {task.text}
      </span>
      <div className="task-actions">
        <button onClick={() => onToggle(task.id)}>
          {task.completed ? "Undo" : "Complete"}
        </button>
        <button onClick={() => onDelete(task.id)} className="delete-button">
          Delete
        </button>
      </div>
    </li>
  );
};

export default TaskItem;
