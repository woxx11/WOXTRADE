import { createContext, useContext, useState } from "react";
import React from "react";
const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(localStorage.getItem("auth") === "true");

  const login = () => {
    localStorage.setItem("auth", "true");
    setUser(true);
  };

  const logout = () => {
    localStorage.removeItem("auth");
    setUser(false);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
