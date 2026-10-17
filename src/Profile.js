import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Shared/Header";
import Footer from "./Shared/Footer";

function Profile() {
  const navigate = useNavigate();

  let [profileFile, setProfileFile] = useState("");
  let [errorMessage, setErrorMessage] = useState("");
  let [fileSizeError, setFileSizeError] = useState("");

  function resetErrors() {
    setErrorMessage("");
    setFileSizeError("");
  }

    function handleInputChange(e) {

      resetErrors();
      const file = e.target.files[0];

      // setProfile(prevProfile => ({
      //   ...prevProfile,
      //   [e.target.name]: file ? URL.createObjectURL(file) : e.target.value
      // }));

      //The .pop() method in JavaScript removes the last element from an array and returns that removed element. It also modifies the original array.
      console.log("Selected file Extension:", file.name.split(".").pop());

      //.shift() Remove from the beginning.
      console.log("Selected file Name:", file.name.split(".").shift());

      let fileExtension = file.name.split(".").pop();
      console.log("File extension:", fileExtension);

      if (fileExtension !== "jpg" && fileExtension !== "png" && fileExtension !== "jpeg") {
        setErrorMessage("Please select a valid image file (jpg, png, jpeg).");
        return;
      } else {
        setErrorMessage("");
      }

      let fileSizeInMB = file.size / (1024 * 1024); // Convert bytes to MB
      console.log("File size in MB:", fileSizeInMB);

      if (fileSizeInMB > 2) {
        setFileSizeError("File size should not exceed 2 MB.");
         
        return;
      } else {
        setFileSizeError("");
      }

      setProfileFile(file);


  }

  function uploadFile(e) {
    e.preventDefault();
    console.log("Uploading file:", profileFile);
    
  }
useEffect(() => {
  console.log(profileFile);

  if (!profileFile) return; // 🔥 important guard

  const url = URL.createObjectURL(profileFile);
  console.log(url);

  return () => URL.revokeObjectURL(url); // optional cleanup
}, [profileFile]);

  return (

    <div className="container mt-5">
      <div className="row">
        <Header/>

        </div>

        <div className="row m-4">
          <div className="col-12 mt-4">
            <div className="card shadow p-4">
              
              <h2>👤 User Profile</h2>

              <label htmlFor="profile_pic" className="form-label">Profile Picture</label>
              <input type="file" className="form-control mb-3" id="profile_pic" name="profile_pic" onChange={a => handleInputChange(a)} />
              {/* {errorMessage && <p className="text-danger">{errorMessage}</p>} */}
            
              
              {profileFile && (
                <div className="mb-3">
                  <img src={URL.createObjectURL(profileFile)} alt="Profile Preview" className="img-thumbnail" onClick={() => window.open(URL.createObjectURL(profileFile), "_blank")} style={{ maxWidth: "200px" }} />
                </div>
              )}


              <label htmlFor="name" className="form-label">Name</label>
              {/* <input type="text" className="form-control mb-3" id="name" name="name"  onChange={a => handleInputChange(a)} /> */}

              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control mb-3" id="email" name="email"  onChange={a => handleInputChange(a)} />

              {/* <label htmlFor="location" className="form-label">Location</label>
              <input type="text" className="form-control mb-3" id="location" name="location" value={profileFile.location} onChange={a => handleInputChange(a)} /> */}

              <button
                className="btn btn-primary mt-3"
                onClick={ a => uploadFile(a)}
              >
               Upload
              </button>

              {errorMessage && (
                <div className="alert alert-danger mt-2" role="alert">
                  {errorMessage}
                </div>
              )}

              {fileSizeError && (
                <div className="alert alert-danger mt-2" role="alert">
                  {fileSizeError}
                </div>
              )}

              </div>
            </div>

        </div>

        <div className="row" style={{ backgroundColor: "#203E7B" }}>
        <Footer/>
        </div>

    </div>

    // <div className="container mt-5">

    //   <div className="card shadow p-4">

    //     <h2>👤 User Profile</h2>

    //     <hr />

    //     <p>
    //       <strong>Name:</strong> Rahul
    //     </p>

    //     <p>
    //       <strong>Email:</strong> noreplyrahulrao@gmail.com
    //     </p>

    //     <p>
    //       <strong>Location:</strong> Hyderabad
    //     </p>

    //     <button
    //       className="btn btn-primary mt-3"
    //       onClick={() => navigate("/dashboard")}
    //     >
    //       Back To Dashboard
    //     </button>

    //   </div>

    // </div>
  );
}

export default Profile;