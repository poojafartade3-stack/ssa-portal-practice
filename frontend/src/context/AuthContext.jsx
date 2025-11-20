import { createContext, useState, useContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [role, setRole] = useState(localStorage.getItem("role") || null);
  const [username, setUsername] = useState(localStorage.getItem("username") || "");

  const login = (jwtToken, userRole, userName) => {
    setToken(jwtToken);
    setRole(userRole);
    setUsername(userName);

    localStorage.setItem("token", jwtToken);
    localStorage.setItem("role", userRole);
    localStorage.setItem("username", userName);
  };

  const logout = () => {
    setToken(null);
    setRole(null);
    setUsername("");

    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("username");
  };

  return (
    <AuthContext.Provider value={{ token, role, username, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
