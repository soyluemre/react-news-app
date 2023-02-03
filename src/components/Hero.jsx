import React from "react";

const Hero = () => {
  return (
    <div
      className="container-fluid bg-dark text-white d-flex justify-content-center align-items-center flex-column"
      style={{ height: "50vh" }}
    >
      <h4 style={{ fontSize: "50px", color: "orangered" }}>News App</h4>
      <h5 className="text-warning">The Website Build With The News Api</h5>
    </div>
  );
};

export default Hero;
