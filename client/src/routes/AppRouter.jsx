import { BrowserRouter, Routes, Route } from "react-router-dom";

import ProtectedRoute from "../features/auth/ProtectedRoute";

import MainLayout from "../layouts/MainLayout";
import DashboardLayout from "../layouts/DashboardLayout";

import Home from "../pages/Home";
import Login from "../features/auth/Login";
import Register from "../features/auth/Register";
import Courses from "../pages/Courses";
import CourseDetails from "../pages/CourseDetails";
import Dashboard from "../pages/Dashboard";
import NotFound from "../pages/NotFound";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:id" element={<CourseDetails />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        <Route element={<DashboardLayout />}>
          
  <Route
  path="/dashboard"
  element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  }
/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
