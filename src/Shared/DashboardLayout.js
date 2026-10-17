import { Outlet } from "react-router-dom";
import Dashboard from "../Dashboard";

function DashboardLayout() {
  return (
    <div className="d-flex">

      {/* Sidebar + Navbar + session logic stays inside Dashboard */}
      <Dashboard />

      {/* Page content changes here */}
      <div className="flex-grow-1 p-3">
        <Outlet />
      </div>

    </div>
  );
}

export default DashboardLayout;