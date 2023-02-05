import React, { useState } from "react";
import Pagination from "./Pagination";
import newsImage from "../img/news.jpg";

const News = ({ data, totalPages }) => {
  const [page, setPage] = useState(1);

  const handleClick = (num) => {
    setPage(num);
  };

  const startIndex = (page - 1) * 3;
  const selectedData = data.slice(startIndex, startIndex + 9);

  return (
    <div className="container my-5 fetch-data-row">
      <div className="row my-3 mx-auto">
        {data ? (
          selectedData.slice(3, 20).map((items, index) => (
            <div
              className="container my-3 p-3 rounded col-sm-12 col-md-6 col-lg-4  fetch-data-col"
              key={index}
            >
              <div className="d-flex justify-content-center align-items-center">
                <img
                  src={items ? items?.urlToImage : newsImage}
                  alt="newsimage"
                  className="img-fluid col-img"
                />
              </div>
              <div className="data-title">
                <a title="Habere Git" href={items?.url} target="_blank">
                  {items?.title.slice(0, 90).concat("....")}
                </a>
                <p>{items?.description.slice(0, 60).concat("...")}</p>
              </div>
            </div>
          ))
        ) : (
          <h5 className="fw-bold text-center">Loading..</h5>
        )}
      </div>
      <div className="">
        <Pagination
          page={page}
          setPage={setPage}
          totalPages={totalPages}
          handleClick={handleClick}
        />
      </div>
    </div>
  );
};

export default News;
