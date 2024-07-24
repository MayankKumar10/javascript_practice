import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

export const ProtectedRoutes = () => {
  const location = useLocation();
  const auth = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    // Any additional logic you might want to perform on auth change
  }, [auth]);

  return auth ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};
