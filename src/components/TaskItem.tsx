import React from "react";
import { Link } from "react-router-dom"; // Import Link
import type { Task } from "../types";

// ... interface
interface TaskItemProps {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onToggle, onDelete }) => {
  return (
    <li className="task-item">
      <Link to={`/task/${task.id}`} className="task-text-link">
        {" "}
        {/* Wrap text in a Link */}
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

export default TaskItem;
