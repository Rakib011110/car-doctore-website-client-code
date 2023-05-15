import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";
const PrivetRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (user?.email) {
    return children;
  }
  if (loading) {
    return <> Loading............</>;
  }

  return <Navigate to={"/"}></Navigate>;
};

export default PrivetRoute;
