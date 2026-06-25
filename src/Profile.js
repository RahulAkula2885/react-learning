import React from "react";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();

  return (
    <div className="container mt-5">

      <div className="card shadow p-4">

        <h2>👤 User Profile</h2>

        <hr />

        <p>
          <strong>Name:</strong> Rahul
        </p>

        <p>
          <strong>Email:</strong> noreplyrahulrao@gmail.com
        </p>

        <p>
          <strong>Location:</strong> Hyderabad
        </p>

        <button
          className="btn btn-primary mt-3"
          onClick={() => navigate("/dashboard")}
        >
          Back To Dashboard
        </button>

      </div>

    </div>
  );
}

export default Profile;