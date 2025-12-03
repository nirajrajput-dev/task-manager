import React from "react";
import { Link } from "react-router-dom";
import type { Task } from "../types";

interface TaskItemProps {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onToggle, onDelete }) => {
  console.log(`Rendering TaskItem: ${task.text}`); // For demonstrating re-renders

  return (
    <li className="task-item">
      <Link to={`/task/${task.id}`} className="task-text-link">
        <span
          style={{ textDecoration: task.completed ? "line-through" : "none" }}
        >
          {task.text}
        </span>
      </Link>
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

// Wrap the component export with React.memo to prevent unnecessary re-renders
export default React.memo(TaskItem);
