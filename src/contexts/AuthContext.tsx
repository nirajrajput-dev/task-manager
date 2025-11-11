import React, { createContext, useState, type ReactNode } from "react";

// 1. Define the shape of our user
interface User {
  id: string;
  name: string;
  email: string;
}

// 2. Define the shape of our AuthContext value
interface AuthContextType {
  user: User | null; // User can be null if not logged in
  login: (userData: User) => void;
  logout: () => void;
}

// 3. Create the Context with a default (initial) value
// The default value is used when a component consumes the context
// without a matching Provider above it in the tree.
// Here, we provide a placeholder with dummy functions.
const AuthContext = createContext<AuthContextType>({
  user: null,
  login: () => {},
  logout: () => {},
});

// 4. Create a Provider component that will manage the actual state
interface AuthProviderProps {
  children: ReactNode; // A special type for children prop
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (userData: User) => {
    // In a real app, this would involve API calls, token storage, etc.
    setUser(userData);
    console.log("User logged in:", userData.name);
  };

  const logout = () => {
    // In a real app, this would involve clearing tokens, etc.
    setUser(null);
    console.log("User logged out.");
  };

  // 5. The value prop for the Provider
  // All components consuming AuthContext will receive this value.
  const contextValue: AuthContextType = {
    user,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

// 6. Export the context directly for easy consumption using useContext
export default AuthContext;
