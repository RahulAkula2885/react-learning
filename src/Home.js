import { Link } from "react-router-dom";
import Header from "./Shared/Header";
import Footer from "./Shared/Footer";
import TalkToUs from "./Home/TalkToUs";

function Home() {

  var homepageMessage = "From Homepage";
  return (
    <div className="home-page">
      <div className="container">

        <div>
          <Header/>
        </div>

        <div className="row min-vh-100 align-items-center">

          <div className="col-lg-6 text-white">
            <h1 className="display-3 fw-bold mb-3">
              React.js Learning
            </h1>

            <p className="lead mb-4">
              Learn React.js through practical examples, forms,
              validations, routing, hooks, and real-world projects.
            </p>

            <div className="d-flex flex-wrap gap-3">
              <Link to="/login" className="btn btn-light btn-lg">
                Login
              </Link>

              <Link to="/signup" className="btn btn-warning btn-lg">
                Sign Up
              </Link>

              {/* <Link to="/form2" className="btn btn-outline-light btn-lg">
                Form 2
              </Link>

              <Link to="/form2-copy" className="btn btn-outline-light btn-lg">
                Form 2 Copy
              </Link> */}
            </div>
          </div>

          <div className="col-lg-6 ">
            <div className="text-center">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              alt="React Logo"
              className="react-logo"
            />
            </div>

            {/* <TalkToUs/> */}
            <TalkToUs message={homepageMessage}/>
          </div>

        </div>

        <div>
          <Footer/>
        </div>

      </div>
    </div>
  );
}

export default Home;