import { useState } from "react";

function UpdatePassword() {

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleUpdate = () => {
    console.log("Old:", oldPassword);
    console.log("New:", newPassword);

    alert("Password Updated Successfully");
  };

  return (
    <div className="container mt-5">

      <div className="card shadow p-4">

        <h2>🔒 Update Password</h2>

        <div className="mb-3">
          <label>Old Password</label>

          <input
            type="password"
            className="form-control"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label>New Password</label>

          <input
            type="password"
            className="form-control"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>

        <button
          className="btn btn-primary"
          onClick={handleUpdate}
        >
          Update Password
        </button>

      </div>

    </div>
  );
}

export default UpdatePassword;