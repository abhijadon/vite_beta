import React from 'react';
import { Navigate } from 'react-router-dom';
import { selectCurrentAdmin } from '@/redux/auth/selectors';
import { useSelector } from 'react-redux';
const PrivateRoute = ({ children }) => {
  const currentAdmin = useSelector(selectCurrentAdmin);
  console.log('currenRole:', currentAdmin.role)
  if (currentAdmin.role) {
    return <>{children}</>;
  } else {
    return <Navigate to="/login" replace />;
  }
};

export default PrivateRoute;
