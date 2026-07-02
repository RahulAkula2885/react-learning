import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "./Components/Layout";
import "./styles.css";

function Users() {
    const navigate = useNavigate();

    // ================= STATE =================
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [search, setSearch] = useState({
        id: "",
        name: "",
        email: "",
        role: "",
        phoneNo: "",
        active: "",
        deleted: "",
        createdTime: "",
        modifiedTime: "",
    });

    // ================= NAVIGATION =================
    const handleView = (id) => {
        navigate(`/user/${id}`);
    };

    // ================= SEARCH HANDLER =================
    const handleSearchChange = (e) => {
        const { name, value } = e.target;
        setSearch((prev) => ({ ...prev, [name]: value }));
    };

    // ================= API CALL =================
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                setError(null);

                const token = localStorage.getItem("token");

                const res = await axios.get(
                    "http://localhost:8080/dev/api/v1/users",
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );

                setUsers(res.data || []);
            } catch (err) {
                setError("Failed to fetch users");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    // ================= FILTERING (OPTIMIZED) =================
    const filteredUsers = useMemo(() => {
        return users.filter((user) => {
            return (
                user.id.toString().includes(search.id) &&
                user.name.toLowerCase().includes(search.name.toLowerCase()) &&
                user.email.toLowerCase().includes(search.email.toLowerCase()) &&
                user.role.toLowerCase().includes(search.role.toLowerCase()) &&
                user.phoneNo.toString().includes(search.phoneNo) &&
                (user.active ? "yes" : "no").includes(search.active.toLowerCase()) &&
                (user.deleted ? "yes" : "no").includes(search.deleted.toLowerCase()) &&
                user.createdTime.toLowerCase().includes(search.createdTime.toLowerCase()) &&
                user.modifiedTime.toLowerCase().includes(search.modifiedTime.toLowerCase())
            );
        });
    }, [users, search]);

    // reverse only once (important)
    const displayUsers = useMemo(() => {
        return [...filteredUsers].reverse();
    }, [filteredUsers]);

    // ================= UI STATES =================
    if (loading) {
        return (
            <div className="dashboard-page d-flex">
                <Layout />
                <div className="flex-grow-1 d-flex justify-content-center align-items-center">
                    <h5>Loading users...</h5>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="dashboard-page d-flex">
                <Layout />
                <div className="flex-grow-1 d-flex justify-content-center align-items-center text-danger">
                    <h5>{error}</h5>
                </div>
            </div>
        );
    }

    // ================= MAIN UI =================
    return (
        <div className="dashboard-page d-flex">
            <Layout />

            <div className="flex-grow-1 p-3">
                <div
                    className="card shadow-sm"
                    style={{
                        height: "92vh",
                        overflow: "hidden",
                    }}
                >
                    {/* TABLE SCROLL AREA */}
                    <div
                        className="card-body p-0"
                        style={{
                            overflow: "auto",
                        }}
                    >
                        <table className="table table-bordered table-hover mb-0">
                            <thead className="table-primary sticky-top">
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Role</th>
                                    <th>Phone</th>
                                    <th>Active</th>
                                    <th>Deleted</th>
                                    <th>Created</th>
                                    <th>Modified</th>
                                    <th>Action</th>
                                </tr>

                                {/* SEARCH ROW */}
                                <tr>
                                    {Object.keys(search).map((key) => (
                                        <th key={key}>
                                            <input
                                                name={key}
                                                value={search[key]}
                                                onChange={handleSearchChange}
                                                className="form-control form-control-sm"
                                                placeholder={
                                                    key === "active" || key === "deleted"
                                                        ? "Yes/No"
                                                        : key
                                                }
                                        />
                                        </th>
                                    ))}
                                    <th></th>
                                </tr>
                            </thead>

                            <tbody>
                                {displayUsers.map((user) => (
                                    <tr key={user.id}>
                                        <td>{user.id}</td>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>ROLE_{user.role}</td>
                                        <td>{user.phoneNo}</td>
                                        <td>{user.active ? "Yes" : "No"}</td>
                                        <td>{user.deleted ? "Yes" : "No"}</td>
                                        <td>{user.createdTime}</td>
                                        <td>{user.modifiedTime}</td>
                                        <td>
                                            <button
                                                className="btn btn-primary btn-sm"
                                                onClick={() => handleView(user.id)}
                                            >
                                                View
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        {/* EMPTY STATE */}
                        {displayUsers.length === 0 && (
                            <div className="text-center p-4 text-muted">
                                No users found
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Users;

///----------------------------------------------------------------------------------------
// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Layout from "./Components/Layout";

// import './styles.css';

// function Users(){
//     const navigate = useNavigate();


//     const [responseAPIData, setResponseAPIData] = useState(null);

//     function handleView(id) {
//         navigate(`/user/${id}`);
//     }

//     const [search, setSearch] = useState({
//             id: "",
//             name: "",
//             email: "",
//             role: "",
//             phoneNo: "",
//             active: "",
//             deleted: "",
//             createdTime: "",
//             modifiedTime: "",
//     });
//     const handleSearchChange = (e) => {
//         const { name, value } = e.target;

//         setSearch((prev) => ({
//             ...prev,
//             [name]: value,
//         }));
//     };

//     const filteredUsers =
//         responseAPIData?.filter((user) => {
//             return (
//             user.id.toString().includes(search.id) &&
//             user.name.toLowerCase().includes(search.name.toLowerCase()) &&
//             user.email.toLowerCase().includes(search.email.toLowerCase()) &&
//             user.role.toLowerCase().includes(search.role.toLowerCase()) &&
//             user.phoneNo.toString().includes(search.phoneNo) &&
//             (user.active ? "yes" : "no")
//                 .includes(search.active.toLowerCase()) &&
//             (user.deleted ? "yes" : "no")
//                 .includes(search.deleted.toLowerCase()) &&
//             user.createdTime.toLowerCase().includes(search.createdTime.toLowerCase()) &&
//             user.modifiedTime.toLowerCase().includes(search.modifiedTime.toLowerCase())
//             );
//         }) || [];

    
//     useEffect(() => {
//         const token = localStorage.getItem("token");


//         async function fetchData() {

//             console.log("Testing loaded");

//             var apiresponse =  await axios.get(
//                 "http://localhost:8080/dev/api/v1/users",
//                 {
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                     },
//                 }
//             );
//             setResponseAPIData(apiresponse.data);
//             console.log(apiresponse.data);

//         }

//         fetchData();
//     }, []);

    
//     return(
//         <div className="dashboard-page d-flex">
//             <Layout/>
    
//         <div
//             className="card shadow-sm m-3 card-animation"
//             style={{
//                 width: "calc(950vw - 320px)", // Adjust based on your sidebar width
//                 height: "95vh",
//             }}
//         >
//             <div
//                 className="card-body p-3"
//                 style={{
//                     overflow: "auto",
//                 }}
//             >
//         {/* <div className="card p-3 m-3 shadow-sm "> */}
//             {responseAPIData && (
//                 <table className="table table-bordered mt-3">
//                     <thead>
//                             <tr>
//                                 <th>ID</th>
//                                 <th>Name</th>
//                                 <th>Email</th>
//                                 <th>Role</th>
//                                 <th>Phone</th>
//                                 <th>Active</th>
//                                 <th>Deleted</th>
//                                 <th>Created</th>
//                                 <th>Modified</th>
//                                 <th>Action</th>
//                             </tr>

//                             <tr>
//                                 <th><input name="id" value={search.id} onChange={handleSearchChange} className="form-control form-control-sm" /></th>

//                                 <th><input name="name" value={search.name} onChange={handleSearchChange} className="form-control form-control-sm" /></th>

//                                 <th><input name="email" value={search.email} onChange={handleSearchChange} className="form-control form-control-sm" /></th>

//                                 <th><input name="role" value={search.role} onChange={handleSearchChange} className="form-control form-control-sm" /></th>

//                                 <th><input name="phoneNo" value={search.phoneNo} onChange={handleSearchChange} className="form-control form-control-sm" /></th>

//                                 <th><input name="active" value={search.active} onChange={handleSearchChange} placeholder="Yes/No" className="form-control form-control-sm" /></th>

//                                 <th><input name="deleted" value={search.deleted} onChange={handleSearchChange} placeholder="Yes/No" className="form-control form-control-sm" /></th>

//                                 <th><input name="createdTime" value={search.createdTime} onChange={handleSearchChange} className="form-control form-control-sm" /></th>

//                                 <th><input name="modifiedTime" value={search.modifiedTime} onChange={handleSearchChange} className="form-control form-control-sm" /></th>

//                                 <th></th>
//                             </tr>
//                         </thead>
//                     <tbody>
//                         {/* {responseAPIData.map((user) => ( */}
//                         {[...filteredUsers].reverse().map((user) => (
//                             <tr key={user.id}>
//                                 <td>{user.id}</td>
//                                 <td>{user.name}</td>
//                                 <td>{user.email}</td>
//                                 <td>ROLE_{user.role}</td>
//                                 <td>{user.phoneNo}</td>
//                                 <td>{user.active ? 'Yes' : 'No'}</td>
//                                 <td>{user.deleted ? 'Yes' : 'No'}</td>
//                                 <td>{user.createdTime}</td>
//                                 <td>{user.modifiedTime}</td>
//                                  {/* ACTION BUTTON */}
//                                 <td>
//                                     <button
//                                     className="btn btn-primary btn-sm"
//                                     onClick={() => handleView(user.id)}
//                                     >
//                                     View
//                                     </button>
//                                 </td>
                                
//                             </tr>
//                         ))}
//                         {[...filteredUsers].reverse().map((user, index) => (
//                             <tr key={user.id}>
//                             <td>{index + 16}</td> {/* Serial Number */}
//                             <td>{user.name}</td>
//                             <td>{user.email}</td>
//                             <td>ROLE_{user.role}</td>
//                             <td>{user.phoneNo}</td>
//                             <td>{user.active ? "Yes" : "No"}</td>
//                             <td>{user.deleted ? "Yes" : "No"}</td>
//                             <td>{user.createdTime}</td>
//                             <td>{user.modifiedTime}</td>
//                             <td>
//                                 <button
//                                 className="btn btn-primary btn-sm"
//                                 onClick={() => handleView(user.id)}
//                                 >
//                                 View
//                                 </button>
//                             </td>
//                             </tr>
//                         ))
//                         }
                         
//                     </tbody>
//                 </table>
//             )}
//         </div>
//         </div>
//          </div>
//     )
// }

// export default Users;     

///----------------------------------------------------------------------------------------


// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Layout from "./Components/Layout";



// function Users(){
//     const navigate = useNavigate();


//     const [responseAPIData, setResponseAPIData] = useState(null);

//     function handleView(id) {
//         navigate(`/user/${id}`);
//     }

//     useEffect(() => {
//         const token = localStorage.getItem("token");


//         async function fetchData() {

//             console.log("Testing loaded");

//             var apiresponse =  await axios.get(
//                 "http://localhost:8080/dev/api/v1/users",
//                 {
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                     },
//                 }
//             );
//             setResponseAPIData(apiresponse.data);
//             console.log(apiresponse.data);

//         }

//         fetchData();
//     }, []);

//     return(
//         <div className="dashboard-page d-flex">
//             <Layout/>
    
        
//         <div className="container">
//             {responseAPIData && (
//                 <table className="table table-bordered mt-3">
//                     <thead>
//                         <tr>
//                             <th>id</th>
//                             <th>name</th>
//                             <th>email</th>
//                             <th>role</th>
//                             <th>phoneNo</th>
//                             <th>active</th>
//                             <th>deleted</th>
//                             <th>createdTime</th>
//                             <th>modifiedTime</th>
//                             <th>Action</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {/* {responseAPIData.map((user) => ( */}
//                         {[...responseAPIData].reverse().map((user) => (
//                             <tr key={user.id}>
//                                 <td>{user.id}</td>
//                                 <td>{user.name}</td>
//                                 <td>{user.email}</td>
//                                 <td>ROLE_{user.role}</td>
//                                 <td>{user.phoneNo}</td>
//                                 <td>{user.active ? 'Yes' : 'No'}</td>
//                                 <td>{user.deleted ? 'Yes' : 'No'}</td>
//                                 <td>{user.createdTime}</td>
//                                 <td>{user.modifiedTime}</td>
//                                  {/* ACTION BUTTON */}
//                                 <td>
//                                     <button
//                                     className="btn btn-primary btn-sm"
//                                     onClick={() => handleView(user.id)}
//                                     >
//                                     View
//                                     </button>
//                                 </td>
                                
//                             </tr>
//                         ))}
//                         {[...responseAPIData].reverse().map((user, index) => (
//                             <tr key={user.id}>
//                             <td>{index + 16}</td> {/* Serial Number */}
//                             <td>{user.name}</td>
//                             <td>{user.email}</td>
//                             <td>ROLE_{user.role}</td>
//                             <td>{user.phoneNo}</td>
//                             <td>{user.active ? "Yes" : "No"}</td>
//                             <td>{user.deleted ? "Yes" : "No"}</td>
//                             <td>{user.createdTime}</td>
//                             <td>{user.modifiedTime}</td>
//                             <td>
//                                 <button
//                                 className="btn btn-primary btn-sm"
//                                 onClick={() => handleView(user.id)}
//                                 >
//                                 View
//                                 </button>
//                             </td>
//                             </tr>
//                         ))
//                         }
                         
//                     </tbody>
//                 </table>
//             )}
//         </div>
//          </div>
//     )
// }

// export default Users;     