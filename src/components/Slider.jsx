import React, { useContext } from "react";
import { ContextProvider } from "../Context/ContextProvider";
import newsImage from "../img/news.jpg";

const Slider = ({ data }) => {
  return (
    <div
      id="carouselBasicExample"
      className="carousel slide  slider-content"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators d-none">
        <button
          type="button"
          data-bs-target="#carouselBasicExample"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        />
        <button
          type="button"
          data-bs-target="#carouselBasicExample"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        />
        <button
          type="button"
          data-bs-target="#carouselBasicExample"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        />
      </div>
      {/* Inner */}
      <div className="carousel-inner">
        {/* Single item */}
        <a href={data[0]?.url} target="_blank">
          <div className="carousel-item active">
            <div className="row">
              <div className="col-6">
                <img src={data[0] ? data[0].urlToImage : newsImage} alt="img" />
              </div>
              <div className="col-6 slider-right">
                <div className="container text-center">
                  <h5>{data[0].title}</h5>
                </div>
              </div>
            </div>
          </div>
        </a>

        <a href={data[1]?.url} target="_blank">
          <div className="carousel-item active">
            <div className="row">
              <div className="col-6">
                <img src={data[1] ? data[1].urlToImage : newsImage} alt="img" />
              </div>
              <div className="col-6 slider-right">
                <div className="container text-center">
                  <h5>{data[1].title}</h5>
                </div>
              </div>
            </div>
          </div>
        </a>

        <a href={data[2]?.url} target="_blank">
          <div className="carousel-item active">
            <div className="row">
              <div className="col-6">
                <img src={data[2] ? data[2].urlToImage : newsImage} alt="img" />
              </div>
              <div className="col-6 slider-right">
                <div className="container text-center">
                  <h5>{data[2].title}</h5>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>

      {/* Controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselBasicExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselBasicExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Slider;
