import React from "react";
import newsImage from "../assets/img/news.jpg";

const Slider = ({ data }) => {
  return (
    <div
      id="carouselBasicExample"
      className="carousel slide slider-content container"
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
      <div className="carousel-inner container">
        {/* Single item */}
        <div className="carousel-item active">
          <div className="row">
            <div className="col-sm-12 col-lg-6">
              <img src={data[0] ? data[0].urlToImage : newsImage} alt="img" />
            </div>
            <div className="col-sm-12 col-lg-6 slider-right">
              <div className="container">
                <span>EDITOR'S PICK</span>
                <h5>{data[0]?.title?.slice(0, 50).concat("...")}</h5>
                <p> {data[0]?.description?.slice(0, 200).concat("...")}</p>
                <a href={data[0]?.url} target="_blank" title="Habere Git">
                  {data[0] ? data[0].author : "Haberin Devamı.."}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="row">
            <div className="col-sm-12 col-lg-6">
              <img src={data[1] ? data[1].urlToImage : newsImage} alt="img" />
            </div>
            <div className="col-sm-12 col-lg-6 slider-right">
              <div className="container">
                <span>EDITOR'S PICK</span>
                <h5>{data[1]?.title?.slice(0, 50).concat("...")}</h5>
                <p> {data[1]?.description?.slice(0, 200).concat("...")}</p>
                <a href={data[1]?.url} target="_blank" title="Habere Git">
                  {data[1] ? data[1].author : "Haberin Devamı.."}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="row">
            <div className="col-sm-12 col-lg-6">
              <img src={data[2] ? data[2].urlToImage : newsImage} alt="img" />
            </div>
            <div className="col-sm-12 col-lg-6 slider-right">
              <div className="container">
                <span>EDITOR'S PICK</span>
                <h5>{data[2]?.title?.slice(0, 50).concat("...")}</h5>
                <p> {data[2]?.description?.slice(0, 200).concat("...")}</p>
                <a href={data[2]?.url} target="_blank" title="Habere Git">
                  {data[2] ? data[2].author : "Haberin Devamı.."}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselBasicExample"
        data-bs-slide="prev"
      >
        <span
          className="carousel-control-prev-icon slider-span"
          aria-hidden="true"
        />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselBasicExample"
        data-bs-slide="next"
      >
        <span
          className="carousel-control-next-icon slider-span"
          aria-hidden="true"
        />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Slider;
