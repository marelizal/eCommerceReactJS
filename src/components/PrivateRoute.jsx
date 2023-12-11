import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  let userInfo = JSON.parse(window.localStorage.getItem("user"));

  if (!userInfo?.token) {
    return <Navigate to="/login"/>;
  }

  return <Outlet />;
};

export default PrivateRoute;
