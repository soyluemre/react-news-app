import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-light fs-4 mx-auto py-3 container first-nav">
        <div className="d-flex container justify-content-center align-items-center ">
          <div className="me-auto">
            <h5 style={{ color: "orangered" }}> Emre Soylu</h5>
          </div>
          <div className="d-flex">
            <div>
              <input
                type="search"
                style={{
                  height: "3rem",
                  borderRadius: "20px",
                  border: "1px solid silver",
                  fontSize: "1.1rem",
                  width: "20rem",
                  marginRight: ".5rem",
                  textIndent: "10px",
                }}
              />
            </div>
            <div>
              <button
                style={{
                  border: "none",
                  borderRadius: "20px",
                  fontSize: "1.1rem",
                  padding: ".6rem",
                }}
              >
                <i className="fas fa-thin fa-magnifying-glass"></i>
              </button>
            </div>
          </div>
        </div>
      </nav>
      <nav id="navbar" className="navbar navbar-expand-lg bg-light nav-2">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 fs-5">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/general"
                >
                  General
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/business"
                >
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/entertainment"
                >
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/health"
                >
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/sports"
                >
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/technology"
                >
                  Technology
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
