import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container">
      <nav className="fs-4 mx-auto py-3 first-nav container">
        <div className="d-flex container justify-content-center align-items-center p-2">
          <div className="me-auto">
            <a href="#!" className="nav-title">
              Emre Soylu
            </a>
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
      <nav id="navbar" className="navbar navbar-expand-lg nav-2 container">
        <div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon text-right" />
          </button>
          <div
            className="offcanvas offcanvas-end"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            tabIndex={-1}
          >
            <div className="offcanvas-body">
              <ul className="navbar-nav  mb-2 mb-lg-0 fs-5">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/about"
                  >
                    About
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
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/science"
                  >
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
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
