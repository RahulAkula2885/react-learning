import { Link } from "react-router-dom";
import { useState } from "react";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div
        className={`bg-dark text-white ${isOpen ? "sidebar-open" : "sidebar-close"}`}
      >
        <div className="p-3">

          <h4 className="mb-4">React.js</h4>

          <ul className="nav flex-column">

            <li className="nav-item">
              <Link className="nav-link text-white" to="/dashboard">
                🏠 Dashboard
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-white" to="/courses">
                📚 Courses
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-white" to="/profile">
                👤 Profile
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-white" to="/settings">
                ⚙ Settings
              </Link>
            </li>

          </ul>

        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow-1">

        {/* Top Navbar */}
        <nav className="navbar navbar-light bg-light shadow-sm">

          <div className="container-fluid">

            <button
              className="btn btn-outline-dark"
              onClick={() => setIsOpen(!isOpen)}
            >
              ☰
            </button>

            <h5 className="mb-0">Dashboard</h5>

          </div>

        </nav>

        <div className="p-4">
          {/* Your page content */}
        </div>

      </div>
    </div>
  );
}

export default Sidebar;