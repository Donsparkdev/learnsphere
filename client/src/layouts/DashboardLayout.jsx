import { Outlet } from "react-router-dom";

function DashboardLayout() {
  return (
    <div>
      <aside>
        <h2>LearnSphere</h2>

        <nav>
          <a href="/dashboard">Dashboard</a>
          <a href="/courses">Courses</a>
        </nav>
      </aside>

      <section>
        <Outlet />
      </section>
    </div>
  );
}

export default DashboardLayout;
