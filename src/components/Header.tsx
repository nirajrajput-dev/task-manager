import React from "react"; // React 17+ you don't strictly need this, but it's good practice for clarity.

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
};

export default Header;
