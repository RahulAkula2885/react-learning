import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col-12">

          <div className="d-flex justify-content-end gap-3">
            <Link to="/login" className="btn btn-primary">
              Login
            </Link>

            <Link to="/signup" className="btn btn-success ml-4">
              Sign Up
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Home;