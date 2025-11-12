import { Routes, Route } from "react-router-dom"; // Import routing components
import Header from "./components/Header";
import HomePage from "./pages/HomePage"; // Import our new pages
import AboutPage from "./pages/AboutPage";
import "./App.css"; // Let's create this for app-level layout styles

function App() {
  return (
    <div className="App">
      <Header title="My Task Manager" />
      <main>
        <Routes>
          {" "}
          {/* The Routes component wraps all individual Route definitions */}
          <Route path="/" element={<HomePage />} />{" "}
          {/* Route for the home page */}
          <Route path="/about" element={<AboutPage />} />{" "}
          {/* Route for the about page */}
        </Routes>
      </main>
    </div>
  );
}

export default App;
