import React from "react";

function About() {
  return (
    <div className="container py-5">

      {/* HEADER SECTION */}
      <div className="text-center mb-5">
        <h1 className="fw-bold">About Us</h1>
        <p className="text-muted">
          Building modern, scalable, and real-world React applications
        </p>
      </div>

      {/* MAIN CONTENT */}
      <div className="row align-items-center">

        {/* LEFT CONTENT */}
        <div className="col-lg-6 mb-4">
          <h3 className="fw-bold mb-3">Who We Are</h3>

          <p className="text-muted">
            We are a technology-focused learning platform dedicated to helping
            developers master React.js through real-world projects, hands-on
            examples, and production-level architecture.
          </p>

          <p className="text-muted">
            Our goal is to bridge the gap between learning and industry
            requirements by teaching modern frontend development practices.
          </p>

          <ul className="list-unstyled mt-3">
            <li>✔ Real-world React projects</li>
            <li>✔ Authentication & security concepts</li>
            <li>✔ API integration</li>
            <li>✔ Dashboard & UI systems</li>
          </ul>
        </div>

        {/* RIGHT IMAGE / ILLUSTRATION */}
        <div className="col-lg-6 text-center">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            alt="About React"
            style={{ width: "220px" }}
            className="react-logo"
          />
        </div>

      </div>

      {/* STATS SECTION */}
      <div className="row text-center mt-5 g-4">

        <div className="col-md-4">
          <div className="p-4 shadow-sm rounded bg-light">
            <h2 className="fw-bold">50+</h2>
            <p className="text-muted mb-0">Projects Built</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="p-4 shadow-sm rounded bg-light">
            <h2 className="fw-bold">10K+</h2>
            <p className="text-muted mb-0">Students Trained</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="p-4 shadow-sm rounded bg-light">
            <h2 className="fw-bold">100%</h2>
            <p className="text-muted mb-0">Practical Learning</p>
          </div>
        </div>

      </div>

      {/* MISSION SECTION */}
      <div className="mt-5 p-4 bg-dark text-white rounded text-center">

        <h3 className="fw-bold">Our Mission</h3>

        <p className="mb-0">
          To empower developers with real-world React.js skills so they can
          build production-ready applications with confidence.
        </p>

      </div>

    </div>
  );
}

export default About;