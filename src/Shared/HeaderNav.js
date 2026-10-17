import { Link , useNavigate} from "react-router-dom";
import { useState } from "react";

function HeaderNav() {

    var [navClassesList, setNavClassesList] = useState("collapse navbar-collapse");
    var isNavShowing = false;
    const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
    const navigate = useNavigate();


    function handleNavigationToggle(){
        if(isNavShowing){
            isNavShowing = false;
             setNavClassesList("collapse navbar-collapse")
        }else{
            isNavShowing = true;
            setNavClassesList("navbar-collapse")
        }
    }

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("name");
        //window.location.href = "/login"; // Redirect to login page
        //window.location.replace("/login");
       navigate("/login", { replace: true });
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm p-2 mb-1 bg-body rounded">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    MyApp
                </Link>
                

                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={handleNavigationToggle}
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className={navClassesList} id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        {/* <li className="nav-item me-3 mt-2">
                             <label className="form-check-label ms-3 fw-semibold " htmlFor="flexSwitchCheckDefault">
                                     {localStorage.getItem("name") ? `Welcome, ${localStorage.getItem("name")}` : "Welcome, Guest"}
                             </label>
                        </li>
                        <li className="nav-item">
                            <button className="btn btn-outline-danger" onClick={handleLogout}>
                                Logout
                            </button>
                        </li> */}
                        
                        <li className="nav-item me-3 mt-2">
                             <label className="form-check-label ms-3 fw-semibold " htmlFor="flexSwitchCheckDefault">
                                     {localStorage.getItem("name") ? `Welcome, ${localStorage.getItem("name")}` : "Welcome, Guest"}
                             </label>
                             </li>
                        <li className="nav-item position-relative">
                            <button
                                className="btn btn-outline-danger"
                                onClick={() => handleLogout()}
                            >
                                Logout
                            </button>
                                </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default HeaderNav;

// import { Link } from "react-router-dom";

// function HeaderNav() {

//     const handleLogout = () => {
//         localStorage.removeItem("token");
//         localStorage.removeItem("isLoggedIn");
//         localStorage.removeItem("name");
//         window.location.href = "/login"; // Redirect to login page
//     };

//     return (
//         <nav className="navbar navbar-expand-lg navbar-light bg-light">
//             <div className="container-fluid">
//                 <Link className="navbar-brand" to="/">
//                     MyApp
//                 </Link>

//                 <button
//                     className="navbar-toggler"
//                     type="button"
//                     data-bs-toggle="collapse"
//                     data-bs-target="#navbarNav"
//                     aria-controls="navbarNav"
//                     aria-expanded="false"
//                     aria-label="Toggle navigation"
//                 >
//                     <span className="navbar-toggler-icon"></span>
//                 </button>

//                 <div className="collapse navbar-collapse" id="navbarNav">
//                     <ul className="navbar-nav ms-auto">
//                         <li className="nav-item">
//                             <Link className="nav-link" to="/dashboard">
//                                 Dashboard
//                             </Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link className="nav-link" to="/users">
//                                 Users
//                             </Link>
//                         </li>
                        
//                         <button className="btn btn-outline-danger" onClick={handleLogout}>
//                             Logout
//                         </button>
//                         <li className="nav-item">
//                             <Link className="nav-link" to="/login" onClick={handleLogout}>
//                                 Logout
//                             </Link>
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//         </nav>
//     );
// }

// export default HeaderNav;