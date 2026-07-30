import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-5 shadow-md">
      <Link
        to="/"
        className="text-2xl font-bold text-blue-600"
      >
        LearnSphere
      </Link>

      <div className="flex gap-8">
        <Link to="/">Home</Link>
        <Link to="/courses">Courses</Link>
      </div>

      <div className="flex gap-4">
        <Link
          to="/login"
          className="rounded-lg border px-5 py-2"
        >
          Login
        </Link>

        <Link
          to="/register"
          className="rounded-lg bg-blue-600 px-5 py-2 text-white"
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
