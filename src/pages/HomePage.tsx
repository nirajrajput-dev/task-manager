import React, { useState, useCallback, useMemo } from "react";
import TaskItem from "../components/TaskItem";
import type { Task, TaskAction } from "../types";

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

  // Memoize callback functions with useCallback to ensure they don't change
  // on every render, which is necessary for React.memo on TaskItem to work.
  const handleToggleTask = useCallback(
    (id: string) => {
      dispatch({ type: "TOGGLE_TASK", payload: { id } });
    },
    [dispatch]
  );

  const handleDeleteTask = useCallback(
    (id: string) => {
      dispatch({ type: "DELETE_TASK", payload: { id } });
    },
    [dispatch]
  );

  // Memoize the result of this calculation with useMemo.
  // It will only re-run if the `tasks` array changes.
  const completedTasksCount = useMemo(() => {
    console.log("Calculating completed tasks...");
    return tasks.filter((task) => task.completed).length;
  }, [tasks]);

  return (
    <>
      <div className="task-summary">
        <h3>Summary</h3>
        <p>Total Tasks: {tasks.length}</p>
        <p>Completed Tasks: {completedTasksCount}</p>
      </div>

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
