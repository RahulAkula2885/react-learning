import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function UserDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [isEdit, setIsEdit] = useState(false);
  const [loading, setLoading] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

   const token = localStorage.getItem("token");

  // FETCH USER
  useEffect(() => {
  
    async function fetchUser() {
      try {
        const res = await axios.get(
          `http://localhost:8080/dev/api/v1/users/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setUser(res.data);
      } catch (error) {
        setErrorMessage("Failed to load user");
      }
    }

    fetchUser();
  }, [id]);

  // HANDLE INPUT CHANGE
  function handleChange(e) {
    const { name, value } = e.target;

    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  // UPDATE USER
  async function handleUpdate() {
    try {
      setLoading(true);

      const payload = {
        id: user.id,
        name: user.name?.trim(),
        email: user.email?.trim(),
        phoneNo: user.phoneNo?.trim(),
      };

      await axios.patch(
        "http://localhost:8080/dev/api/v1/users/update",
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setSuccessMessage("User updated successfully!");
      setErrorMessage("");
      setIsEdit(false);

      setTimeout(() => {
        setSuccessMessage("");
        navigate("/testing");
      }, 1500);

    } catch (error) {
      setErrorMessage("Update failed");
      setSuccessMessage("");
      setIsEdit(true);

      setTimeout(() => {
        setErrorMessage("");
      }, 3000);

    } finally {
      setLoading(false);
    }
  }

  if (!user) return <p>Loading...</p>;

  return (
    <div className="container mt-4">
      <h2>User Details</h2>

      {/* FORM */}
      <div className="card mt-3 p-4 shadow-sm">
        <div className="row">

          {/* ID */}
          <div className="col-4 mb-3">
            <label className="fw-bold">ID:</label>
            <input className="form-control" value={user.id} readOnly disabled />
          </div>

          {/* NAME */}
          <div className="col-4 mb-3">
            <label className="fw-bold">Name:</label>
            <input
              className="form-control"
              name="name"
              value={user.name}
              onChange={handleChange}
              disabled={!isEdit}
            />
          </div>

          {/* EMAIL */}
          <div className="col-4 mb-3">
            <label className="fw-bold">Email:</label>
            <input
              className="form-control"
              name="email"
              value={user.email}
              onChange={handleChange}
              disabled={!isEdit}
            />
          </div>

          {/* ROLE */}
          <div className="col-4 mb-3">
            <label className="fw-bold">Role:</label>
            <input className="form-control" value={user.role} readOnly disabled />
          </div>

          {/* PHONE */}
          <div className="col-4 mb-3">
            <label className="fw-bold">Phone:</label>
            <input
              className="form-control"
              name="phoneNo"
              value={user.phoneNo}
              onChange={handleChange}
              disabled={!isEdit}
            />
          </div>

          {/* ACTIVE */}
          <div className="col-4 mb-3">
            <label className="fw-bold">Active:</label>
            <input
              className="form-control"
              value={user.active ? "Yes" : "No"}
              readOnly
              disabled
            />
          </div>

          {/* DELETED */}
          <div className="col-4 mb-3">
            <label className="fw-bold">Deleted:</label>
            <input
              className="form-control"
              value={user.deleted ? "Yes" : "No"}
              readOnly
              disabled
            />
          </div>

          {/* CREATED */}
          <div className="col-4 mb-3">
            <label className="fw-bold">Created Time:</label>
            <input className="form-control" value={user.createdTime} readOnly disabled/>
          </div>

          {/* MODIFIED */}
          <div className="col-4 mb-3">
            <label className="fw-bold">Modified Time:</label>
            <input className="form-control" value={user.modifiedTime} readOnly disabled/>
          </div>
        </div>

        {/* ALERTS */}
        {errorMessage && (
          <div className="alert alert-danger mt-2">{errorMessage}</div>
        )}

        {successMessage && (
          <div className="alert alert-success mt-2">{successMessage}</div>
        )}

        {/* BUTTONS */}
        <div className="mb-3 d-flex justify-content-end gap-2">
          {!isEdit ? (
            <button
              className="btn btn-primary"
              onClick={() => setIsEdit(true)}
            >
              Edit
            </button>
          ) : (
            <>
              <button
                className="btn btn-success"
                onClick={handleUpdate}
                disabled={loading}
              >
                {loading ? "Updating..." : "Update"}
              </button>

              <button
                className="btn btn-secondary"
                onClick={() => setIsEdit(false)}
              >
                Cancel
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default UserDetails;

// import { useNavigate, useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import axios from "axios";

// function UserDetails() {
//   const { id } = useParams();

//   const navigate = useNavigate();
//   const [user, setUser] = useState(null);
//   const [isEdit, setIsEdit] = useState(false);

//   const[errorMessage, setErrorMessage] = useState("");
//   const[successMessage, setSuccessMessage] = useState("");

//   useEffect(() => {
//     async function fetchUser() {
//       const res = await axios.get(
//         `http://localhost:8080/dev/api/v1/users/${id}`
//       );
//       setUser(res.data);
//     }

//     fetchUser();
//   }, [id]);

// function handleChange(e) {
//   const { name, value } = e.target;

//   console.log("Field Name:", name);
//   console.log("Field Value:", value);

//   setUser((prev) => ({
//     ...prev,
//     [name]: value,
//   }));
// }

// async function handleUpdate() {

// let count = 0;

//   try {
//     // const payload = {
//     //   id: user.id,
//     //   name: user.name,
//     //   email: user.email,
//     //   password: user.password,
//     //   phoneNo: user.phoneNo,
//     //   active: user.active,
//     //   deleted: user.deleted,
//     // };

//     const payload = {
//         id: user.id,
//         name: user.name?.trim(),
//         email: user.email?.trim(),
//         phoneNo: user.phoneNo?.trim(),
//   };

//   console.log("Payload for update:", payload);

//     const res = await axios.patch(
//       "http://localhost:8080/dev/api/v1/users/update",
//       payload
//     );

//     console.log("Updated:", res.data);
//     setSuccessMessage("User updated successfully!");
//   } catch (error) {
//     count++;
//     console.log("Error count:", count);
//     console.error(error);
//     setErrorMessage("Update failed");
//     setIsEdit(true)

//     return; // Exit the function if there's an error
//   } finally {

//     setTimeout(() => {
//       setSuccessMessage("");
//     }, 2000);

//      setTimeout(() => {
//       setErrorMessage("");
//     }, 3000);

// }
// console.log("Update function executed" + count);
// if (count === 0) {
//   navigate("/testing");
// }
  
// }

// async function updateUser(user) {
//   try {
//     const response = await axios.patch(
//       "http://localhost:8080/dev/api/v1/users/update",
//       user
//     );

//     console.log("Updated User:", response.data);
//     setSuccessMessage("User updated successfully!");

//   } catch (error) {
//     console.error("Update failed:", error);
//     setErrorMessage("Update failed");
//     setIsEdit(true)
//     return; // Exit the function if there's an error
//   }

//      setTimeout(() => {
//       setSuccessMessage("");
//     }, 2000);

//   setTimeout(() => {
//       setErrorMessage("");
//     }, 2000);

// }

//   if (!user) return <p>Loading...</p>;

//   return (
//     <div className="container mt-4">
//       <h2>User Details</h2>

//       {/* FORM */}
//       <div className="card mt-3 p-3">
//         <div className="row mb-3">

//           {/* ID */}
//           <div className="col-4">
//             <label className="fw-bold">ID:</label>
//             <input
//               type="text"
//               className="form-control"
//               value={user.id}
//               readOnly
//               disabled
//             />
//           </div>

//           {/* NAME */}
//           <div className="col-4">
//             <label className="fw-bold">Name:</label>
//             <input
//               type="text"
//               className="form-control"
//               name="name"
//               value={user.name}
//               onChange={handleChange}
//               readOnly={!isEdit}
//               disabled={!isEdit}
//             />
//           </div>

//           {/* EMAIL */}
//           <div className="col-4">
//             <label className="fw-bold">Email:</label>
//             <input
//               type="text"
//               className="form-control"
//               name="email"
//               value={user.email}
//               onChange={handleChange}
//               readOnly={!isEdit}
//               disabled={!isEdit}
//             />
//           </div>

//           {/* ROLE */}
//           <div className="col-4">
//             <label className="fw-bold">Role:</label>
//             <input
//               type="text"
//               className="form-control"
//               name="role"
//               value={user.role}
//               //onChange={handleChange}
//               readOnly={!isEdit}
//               disabled
//             />
//           </div>

//           {/* PHONE */}
//           <div className="col-4">
//             <label className="fw-bold">Phone:</label>
//             <input
//               type="text"
//               className="form-control"
//               name="phoneNo"
//               value={user.phoneNo}
//               onChange={handleChange}
//               readOnly={!isEdit}   
//               disabled={!isEdit}
//             />
//           </div>

//           {/* ACTIVE */}
//           <div className="col-4">
//             <label className="fw-bold">Active:</label>
//             <input
//               type="text"
//               className="form-control"
//               value={user.active ? "Yes" : "No"}
//               readOnly
//               disabled
//             />
//           </div>

//           {/* DELETED */}
//           <div className="col-4">
//             <label className="fw-bold">Deleted:</label>
//             <input
//               type="text"
//               className="form-control"
//               value={user.deleted ? "Yes" : "No"}
//               readOnly
//               disabled
//             />
//           </div>

//           {/* CREATED */}
//           <div className="col-4">
//             <label className="fw-bold">Created Time:</label>
//             <input
//               type="text"
//               className="form-control"
//               value={user.createdTime}
//               readOnly
//               disabled
//             />
//           </div>

//           {/* MODIFIED */}
//           <div className="col-4">
//             <label className="fw-bold">Modified Time:</label>
//             <input
//               type="text"
//               className="form-control"
//               value={user.modifiedTime}
//               readOnly
//               disabled
//             />
//           </div>

//         </div>

//             {errorMessage  ? (
//                 <div className="alert alert-danger mt-2">
//                     {errorMessage}
//                 </div>
//                 ) : successMessage ? (
//                 <div className="alert alert-success mt-2">
//                     {successMessage}
//                 </div>
//                 ) : null}

//          {/* BUTTONS */}
//       <div className="mb-3 d-flex justify-content-end">
//         {!isEdit ? (
//           <button
//             className="btn btn-primary"
//             onClick={() => setIsEdit(true)}
//           >
//             Edit
//           </button>
//         ) : (
//           <>
//             <button
//               className="btn btn-success me-2"
//               onClick={a => {handleUpdate(user); setIsEdit(false);}}
//             >
//               Update
//             </button>

//             <button
//               className="btn btn-secondary"
//               onClick={() => setIsEdit(false)}
//             >
//               Cancel
//             </button>
//           </>
//         )}
//       </div>

//       </div>
//     </div>
//   );
// }

// export default UserDetails;


// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import axios from "axios";

// function UserDetails() {
//   const { id } = useParams();
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     async function fetchUser() {
//       const res = await axios.get(
//         `http://localhost:8080/dev/api/v1/users/${id}`
//       );
//       setUser(res.data);
//     }

//     fetchUser();
//   }, [id]);

//   if (!user) return <p>Loading...</p>;

//   return (
//     <div className="container mt-4">
//       <h2>User Details</h2>
//       <div className="card mt-3 p-3">
        
//             <div className="row mb-3">
//                 <div className="col-4">
//                     <label className="col-form-label fw-bold">ID:</label>
//                     <input 
//                         type="text"
//                         className="form-control" 
//                         id="id" 
//                         aria-describedby="emailHelp" 
//                         placeholder="ID"
//                         value={user.id}
//                         readOnly
//                     />
//                 </div>
            
//                 <div className="col-4">
//                     <label className="col-form-label fw-bold">Name:</label>
//                     <input 
//                         type="text"
//                         className="form-control" 
//                         id="id" 
//                         aria-describedby="emailHelp" 
//                         placeholder="ID"
//                         value={user.name}
//                         readOnly
//                     />
//                 </div>
//                 <div className="col-4">
//                     <label className="col-form-label fw-bold">Email:</label>
//                     <input 
//                         type="text"
//                         className="form-control" 
//                         id="id" 
//                         aria-describedby="emailHelp" 
//                         placeholder="ID"
//                         value={user.email}
//                         readOnly
//                     />
//                 </div>
//                 <div className="col-4">
//                     <label className="col-form-label fw-bold">Role:</label>
//                     <input 
//                         type="text"
//                         className="form-control" 
//                         id="id" 
//                         aria-describedby="emailHelp" 
//                         placeholder="ID"
//                         value={user.role}
//                         readOnly
//                     />
//                 </div>
//                 <div className="col-4">
//                     <label className="col-form-label fw-bold">Phone:</label>
//                     <input 
//                         type="text"
//                         className="form-control" 
//                         id="id" 
//                         aria-describedby="emailHelp" 
//                         placeholder="ID"
//                         value={user.phoneNo}
//                         readOnly
//                     />
//                 </div>
//                 <div className="col-4">
//                     <label className="col-form-label fw-bold">Phone:</label>
//                     <input 
//                         type="text"
//                         className="form-control" 
//                         id="id" 
//                         aria-describedby="emailHelp" 
//                         placeholder="ID"
//                         value={user.phoneNo}
//                         readOnly
//                     />
//                 </div>
//                 <div className="col-4">
//                     <label className="col-form-label fw-bold">Active:</label>
//                     <input 
//                         type="text"
//                         className="form-control" 
//                         id="id" 
//                         aria-describedby="emailHelp" 
//                         placeholder="ID"
//                         value={user.active ? "Yes" : "No"}
//                         readOnly
//                     />
//                 </div>
//                 <div className="col-4">
//                     <label className="col-form-label fw-bold">Deleted:</label>
//                     <input 
//                         type="text"
//                         className="form-control" 
//                         id="id" 
//                         aria-describedby="emailHelp" 
//                         placeholder="ID"
//                         value={user.deleted ? "Yes" : "No"}
//                         readOnly
//                     />
//                 </div>
//                 <div className="col-4">
//                     <label className="col-form-label fw-bold">Created Time:</label>
//                     <input 
//                         type="text"
//                         className="form-control" 
//                         id="id" 
//                         aria-describedby="emailHelp" 
//                         placeholder="ID"
//                         value={user.createdTime}
//                         readOnly
//                     />
//                 </div>
//                 <div className="col-4">
//                     <label className="col-form-label fw-bold">Modified Time:</label>
//                     <input 
//                         type="text"
//                         className="form-control" 
//                         id="id" 
//                         aria-describedby="emailHelp" 
//                         placeholder="ID"
//                         value={user.modifiedTime}
//                         readOnly
//                     />
//                 </div>
//             </div>
    
//     </div>
//     </div>
//   );
// }

// export default UserDetails;