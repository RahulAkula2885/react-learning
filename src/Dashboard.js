import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const timerRef = useRef(null);
  const warningRef = useRef(null);
  const countdownRef = useRef(10);

  const [showPopup, setShowPopup] = useState(false);
  const [countdown, setCountdown] = useState(10);


  const IDLE_TIME = 10000; // 10 seconds idle timeout
  const COUNTDOWN_TIME = 10; // 10 seconds warning countdown

  const logout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login", { replace: true });
  };

  const showWarning = () => {
    //alert("Session expiring soon!");
     setShowPopup(true);

    countdownRef.current = COUNTDOWN_TIME;

    warningRef.current = setInterval(() => {
      countdownRef.current -= 1;

      if (countdownRef.current <= 0) {
        clearInterval(warningRef.current);
        logout();
      }
    }, 1000);
  };

  const resetTimers = () => {
    clearTimeout(timerRef.current);
    clearInterval(warningRef.current);

    setShowPopup(false);
    countdownRef.current = COUNTDOWN_TIME;

    timerRef.current = setTimeout(() => {
      showWarning();
    }, IDLE_TIME);
  };

  useEffect(() => {
    const events = ["keydown", "click", "scroll", "touchstart"];

    events.forEach((event) =>
      window.addEventListener(event, resetTimers)
    );

    resetTimers(); // start timer on page load

    return () => {
      events.forEach((event) =>
        window.removeEventListener(event, resetTimers)
      );
      clearTimeout(timerRef.current);
      clearInterval(warningRef.current);
    };
  }, []);

  const handleProfile = () => {
    navigate("/profile");
  };

  const handleLogout = () => {
    logout();
  };
  const handleStaySignedIn = () => {
    resetTimers();
  };

  return (
    
    <div className="dashboard-page">

        {/* 🔥 SESSION POPUP */}
      {showPopup && (
        <div style={styles.overlay}>
          <div style={styles.modal}>
            <h3>⚠️ Session Expiring</h3>

            <p>You will be logged out in {countdown} seconds</p>

            <div style={{ marginTop: "15px" }}>
              <button
                className="btn btn-success me-2"
                onClick={handleStaySignedIn}
              >
                Stay Signed In
              </button>

              <button
                className="btn btn-danger"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}


      <div className="sidebar">
        <h3>React.js Learning</h3>

        <ul>
          <li>🏠 Dashboard</li>
          <li>📚 Courses</li>
          <li>📝 Assignments</li>
          <li>📊 Progress</li>
          <li>⚙ Settings</li>

          <li>
            <Link
              to="/update-password"
              className="text-white text-decoration-none"
            >
              🔒 Update Password
            </Link>
          </li>
        </ul>
      </div>

      <div className="main-content">

        <div className="d-flex justify-content-between align-items-center mb-4">

          <h1>Welcome Back Rahul 👋</h1>

          <div>
            <button
              className="btn btn-light me-2"
              onClick={handleProfile}
            >
              👤 Profile
            </button>

            <button
              className="btn btn-danger"
              onClick={handleLogout}
            >
              🚪 Logout
            </button>
          </div>

        </div>

        <div className="row g-4">

          <div className="col-md-4">
            <div className="dashboard-card">
              <h3>12</h3>
              <p>Courses Completed</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="dashboard-card">
              <h3>84%</h3>
              <p>Learning Progress</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="dashboard-card">
              <h3>25</h3>
              <p>Practice Exercises</p>
            </div>
          </div>

        </div>

        <div className="row mt-5">

          <div className="col-lg-8">
            <div className="content-card">

              <h4>Recent Activity</h4>

              <table className="table">
                <thead>
                  <tr>
                    <th>Topic</th>
                    <th>Status</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>React Hooks</td>
                    <td>✅ Completed</td>
                  </tr>

                  <tr>
                    <td>React Router</td>
                    <td>🚀 In Progress</td>
                  </tr>

                  <tr>
                    <td>Form Validation</td>
                    <td>⏳ Pending</td>
                  </tr>
                </tbody>

              </table>

            </div>
          </div>

          <div className="col-lg-4">
            <div className="content-card">

              <h4>Progress</h4>

              <div className="progress mt-4">
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated"
                  style={{ width: "84%" }}
                >
                  84%
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;


/* 🔥 MODAL STYLES */
const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
  },
  modal: {
    background: "#fff",
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center",
    width: "300px",
  },
};