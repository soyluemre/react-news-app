import React from "react";

const Footer = () => {
  return (
    <div className="container-fluid bg-light">
      <div className="row footer-top container">
        <div className="col-sm-12 col-md-6 footer-top-content">
          <h5>Newsletter Subcribe</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Perferendis aspernatur ut at quae omnis pariatur obcaecati possimus
            nisi ea iste!
          </p>
        </div>
        <div className="col-sm-12 col-md-6 footer-top-form">
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
      <div className="footer-bottom text-center p-3 ">
        <span>
          Copyright ©2023 All rights reserved | This website is made with by
          <a href="#!">Emre Soylu</a>
        </span>
      </div>
    </div>
  );
};

export default Footer;
