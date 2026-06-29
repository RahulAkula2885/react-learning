import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg text-white py-4 mt-auto">
      <div className="container">
        <p className="text-center mb-3">
          © {new Date().getFullYear()} React.js Learning Portal. All rights reserved.
        </p>

        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start">
            <Link
              to="/privacy"
              className="text-white text-decoration-none me-3"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms"
              className="text-white text-decoration-none me-3"
            >
              Terms of Service
            </Link>

            <Link
              to="/contact-us"
              className="text-white text-decoration-none"
            >
              Contact Us
            </Link>
          </div>

          <div className="col-md-6 text-center text-md-end mt-3 mt-md-0">
            <a
              href="https://github.com/RahulAkula2885"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-decoration-none me-3"
            >
              <i className="bi bi-github me-1"></i>
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/rahul-rao-akula/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-decoration-none"
            >
              <i className="bi bi-linkedin me-1"></i>
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;