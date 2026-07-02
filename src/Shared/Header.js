import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {

    var [navClassesList, setNavClassesList] = useState("collapse navbar-collapse");
    var isNavShowing = false;
    

    function handleNavigationToggle(){
        if(isNavShowing){
            isNavShowing = false;
             setNavClassesList("collapse navbar-collapse")
        }else{
            isNavShowing = true;
            setNavClassesList("navbar-collapse")
        }
    }

    return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
      <div className="container">

        {/* Logo / Brand */}
        <Link className="navbar-brand fw-bold" to="/">
          React.js Learning Portal
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          onClick={ e => handleNavigationToggle(e)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation */}
        {/* <div className="collapse navbar-collapse" id="navbarNav"> */}
        <div className= {navClassesList} id="navbarNav">

          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/products">
                Courses
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/privacy-policy">
                Privacy Policy
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/profile">
                Profile
              </Link>
            </li>

            <li className="nav-item ms-lg-3">
              <Link className="btn btn-light btn-sm" to="/login">
                Login
              </Link>
            </li>

            <li className="nav-item ms-2">
              <Link className="btn btn-warning btn-sm" to="/signup">
                Sign Up
              </Link>
            </li>

          </ul>

        </div>

      </div>
    </nav>
  );
}

export default Header;