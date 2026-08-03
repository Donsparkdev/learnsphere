import { Outlet, NavLink, useNavigate } from "react-router-dom";

import useAuth from "../hooks/useAuth";
import Button from "../components/common/Button";

function DashboardLayout() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="flex w-64 flex-col bg-blue-700 p-6 text-white">
        <h2 className="mb-8 text-3xl font-bold">
          LearnSphere
        </h2>

        <nav className="flex flex-col gap-3">
          <NavLink
            to="/dashboard"
            end
            className={({ isActive }) =>
              `rounded-lg px-4 py-3 ${
                isActive
                  ? "bg-white text-blue-700"
                  : "hover:bg-blue-600"
              }`
            }
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/courses"
            className={({ isActive }) =>
              `rounded-lg px-4 py-3 ${
                isActive
                  ? "bg-white text-blue-700"
                  : "hover:bg-blue-600"
              }`
            }
          >
            Courses
          </NavLink>
        </nav>

        <div className="mt-auto pt-8">
          <Button
            onClick={handleLogout}
            className="w-full bg-red-500 hover:bg-red-600"
          >
            Logout
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <header className="mb-8 rounded-xl bg-white p-6 shadow">
          <h1 className="text-3xl font-bold">
            Welcome, {user?.name} 👋
          </h1>

          <p className="mt-2 text-gray-600">
            Ready to continue your learning journey?
          </p>
        </header>

        <Outlet />
      </main>
    </div>
  );
}

export default DashboardLayout;
