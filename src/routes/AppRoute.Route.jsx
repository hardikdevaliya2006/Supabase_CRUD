import React from "react";
import { Route, Routes } from "react-router";
import Dashboard from "../pages/Dashboard";
import Update from "../pages/Dashboard";
import Create from "../pages/Create";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import ProtectedRoute from "./ProtectedRoute.Route";
import PublicRoutes from "./PublicRoutes.Route";
import UserProfile from "../pages/UserProfile";

const AppRoute = () => {
  return (
    <Routes>
      <Route
        path="/login"
        element={
          <PublicRoutes>
            <Login />
          </PublicRoutes>
        }
      />
      <Route
        path="/signup"
        element={
          <PublicRoutes>
            <Signup />
          </PublicRoutes>
        }
      />

      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/create"
        element={
          <ProtectedRoute>
            <Create />
          </ProtectedRoute>
        }
      />
      <Route
        path="/update/:id"
        element={
          <ProtectedRoute>
            <Update />
          </ProtectedRoute>
        }
      />
      <Route
        path="/profile/:userId"
        element={
          <ProtectedRoute>
            <UserProfile />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default AppRoute;
