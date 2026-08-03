import StatCard from "../components/dashboard/StatCard";

function Dashboard() {
  return (
    <div className="space-y-8">
      {/* Dashboard Heading */}
      <div>
        <h2 className="text-3xl font-bold">
          Student Dashboard
        </h2>

        <p className="mt-2 text-gray-600">
          Track your learning progress and continue your courses.
        </p>
      </div>

      {/* Statistics */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Enrolled Courses"
          value="12"
          icon="📚"
          color="bg-blue-600"
        />

        <StatCard
          title="Completed"
          value="5"
          icon="🎓"
          color="bg-green-600"
        />

        <StatCard
          title="Certificates"
          value="3"
          icon="🏆"
          color="bg-yellow-500"
        />

        <StatCard
          title="Learning Hours"
          value="48"
          icon="⏱"
          color="bg-purple-600"
        />
      </div>

      {/* Continue Learning */}
      <div className="rounded-xl bg-white p-6 shadow">
        <h3 className="mb-4 text-2xl font-semibold">
          Continue Learning
        </h3>

        <p className="text-gray-600">
          You haven't started any course yet. Your active courses will appear here.
        </p>
      </div>

      {/* Recent Activity */}
      <div className="rounded-xl bg-white p-6 shadow">
        <h3 className="mb-4 text-2xl font-semibold">
          Recent Activity
        </h3>

        <p className="text-gray-600">
          Your learning activity will be displayed here.
        </p>
      </div>
    </div>
  );
}

export default Dashboard;
