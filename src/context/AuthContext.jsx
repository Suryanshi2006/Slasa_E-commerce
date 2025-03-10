import React, { createContext, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate(); // Keep useNavigate at the top level inside component

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      setUser(token);
    }
  }, []);
  

  const logout = () => {
    localStorage.removeItem("authToken");
    setUser(null);
    navigate("/signin"); // Works fine now
  };

  return (
    <AuthContext.Provider value={{ user, setUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
