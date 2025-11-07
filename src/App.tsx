import Header from "./components/Header"; // Import our new Header component

function App() {
  return (
    <div className="App">
      <Header title="Task Manager Pro" /> {/* Pass the title as a prop */}
      <p>Welcome to our Task Manager!</p>
    </div>
  );
}

export default App;
