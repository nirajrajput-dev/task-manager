import React, { useContext } from "react"; // Import useContext
import AuthContext from "../contexts/AuthContext"; // Import AuthContext

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  const { user, login, logout } = useContext(AuthContext); // Consume the AuthContext

  const handleLogin = () => {
    // Mock user data for demonstration
    login({ id: "1", name: "John Doe", email: "john@example.com" });
  };

  return (
    <header className="app-header">
      {" "}
      {/* Add class for styling */}
      <h1>{title}</h1>
      <div className="auth-section">
        {user ? (
          <>
            <span>Welcome, {user.name}!</span>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <button onClick={handleLogin}>Login</button>
        )}
      </div>
    </header>
  );
};

export default Header;
