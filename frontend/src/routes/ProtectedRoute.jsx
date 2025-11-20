import { Navigate } from "react-router-dom";

function ProtectedRoute({ children, role: allowRole }) {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  // If no token, redirect to login
  if (!token) {
    return <Navigate to="/login" />;
  }

  // If role mismatch (only when allowRole is passed), redirect to login
  if (allowRole && role !== allowRole) {
    return <Navigate to="/login" />;
  }

  // Authorized → render the page
  return children;
}

export default ProtectedRoute;
