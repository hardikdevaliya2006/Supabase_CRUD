import { Route, Routes } from "react-router";
import Dashboard from "../pages/Dashboard";
import Update from "../pages/Update";
import Create from "../pages/Create";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import ProtectedRoute from "./ProtectedRoute.Route";
import PublicRoutes from "./PublicRoutes.Route";
import UserProfile from "../pages/UserProfile";
import UpdateName from "../pages/UpdateName";
import ResetPassword from "../pages/ResetPassword";
import ForgotPassword from "../pages/ForgotPassword";

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
      <Route
        path="/profile/:userId/updateName"
        element={
          <ProtectedRoute>
            <UpdateName />
          </ProtectedRoute>
        }
      />
      <Route
        path="/profile/:userId/forgot-password"
        element={
          <ProtectedRoute>
            <ForgotPassword />
          </ProtectedRoute>
        }
      />
      <Route
        path="/reset-password"
        element={
          <ProtectedRoute>
            <ResetPassword />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default AppRoute;
