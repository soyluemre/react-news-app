import React from "react";
import notfound from "../assets/img/notfound.png";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container text-center mb-5 p-5">
      <div>
        <h6 className="mb-5">Oopss..! Page Not Found..</h6>
        <img width="40%" src={notfound} />
        <br />
        <br />
        <Link to="/react-news-app">
          <button className="btn notfound-btn w-50">Go Home</button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
