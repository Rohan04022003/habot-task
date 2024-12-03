import { createContext, useState } from "react";

export const AuthContext = createContext(); // Creating the AuthContext

export const AuthProvider = ({ children }) => { // AuthProvider Component
  const [auth, setAuth] = useState(null); // State to manage the authentication status

  const showLogin = () => { // Function to show the login form
    setAuth("login");
  };
  const showSignup = () => { // Function to show the signup form
    setAuth("signup");
  };
  const closeAuth = () => { // Function to close the auth form
    setAuth(null);
  };

  return (
    <AuthContext.Provider  // Providing the auth context to the children
      value={{ auth, setAuth, showLogin, showSignup, closeAuth }} // Providing the auth context to the children
    >
      {children}
    </AuthContext.Provider>
  );
};
