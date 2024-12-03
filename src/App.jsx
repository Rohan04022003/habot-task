import React from "react";
import Home from "./Pages/Home";
import "./scrollbar.css";
import { AuthProvider } from "./Context/AuthContext";
const App = () => {
  return (
    <div className="overflow-x-hidden">
      <AuthProvider> {/* AuthProvider Component */}
        <Home />
      </AuthProvider>
    </div>
  );
};

export default App;
