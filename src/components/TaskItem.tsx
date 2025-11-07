import React from "react";
import type { Task } from "../types";

interface TaskItemProps {
  task: Task;
}

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  return (
    <li style={{ textDecoration: task.completed ? "line-through" : "none" }}>
      {task.text}
    </li>
  );
};

export default TaskItem;
