import { Link, Outlet } from "react-router-dom";
import { useState } from "react";

import '../styles.css'

function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="dashboard-page d-flex" >

      <div
        className={`sidebar ${sidebarOpen ? "open" : "closed"} bg-white shadow`} 
      >
        <div className="d-flex justify-content-between align-items-center px-3 py-2 border-bottom">
        <div className="d-flex justify-content-end ">
            <h4 className="text-primary fw-bold mb-4 text-center">
                {sidebarOpen ? "React Learning" : "RL"}
                </h4>
                <button
                    className="btn btn-outline-primary p-1 m-1"
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                >
                    ☰
                </button>
        </div>
        </div>
        <ul className="list-unstyled">

          <li className="mb-3">
            <Link
              to="/dashboard"
              className="text-decoration-none text-dark menu-link"
            >
              🏠 {sidebarOpen && "Dashboard"}
            </Link>
          </li>

          <li className="mb-3">
            <Link
              to="/users"
              className="text-decoration-none text-dark menu-link"
            >
              👥 {sidebarOpen && "Users"}
            </Link>
          </li>

          <li className="mb-3">
            <Link
              to="/products-list"
              className="text-decoration-none text-dark menu-link"
            >
              📚 {sidebarOpen && "Products"}
            </Link>
          </li>

        </ul>
      </div>

      {/* <div className="main-content flex-grow-1 bg-light">

        <div className="p-3 border-bottom bg-white shadow-sm">

          <button
            className="btn btn-outline-primary"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            ☰
          </button>

        </div>

        <div className="p-4">
          <Outlet />
        </div>

      </div> */}

    </div>
  );
}

export default Layout;