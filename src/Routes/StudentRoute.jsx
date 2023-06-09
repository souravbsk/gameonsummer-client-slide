import React from "react";
import useAuth from "../Hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";
import useStudent from "../Hooks/useStudent";
const StudentRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useAuth();
  const [isStudent, isStudentLoading] = useStudent();
  if (loading || isStudentLoading) {
    return <progress className="progress w-56"></progress>;
  }
  if (user && isStudent) {
    return children;
  }

  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};
export default StudentRoute;
