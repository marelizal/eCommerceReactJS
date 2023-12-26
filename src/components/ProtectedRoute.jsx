import React, { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ redirectTo = "/login", children }) => {
  // Verificar la presencia de un usuario en el localStorage
  const userFromLocalStorage = JSON.parse(
    localStorage.getItem("userProfile")
  );

  useEffect(() => {
    if (!userFromLocalStorage) {
      // Devolver un componente Navigate para redirigir
      return <Navigate to={redirectTo} replace />;
    }
  }, [userFromLocalStorage, redirectTo]);

  return userFromLocalStorage ? <Outlet /> : null;
};

export default ProtectedRoute;
