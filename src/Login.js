import { useState } from "react";
import { Link } from "react-router-dom";


function Login(){

    var [email,setEmail] = useState("");
    var [password,setPassword] = useState("");

    function handleEmailChange(event){
        setEmail(event.target.value);
    }
    function handlePasswordChange(event){
        setPassword( event.target.value);
    }

    function handleLogin(){
        console.log(email,password);
    }

    return(
        <div className="container mt-5">

            <div className="card shadow p-4 mx-auto" style={{ maxWidth: "450px" }} >
            <h3 className="text-primary text-center mb-4"> Login Page</h3>
        
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input 
                    type="email"
                    className="form-control" 
                    id="exampleInputEmail1" 
                    aria-describedby="emailHelp" 
                    placeholder="name@example.com"
                    onChange={a=>handleEmailChange(a)}
                />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>

            <div className="mb-3 ">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input 
                    type="password" 
                    className="form-control" 
                    id="exampleInputPassword1"
                    placeholder="Enter your password"
                    onChange={a=>handlePasswordChange(a)}
                 />
            </div>

            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                <label className="form-check-label" htmlFor="exampleCheck1">Terms & Conditions</label>
            </div>

            <button type="submit" className="btn btn-primary" onClick={handleLogin}>Submit</button>

            <Link to="/forgot-password" className="text-center ml-4 mt-4">
              Forgot Password
            </Link>

        {
            email 
        }
          
        </div>
    </div>
    );

}

export default Login;

//-------------------------------------------
// import { useState } from "react";

// function Login() {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//     rememberMe: false,
//   });

//   const [errors, setErrors] = useState({});
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;

//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//   };

//   const validate = () => {
//     const validationErrors = {};

//     if (!formData.email.trim()) {
//       validationErrors.email = "Email is required";
//     } else if (
//       !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
//     ) {
//       validationErrors.email = "Invalid email address";
//     }

//     if (!formData.password) {
//       validationErrors.password = "Password is required";
//     } else if (formData.password.length < 6) {
//       validationErrors.password = "Minimum 6 characters required";
//     }

//     return validationErrors;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const validationErrors = validate();

//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//       return;
//     }

//     try {
//       setLoading(true);
//       setErrors({});

//       const response = await fetch("/api/auth/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         credentials: "include",
//         body: JSON.stringify({
//           email: formData.email,
//           password: formData.password,
//         }),
//       });

//       if (!response.ok) {
//         throw new Error("Invalid credentials");
//       }

//       const data = await response.json();

//       console.log("Login Success", data);

//       // navigate("/dashboard");
//       // store token if using JWT

//     } catch (error) {
//       setErrors({
//         api: error.message || "Login failed",
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="container mt-5">
//       <div
//         className="card shadow p-4 mx-auto"
//         style={{ maxWidth: "450px" }}
//       >
//         <h3 className="text-center mb-4">Login</h3>

//         {errors.api && (
//           <div className="alert alert-danger">
//             {errors.api}
//           </div>
//         )}

//         <form onSubmit={handleSubmit}>
//           <div className="mb-3">
//             <label htmlFor="email" className="form-label">
//               Email Address
//             </label>

//             <input
//               type="email"
//               id="email"
//               name="email"
//               className={`form-control ${
//                 errors.email ? "is-invalid" : ""
//               }`}
//               value={formData.email}
//               onChange={handleChange}
//             />

//             {errors.email && (
//               <div className="invalid-feedback">
//                 {errors.email}
//               </div>
//             )}
//           </div>

//           <div className="mb-3">
//             <label htmlFor="password" className="form-label">
//               Password
//             </label>

//             <input
//               type="password"
//               id="password"
//               name="password"
//               className={`form-control ${
//                 errors.password ? "is-invalid" : ""
//               }`}
//               value={formData.password}
//               onChange={handleChange}
//             />

//             {errors.password && (
//               <div className="invalid-feedback">
//                 {errors.password}
//               </div>
//             )}
//           </div>

//           <div className="form-check mb-3">
//             <input
//               type="checkbox"
//               id="rememberMe"
//               name="rememberMe"
//               className="form-check-input"
//               checked={formData.rememberMe}
//               onChange={handleChange}
//             />

//             <label
//               className="form-check-label"
//               htmlFor="rememberMe"
//             >
//               Remember Me
//             </label>
//           </div>

//           <button
//             type="submit"
//             className="btn btn-primary w-100"
//             disabled={loading}
//           >
//             {loading ? "Signing In..." : "Login"}
//           </button>
//         </form>

//         <div className="text-center mt-3">
//           <a href="/forgot-password">
//             Forgot Password?
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;
