import React, { useContext } from "react";
import { Link } from "react-router-dom"; // Import Link
import AuthContext from "../contexts/AuthContext";

// No change to HeaderProps interface...
interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  const { user, login, logout } = useContext(AuthContext);
  // ... handleLogin remains the same
  const handleLogin = () => {
    login({ id: "1", name: "John Doe", email: "john@example.com" });
  };

  return (
    <header className="app-header">
      <div className="header-left">
        {" "}
        {/* Wrapper for title and nav */}
        <Link to="/" className="header-title-link">
          {" "}
          {/* Link the title to home */}
          <h1>{title}</h1>
        </Link>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
      </div>
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
