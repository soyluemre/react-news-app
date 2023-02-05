import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="fs-4 mx-auto py-3 first-nav container">
        <div className="d-flex container justify-content-center align-items-center p-2">
          <div className="me-auto ms-2">
            <Link to="/" className="nav-title">
              Emre Soylu
            </Link>
          </div>
          <div className="d-flex align-items-center">
            <div className="icons">
              <a href="#!">
                <i class="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#!">
                <i class="fa-brands fa-twitter"></i>
              </a>
              <a href="#!">
                <i class="fa-brands fa-instagram"></i>
              </a>
            </div>
            <div className="d-flex">
              <div>
                <input
                  placeholder="Search..."
                  className="navbar-input form-control"
                  type="search"
                />
              </div>
              <div>
                <button className="navbar-button">
                  <i className="fas fa-thin fa-magnifying-glass"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <nav id="navbar" className="navbar navbar-expand-lg nav-2">
        <div className="container nav2-div">
          <Link to="/" className="nav-title-2">
            Emre Soylu
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <i class="fas fa-light fa-bars"></i>
          </button>
          <div
            className="offcanvas offcanvas-end"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            tabIndex={-1}
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel"></h5>
              <button
                type="button"
                className="close-button"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              >
                <i class="fas fa-light fa-xmark"></i>
              </button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav mb-2 mb-lg-0 fs-5">
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "nav-link activee" : "nav-link"
                    }
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "nav-link activee" : "nav-link"
                    }
                    aria-current="page"
                    to="/about"
                  >
                    About
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "nav-link activee" : "nav-link"
                    }
                    aria-current="page"
                    to="/business"
                  >
                    Business
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "nav-link activee" : "nav-link"
                    }
                    aria-current="page"
                    to="/entertainment"
                  >
                    Entertainment
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "nav-link activee" : "nav-link"
                    }
                    aria-current="page"
                    to="/health"
                  >
                    Health
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "nav-link activee" : "nav-link"
                    }
                    aria-current="page"
                    to="/science"
                  >
                    Science
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "nav-link activee" : "nav-link"
                    }
                    aria-current="page"
                    to="/sports"
                  >
                    Sports
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "nav-link activee" : "nav-link"
                    }
                    aria-current="page"
                    to="/technology"
                  >
                    Technology
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <div className="d-flex mt-3 nav-bottom">
        <div className="d-flex">
          <div>
            <input
              placeholder="Search..."
              className="navbar-input form-control"
              type="search"
            />
          </div>
          <div>
            <button className="navbar-button">
              <i className="fas fa-thin fa-magnifying-glass"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
