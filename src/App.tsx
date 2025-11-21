// src/App.tsx
import { Routes, Route } from "react-router-dom";
import { useReducer } from "react"; // Import useReducer
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import { tasksReducer } from "./tasksReducer"; // Import reducer
import "./App.css";
import TaskDetailPage from "./pages/TaskDetailPage"; // Import the new page

function App() {
  // State is now managed here!
  const [tasks, dispatch] = useReducer(tasksReducer, []);

  return (
    <div className="App">
      <Header title="My Task Manager" />
      <main>
        <Routes>
          {/* Pass tasks and dispatch down to HomePage */}
          <Route
            path="/"
            element={<HomePage tasks={tasks} dispatch={dispatch} />}
          />
          <Route path="/about" element={<AboutPage />} />
          {/* New Dynamic Route */}
          <Route
            path="/task/:taskId"
            element={<TaskDetailPage tasks={tasks} />}
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
