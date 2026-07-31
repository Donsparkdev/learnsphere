import { Link } from "react-router-dom";
import Button from "./common/Button";

function Navbar() {
  return (
    <nav className="border-b bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          to="/"
          className="text-2xl font-bold text-blue-600"
        >
          LearnSphere
        </Link>

        <div className="flex items-center gap-6">
          <Link to="/">Home</Link>
          <Link to="/courses">Courses</Link>
          <Link to="/login">Login</Link>

          <Link to="/register">
  <Button>Register</Button>
</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
