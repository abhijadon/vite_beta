import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const isLoggedIn = window.localStorage.getItem('isLoggedIn');
  // Retrieve the role from localStorage
  const role = window.localStorage.getItem('auth');
  // Check if both isLoggedIn and role are truthy
  if (isLoggedIn && role) {
    return <>{children}</>;
  } else {
    return <Navigate to="/login" replace />;
  }
};

export default PrivateRoute;
