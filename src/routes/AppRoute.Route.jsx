import React from "react";
import { Route, Routes } from "react-router";
import Dashboard from "../pages/Dashboard";
import Update from "../pages/Dashboard";
import Create from "../pages/Create";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      <Route path="/" element={<Dashboard />} />
      <Route path="/create" element={<Create />} />
      <Route path="/update/:id" element={<Update />} />
    </Routes>
  );
};

export default AppRoute;
