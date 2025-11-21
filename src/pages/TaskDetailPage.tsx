// src/pages/TaskDetailPage.tsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import type { Task } from "../types";

interface TaskDetailPageProps {
  tasks: Task[];
}

const TaskDetailPage: React.FC<TaskDetailPageProps> = ({ tasks }) => {
  const { taskId } = useParams<{ taskId: string }>(); // 1. Get taskId from URL params
  const navigate = useNavigate(); // 2. Get the navigate function

  const task = tasks.find((t) => t.id === taskId); // 3. Find the task

  if (!task) {
    return (
      <div className="task-detail-page">
        <h2>Task not found!</h2>
      </div>
    );
  }

  return (
    <div className="task-detail-page">
      <h2>Task Details</h2>
      <div className="task-detail-content">
        <p>
          <strong>ID:</strong> {task.id}
        </p>
        <p>
          <strong>Description:</strong> {task.text}
        </p>
        <p>
          <strong>Status:</strong> {task.completed ? "Completed" : "Pending"}
        </p>
      </div>
      <button onClick={() => navigate("/")}>Back to Task List</button>
    </div>
  );
};

export default TaskDetailPage;
